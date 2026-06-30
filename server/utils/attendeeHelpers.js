import {
  ATTENDEE_CONSTANTS,
  ManagementAttendee,
  VolunteerAttendee,
  MenteeAttendee,
  SpeakerAttendee,
  DelegateAttendee
} from '../models/Attendee.js';

const { SUBCOUNTIES, MANAGEMENT_DEPARTMENTS, MENTORS, COHORTS } = ATTENDEE_CONSTANTS;

const toTitleCase = (value = '') =>
  value
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const SUBCOUNTY_OPTIONS = SUBCOUNTIES.map((value) => ({
  value,
  label: toTitleCase(value)
}));

const DEPARTMENT_OPTIONS = MANAGEMENT_DEPARTMENTS.map((value) => ({
  value,
  label: toTitleCase(value)
}));

const MENTOR_OPTIONS = MENTORS.map((value) => ({
  value,
  label: value
}));

const COHORT_OPTIONS = COHORTS.map((value) => ({
  value,
  label: toTitleCase(value)
}));

const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
];

const SUBCOUNTY_LABELS = SUBCOUNTY_OPTIONS.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

const DEPARTMENT_LABELS = DEPARTMENT_OPTIONS.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

const MENTOR_LABELS = MENTOR_OPTIONS.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

const COHORT_LABELS = COHORT_OPTIONS.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

const GENDER_LABELS = GENDER_OPTIONS.reduce((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

const sanitize = (value) => (value ?? '').toString().trim();
const sanitizeEmail = (value) => sanitize(value).toLowerCase();

const validateSubcounty = (subcounty) => {
  const normalized = sanitize(subcounty).toLowerCase();
  if (!SUBCOUNTIES.includes(normalized)) {
    return { error: 'Invalid subcounty selected.' };
  }
  return { value: normalized };
};

const basePayload = (body = {}) => {
  const first = sanitize(body.first_name);
  const middle = sanitize(body.middle_name);
  const last = sanitize(body.last_name);
  const phone = sanitize(body.phone_number);
  const email = sanitizeEmail(body.email);
  const gender = sanitize(body.gender).toLowerCase();

  if (!first || !last) {
    return { error: 'First and last names are required.' };
  }

  if (!phone) {
    return { error: 'Phone number is required.' };
  }

  if (!email) {
    return { error: 'Email is required.' };
  }

  if (!['male', 'female'].includes(gender)) {
    return { error: 'Gender must be male or female.' };
  }

  const { value: subcounty, error: subcountyError } = validateSubcounty(
    body.subcounty
  );
  if (subcountyError) {
    return { error: subcountyError };
  }

  return {
    payload: {
      first_name: first,
      middle_name: middle || undefined,
      last_name: last,
      phone_number: phone,
      email,
      subcounty,
      gender
    }
  };
};

export const buildManagementPayload = (body = {}) => {
  const base = basePayload(body);
  if (base.error) return base;

  const department = sanitize(body.department).toLowerCase();
  if (!MANAGEMENT_DEPARTMENTS.includes(department)) {
    return { error: 'Invalid department selected.' };
  }

  return {
    payload: {
      ...base.payload,
      department
    }
  };
};

export const buildVolunteerPayload = (body = {}) => {
  const base = basePayload(body);
  if (base.error) return base;

  const idNumber = sanitize(body.id_number);
  if (!idNumber) {
    return { error: 'ID number is required.' };
  }

  return {
    payload: {
      ...base.payload,
      id_number: idNumber
    }
  };
};

export const buildMenteePayload = (body = {}) => {
  const base = basePayload(body);
  if (base.error) return base;

  const mentor = sanitize(body.mentor);
  if (!mentor) {
    return { error: 'Mentor is required.' };
  }

  if (!MENTORS.includes(mentor)) {
    return { error: 'Invalid mentor selected.' };
  }

  const cohort = sanitize(body.cohort);
  if (!cohort) {
    return { error: 'Cohort is required.' };
  }

  if (!COHORTS.includes(cohort)) {
    return { error: 'Invalid cohort selected.' };
  }

  return {
    payload: {
      ...base.payload,
      mentor,
      cohort
    }
  };
};

export const buildSpeakerPayload = (body = {}) => basePayload(body);

export const buildDelegatePayload = (body = {}) => {
  const base = basePayload(body);
  if (base.error) return base;

  const title = sanitize(body.title);
  const organization = sanitize(body.organization);

  return {
    payload: {
      ...base.payload,
      title: title || undefined,
      organization: organization || undefined
    }
  };
};

const DUPLICATE_FIELD_MESSAGE = 'Record with the same phone number or email already exists.';

export const handleAttendeeCreation = async (Model, buildPayload, body) => {
  const { payload, error } = buildPayload(body);
  if (error) {
    return { error, status: 400 };
  }

  try {
    const doc = await Model.create(payload);
    return { doc };
  } catch (err) {
    if (err.code === 11000) {
      return { error: DUPLICATE_FIELD_MESSAGE, status: 409 };
    }
    throw err;
  }
};

export const handleAttendeeUpdate = async (Model, id, buildPayload, body) => {
  const { payload, error } = buildPayload(body);
  if (error) {
    return { error, status: 400 };
  }

  try {
    await Model.findByIdAndUpdate(id, payload, {
      runValidators: true
    });
    return { ok: true };
  } catch (err) {
    if (err.code === 11000) {
      return { error: DUPLICATE_FIELD_MESSAGE, status: 409 };
    }
    throw err;
  }
};

export {
  SUBCOUNTIES,
  MANAGEMENT_DEPARTMENTS,
  MENTORS,
  COHORTS,
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
  toTitleCase,
  ManagementAttendee,
  VolunteerAttendee,
  MenteeAttendee,
  SpeakerAttendee,
  DelegateAttendee
};
