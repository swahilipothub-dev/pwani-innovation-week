// PIW 2026 confirmed speakers and moderators, sourced from the official announcement graphics.
// `matchTokens` holds the normalized first/last name used to link this photo to mentions of the
// same person inside scheduleData.ts session details (see getSpeakerPhoto below).

export interface Speaker2026 {
  name: string;
  title: string;
  role: 'Speaker' | 'Moderator';
  photo: string;
  matchTokens: [string, string];
  /** Shown as its own card in the Speakers page lineup. Cropped-from-poster entries are kept
   * out of that grid and used only to match names inside session details (see getSpeakerPhoto). */
  onSpeakersPage?: boolean;
}

const PHOTO_BASE = '/images/new/Speakers 2026';

// Individual confirmed speakers/moderators — each sourced from their own solo announcement poster,
// so these are shown as standalone cards on the Speakers page as well as used for session matching.
export const SPEAKERS_2026: Speaker2026[] = [
  {
    name: 'H.E Abdulswamad Shariff Nassir',
    title: 'Governor, Mombasa County',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (2).jpeg`,
    matchTokens: ['abdulswamad', 'nassir'],
    onSpeakersPage: true,
  },
  {
    name: 'Hon. Suleiman Shahbal',
    title: 'Founder and Chairman, GulfCap Group of Companies',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (1).jpeg`,
    matchTokens: ['suleiman', 'shahbal'],
    onSpeakersPage: true,
  },
  {
    name: 'Prof. James H.P. Kahindi',
    title: 'Professor of Microbiology and Vice Chancellor, Pwani University',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (4).jpeg`,
    matchTokens: ['james', 'kahindi'],
    onSpeakersPage: true,
  },
  {
    name: 'H.E. Sultan Hajiyev',
    title: 'Ambassador Extraordinary and Plenipotentiary of Azerbaijan to Kenya',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (1).jpeg`,
    matchTokens: ['sultan', 'hajiyev'],
    onSpeakersPage: true,
  },
  {
    name: 'H.E. Henk Jan Bakker',
    title: 'Ambassador of the Kingdom of the Netherlands to Kenya',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (6).jpeg`,
    matchTokens: ['henk', 'bakker'],
    onSpeakersPage: true,
  },
  {
    name: 'Hon. Sabrina Jefwa',
    title: 'CECM Fisheries, Blue Economy, Livestock & Cooperative Development, Lamu County',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (8).jpeg`,
    matchTokens: ['sabrina', 'jefwa'],
    onSpeakersPage: true,
  },
  {
    name: 'Hon. Emmily Achieng Okello',
    title: 'CECM Climate Change, Energy & Natural Resources, Mombasa County',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (9).jpeg`,
    matchTokens: ['emmily', 'okello'],
    onSpeakersPage: true,
  },
  {
    name: 'Shamayel Karani',
    title: 'Co-founder and COO, Ecoprint',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (7).jpeg`,
    matchTokens: ['shamayel', 'karani'],
    onSpeakersPage: true,
  },
  {
    name: 'Sir Michael Onyango',
    title: 'Founder, 4gotten Bottom Millions (4BM Africa)',
    role: 'Moderator',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM.jpeg`,
    matchTokens: ['michael', 'onyango'],
    onSpeakersPage: true,
  },
  {
    name: 'Muthoki Nyamai J.W.',
    title: 'Co-founding Director, Budget Talk Global',
    role: 'Moderator',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (10).jpeg`,
    matchTokens: ['muthoki', 'nyamai'],
    onSpeakersPage: true,
  },
  {
    name: 'Ohms Law Montana (Omondi Obunga)',
    title: 'Rapper, Songwriter and Performing Artist',
    role: 'Moderator',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (5).jpeg`,
    matchTokens: ['ohms', 'montana'],
    onSpeakersPage: true,
  },
  // Below: speakers who only appear in multi-speaker group posters, cropped from those posters.
  // Kept out of the Speakers page grid (the group poster is shown there instead, unedited) and
  // used solely so their names light up with a photo wherever they're mentioned in a session.
  {
    name: 'Mr. Atrash Ali',
    title: 'Senior Advisor, Conrad N. Hilton Foundation, Greater Mombasa Area',
    role: 'Speaker',
    photo: '/images/speakers-2026/atrash-ali.jpg',
    matchTokens: ['atrash', 'ali'],
  },
  {
    name: 'Prof. Jostinah Wawasi',
    title: 'Professor, Gender and Justice Expert',
    role: 'Speaker',
    photo: '/images/speakers-2026/prof-jostinah-wawasi.jpg',
    matchTokens: ['jostinah', 'wawasi'],
  },
  {
    name: 'Zipporah Njoki',
    title: 'Community Mentor, Swahilipot Hub Foundation',
    role: 'Moderator',
    photo: '/images/speakers-2026/zipporah-njoki.jpg',
    matchTokens: ['zipporah', 'njoki'],
  },
  {
    name: 'M\u2019mbetsa Ngome',
    title: 'Assistant Program Manager, Swahilipot Hub Foundation',
    role: 'Moderator',
    photo: '/images/speakers-2026/mmbetsa-ngome.jpg',
    matchTokens: ['mmbetsa', 'ngome'],
  },
  {
    name: 'Dr. Mwanasiti Mohamed Bendera',
    title: 'Ag. Managing Director, CDA',
    role: 'Speaker',
    photo: '/images/speakers-2026/dr-mwanasiti-mohamed.jpg',
    matchTokens: ['mwanasiti', 'mohamed'],
  },
  {
    name: 'Mr. Jamal Abdallah Kidiogo',
    title: 'Founder, Smart Move Community',
    role: 'Speaker',
    photo: '/images/speakers-2026/jamal-abdallah.jpg',
    matchTokens: ['jamal', 'abdallah'],
  },
  {
    name: 'Kennedy Omondi',
    title: 'Executive Director, Mizizi Youth Organization',
    role: 'Speaker',
    photo: '/images/speakers-2026/kennedy-omondi.jpg',
    matchTokens: ['kennedy', 'omondi'],
  },
  {
    name: 'Salome Mshai',
    title: 'Mentee, Likoni',
    role: 'Speaker',
    photo: '/images/speakers-2026/salome-mshai.jpg',
    matchTokens: ['salome', 'mshai'],
  },
  {
    name: 'Mariam Abdalla Ali',
    title: 'Mentee, Changamwe',
    role: 'Speaker',
    photo: '/images/speakers-2026/mariam-abdalla-ali.jpg',
    matchTokens: ['mariam', 'abdalla'],
  },
  {
    name: 'Solomon Kyembeni',
    title: 'Mentee, Kilifi',
    role: 'Speaker',
    photo: '/images/speakers-2026/solomon-kyembeni.jpg',
    matchTokens: ['solomon', 'kyembeni'],
  },
  {
    name: 'Rajab Salim',
    title: 'Community & Operations Associate, Baraza Media Lab',
    role: 'Speaker',
    photo: '/images/speakers-2026/rajab-salim.jpg',
    matchTokens: ['rajab', 'salim'],
  },
  {
    name: 'Joab Kose',
    title: 'Head of Technology, Swahilipot',
    role: 'Speaker',
    photo: '/images/speakers-2026/joab-kose.jpg',
    matchTokens: ['joab', 'kose'],
  },
  {
    name: 'Arafa Mohammed',
    title: 'Assistant Project Associate, Kilifi',
    role: 'Speaker',
    photo: '/images/speakers-2026/arafa-mohammed.jpg',
    matchTokens: ['arafa', 'mohammed'],
  },

  // --- Additional confirmed speakers/moderators (solo announcement posters) ---
  {
    name: 'Rev. Canon Chris Kinyanjui',
    title: 'General Secretary, National Council of Churches of Kenya (NCCK)',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (3).jpeg`,
    matchTokens: ['canon', 'kinyanjui'],
    onSpeakersPage: true,
  },
  {
    name: 'Esnas Tsindoli',
    title: 'Youth Leader, Advocate, Community Mobilizer, Councellor and Creative Storyteller',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (4).jpeg`,
    matchTokens: ['esnas', 'tsindoli'],
    onSpeakersPage: true,
  },
  {
    name: 'Olivier Vanden Eynde',
    title: 'Founder & CEO, Close the Gap',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (5).jpeg`,
    matchTokens: ['vanden', 'eynde'],
    onSpeakersPage: true,
  },
  {
    name: 'George Awalla',
    title: 'Business Pursuit Lead, VSO International',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (6).jpeg`,
    matchTokens: ['george', 'awalla'],
    onSpeakersPage: true,
  },
  {
    name: 'Arafat Mukasa',
    title: 'Head of Business Development and Partnerships, Midella',
    role: 'Moderator',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (7).jpeg`,
    matchTokens: ['arafat', 'mukasa'],
    onSpeakersPage: true,
  },
  {
    name: 'Joyce Keingati',
    title: 'Project Officer, Community Action for Nature Conservation (CANCO)',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (8).jpeg`,
    matchTokens: ['joyce', 'keingati'],
    onSpeakersPage: true,
  },
  {
    name: 'Hon. Patrick Mbelle Mwavula',
    title: 'Member of County Assembly, Bamburi Ward, Mombasa County',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (9).jpeg`,
    matchTokens: ['patrick', 'mbelle'],
    onSpeakersPage: true,
  },
  {
    name: 'Abud Jamal Said',
    title: 'Chairman, Kenya National Chamber of Commerce and Industry (KNCCI)',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (10).jpeg`,
    matchTokens: ['jamal', 'said'],
    onSpeakersPage: true,
  },
  {
    name: 'Prof. Shaukat Abdulrazak',
    title: 'Principal Secretary, State Department for Science, Research and Innovation',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (31).jpeg`,
    matchTokens: ['shaukat', 'abdulrazak'],
    onSpeakersPage: true,
  },
  {
    name: 'Prof. Bitange Ndemo',
    title: 'Global Technocrat',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (32).jpeg`,
    matchTokens: ['bitange', 'ndemo'],
    onSpeakersPage: true,
  },
  {
    name: 'Diana Akinyi Odawa',
    title: 'Moderator',
    role: 'Moderator',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (33).jpeg`,
    matchTokens: ['diana', 'akinyi'],
    onSpeakersPage: true,
  },
  {
    name: 'Mr. Jessy K. Maruti',
    title: 'Chief Executive Officer, ICT Authority',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (34).jpeg`,
    matchTokens: ['jessy', 'maruti'],
    onSpeakersPage: true,
  },
  {
    name: 'Kudzayi Zvinavashe',
    title: 'Program Lead, Nafasi Magamba Network',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (35).jpeg`,
    matchTokens: ['kudzayi', 'zvinavashe'],
    onSpeakersPage: true,
  },
  {
    name: 'Mukami Munyoki',
    title: 'Head of Programs, Mental 360',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (36).jpeg`,
    matchTokens: ['mukami', 'munyoki'],
    onSpeakersPage: true,
  },
  {
    name: 'Belinda Nasimiyu',
    title: 'Assistant ICT Officer, Innovation Department, ICT Authority',
    role: 'Moderator',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (37).jpeg`,
    matchTokens: ['belinda', 'nasimiyu'],
    onSpeakersPage: true,
  },
  {
    name: 'Peris Mwaniki',
    title: 'Psychotherapist, Mental 360',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (38).jpeg`,
    matchTokens: ['peris', 'mwaniki'],
    onSpeakersPage: true,
  },
  {
    name: 'Linda Ng\u2019ondu',
    title: 'Chief Product Officer, Ziya Bridge Ltd',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (41).jpeg`,
    matchTokens: ['linda', 'ngondu'],
    onSpeakersPage: true,
  },
  {
    name: 'Daisy Chesang',
    title: 'Senior Associate, Global Development Incubator',
    role: 'Moderator',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (42).jpeg`,
    matchTokens: ['daisy', 'chesang'],
    onSpeakersPage: true,
  },
  {
    name: 'Edwin Mwangi',
    title: 'Founder, Live Mombasa (Founders Live Mombasa)',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (44).jpeg`,
    matchTokens: ['edwin', 'mwangi'],
    onSpeakersPage: true,
  },
  {
    name: 'Dr. Monica Ogetenge',
    title: 'Founder and CEO, Cenere Growth Hub',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (45).jpeg`,
    matchTokens: ['monica', 'ogetenge'],
    onSpeakersPage: true,
  },
  {
    name: 'Shazmeen Kassam (Dr Trauma)',
    title: 'Trauma Informed Psychosocial Counselor, Holistic Wellness Practitioner',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (46).jpeg`,
    matchTokens: ['shazmeen', 'kassam'],
    onSpeakersPage: true,
  },
  {
    name: 'Peter Gitata',
    title: 'CEO, Peshwood Enterprises Limited',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (47).jpeg`,
    matchTokens: ['peter', 'gitata'],
    onSpeakersPage: true,
  },
  {
    name: 'Kevin Nyamweya',
    title: 'Economic Development Investment Council',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (48).jpeg`,
    matchTokens: ['kevin', 'nyamweya'],
    onSpeakersPage: true,
  },
  {
    name: 'John Kashagaki',
    title: 'Executive Director, EDIC-Pwani',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (49).jpeg`,
    matchTokens: ['john', 'kashagaki'],
    onSpeakersPage: true,
  },
  {
    name: 'Firdaus Anwar',
    title: 'Founder & Lead Strategist, Seraphic Events & Consultancy',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (50).jpeg`,
    matchTokens: ['firdaus', 'anwar'],
    onSpeakersPage: true,
  },
  {
    name: 'Alice Gugelev',
    title: 'CEO, GDI Africa — Pwani Vision 2050',
    role: 'Speaker',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (51).jpeg`,
    matchTokens: ['alice', 'gugelev'],
    onSpeakersPage: true,
  },

  // --- Photo-matching only (cropped from multi-speaker session posters, or reused from the
  // existing PIW 2025 keynote gallery). Not shown as standalone cards on the Speakers page —
  // the un-cropped group posters appear there instead (see SPEAKER_GROUP_POSTERS below). ---
  {
    name: 'Tony Omuga',
    title: 'Radio presenter, Swahilipot FM',
    role: 'Moderator',
    photo: '/images/speakers-2026/tony-omuga.jpg',
    matchTokens: ['tony', 'omuga'],
  },
  {
    name: 'Bahati Ngazi',
    title: 'Radio presenter, Swahilipot FM',
    role: 'Moderator',
    photo: '/images/speakers-2026/bahati-ngazi.jpg',
    matchTokens: ['bahati', 'ngazi'],
  },
  {
    name: 'Ms. Balqees Yasin',
    title: 'Development Practitioner',
    role: 'Moderator',
    photo: '/images/speakers-2026/balqees-yasin.jpg',
    matchTokens: ['balqees', 'yasin'],
  },
  {
    name: 'Dr. Madiha Salim',
    title: 'Dean, Faculty of Humanities, Technical University of Mombasa',
    role: 'Speaker',
    photo: '/images/speakers-2026/madiha-salim.jpg',
    matchTokens: ['madiha', 'salim'],
  },
  {
    name: 'Sh. Alawy Abzein',
    title: 'Swahili Culture Advisor',
    role: 'Speaker',
    photo: '/images/speakers-2026/alawy-abzein.jpg',
    matchTokens: ['alawy', 'abzein'],
  },
  {
    name: 'Margaret Phombea',
    title: 'Clinical Officer, Kilifi County',
    role: 'Speaker',
    photo: '/images/speakers-2026/margaret-phombea.jpg',
    matchTokens: ['margaret', 'phombea'],
  },
  {
    name: 'Dr. Sam Ikwaye',
    title: 'Chairperson, Mombasa Tourism Council',
    role: 'Speaker',
    photo: '/images/speakers-2026/sam-ikwaye.jpg',
    matchTokens: ['sam', 'ikwaye'],
  },
  {
    name: 'Mahmoud Noor',
    title: 'Chief Mentor, Swahilipot Hub Foundation',
    role: 'Speaker',
    photo: '/images/keynotespeakers/Mahmoud Noor.png',
    matchTokens: ['mahmoud', 'noor'],
  },
  {
    name: 'Kalkidan Mulugeta',
    title: 'Board Chairperson, Swahilipot Hub Foundation',
    role: 'Speaker',
    photo: '/images/keynotespeakers/Kalkidan Mulugeta.png',
    matchTokens: ['kalkidan', 'mulugeta'],
  },
];

// Speakers/moderators for the Speakers page grid of standalone portrait cards.
export const SPEAKERS_FOR_PAGE: Speaker2026[] = SPEAKERS_2026.filter((s) => s.onSpeakersPage);

export interface SpeakerPoster {
  id: string;
  caption: string;
  photo: string;
}

// Multi-speaker announcement posters, shown unedited (not cropped) on the Speakers page.
export const SPEAKER_GROUP_POSTERS: SpeakerPoster[] = [
  {
    id: 'plenary-1-this-is-pwani',
    caption: 'Plenary 1: This Is Pwani — 10 Years Through Art',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (11).jpeg`,
  },
  {
    id: 'plenary-2-coast-we-inherited',
    caption: 'Plenary 2: The Coast We Inherited to the Coast We Are Building — 10 Years of Agency, Safe Spaces, Livelihoods',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (13).jpeg`,
  },
  {
    id: 'fireside-chat-1',
    caption: 'Fireside Chat 1: The Coast We Have — Unlocking Our Resources, Creating Our Future',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (2).jpeg`,
  },
  {
    id: 'fireside-chat-2',
    caption: 'Fireside Chat 2',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (39).jpeg`,
  },
  {
    id: 'fireside-chat-3-ai',
    caption: 'Fireside Chat 3: Kenya\u2019s Position in AI for the Next 5 Years',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (40).jpeg`,
  },
  {
    id: 'fireside-chat-5-founder-reset',
    caption: 'Fireside Chat 5: Founder Reset — Are You Building a Business or Doing a Job?',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.13 AM (43).jpeg`,
  },
  {
    id: 'plenary-agency-to-livelihoods-1',
    caption: 'Plenary: From Agency to Livelihoods — Empowering Young People to Shape Their Economic Futures',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM.jpeg`,
  },
  {
    id: 'plenary-10-year-journey',
    caption: 'Plenary 3: The 10-Year Journey — How the Swahilipot Transformation Was Built From the Ground Up',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (11).jpeg`,
  },
  {
    id: 'plenary-agency-to-livelihoods-2',
    caption: 'Plenary: From Agency to Livelihoods — Empowering Young People to Shape Their Economic Futures',
    photo: `${PHOTO_BASE}/WhatsApp Image 2026-10-26 at 9.31.14 AM (3).jpeg`,
  },
];

const STOPWORDS = new Set([
  'hon', 'dr', 'prof', 'mr', 'mrs', 'ms', 'sir', 'he', 'rev', 'amb', 'eng', 'and',
]);

// Strips honorifics, punctuation and single-letter initials so names can be compared loosely
// (e.g. "Ms. Sabrina M. Jefwa" vs "Hon. Sabrina Jefwa").
const normalizeTokens = (name: string): string[] =>
  name
    .toLowerCase()
    .replace(/[\u2018\u2019']/g, '')
    .replace(/[.()]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));

// Looks up a confirmed-speaker photo for a name as it appears in scheduleData.ts session details.
export const getSpeakerPhoto = (rawName: string): Speaker2026 | undefined => {
  const tokens = normalizeTokens(rawName);
  if (tokens.length === 0) return undefined;
  return SPEAKERS_2026.find(({matchTokens}) => matchTokens.every((t) => tokens.includes(t)));
};
