// Full Pwani Innovation Week 2026 program (Oct 26–31, 2026).
// Source: official PIW program document. Fields left blank in the source
// (moderators/venues not yet confirmed) are intentionally omitted rather than invented.

export type SessionType =
  | 'Arrival'
  | 'Plenary'
  | 'Keynote'
  | 'Fireside Chat'
  | 'Documentary'
  | 'Ceremony'
  | 'Awards'
  | 'Break'
  | 'Special';

export type Village =
  | 'Sustainable Economies Village'
  | 'Digital Transformation Village'
  | 'Youth and Entrepreneurship Village';

export interface ProgramSession {
  kind: 'session';
  time: string;
  type: SessionType;
  title: string;
  topic?: string;
  venue?: string;
  moderator?: string;
  keynote?: string[];
  panelists?: string[];
  speakers?: string[];
  partners?: string[];
  notes?: string;
}

export interface VillageTrack {
  village: Village;
  title: string;
  format?: string;
  venue?: string;
  moderator?: string;
  keynote?: string[];
  partners?: string[];
}

export interface ProgramBreakout {
  kind: 'breakout';
  time: string;
  label?: string;
  tracks: VillageTrack[];
}

export type ProgramBlock = ProgramSession | ProgramBreakout;

export interface ProgramDay {
  day: number;
  date: string;
  weekday: string;
  theme?: string;
  blocks: ProgramBlock[];
}

export const PIW_PROGRAM: ProgramDay[] = [
  {
    day: 1,
    date: '2026-10-26',
    weekday: 'Monday',
    blocks: [
      {kind: 'session', time: '8:30 AM – 10:00 AM', type: 'Arrival', title: 'Arrival, Registration and Setting Up'},
      {
        kind: 'session',
        time: '10:00 AM – 11:30 AM',
        type: 'Plenary',
        title: 'Plenary 1: The Big Showcase',
        topic: 'This Is Pwani: 10 Years Through Art',
        speakers: ['Bahati Ngazi', 'Tony Omuga'],
        notes: 'Live stage performances: Cardiac Poet, Gademitt – Quincy Bilal, Maimuna Ali Kisinyo (Maimoonah254), Boywaleh, Hamis Mwagarashi (Kayamba), Mijikenda cultural dance, Changamwe Taarab.',
      },
      {
        kind: 'session',
        time: '11:30 AM – 1:00 PM',
        type: 'Plenary',
        title: 'Plenary 2',
        topic: 'The Coast We Inherited to the Coast We Are Building: 10 Years of Agency, Safe Spaces, Livelihoods',
        moderator: 'Ms. Balqees Yasin',
        keynote: ['Dr. Sam Ikwaye'],
        panelists: ['Dr. Madiha', 'Dorcas Uwiyera', 'Alawy Abzein'],
      },
      {kind: 'session', time: '1:00 PM – 1:45 PM', type: 'Break', title: 'Lunch Break'},
      {
        kind: 'session',
        time: '1:45 PM – 2:15 PM',
        type: 'Keynote',
        title: 'Keynote Addresses',
        keynote: [
          'Mr. Atrash Ali — How safe and inclusive youth spaces can be translated into youth agency',
          'Prof. Jostinah Wawasi Mwang\u2019ombe — What We Inherit, What We Leave Behind: Culture, Identity and Wisdom Across Generations',
        ],
      },
      {
        kind: 'session',
        time: '2:15 PM – 3:30 PM',
        type: 'Special',
        title: 'Plenary 3: Storytelling — Fishbowl Approach',
        moderator: 'Ohm\u2019s Law (sharing Swahilipot\u2019s story)',
        panelists: ['Joab (founding member)', 'Arafa Mohamed (former mentor)', 'Rajab Salim (former YAG)'],
      },
      {kind: 'session', time: '3:30 PM – 5:00 PM', type: 'Documentary', title: 'Documentary: Success Stories'},
    ],
  },
  {
    day: 2,
    date: '2026-10-27',
    weekday: 'Tuesday',
    blocks: [
      {kind: 'session', time: '8:30 AM – 9:00 AM', type: 'Arrival', title: 'Arrival and Registration'},
      {
        kind: 'session',
        time: '9:00 AM – 12:00 PM',
        type: 'Ceremony',
        title: 'Plenary 5: Official Opening Ceremony',
        topic: 'The Future Starts Here',
        venue: 'Main Arena',
        moderator: 'Mahmoud Noor (Welcome Remarks)',
        keynote: ['Kalkidan Mulugeta (Opening Remarks)', 'Dr. Kevit Desai (Opening Remarks)'],
        panelists: [
          'Arbejaizan',
          'Amb. Netherlands',
          'Hannah Tsadik — Country Representative, Mastercard Foundation',
          'Mama Ida Odinga',
          'Governor, Mombasa County Government',
          'Deputy President',
        ],
        notes: 'Launch of the Swahilipot Hub Foundation Impact Report and next 10-year priorities.',
      },
      {
        kind: 'session',
        time: '12:00 PM – 1:00 PM',
        type: 'Fireside Chat',
        title: 'Fireside Chat 1',
        moderator: 'Omar Ngome',
        keynote: ['Sharon Owino', 'Ruth Kaveke', 'Shufaa', 'Firdaus', 'Purity Shiriba', 'Elizabeth Mlongo — Storytelling session, video'],
        panelists: ['Mahmoud Noor', 'Kalkidan Mulugeta'],
      },
      {kind: 'session', time: '1:00 PM – 2:00 PM', type: 'Break', title: 'Lunch Break'},
      {
        kind: 'session',
        time: '2:00 PM – 3:00 PM',
        type: 'Plenary',
        title: 'Plenary Session 6',
        topic: 'So, What Does a Better Coast Look Like?',
        venue: 'Main Arena',
        moderator: 'Rukiya Jamal',
        partners: ['EDIC'],
      },
      {
        kind: 'breakout',
        time: '3:00 PM – 4:30 PM',
        tracks: [
          {
            village: 'Sustainable Economies Village',
            title: 'Marine Conservation',
            format: 'Workshop',
            venue: 'Amphitheatre',
            keynote: ['Sabrina M Jefwa — CECM Blue Economy, Lamu'],
            partners: ['Techno Serve', 'Sote Hub', 'WWF', 'Entrepreneur', 'KMA'],
          },
          {
            village: 'Digital Transformation Village',
            title: 'Green Is the New Gold',
            moderator: 'TBC',
            partners: ['Midella', 'VSO/Sote Hub', 'Mary Maina'],
          },
          {
            village: 'Youth and Entrepreneurship Village',
            title: 'Beyond the Hustle: Building Financially Strong Businesses and Futures',
            format: 'Workshop',
            venue: 'Main Auditorium',
            partners: ['ABSA'],
          },
        ],
      },
      {
        kind: 'session',
        time: '6:00 PM – 7:30 PM',
        type: 'Special',
        title: 'Launch of the Swahili Library',
        venue: 'Fort Jesus (proposed)',
        speakers: ['Ambassador of Azerbaijan'],
      },
      {kind: 'session', time: 'Evening', type: 'Special', title: 'Kanga Festival'},
    ],
  },
  {
    day: 3,
    date: '2026-10-28',
    weekday: 'Wednesday',
    blocks: [
      {kind: 'session', time: '8:30 AM – 9:00 AM', type: 'Arrival', title: 'Arrival and Registration'},
      {
        kind: 'session',
        time: '9:00 AM – 10:15 AM',
        type: 'Fireside Chat',
        title: 'Fireside Chat 2',
        topic: 'Kenya\u2019s Position in AI for the Next 5 Years',
        venue: 'Main Arena',
        panelists: ['Dr. Tonny K. Omwansa — Kenya National Innovation Agency', 'Prof. Bitange Ndemo'],
      },
      {
        kind: 'breakout',
        time: '10:15 AM – 1:00 PM',
        tracks: [
          {
            village: 'Sustainable Economies Village',
            title: 'Kazi ya Kesho: Future of Work for the Coast',
            format: 'Workshop',
            partners: ['Jobtech Alliance'],
          },
          {
            village: 'Digital Transformation Village',
            title: 'Events Productions',
            format: 'Workshop',
            partners: ['4BM'],
          },
          {
            village: 'Youth and Entrepreneurship Village',
            title: 'Work Readiness Masterclass',
            partners: ['Ibtisam Balala', 'NCCK', 'E4Impact', 'Swahilipot Hub Foundation', 'Mastercard Foundation'],
          },
        ],
      },
      {kind: 'session', time: '1:00 PM – 2:00 PM', type: 'Break', title: 'Lunch Break'},
      {
        kind: 'session',
        time: '2:00 PM – 3:15 PM',
        type: 'Fireside Chat',
        title: 'Fireside Chat 3',
        topic: 'Future of Work Innovation Showcase',
        venue: 'Main Arena',
        moderator: 'Ziri / IOEM',
        panelists: ['Paul Akwabi', 'Nyandia Gachago / Melody Mukhwana'],
      },
      {
        kind: 'breakout',
        time: '3:30 PM – 5:00 PM',
        tracks: [
          {
            village: 'Sustainable Economies Village',
            title: 'Unlocking Opportunities for Young Women Beyond the Tarmac: The V2T Experience',
            partners: ['NCCK', 'E4Impact', 'Swahilipot Hub Foundation', 'Mastercard Foundation'],
          },
          {
            village: 'Digital Transformation Village',
            title: 'AI and the Brain: Using Machines for Mental Health',
            moderator: 'Ayubu',
            partners: ['Safaricom', 'Cisco', 'Huawei'],
          },
          {
            village: 'Youth and Entrepreneurship Village',
            title: 'Show Me How: Telling Your Story in the Age of AI',
            partners: ['Afrotellers'],
          },
        ],
      },
    ],
  },
  {
    day: 4,
    date: '2026-10-29',
    weekday: 'Thursday',
    blocks: [
      {kind: 'session', time: '8:30 AM – 9:00 AM', type: 'Arrival', title: 'Arrival and Registration'},
      {
        kind: 'session',
        time: '8:30 AM – 1:00 PM',
        type: 'Special',
        title: 'Afrotellers',
        notes: 'Topic 1: Sovereignty as a governance question at national, East African Community and African Union levels. Topic 2: Algorithmic colonialism.',
      },
      {
        kind: 'session',
        time: '9:00 AM – 10:15 AM',
        type: 'Fireside Chat',
        title: 'Fireside Chat 4',
        topic: 'Founder Reset: Are You Building a Business or Just Doing a Job?',
        venue: 'Main Arena',
        moderator: 'Ken Miheso (Sharon Owino)',
        panelists: ['Kamal Budhabatti'],
      },
      {
        kind: 'session',
        time: '10:15 AM – 11:30 AM',
        type: 'Fireside Chat',
        title: 'Fireside Chat 5',
        topic: 'Capital Reset: When Money Meets Opportunity and Understanding How Investors Think',
        venue: 'Main Arena',
        moderator: 'Ken Miheso',
        panelists: ['Suleiman Shahbal', 'Koria'],
        notes: 'Includes elevator pitch segment.',
      },
      {
        kind: 'breakout',
        time: '11:35 AM – 1:00 PM',
        tracks: [
          {
            village: 'Sustainable Economies Village',
            title: 'Creative Economy: Your Talent Is the Product — But Where Is Business?',
            partners: ['HEVA Fund', 'Rajab Salim', 'Iyani', 'Alumni Artist'],
          },
          {
            village: 'Digital Transformation Village',
            title: 'Securing the Digital Coast: AI, Cybersecurity and the Future of East Africa\u2019s Digital Economy',
            partners: ['Innovus', 'Ounah Khalayi', 'Share Internet', 'Mastercard Foundation'],
          },
          {
            village: 'Youth and Entrepreneurship Village',
            title: 'Make It Official: Is Your Business Ready to Do Business?',
            partners: ['Tonee Ndungu', 'E4Impact', 'Ken Tuju'],
          },
        ],
      },
      {kind: 'session', time: '1:00 PM – 2:00 PM', type: 'Break', title: 'Lunch Break'},
      {
        kind: 'breakout',
        time: '2:00 PM – 4:00 PM',
        tracks: [
          {
            village: 'Sustainable Economies Village',
            title: 'Plenary Session 7: The Deals Den',
            venue: 'Main Auditorium',
            moderator: 'MC',
            partners: ['Founders Live Mombasa'],
          },
          {
            village: 'Youth and Entrepreneurship Village',
            title: 'Plenary Session 8: The Deals Den',
            venue: 'Main Auditorium',
            moderator: 'MC',
            partners: ['Ken Miheso', 'Upendo Collection'],
          },
          {
            village: 'Digital Transformation Village',
            title: 'Beyond the Hype: AI, Blockchain & DeFi and Africa\u2019s Digital Future',
            partners: ['Binance'],
          },
        ],
      },
      {kind: 'session', time: '4:00 PM – 5:00 PM', type: 'Awards', title: 'Hackathon Awards'},
    ],
  },
  {
    day: 5,
    date: '2026-10-30',
    weekday: 'Friday',
    blocks: [
      {kind: 'session', time: '8:30 AM – 9:00 AM', type: 'Arrival', title: 'Arrival and Registration'},
      {
        kind: 'session',
        time: '9:00 AM – 10:00 AM',
        type: 'Fireside Chat',
        title: 'Fireside Chat 6',
        topic: 'Decisions That Shape Us: The Weight of County and National Decisions in Shaping Innovation and Opportunity for Young People',
        venue: 'Main Arena',
        keynote: ['Dorcas Mutemi'],
        moderator: 'Esha Mohammed',
        panelists: ['PS Fikirini', 'Sabrina M Jefwa', 'Swabrina Mapenzi'],
      },
      {
        kind: 'session',
        time: '10:00 AM – 11:15 AM',
        type: 'Plenary',
        title: 'Plenary Session 8',
        topic: 'Charting the Pwani We Want Beyond 2030: Shaping Our Shared Future and Building an Innovative, Inclusive and Sustainable Coastal Region',
        venue: 'Main Arena',
        keynote: ['Dr. Kingi — Lecturer, TUM'],
        panelists: [
          'Jumuiya ya County za Pwani — Gladys',
          'Ms. Natasha',
          'Mr. Mzee Mwinyi Mzee — Coast Development Authority',
          'Private sector (Kenya Chambers)',
        ],
      },
      {
        kind: 'breakout',
        time: '11:35 AM – 1:00 PM',
        tracks: [
          {
            village: 'Sustainable Economies Village',
            title: 'Financing the Future of Pwani: Exploring New Models for Sustaining and Scaling Development Work Across the Coast',
            keynote: ['AAR Insurance'],
            moderator: 'Vincent Otumbo',
            partners: ['Philanthropy partner (Nairobi)', 'Mastercard Foundation — Anthony', 'Bohora Community — Hamza', 'Jane Githui — Mombasa County Budget & Planning'],
          },
          {
            village: 'Digital Transformation Village',
            title: 'The Innovator\u2019s Toolkit: A Practical, Human-Centered Design Session on Moving from Ideation to Prototyping for Young Innovators',
            moderator: 'Judy Barasa',
            keynote: ['Mohammed Gharib'],
            partners: ['IOME', 'Lavenda', 'Kilifish', 'Zayyad'],
          },
          {
            village: 'Youth and Entrepreneurship Village',
            title: 'Youth and Governance: Reimagining Meaningful Youth Participation and Leadership in Public Decision-Making',
            moderator: 'Salim Ali — Path Youth Organization',
            keynote: ['Dr. Ruth Dama Masha'],
            partners: [
              'Athman Hassan Mbangwe',
              'Brian Kithinji — Policy Action Initiative',
              'Edwin Kiritu — YAG Kilifi',
              'Dr. Hafidha Abdallah — Youth Leader',
              'HURIA & Maono Space',
              'Mary Mwachit-Nawiri CBO, Kwale',
            ],
          },
        ],
      },
      {kind: 'session', time: '1:00 PM – 2:00 PM', type: 'Break', title: 'Lunch Break'},
      {
        kind: 'session',
        time: 'Afternoon',
        type: 'Plenary',
        title: 'Plenary Session 9',
        topic: 'Creativity as Currency: Unlocking the Potential of the Orange Economy for Youth Innovation and Sustainable Livelihoods',
        venue: 'Main Arena',
        keynote: ['CS Salim Mvurya, EGH'],
        panelists: ['Jay Melody', 'Iyani', 'Watendawili', 'Mombasa-based artist'],
      },
      {
        kind: 'session',
        time: 'Afternoon',
        type: 'Ceremony',
        title: 'Plenary Session 10: Official Closing Ceremony',
        topic: 'The Future Is Ours to Build',
        venue: 'Main Arena',
      },
    ],
  },
  {
    day: 6,
    date: '2026-10-31',
    weekday: 'Saturday',
    blocks: [
      {
        kind: 'session',
        time: '5:00 PM – 7:00 PM',
        type: 'Special',
        title: 'Afrotellers Storytelling Stage',
        notes: 'A curated spoken word, oral storytelling and short performance showcase from across the eleven hubs.',
      },
      {kind: 'session', time: '7:00 PM till late', type: 'Special', title: 'Pwani Got Talent'},
      {kind: 'session', time: 'TBC', type: 'Special', title: 'Hackathon', partners: ['UK Tech Hub']},
    ],
  },
];
