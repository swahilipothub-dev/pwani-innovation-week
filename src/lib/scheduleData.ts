// Pwani Innovation Week 2026 program (Oct 26–31, 2026).
// Source: "PIW Program 2026 V4" official programme document.
// Sessions marked "TBC" in the source document are kept as TBC here — do not invent venues/names.

export interface ProgramSession {
  time: string;
  title: string;
  venue?: string;
  details: string[];
}

export interface ProgramDay {
  day: number;
  date: string;
  weekday: string;
  sessions: ProgramSession[];
}

export interface WeekLongExperience {
  title: string;
  description: string[];
}

export interface SideEvent {
  dates: string;
  title: string;
  description?: string;
}

export const PIW_PROGRAM: ProgramDay[] = [
  {
    day: 1,
    date: '2026-10-26',
    weekday: 'Monday',
    sessions: [
      {time: '8:30 AM – 10:00 AM', title: 'Arrival, Registration & Setting Up', details: []},
      {
        time: '10:00 AM – 11:30 AM',
        title: 'Plenary 1: This Is Pwani — 10 Years Through Art',
        venue: 'Main Arena',
        details: ['Moderator: Tony Omuga, Bahati Ngazi'],
      },
      {
        time: '10:00 AM – 11:30 AM',
        title: 'Launch Event: Launch of the Swahili Library',
        venue: 'Fort Jesus / Swahili Culture',
        details: [
          'Partners: H.E. Sultan Hajiyev, Ambassador Extraordinary and Plenipotentiary of Azerbaijan to Kenya',
          'National Museums of Kenya',
        ],
      },
      {
        time: '10:30 AM – 11:30 AM',
        title: 'Fireside Chat',
        details: [
          'Moderator: M\u2019mbetsa Ngome',
          'Panelists: Dr. Mwanasiti Bendera, Ag. Managing Director, CDA',
          'Mr. Jamal Abdallah Kidiogo, Founder, Smart Move Community',
        ],
      },
      {
        time: '11:30 AM – 1:00 PM',
        title: 'Plenary 2: The Coast We Inherited to the Coast We Are Building — 10 Years of Agency, Safe Spaces, Livelihoods',
        venue: 'Main Arena',
        details: [
          'Moderator: Ms. Balqees Yasin',
          'Keynote Address: Dr. Sam Ikwaye',
          'Partners: Dr. Madiha Salim, Margaret Phombea, Sh. Alawy Abzein',
        ],
      },
      {time: '1:00 PM – 1:45 PM', title: 'Lunch Break', details: []},
      {
        time: '1:45 PM – 3:30 PM',
        title: 'Plenary 3: The 10-Year Journey — How the Swahilipot Transformation Was Built From the Ground Up',
        venue: 'Main Arena',
        details: [
          'Moderator: Ohms Law Montana',
          'Keynote Address: Mr. Atrash Ali, Senior Advisor, Conrad N. Hilton Foundation',
          'Prof. Jostinah Wawasi Mwang\u2019ombe, SSP, OGW, PhD.con',
          'Partners: Rajab Salim, Community & Operations Associate, Baraza Media Lab',
          'Joab Kose, Head of Technology, Swahilipot',
          'Arafa Mohammed, Assistant Project Associate, Kilifi',
        ],
      },
      {
        time: '3:30 PM – 5:00 PM',
        title: 'Plenary 4: From Agency to Livelihoods — Empowering Young People to Shape Their Economic Futures',
        venue: 'Main Arena',
        details: [
          'Moderator: Zipporah Njoki, Community Mentor, Swahilipot Hub Foundation',
          'Keynote: Mahmoud Noor, Chief Mentor, Swahilipot Hub Foundation',
          'Partners: Kennedy Omondi, ED, Mizizi Youth Organization',
          'Salome Mshai, Mentee, Likoni',
          'Mariam Abdalla Ali, Mentee, Changamwe',
          'Solomon Kyembeni, Mentee, Kilifi',
        ],
      },
    ],
  },
  {
    day: 2,
    date: '2026-10-27',
    weekday: 'Tuesday',
    sessions: [
      {time: '8:30 AM – 9:00 AM', title: 'Arrival and Registration', details: []},
      {
        time: '9:00 AM – 11:30 AM',
        title: 'Plenary 5: Official Opening Ceremony',
        venue: 'Main Arena',
        details: [
          'Moderator: Sir Michael Onyango',
          'Welcome Remarks: Mr. Mahmoud Noor, Ms. Kalkidan Mulugeta, Dr. Kevit Desai',
          'Keynote Addresses: Rev. Canon Chris Kinyanjui, General Secretary, National Council of Churches of Kenya',
          'H.E. Sultan Hajiyev, Ambassador Extraordinary and Plenipotentiary of Azerbaijan to Kenya',
          'H.E. Wadid Benaabou, Ambassador of France to Kenya',
          'H.E. Henk Jan Bakker, Ambassador of the Kingdom of the Netherlands to Kenya',
          'Kamal Abdulsatar Haji, Lord Mayor, Zanzibar City Council',
          'Ms. Hannah Tsadik, Country Representative, Mastercard Foundation',
          'H.E. Abdulswamad Shariff Nassir, Governor, County Government of Mombasa',
        ],
      },
      {
        time: '11:30 AM – 12:00 PM',
        title: 'Launch Event: Swahilipot Hub Foundation Impact Report & MOU Signing',
        details: [
          'Moderator (Impact Report): Ken Miheso',
          'Moderator (MOU Signing): Rukiya Janwaala, Head of Communication and Partnerships',
          'Remarks: Hon. Flora Mbetsa Chibule, Deputy Governor, County Government of Kilifi',
          'Prof. James H.P. Kahindi, PhD, FRSB, Vice Chancellor, Pwani University',
          'County Government of Mombasa',
        ],
      },
      {
        time: '12:00 PM – 1:00 PM',
        title: 'Fireside Chat 1',
        details: [
          'Keynote Speaker: Esnas Tsindoli, Chairperson, Youth Advisory Group, Mombasa County',
          'Partners: Mahmoud Noor, Chief Mentor, Swahilipot Hub Foundation',
          'Kalkidan Mulugeta, Chairperson, Swahilipot Hub Foundation Board',
        ],
      },
      {time: '1:00 PM – 2:00 PM', title: 'Lunch Break', details: []},
      {
        time: '2:00 PM – 4:30 PM',
        title: 'Sustainable Economies Village — Workshop 1: Food Systems Policy Dialogue',
        venue: 'Mazrui Hall',
        details: [
          'Keynote Address: Sabrina M. Jefwa, CECM Blue Economy, Lamu',
          'Ibrahim Khamisi, CECM for Blue Economy, Cooperatives, Agriculture and Livestock, County Government of Mombasa',
          'Moderator: Muthoki Nyamai',
          'Partners: CEFRESA, Budget Talk Global',
        ],
      },
      {
        time: '2:00 PM – 4:30 PM',
        title: 'Digital Transformation Village — Workshop 2: Green Is the New Gold',
        details: [
          'Moderator: Arafat Mukasa',
          'Partners: Shamayel Karani, Co-founder and COO, Ecoprint',
          'Olivier Vanden Eynde, Founder and CEO, Close the Gap',
          'George Awalla, Business Pursuit Lead, VSO International',
        ],
      },
      {
        time: '2:00 PM – 4:30 PM',
        title: 'Sustainable Economies Village — Workshop 3',
        details: ['Keynote Address: TBC', 'Moderator: TBC', 'Partners: AAR, ABSA Bank'],
      },
      {
        time: '2:00 PM – 4:30 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 4: What Does a Better Coast Look Like? More Jobs, Stronger Businesses, and Livable Communities',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Alice Gugelev, CEO, GDI Africa',
          'Moderator: John Kashagaki',
          'Partners: Jenny Nuccio, Founder, Imani Collective',
          'Peter Gitata, Peshwood Enterprise',
          'Firdaus Anwar, Seraphic Events',
          'Kevin Nyamweya, Economic Development Investment Council',
        ],
      },
      {time: '7:00 PM – 9:00 PM', title: 'Evening Programme', details: ['Details to be confirmed']},
    ],
  },
  {
    day: 3,
    date: '2026-10-28',
    weekday: 'Wednesday',
    sessions: [
      {time: '8:30 AM – 9:00 AM', title: 'Arrival and Registration', details: []},
      {
        time: '9:00 AM – 10:15 AM',
        title: 'Fireside Chat 2: Kenya\u2019s Position in AI for the Next 5 Years',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Shaheen Nilofer, UNICEF Representative to Kenya',
          'Sebastian Groth, German Ambassador to Kenya',
          'Moderator: Share Internet',
          'Panelist: Prof. Bitange Ndemo',
        ],
      },
      {
        time: '10:15 AM – 1:00 PM',
        title: 'Sustainable Economies Village — Workshop 4: Kazi ya Kesho — Future of Work for the Coast',
        venue: 'Mekatilili Hall',
        details: [
          'Keynote Address: Atrash Ali',
          'Moderator: Rukiya Jaanwalla, Head of Communication and Partnerships, Swahilipot Hub Foundation',
          'Panelists: Brenda Nambatya, Chris Maclay, Nick Markham',
        ],
      },
      {
        time: '10:15 AM – 1:00 PM',
        title: 'Digital Transformation Village — Workshop 5: ICT Authority',
        details: ['Keynote Address: TBC', 'Venue: TBC', 'Moderator: TBC', 'Partners: ICT Authority, Ajira'],
      },
      {
        time: '10:15 AM – 1:00 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 6: Work Readiness Masterclass',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Antony Karanja',
          'Facilitator: Ibtisam Balala',
          'Moderator: TBC',
          'Partners: NCCK, E4Impact, Swahilipot Hub Foundation, Mastercard Foundation',
        ],
      },
      {time: '1:00 PM – 2:00 PM', title: 'Lunch Break', details: []},
      {
        time: '2:00 PM – 3:15 PM',
        title: 'Fireside Chat 3: Capital Reset — When Money Meets Opportunity and Understanding How Investors Think',
        venue: 'Main Arena',
        details: [
          'Moderator: Sir Michael Onyango',
          'Panelist: Hon. Suleiman Shahbal, Founder and Chairman, GulfCap Group of Companies',
        ],
      },
      {
        time: '3:30 PM – 5:00 PM',
        title: 'Sustainable Economies Village — Workshop 7: Anchoring the Blue Economy — Maritime Education, Youth Innovation, and Kenya\u2019s Untapped Opportunity',
        details: [
          'Partners: Miss Nicole Sulu, Bandari Maritime Academy',
          'TechnoServe',
          'James Waruiru, Environmental Programs Head, Majestic Hub',
          'David Ogiga, CEO, Sote Hub',
        ],
      },
      {
        time: '3:30 PM – 5:00 PM',
        title: 'Digital Transformation Village — Workshop 8: AI and The Brain — Using Machines for Mental Health',
        venue: 'TBC',
        details: [
          'Keynote Address: Queenie Meria, UN Women',
          'Moderator: Diana',
          'Partners: Shazmeen Kassam',
          'Eddy Kimani, Creative Entrepreneur, Mental Health and Mindset Advocate',
          'Faith Perish',
          'Aisha Nassir, Campus Ambassador, Swahilipot Hub Foundation at Umma University',
        ],
      },
      {
        time: '3:30 PM – 5:00 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 9: Show Me How — Telling Your Story in the Age of AI',
        venue: 'TBC',
        details: [
          'Moderator: Sophia Wabosha, County Coordinator, Swahilipot Hub Foundation',
          'Partners: Kudzayi Zvinavashe, Program Lead, Nafasi Magamba Network',
          'Bekithemba Ntini, Partnership & Program Director, Afrotellers',
          'Gofaone Modise, Media Entrepreneur, Moderator and Podcaster',
          'Leah Wanjiru, Loc and Experiences Lead, Afrotellers',
        ],
      },
      {time: '5:00 PM – 7:00 PM', title: 'Kanga Festival', venue: 'Old Town', details: []},
    ],
  },
  {
    day: 4,
    date: '2026-10-29',
    weekday: 'Thursday',
    sessions: [
      {time: '8:30 AM – 9:00 AM', title: 'Arrival and Registration', details: []},
      {
        time: '8:30 AM – 1:00 PM',
        title: 'Plenary 7',
        venue: 'Pride Inn Paradise',
        details: [
          'Topic 1: Sovereignty as a Governance Question at National, East African Community, and African Union Levels \u2014 Ms. Linet Akeyo, Program Officer, Maskani Ya Taifa, Inuka Kenya Ni Sisi!',
          'Topic 2: Algorithmic Colonialism',
          'Keynote Address: TBC',
          'Moderator: TBC',
          'Partners: Afrotellers, Swahilipot Hub Foundation',
        ],
      },
      {
        time: '9:00 AM – 10:15 AM',
        title: 'Fireside Chat 4: Founder Reset — Are You Building a Business or Doing a Job?',
        venue: 'Main Arena',
        details: ['Moderator: MC', 'Panelist: Kamal Budhabatti, Founder and Group CEO, Craft Silicon'],
      },
      {
        time: '10:15 AM – 11:30 AM',
        title: 'Digital Transformation Village — Workshop 11: Future of Work Innovation Showcase',
        venue: 'Main Arena',
        details: [
          'Moderator: Shamsa',
          'Panelists: Paul Akwabi, CEO, Tech Kids Africa',
          'Wakanyi Macharia',
          'Jasin Owili, CEO, Afribot Robotics',
        ],
      },
      {
        time: '10:15 AM – 11:30 AM',
        title: 'Sustainable Economies Village — Workshop 10',
        venue: 'Main Arena',
        details: ['Title: TBC', 'Moderator: Shamsa', 'Partners: Sweat Africa'],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Sustainable Economies Village — Workshop 10: Creative Economy — Your Talent Is the Product, But Where Is Business?',
        venue: 'TBC',
        details: ['Moderator: Rajab Salim', 'Partners: HEVA Fund, Baraza Media, Iyani'],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Digital Transformation Village — Workshop 11: Young People Are Already Building — What Does It Take to Make Youth Enterprise Work on the Coast?',
        venue: 'TBC',
        details: [
          'Moderator: Daisy Chesang, Senior Associate, Global Development Incubator',
          'Partners: Furaha L. Hesketh, Community Programs Officer, Maono Space, Open Institute',
          'Monica Ogetange, Founder, Cenere Growth Hub',
          'Linda Ng\u2019ondu, Chief Product Officer, Ziya',
          'Ajira',
        ],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 12: Make It Official — Is Your Business Ready to Do Business?',
        venue: 'TBC',
        details: [
          'Moderator: Charles Kamau, Strategic Partnerships, County Government of Kilifi',
          'Partners: Ken Tuju, Regional Manager, Somo Africa',
          'Zayyad Said, CEO, Hazina Group',
          'Allan Mwangi, Head of Community & Ecosystem, CcHUB',
        ],
      },
      {time: '1:00 PM – 2:00 PM', title: 'Lunch Break', details: []},
      {
        time: '2:00 PM – 4:00 PM',
        title: 'Sustainable Economies Village — Plenary Session 8: The Deals Den',
        venue: 'Main Auditorium',
        details: [
          'Keynote: Sharon Owino',
          'Moderator: MC',
          'Partners: Founders Live Mombasa — Edwin Mwangi',
          'Emmanuel Mae',
          'Monica Ogetange',
          'Wanjiku Wambugu, CEO, Nyali Capital',
          'Zayyad Said',
          'Ken Tuju, Regional Manager, Somo Africa',
        ],
      },
      {
        time: '2:00 PM – 4:00 PM',
        title: 'Youth and Entrepreneurship Village — Plenary Session 9: The Deals Den',
        venue: 'TBC',
        details: ['Keynote: Ken Miheso', 'Moderator: MC', 'Partners: Ken Miheso', 'Winnie Maua, Upendo Collections', 'E4Impact'],
      },
      {
        time: '2:00 PM – 4:00 PM',
        title: 'Digital Transformation Village — Workshop 13: Beyond the Hype — AI, Blockchain & DeFi and Africa\u2019s Digital Future',
        venue: 'TBC',
        details: [
          'Moderator: Joab Kose',
          'Partners: Share Internet',
          'Leonard Kambona, AU Representative in AI',
          'Enos Weswa',
          'Ben Roberts',
          'Ouma Khalayi',
          'Ajira Digital',
        ],
      },
      {time: '4:00 PM – 5:00 PM', title: 'Hackathon Awards', details: []},
    ],
  },
  {
    day: 5,
    date: '2026-10-30',
    weekday: 'Friday',
    sessions: [
      {time: '8:30 AM – 9:00 AM', title: 'Arrival and Registration', details: []},
      {
        time: '9:00 AM – 10:00 AM',
        title: 'Fireside Chat 6: Decisions That Shape Us — The Weight of County and National Decisions in Shaping Innovation and Opportunity for Young People',
        venue: 'Main Arena',
        details: [
          'Keynote Speaker: Dorcas Mutemi',
          'Moderator: Esha Mohammed',
          'Panelists: Hon. Fikirini Jacobs Katoi Kahindi, Principal Secretary, State Department for Youth Affairs and Creative Economy',
          'Ms. Sabrina M. Jefwa, CECM, Blue Economy, Lamu',
        ],
      },
      {
        time: '10:00 AM – 11:15 AM',
        title: 'Plenary Session 10: Investing in Coastal Futures — Sustainable, Inclusive and Resilient Cities',
        venue: 'Main Arena',
        details: [
          'Moderator: Hon. Nasra Nsanda, Chair, Africa World GBC',
          'Partners: Mr. Mzee Mwinyi Mzee, Coast Development Authority',
          'Megan Hommes, Bamburi Cement',
        ],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Sustainable Economies Village — Workshop 14: Financing the Future of Pwani — Exploring New Models for Sustaining and Scaling Development Work Across the Coast',
        venue: 'Amphitheatre',
        details: [
          'Keynote Address: Mastercard Foundation',
          'Moderator: Otumbo Vincent, Co-founder & Principal Consultant, SAV Skills',
          'Partners: Rob Omondi, Imaginable Futures',
          'Jane Githui, County Government of Mombasa, Budget & Planning',
          'Mary Mwachiti, Nawiri CBO, Kwale',
          'James Kimani Gachiri, Acting CEO, ASSEK',
        ],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Digital Transformation Village — Workshop 15: The Innovator\u2019s Toolkit — A Practical, Human-Centered Design Session on Moving From Ideation to Prototyping for Young Innovators',
        venue: 'TBC',
        details: [
          'Moderator: Judy Barasa',
          'Keynote Address: Mohammed Gharib, Cofounder, Herbalat',
          'Partners: Derrick Mugasi, Coordinator, IOM / Kenya Red Cross Society',
          'Lavenda Odeny, Founder, MashLav Foods Company Ltd',
          'Damaris Muhuki, Founder, Kilifish',
          'Zayyad Said, Executive Director, Hazina Group',
        ],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 16: Reimagining Meaningful Youth Participation and Leadership in Public Decision-Making',
        venue: 'Main Arena',
        details: [
          'Moderator: Salim Ali, Path Youth Organization',
          'Keynote Address: Huria',
          'Partners: Athman Hassan Mbangwe, Policy Champion',
          'Brian Kithinji, Policy Action Initiative',
          'Edwin Kiritu, YAG Kilifi',
          'Dr. Hafidha Abdallah, Youth Leader',
        ],
      },
      {time: '1:00 PM – 2:00 PM', title: 'Lunch Break', details: []},
      {
        time: '2:00 PM onward',
        title: 'Plenary Session 11: Creativity as Currency — Unlocking the Potential of the Orange Economy for Youth Innovation and Sustainable Livelihoods',
        venue: 'Main Arena',
        details: ['Moderator: TBC', 'Partners: Jay Melody, We Are Nubian, Iyanii'],
      },
      {
        time: '2:00 PM onward',
        title: 'Plenary Session 12: The Future Is Ours to Build',
        venue: 'Main Arena',
        details: ['Moderator: TBC', 'Partners: TBC'],
      },
    ],
  },
  {
    day: 6,
    date: '2026-10-31',
    weekday: 'Saturday',
    sessions: [
      {
        time: '3:00 PM till late',
        title: 'Pwani Gat Talent',
        venue: 'Gymkhana',
        details: ['Partners: Afrotellers, Swahilipot FM'],
      },
    ],
  },
];

export const WEEK_LONG_EXPERIENCES: WeekLongExperience[] = [
  {
    title: 'Utamaduni Village',
    description: [
      'A space dedicated to showcasing culture(s) from various coastal communities. Throughout the week, visitors will interact with short bits of authentic history and how indigenous knowledge in these communities has evolved or has been preserved across space and time.',
      'The village will include experiential activities like henna art, pottery making, and also an opportunity to learn short words and phrases from coastal communities like the Swahili, Mijikenda, Taita, and Pokomo.',
      'The Village will run in collaboration with Imani Collective, an artisanal space in Old Town that will support part of the experiential activities and, by extension, the Mombasa Food experience, which will happen in Makadara.',
    ],
  },
];

export const SIDE_EVENTS: SideEvent[] = [
  {dates: 'Oct 15–17, 2026', title: 'Hackathon: Ocean Hack'},
  {dates: 'Oct 22, 2026', title: 'Theatre Play: "Ask Me Twice"'},
  {dates: 'Oct 23, 2026', title: 'Sustain Youth Exchange Program'},
  {
    dates: 'Oct 26–29, 2026',
    title: 'Bootcamp: The Innovator\u2019s Toolkit',
    description: 'A practical, human-centered design session on moving from ideation to prototyping for young innovators.',
  },
];

