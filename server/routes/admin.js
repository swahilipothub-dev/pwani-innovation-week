import express from 'express';
import Speaker from '../models/Speaker.js';
import Vendor from '../models/Vendor.js';
import Waitlist from '../models/Waitlist.js';
import Inquiry from '../models/Inquiry.js';
import {
  Schedule,
  Track,
  normalizeScheduleSpeakers,
  SPEAKER_TYPE_OPTIONS
} from '../models/Schedule.js';
import User from '../models/Users.js';
import { sendMail } from '../utils/mailer.js';
import Exhibitor from '../models/Exhibitor.js';
import TicketType from '../models/TicketType.js';
import multer from 'multer';
import { parse as parseCsv } from 'csv-parse/sync';
import { ensureDefaultTracks } from '../utils/trackDefaults.js';
import {
  ManagementAttendee,
  VolunteerAttendee,
  MenteeAttendee,
  SpeakerAttendee,
  DelegateAttendee,
  SUBCOUNTY_OPTIONS,
  DEPARTMENT_OPTIONS,
  MENTOR_OPTIONS,
  COHORT_OPTIONS,
  GENDER_OPTIONS,
  SUBCOUNTY_LABELS,
  DEPARTMENT_LABELS,
  MENTOR_LABELS,
  COHORT_LABELS,
  GENDER_LABELS,
  buildManagementPayload,
  buildVolunteerPayload,
  buildMenteePayload,
  buildSpeakerPayload,
  buildDelegatePayload,
  handleAttendeeCreation,
  handleAttendeeUpdate
} from '../utils/attendeeHelpers.js';
import { buildCsv, streamPdf } from '../utils/attendeeExport.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const parseAmount = value => {
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0 ? amount : null;
};

const normalizeDayNumber = (value) => {
  if (value === undefined || value === null || value === '') {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const isLunchType = (type) =>
  typeof type === 'string' && type.trim().toLowerCase() === 'lunch';

const ensureSingleLunchPerDay = async (day, excludeId) => {
  const dayNumber = normalizeDayNumber(day);
  if (dayNumber === null) {
    return;
  }

  const query = { day: dayNumber, type: 'Lunch' };
  if (excludeId) {
    query._id = { $ne: excludeId };
  }

  const existingLunch = await Schedule.findOne(query).lean();
  if (existingLunch) {
    const error = new Error(`Lunch break already scheduled for day ${dayNumber}.`);
    error.statusCode = 400;
    throw error;
  }
};

const attendeeConfigs = {
  management: {
    model: ManagementAttendee,
    buildPayload: buildManagementPayload,
    view: 'admin/attendees-management',
    title: 'Management Team',
    includeDepartment: true,
    extraFields: ['department'],
    csvColumns: ['first_name', 'middle_name', 'last_name', 'gender', 'phone_number', 'email', 'department', 'subcounty', 'code', 'createdAt'],
    optionalFields: ['middle_name']
  },
  volunteers: {
    model: VolunteerAttendee,
    buildPayload: buildVolunteerPayload,
    view: 'admin/attendees-volunteers',
    title: 'Volunteers',
    csvColumns: ['first_name', 'middle_name', 'last_name', 'gender', 'phone_number', 'email', 'id_number', 'subcounty', 'code', 'createdAt'],
    optionalFields: ['middle_name']
  },
  mentees: {
    model: MenteeAttendee,
    buildPayload: buildMenteePayload,
    view: 'admin/attendees-mentees',
    title: 'Mentees',
    csvColumns: ['first_name', 'middle_name', 'last_name', 'gender', 'phone_number', 'email', 'subcounty', 'mentor', 'cohort', 'code', 'createdAt'],
    optionalFields: ['middle_name'],
    paginate: true,
    defaultLimit: 10,
    paginationRange: 5,
    searchableFields: [
      'first_name',
      'middle_name',
      'last_name',
      'email',
      'phone_number',
      'mentor',
      'cohort',
      'code'
    ]
  },
  speakers: {
    model: SpeakerAttendee,
    buildPayload: buildSpeakerPayload,
    view: 'admin/attendees-speakers',
    title: 'Speakers',
    csvColumns: ['first_name', 'middle_name', 'last_name', 'gender', 'phone_number', 'email', 'subcounty', 'code', 'createdAt'],
    optionalFields: ['middle_name']
  },
  delegates: {
    model: DelegateAttendee,
    buildPayload: buildDelegatePayload,
    view: 'admin/attendees-delegates',
    title: 'Delegates',
    csvColumns: ['first_name', 'middle_name', 'last_name', 'gender', 'phone_number', 'email', 'title', 'organization', 'subcounty', 'code', 'createdAt'],
    optionalFields: ['middle_name', 'title', 'organization']
  }
};

const getAttendeeConfig = type => attendeeConfigs[type];

const columnDefinitions = {
  first_name: { key: 'first_name', header: 'First Name' },
  middle_name: { key: 'middle_name', header: 'Middle Name' },
  last_name: { key: 'last_name', header: 'Last Name' },
  gender: {
    key: 'gender',
    header: 'Gender',
    mapper: value => GENDER_LABELS?.[value] || value
  },
  phone_number: { key: 'phone_number', header: 'Phone Number' },
  email: { key: 'email', header: 'Email' },
  department: {
    key: 'department',
    header: 'Department',
    mapper: value => DEPARTMENT_LABELS?.[value] || value
  },
  id_number: { key: 'id_number', header: 'ID Number' },
  title: { key: 'title', header: 'Title' },
  organization: { key: 'organization', header: 'Organization' },
  subcounty: {
    key: 'subcounty',
    header: 'Subcounty',
    mapper: value => SUBCOUNTY_LABELS?.[value] || value
  },
  mentor: {
    key: 'mentor',
    header: 'Mentor',
    mapper: value => MENTOR_LABELS?.[value] || value
  },
  cohort: {
    key: 'cohort',
    header: 'Cohort',
    mapper: value => COHORT_LABELS?.[value] || value
  },
  code: { key: 'code', header: 'Code' },
  createdAt: {
    key: 'createdAt',
    header: 'Created At',
    mapper: value => (value ? new Date(value).toLocaleString() : '')
  }
};

const buildColumnsForType = type => {
  const config = getAttendeeConfig(type);
  if (!config) return [];
  return config.csvColumns.map(columnKey => columnDefinitions[columnKey]);
};

const baseViewData = {
  subcountyOptions: SUBCOUNTY_OPTIONS,
  genderOptions: GENDER_OPTIONS,
  mentorOptions: MENTOR_OPTIONS,
  cohortOptions: COHORT_OPTIONS,
  subcountyLabels: SUBCOUNTY_LABELS,
  genderLabels: GENDER_LABELS,
  mentorLabels: MENTOR_LABELS,
  cohortLabels: COHORT_LABELS,
  departmentLabels: DEPARTMENT_LABELS
};

const normaliseHeader = key =>
  key
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_');

const importAttendeesFromCsv = async (buffer, config) => {
  const text = buffer.toString('utf-8');
  const records = parseCsv(text, { columns: true, skip_empty_lines: true });

  for (let index = 0; index < records.length; index += 1) {
    const record = records[index];
    const body = {};
    Object.entries(record).forEach(([key, value]) => {
      body[normaliseHeader(key)] = value;
    });

    const result = await handleAttendeeCreation(
      config.model,
      config.buildPayload,
      body
    );

    if (result.error) {
      return { error: `Row ${index + 1}: ${result.error}` };
    }
  }

  return { success: true };
};

const registerAttendeeRoutes = (type, config) => {
  const basePath = `/attendees/${type}`;

  router.get(basePath, async (req, res) => {
    const shouldPaginate = Boolean(config.paginate);
    let attendees = [];
    let pagination = null;
    const searchTerm =
      typeof req.query.search === 'string' ? req.query.search.trim() : '';

    if (!shouldPaginate) {
      attendees = await config.model.find().sort({ createdAt: -1 });
    } else {
      const rawPage = parseInt(req.query.page, 10);
      const rawLimit = parseInt(req.query.limit, 10);
      const defaultLimit = config.defaultLimit || 10;
      const maxLimit = config.maxLimit || 50;
      const limit = Math.min(
        Math.max(Number.isFinite(rawLimit) && rawLimit > 0 ? rawLimit : defaultLimit, 1),
        maxLimit
      );

      const query = {};
      if (searchTerm && Array.isArray(config.searchableFields) && config.searchableFields.length) {
        const regex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        query.$or = config.searchableFields.map(field => ({ [field]: regex }));
      }

      const total = await config.model.countDocuments(query);
      const totalPages = Math.max(1, Math.ceil(total / limit));
      const page = Math.min(
        Math.max(Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1, 1),
        totalPages
      );
      const skip = (page - 1) * limit;

      attendees = await config.model
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      const start = total === 0 ? 0 : skip + 1;
      const end = total === 0 ? 0 : Math.min(skip + limit, total);

      const maxPagesToShow = config.paginationRange || 5;
      const halfWindow = Math.floor(maxPagesToShow / 2);
      let startPage = Math.max(1, page - halfWindow);
      let endPage = startPage + maxPagesToShow - 1;
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      const visiblePages = [];
      if (startPage > 1) {
        visiblePages.push({ type: 'page', number: 1 });
      }
      if (startPage > 2) {
        visiblePages.push({ type: 'ellipsis', id: 'start' });
      }
      for (let i = startPage; i <= endPage; i += 1) {
        visiblePages.push({ type: 'page', number: i });
      }
      if (endPage < totalPages - 1) {
        visiblePages.push({ type: 'ellipsis', id: 'end' });
      }
      if (endPage < totalPages) {
        visiblePages.push({ type: 'page', number: totalPages });
      }

      pagination = {
        page,
        limit,
        total,
        totalPages,
        hasPrev: page > 1,
        hasNext: page < totalPages,
        prevPage: page > 1 ? page - 1 : null,
        nextPage: page < totalPages ? page + 1 : null,
        start,
        end,
        visiblePages
      };
    }

    const viewData = {
      title: config.title,
      attendees,
      ...baseViewData,
      departmentOptions: config.includeDepartment ? DEPARTMENT_OPTIONS : undefined,
      pagination,
      searchTerm,
      queryParams: {
        search: searchTerm
      }
    };
    res.render(config.view, viewData);
  });

  router.post(basePath, async (req, res) => {
    const result = await handleAttendeeCreation(
      config.model,
      config.buildPayload,
      req.body
    );

    if (result.error) {
      return res.status(result.status || 400).send(result.error);
    }

    res.redirect(basePath);
  });

  router.post(`${basePath}/edit/:id`, async (req, res) => {
    const result = await handleAttendeeUpdate(
      config.model,
      req.params.id,
      config.buildPayload,
      req.body
    );

    if (result.error) {
      return res.status(result.status || 400).send(result.error);
    }

    res.redirect(basePath);
  });

  router.delete(`${basePath}/:id`, async (req, res) => {
    try {
      await config.model.findByIdAndDelete(req.params.id);
      res.redirect(basePath);
    } catch (err) {
      console.error('Error deleting attendee:', err);
      res.status(500).send('Error deleting record');
    }
  });

  router.get(`${basePath}/export/csv`, async (req, res) => {
    const attendees = await config.model.find().sort({ createdAt: -1 });
    const columns = buildColumnsForType(type);
    const csv = buildCsv(attendees, columns);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${type}-attendees.csv`
    );
    res.send(csv);
  });

  router.get(`${basePath}/export/pdf`, async (req, res) => {
    const attendees = await config.model.find().sort({ createdAt: -1 });
    const columns = buildColumnsForType(type);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${type}-attendees.pdf`
    );
    streamPdf(res, `${config.title} Attendees`, attendees, columns);
  });

  router.post(
    `${basePath}/import`,
    upload.single('file'),
    async (req, res) => {
      if (!req.file) {
        return res.status(400).send('CSV file is required for import.');
      }

      try {
        const result = await importAttendeesFromCsv(req.file.buffer, config);
        if (result.error) {
          return res.status(400).send(result.error);
        }
        res.redirect(basePath);
      } catch (err) {
        console.error('Import failed:', err);
        res.status(500).send('Failed to import attendees.');
      }
    }
  );
};
const buildTicketPayload = body => {
  const name = (body.name || '').trim();
  const amount = parseAmount(body.amount);
  const description = (body.description || '').trim();
  const paymentLink = (body.payment_link || '').trim();

  if (!name) {
    return { error: 'Name is required.' };
  }

  if (amount === null) {
    return { error: 'Amount must be a valid number.' };
  }

  return {
    payload: {
      name,
      amount,
      description: description || undefined,
      payment_link: paymentLink || undefined
    }
  };
};

router.get('/', async (req, res) => {
  const [
    speakerCount,
    vendorCount,
    waitlistCount,
    inquiryCount,
    scheduleCount,
    userCount,
    exhibitorCount,
    ticketTypeCount,
    managementAttendeeCount,
    volunteerAttendeeCount,
    menteeAttendeeCount,
    speakerAttendeeCount,
    delegateAttendeeCount
  ] = await Promise.all([
    Speaker.countDocuments(),
    Vendor.countDocuments(),
    Waitlist.countDocuments(),
    Inquiry.countDocuments(),
    Schedule.countDocuments(),
    User.countDocuments(),
    Exhibitor.countDocuments(),
    TicketType.countDocuments(),
    ManagementAttendee.countDocuments(),
    VolunteerAttendee.countDocuments(),
    MenteeAttendee.countDocuments(),
    SpeakerAttendee.countDocuments(),
    DelegateAttendee.countDocuments()
  ]);

  res.render('admin/dashboard', {
    title: 'Admin Dashboard',
    userCount,
    speakerCount,
    vendorCount,
    waitlistCount,
    inquiryCount,
    scheduleCount,
    exhibitorCount,
    ticketTypeCount,
    managementAttendeeCount,
    volunteerAttendeeCount,
    menteeAttendeeCount,
    speakerAttendeeCount,
    delegateAttendeeCount,
    user: req.user
  });
});

router.get('/speakers', async (req, res) => {
  const speakers = await Speaker.find();
  res.render('admin/speakers', { title: 'Speakers', speakers });
});

router.post('/speakers', async (req, res) => {
  try {
    const payload = {
      ...req.body,
      agree_terms: req.body.agree_terms === 'on',
      agree_communications: req.body.agree_communications === 'on'
    };
    await Speaker.create(payload);
    res.redirect('/admin/speakers');
  } catch (err) {
    res.status(500).send('Error creating speaker');
  }
});

router.post('/speakers/:id/toggle-acceptance', async (req, res) => {
  try {
    const speaker = await Speaker.findById(req.params.id);
    if (!speaker) {
      return res.status(404).json({ error: 'Speaker not found' });
    }
    speaker.is_accepted = !speaker.is_accepted;
    await speaker.save();
    res.redirect('/admin/speakers');
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/exhibitors', async (req, res) => {
  const exhibitors = await Exhibitor.find();
  res.render('admin/exhibitors', { title: 'Exhibitors', exhibitors });
});

router.post('/exhibitors', async (req, res) => {
  try {
    const payload = {
      ...req.body,
      agree_terms: req.body.agree_terms === 'on',
      agree_communications: req.body.agree_communications === 'on'
    };
    await Exhibitor.create(payload);
    res.redirect('/admin/exhibitors');
  } catch {
    res.status(500).send('Error creating exhibitor');
  }
});

router.post('/exhibitors/:id/toggle-status', async (req, res) => {
  try {
    const exhibitor = await Exhibitor.findById(req.params.id);
    if (!exhibitor) {
      return res.status(404).json({ error: 'Exhibitor not found' });
    }
    if (exhibitor.status === 'pending') {
      exhibitor.status = 'approved';
    } else if (exhibitor.status === 'approved') {
      exhibitor.status = 'rejected';
    } else {
      exhibitor.status = 'pending';
    }
    await exhibitor.save();
    res.redirect('/admin/exhibitors');
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/vendors', async (req, res) => {
  const vendors = await Vendor.find();
  res.render('admin/vendors', { vendors });
});

router.post('/vendors', async (req, res) => {
  try {
    const payload = {
      ...req.body,
      is_registered: req.body.is_registered === 'on',
      is_accepted: req.body.is_accepted === 'on',
      agree_terms: req.body.agree_terms === 'on',
      agree_communications: req.body.agree_communications === 'on'
    };
    await Vendor.create(payload);
    res.redirect('/admin/vendors');
  } catch {
    res.status(500).send('Error creating vendor');
  }
});

router.get('/waitlist', async (req, res) => {
  const waitlist = await Waitlist.find();
  res.render('admin/waitlist', { currentPage: 'waitlist', waitlist });
});

const WAITLIST_EXPORT_COLUMNS = [
  { key: 'first_name', header: 'First Name' },
  { key: 'last_name', header: 'Last Name' },
  { key: 'email', header: 'Email' },
  { key: 'phone_number', header: 'Phone Number' },
  {
    key: 'agree_terms',
    header: 'Agreed To Terms',
    mapper: value => (value ? 'Yes' : 'No')
  },
  {
    key: 'agree_communications',
    header: 'Agreed To Communications',
    mapper: value => (value ? 'Yes' : 'No')
  },
  {
    key: 'createdAt',
    header: 'Created At',
    mapper: value => (value ? new Date(value).toLocaleString() : '')
  }
];

router.get('/waitlist/export/csv', async (req, res) => {
  const waitlist = await Waitlist.find().sort({ createdAt: -1 });
  const csv = buildCsv(waitlist, WAITLIST_EXPORT_COLUMNS);

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=waitlist.csv');
  res.send(csv);
});

router.get('/waitlist/export/pdf', async (req, res) => {
  const waitlist = await Waitlist.find().sort({ createdAt: -1 });
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=waitlist.pdf');
  streamPdf(res, 'Waitlist Entries', waitlist, WAITLIST_EXPORT_COLUMNS);
});

router.post('/waitlist', async (req, res) => {
  try {
    const payload = {
      ...req.body,
      agree_terms: req.body.agree_terms === 'on',
      agree_communications: req.body.agree_communications === 'on'
    };
    await Waitlist.create(payload);
    res.redirect('/admin/waitlist');
  } catch {
    res.status(500).send('Error creating waitlist entry');
  }
});

router.delete('/waitlist/:id', async (req, res) => {
  try {
    await Waitlist.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ success: false, error: 'Error deleting waitlist entry' });
  }
});

router.get('/inquiries', async (req, res) => {
  const inquiries = await Inquiry.find();
  res.render('admin/inquiries', { inquiries });
});

router.post('/inquiries', async (req, res) => {
  try {
    const payload = {
      ...req.body,
      agree_terms: req.body.agree_terms === 'on',
      agree_communications: req.body.agree_communications === 'on'
    };
    await Inquiry.create(payload);
    res.redirect('/admin/inquiries');
  } catch {
    res.status(500).send('Error creating inquiry');
  }
});

router.post('/inquiries/:id/toggle-resolved', async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    inquiry.is_resolved = !inquiry.is_resolved;
    await inquiry.save();
    res.redirect('/admin/inquiries');
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/schedules', async (req, res) => {
  await ensureDefaultTracks();
  const schedules = await Schedule.find().populate('track');
  const tracks = await Track.find().sort({ name: 1 });
  res.render('admin/schedules', {
    schedules,
    tracks,
    speakerTypeOptions: SPEAKER_TYPE_OPTIONS
  });
});

router.get('/schedules/new', async (req, res) => {
  await ensureDefaultTracks();
  const tracks = await Track.find().sort({ name: 1 });
  res.render('admin/schedule-create', {
    tracks,
    speakerTypeOptions: SPEAKER_TYPE_OPTIONS
  });
});

router.get('/schedules/:id', async (req, res) => {
  await ensureDefaultTracks();
  const schedule = await Schedule.findById(req.params.id).populate('track');
  if (!schedule) return res.status(404).send('Schedule not found');
  const tracks = await Track.find().sort({ name: 1 });
  res.render('admin/schedule-view', {
    schedule,
    tracks,
    speakerTypeOptions: SPEAKER_TYPE_OPTIONS
  });
});

// POST route for creating new schedules
router.post('/schedules', async (req, res) => {
  try {
    await ensureDefaultTracks();
    
    const { speakers: speakersInput, ...rest } = req.body;

    const payload = {
      ...rest,
      speakers: normalizeScheduleSpeakers(speakersInput)
    };

    const lunchType = isLunchType(payload.type);
    if (lunchType) {
      payload.type = 'Lunch';
    }

    const normalizedDay = normalizeDayNumber(payload.day);
    if (normalizedDay === null) {
      return res.status(400).send('Day must be a valid number');
    }
    payload.day = normalizedDay;

    if (lunchType) {
      await ensureSingleLunchPerDay(payload.day);
    }

    if (!payload.speakers.length && !lunchType) {
      return res.status(400).send('At least one speaker is required');
    }
    
    // Ensure required fields are present
    if (!payload.title || !payload.track || payload.day === null || !payload.start_time || !payload.end_time) {
      return res.status(400).send('Missing required fields: title, day, track, start_time, end_time');
    }
    
    await Schedule.create(payload);
    res.redirect('/admin/schedules');
  } catch (err) {
    console.error('Error creating schedule:', err);
    res.status(500).send('Error creating schedule');
  }
});

// POST route for editing schedules
router.post('/schedules/edit/:id', async (req, res) => {
  try {
    await ensureDefaultTracks();
    
    const { speakers: speakersInput, ...rest } = req.body;

    const payload = {
      ...rest,
      speakers: normalizeScheduleSpeakers(speakersInput)
    };

    const lunchType = isLunchType(payload.type);
    if (lunchType) {
      payload.type = 'Lunch';
    }

    const normalizedDay = normalizeDayNumber(payload.day);
    if (normalizedDay === null) {
      return res.status(400).send('Day must be a valid number');
    }
    payload.day = normalizedDay;

    if (lunchType) {
      await ensureSingleLunchPerDay(payload.day, req.params.id);
    }

    if (!payload.speakers.length && !lunchType) {
      return res.status(400).send('At least one speaker is required');
    }
    
    // Ensure required fields are present
    if (!payload.title || !payload.track || payload.day === null || !payload.start_time || !payload.end_time) {
      return res.status(400).send('Missing required fields: title, day, track, start_time, end_time');
    }
    
    await Schedule.findByIdAndUpdate(req.params.id, payload, { runValidators: true });
    res.redirect('/admin/schedules');
  } catch (err) {
    console.error('Error updating schedule:', err);
    res.status(500).send('Error updating schedule');
  }
});

// DELETE route for deleting schedules
router.delete('/schedules/:id', async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.redirect('/admin/schedules');
  } catch (err) {
    console.error('Error deleting schedule:', err);
    res.status(500).send('Error deleting schedule');
  }
});

router.get('/tickets', async (req, res) => {
  const tickets = await TicketType.find().sort({ createdAt: -1 });
  res.render('admin/tickets', { title: 'Ticket Types', tickets });
});

router.post('/tickets', async (req, res) => {
  const { payload, error } = buildTicketPayload(req.body);
  if (error) {
    return res.status(400).send(error);
  }

  try {
    await TicketType.create(payload);
    res.redirect('/admin/tickets');
  } catch (err) {
    console.error('Error creating ticket type:', err);
    res.status(500).send('Error creating ticket type');
  }
});

router.post('/tickets/edit/:id', async (req, res) => {
  const { payload, error } = buildTicketPayload(req.body);
  if (error) {
    return res.status(400).send(error);
  }

  try {
    await TicketType.findByIdAndUpdate(req.params.id, payload, { runValidators: true });
    res.redirect('/admin/tickets');
  } catch (err) {
    console.error('Error updating ticket type:', err);
    res.status(500).send('Error updating ticket type');
  }
});

router.delete('/tickets/:id', async (req, res) => {
  try {
    await TicketType.findByIdAndDelete(req.params.id);
    res.redirect('/admin/tickets');
  } catch (err) {
    console.error('Error deleting ticket type:', err);
    res.status(500).send('Error deleting ticket type');
  }
});

registerAttendeeRoutes('management', attendeeConfigs.management);
registerAttendeeRoutes('volunteers', attendeeConfigs.volunteers);
registerAttendeeRoutes('mentees', attendeeConfigs.mentees);
registerAttendeeRoutes('speakers', attendeeConfigs.speakers);
registerAttendeeRoutes('delegates', attendeeConfigs.delegates);

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.render('admin/users', { users });
});

router.post('/users', async (req, res) => {
  try {
    const plainPassword = req.body.password;
    const payload = {
      ...req.body,
      is_admin: req.body.is_admin === 'on'
    };
    const created = await User.create(payload);

    // Fire-and-forget email; do not block redirect on failure
    try {
      const loginUrl = 'https://admin.pwaniinnovationweek.com/';
      const subject = 'Your PIW Admin/User Account';
      const html = `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height:1.6;">
          <h2 style="margin:0 0 12px;">Welcome to Pwani Innovation Week</h2>
          <p>Hi ${created.name || 'there'},</p>
          <p>Your account has been created by an administrator. You can log in using the link below:</p>
          <p><a href="${loginUrl}" target="_blank" rel="noopener noreferrer">${loginUrl}</a></p>
          <p>
            <strong>Email:</strong> ${created.email}<br/>
            <strong>Password:</strong> ${plainPassword}
          </p>
          <p>For security, consider changing your password after logging in.</p>
          <p style="color:#6b7280;font-size:12px;">If you did not expect this email, you can ignore it.</p>
        </div>
      `;

      await sendMail({
        to: created.email,
        subject,
        html,
      });
    } catch (mailErr) {
      console.error('Failed to send new user email:', mailErr);
    }

    res.redirect('/admin/users');
  } catch {
    res.status(500).send('Error creating user');
  }
});

router.delete('/:type/:id', async (req, res) => {
  const { type, id } = req.params;

  const models = {
    speakers: Speaker,
    vendors: Vendor,
    waitlist: Waitlist,
    inquiries: Inquiry,
    users: User,
    exhibitors: Exhibitor
  };

  const Model = models[type];
  if (!Model) return res.redirect('/admin');

  try {
    await Model.findByIdAndDelete(id);
    res.redirect(`/admin/${type}`);
  } catch {
    res.redirect(`/admin/${type}?error=delete_failed`);
  }
});

export default router;
