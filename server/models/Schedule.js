import mongoose from 'mongoose';

const SCHEDULE_TYPE_OPTIONS = Object.freeze([
  'Session',
  'Panel',
  'Workshop',
  'Opening',
  'Lunch',
  'Closing',
  'Ceremony',
  'Entertainment'
]);

const SPEAKER_TYPE_OPTIONS = Object.freeze(['Keynote Speaker', 'Guest Speaker', 'Regular']);

const normalizeScheduleType = (value) => {
  if (typeof value !== 'string') {
    return value;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return trimmed;
  }

  const matchedOption = SCHEDULE_TYPE_OPTIONS.find(
    (option) => option.toLowerCase() === trimmed.toLowerCase()
  );

  return matchedOption ?? trimmed;
};

const normalizeSpeakerType = (value) => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }

  const matchedOption = SPEAKER_TYPE_OPTIONS.find(
    (option) => option.toLowerCase() === trimmed.toLowerCase()
  );

  return matchedOption ?? undefined;
};

const normalizeSpeakerEntry = (entry) => {
  if (!entry && entry !== 0) {
    return null;
  }

  if (typeof entry === 'string') {
    const name = entry.trim();
    return name ? { name } : null;
  }

  if (typeof entry !== 'object') {
    return null;
  }

  const name =
    (entry.name ?? entry.fullName ?? entry.speakerName ?? entry.speaker)?.toString().trim() || '';
  const title =
    (entry.title ??
      entry.role ??
      entry.position ??
      entry.titleRole ??
      entry.speakerTitle ??
      entry['title/role'])?.toString().trim() || '';
  const organization =
    (entry.organization ??
      entry.organisation ??
      entry.company ??
      entry.organizationCompany ??
      entry.organisationCompany ??
      entry.affiliation)?.toString().trim() || '';
  const speakerType =
    normalizeSpeakerType(
      entry.speakerType ?? entry.speaker_type ?? entry.type ?? entry.speakerCategory
    ) ?? undefined;

  if (!name && !title && !organization) {
    return null;
  }

  const normalized = {
    name: name || undefined,
    title: title || undefined,
    speakerType: speakerType || undefined,
    organization: organization || undefined
  };

  if (!normalized.speakerType && normalized.name) {
    normalized.speakerType = SPEAKER_TYPE_OPTIONS[SPEAKER_TYPE_OPTIONS.length - 1];
  }

  return normalized;
};

const normalizeScheduleSpeakers = (value) => {
  if (!value) {
    return [];
  }

  const entries = Array.isArray(value) ? value : [value];
  return entries
    .map(normalizeSpeakerEntry)
    .filter((entry) => entry && (entry.name || entry.title || entry.organization));
};

const normalizeRsvpLink = (value) => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }

  try {
    const url = new URL(trimmed);
    if (!['http:', 'https:'].includes(url.protocol)) {
      return undefined;
    }
    return url.toString();
  } catch {
    return undefined;
  }
};

const speakerSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: false },
    title: { type: String, trim: true },
    speakerType: {
      type: String,
      enum: SPEAKER_TYPE_OPTIONS,
      default: SPEAKER_TYPE_OPTIONS[SPEAKER_TYPE_OPTIONS.length - 1]
    },
    organization: { type: String, trim: true }
  },
  { _id: false }
);

// Track Schema
const trackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, unique: true },
    description: { type: String }
  },
  { timestamps: true }
);

const Track = mongoose.models.Track || mongoose.model('Track', trackSchema);

// Schedule Schema
const scheduleSchema = new mongoose.Schema(
  {
    day: { type: Number, required: true },
    date: { type: Date, required: true },
    title: { type: String, required: true },
    description: { type: String },
    track: { type: mongoose.Schema.Types.ObjectId, ref: 'Track', required: true },
    speakers: {
      type: [speakerSchema],
      default: [],
      set: normalizeScheduleSpeakers
    },
    venue: { type: String },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    moderator: { type: String },
    session_rsvp_link: {
      type: String,
      set: normalizeRsvpLink,
      validate: {
        validator: (value) => !value || /^https?:\/\//i.test(value),
        message: 'RSVP link must be a valid http(s) URL'
      }
    },
    type: {
      type: String,
      enum: SCHEDULE_TYPE_OPTIONS,
      default: SCHEDULE_TYPE_OPTIONS[0],
      set: normalizeScheduleType
    }
  },
  { timestamps: true }
);

scheduleSchema.pre('init', function scheduleSpeakerInitializer(doc) {
  if (doc && Array.isArray(doc.speakers)) {
    doc.speakers = normalizeScheduleSpeakers(doc.speakers);
  }
});

scheduleSchema.pre('validate', function scheduleValidators(next) {
  const normalizedType = normalizeScheduleType(this.type);

  if (!normalizedType || !SCHEDULE_TYPE_OPTIONS.includes(normalizedType)) {
    this.type = SCHEDULE_TYPE_OPTIONS[0];
  } else {
    this.type = normalizedType;
  }

  this.speakers = normalizeScheduleSpeakers(this.speakers);
  this.session_rsvp_link = normalizeRsvpLink(this.session_rsvp_link);

  next();
});

const Schedule = mongoose.models.Schedule || mongoose.model('Schedule', scheduleSchema);

export {
  Track,
  Schedule,
  SCHEDULE_TYPE_OPTIONS,
  SPEAKER_TYPE_OPTIONS,
  normalizeScheduleSpeakers,
  normalizeSpeakerType
};
  
export default Schedule;
