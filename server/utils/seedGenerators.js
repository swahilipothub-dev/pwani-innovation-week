import Waitlist from '../models/Waitlist.js';
import Vendor from '../models/Vendor.js';
import Inquiry from '../models/Inquiry.js';
import Exhibitor from '../models/Exhibitor.js';
import Speaker from '../models/Speaker.js';
import TicketType from '../models/TicketType.js';
import {
  Schedule,
  Track,
  SCHEDULE_TYPE_OPTIONS,
  SPEAKER_TYPE_OPTIONS
} from '../models/Schedule.js';
import { ensureDefaultTracks } from './trackDefaults.js';

const firstNames = [
  'Amina',
  'Brian',
  'Cheryl',
  'Daniel',
  'Eunice',
  'Farah',
  'George',
  'Halima',
  'Ian',
  'Joy',
  'Kamau',
  'Lydia',
  'Mohammed',
  'Naomi',
  'Oscar',
  'Purity',
  'Rahim',
  'Sonia',
  'Tom',
  'Yvonne'
];

const lastNames = [
  'Abdalla',
  'Barasa',
  'Chebet',
  'Dahir',
  'Etemesi',
  'Faraji',
  'Gichuru',
  'Hassan',
  'Ibrahim',
  'Juma',
  'Kariuki',
  'Lagat',
  'Mwangi',
  'Njoroge',
  'Omondi',
  'Peters',
  'Ruto',
  'Said',
  'Tanui',
  'Waweru'
];

const businessNames = [
  'Coastal Delights',
  'Urban Eats Collective',
  'Sunset Bistro',
  'Mombasa Treats',
  'Digital Spice Hub',
  'Afya Juices',
  'Swahili Street Food',
  'Bluewave Catering',
  'Nyali Brews',
  'Harbor Snacks'
];

const streetAddresses = [
  '12 Beach Road, Mombasa',
  '45 Moi Avenue, Mombasa',
  '78 Ocean Drive, Malindi',
  '23 Kenyatta Avenue, Nairobi',
  '9 Mama Ngina Street, Mombasa',
  '66 Kilindini Road, Mombasa',
  '101 Lamu Street, Nyali',
  '17 Likoni Road, Mombasa',
  '5 Nkrumah Road, Mombasa',
  '204 Digo Road, Mombasa'
];

const topics = [
  'sustainable tourism',
  'digital skills development',
  'blue economy opportunities',
  'youth empowerment',
  'climate resilience',
  'creative entrepreneurship',
  'community inclusion',
  'renewable energy'
];

const countries = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Ghana'];
const locations = ['kenya - coast', 'kenya - others', 'other'];
const thematicAreas = [
  'Sustainable Coastal',
  'Youth Agency',
  'Digital Track'
];
const sessionTypes = [
  'Keynote Address',
  'Panel Discussions',
  'Workshops',
  'Masterclass'
];
const targetAudiences = ['experience', 'beginners', 'amateur'];
const targetTypes = ['technical', 'non-technical'];
const audienceEngagements = ['Q and A', 'Demo', 'Presentations', 'Skit'];
const deliveryTypes = ['physical', 'virtual - live', 'virtual - prerecorded'];
const vendorTypes = ['food', 'drinks', 'food and drinks'];
const inquiryTypes = ['sponsorship', 'participation', 'general'];
const exhibitorStatuses = ['pending', 'approved', 'rejected'];
const scheduleVenues = [
  'Main Auditorium',
  'Innovation Hub',
  'Coastal Pavilion',
  'Workshop Studio',
  'Digital Lab',
  'Summit Hall'
];
const speakerOrganizations = [
  'Pwani Innovation Hub',
  'Coastline Ventures',
  'Mombasa Tech Collective',
  'Blue Economy Trust',
  'Kenya Youth Council',
  'Sustainable Futures Initiative'
];
const speakerRoles = [
  'Founder & CEO',
  'Program Lead',
  'Head of Innovation',
  'Policy Analyst',
  'Community Organizer',
  'Chief Technology Officer'
];
const scheduleTimeSlots = [
  { start: '09:00', end: '10:30' },
  { start: '10:45', end: '12:15' },
  { start: '13:30', end: '15:00' },
  { start: '15:15', end: '16:45' }
];

const randomItem = array => array[Math.floor(Math.random() * array.length)];

const uniqueSuffix = (index = 0) =>
  `${Date.now().toString(36)}${index.toString(36)}${Math.random()
    .toString(36)
    .slice(2, 6)}`;

const randomPhone = () =>
  `+2547${Math.floor(10000000 + Math.random() * 89999999)
    .toString()
    .padStart(8, '0')}`;

const toTitleCase = (value = '') =>
  value
    .split(' ')
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const buildName = () => ({
  first: randomItem(firstNames),
  last: randomItem(lastNames)
});

const buildEmail = (first, last, suffix) =>
  `${first}.${last}.${suffix}@example.com`.replace(/\s+/g, '').toLowerCase();

const buildBusinessEmail = (business, suffix) =>
  `${business.replace(/\s+/g, '').toLowerCase()}.${suffix}@business.test`;

const buildSentence = topic =>
  `We are interested in collaborating around ${topic} to unlock new opportunities.`;

const buildScheduleSpeaker = () => {
  const { first, last } = buildName();
  return {
    name: `${first} ${last}`,
    title: randomItem(speakerRoles),
    speakerType: randomItem(SPEAKER_TYPE_OPTIONS),
    organization: randomItem(speakerOrganizations)
  };
};

const waitlistGenerator = index => {
  const { first, last } = buildName();
  const suffix = uniqueSuffix(index);
  return {
    first_name: first,
    last_name: last,
    email: buildEmail(first, last, suffix),
    phone_number: randomPhone(),
    agree_terms: true,
    agree_communications: Math.random() > 0.2
  };
};

const vendorGenerator = index => {
  const { first, last } = buildName();
  const suffix = uniqueSuffix(index);
  const business = `${randomItem(businessNames)} ${suffix.slice(0, 3).toUpperCase()}`;
  const topic = randomItem(topics);
  return {
    first_name: first,
    last_name: last,
    email: buildEmail(first, last, suffix),
    phone_number: randomPhone(),
    agree_terms: true,
    agree_communications: Math.random() > 0.2,
    business_name: business,
    business_address: randomItem(streetAddresses),
    business_description: `We provide ${topic} solutions tailored for coastal communities.`,
    is_registered: Math.random() > 0.5,
    business_phone: randomPhone(),
    business_email: buildBusinessEmail(business, suffix),
    vendor_type: randomItem(vendorTypes),
    is_accepted: Math.random() > 0.7
  };
};

const inquiryGenerator = index => {
  const { first, last } = buildName();
  const suffix = uniqueSuffix(index);
  const topic = randomItem(topics);
  return {
    first_name: first,
    last_name: last,
    email: buildEmail(first, last, suffix),
    phone_number: randomPhone(),
    message_title: `Inquiry about ${topic}`,
    message: buildSentence(topic),
    inquiry_type: randomItem(inquiryTypes),
    agree_terms: true,
    agree_communications: Math.random() > 0.2,
    is_resolved: Math.random() > 0.6
  };
};

const exhibitorGenerator = index => {
  const { first, last } = buildName();
  const suffix = uniqueSuffix(index);
  const business = `${randomItem(businessNames)} Expo`;
  const topic = randomItem(topics);
  return {
    first_name: first,
    last_name: last,
    business_name: `${business} ${suffix.slice(0, 3).toUpperCase()}`,
    email: buildEmail(first, last, suffix),
    phone_number: randomPhone(),
    business_description: `Showcasing innovations in ${topic}.`,
    status: randomItem(exhibitorStatuses),
    agree_terms: true,
    agree_communications: Math.random() > 0.2
  };
};

const speakerGenerator = index => {
  const { first, last } = buildName();
  const suffix = uniqueSuffix(index);
  const topic = randomItem(topics);
  const sessionTitle = `Insights on ${topic}`;
  return {
    email: buildEmail(first, last, suffix),
    phone_number: randomPhone(),
    first_name: first,
    last_name: last,
    middle_name: Math.random() > 0.5 ? randomItem(firstNames) : undefined,
    gender: Math.random() > 0.5 ? 'male' : 'female',
    country: randomItem(countries),
    location: randomItem(locations),
    thematic_area: randomItem(thematicAreas),
    session_type: randomItem(sessionTypes),
    session_title: sessionTitle,
    session_description: `A practical session covering ${topic}, highlighting lessons learned and recommended actions.`,
    target_audience: randomItem(targetAudiences),
    target_type: randomItem(targetTypes),
    audience_engagement: randomItem(audienceEngagements),
    agree_terms: true,
    agree_communications: true,
    delivery_type: randomItem(deliveryTypes),
    is_accepted: Math.random() > 0.5
  };
};

const ticketTypeGenerator = index => {
  const suffix = uniqueSuffix(index);
  const topic = randomItem(topics);
  return {
    name: `Ticket ${suffix.toUpperCase()}`,
    amount: Math.floor(500 + Math.random() * 4500),
    description: `Access pass focused on ${topic}.`,
    payment_link: `https://payments.test/pay/${suffix}`
  };
};

const buildScheduleDocuments = async count => {
  await ensureDefaultTracks();
  const tracks = await Track.find().sort({ name: 1 });

  if (!tracks.length) {
    throw new Error('Cannot seed schedules without available tracks.');
  }

  const baseDate = new Date();
  baseDate.setHours(0, 0, 0, 0);

  return Array.from({ length: count }, (_, index) => {
    const dayOffset = index % 4;
    const weekOffset = Math.floor(index / 4);

    const scheduledDate = new Date(baseDate);
    scheduledDate.setDate(baseDate.getDate() + dayOffset + weekOffset * 4);

    const slot = randomItem(scheduleTimeSlots);
    const topic = randomItem(topics);
    const sessionType = randomItem(SCHEDULE_TYPE_OPTIONS);
    const speakerCount = 1 + Math.floor(Math.random() * 3);
    const speakers = Array.from({ length: speakerCount }, buildScheduleSpeaker);
    const track = randomItem(tracks);
    const moderatorName = buildName();

    return {
      day: dayOffset + 1,
      date: scheduledDate,
      title: `${sessionType} • ${toTitleCase(topic)}`,
      description: `An engaging ${sessionType.toLowerCase()} focused on ${topic}.`,
      track: track._id,
      speakers,
      venue: randomItem(scheduleVenues),
      start_time: slot.start,
      end_time: slot.end,
      moderator: `${moderatorName.first} ${moderatorName.last}`,
      type: sessionType
    };
  });
};

const configMap = new Map();

const registerConfig = (keys, config) => {
  keys.forEach(key => {
    configMap.set(key.toLowerCase(), config);
  });
};

registerConfig(['waitlist', 'waitlists'], {
  label: 'Waitlist',
  model: Waitlist,
  build: waitlistGenerator
});

registerConfig(['vendor', 'vendors'], {
  label: 'Vendor',
  model: Vendor,
  build: vendorGenerator
});

registerConfig(['inquiry', 'inquiries'], {
  label: 'Inquiry',
  model: Inquiry,
  build: inquiryGenerator
});

registerConfig(['exhibitor', 'exhibitors'], {
  label: 'Exhibitor',
  model: Exhibitor,
  build: exhibitorGenerator
});

registerConfig(['speaker', 'speakers'], {
  label: 'Speaker',
  model: Speaker,
  build: speakerGenerator
});

registerConfig(['ticket', 'tickets', 'tickettype', 'tickettypes'], {
  label: 'TicketType',
  model: TicketType,
  build: ticketTypeGenerator
});

registerConfig(['schedule', 'schedules'], {
  label: 'Schedule',
  model: Schedule,
  buildMany: buildScheduleDocuments
});

const resolveConfig = name => {
  if (!name) return null;
  return configMap.get(name.toLowerCase()) || null;
};

const buildDocuments = (count, builder) =>
  Array.from({ length: count }, (_, index) => builder(index));

export const listModelKeys = () => Array.from(new Set(configMap.keys())).sort();

export const listModelLabels = () =>
  Array.from(new Set(Array.from(configMap.values()).map(({ label }) => label))).sort();

export async function seedModelEntries(modelName, count = 10) {
  const config = resolveConfig(modelName);
  if (!config) {
    throw new Error(
      `Unknown model "${modelName}". Supported keys: ${listModelKeys().join(', ')}`
    );
  }

  let documents;
  if (typeof config.buildMany === 'function') {
    documents = await config.buildMany(count);
  } else if (typeof config.build === 'function') {
    documents = buildDocuments(count, config.build);
  } else {
    throw new Error(`Model configuration for "${config.label}" is missing a builder.`);
  }

  const inserted = await config.model.insertMany(documents, { ordered: false });

  return {
    insertedCount: inserted.length,
    modelLabel: config.label
  };
}
