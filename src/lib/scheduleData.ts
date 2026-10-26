// Pwani Innovation Week 2026 program (Oct 26–31, 2026).
// Source: "PIW Program 2026 V4" official programme document.
// Sessions marked "TBC" in the source document are kept as TBC here — do not invent venues/names.

export interface ProgramSession {
  time: string;
  title: string;
  venue?: string;
  details: string[];
  /** Longer scene-setting blurb, rendered as plain prose rather than a name/role detail line. */
  description?: string;
  /** External ticket purchase link — renders a "Get Tickets" CTA on the session card/modal. */
  ticketUrl?: string;
  /** Short price teaser shown next to the ticket CTA, e.g. "From KES 1,000". */
  ticketPriceFrom?: string;
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
      {time: '8:30 AM – 9:30 AM', title: 'Arrival, Registration & Setting Up', details: []},
      {
        time: '9:30 AM – 10:20 AM',
        title: 'Plenary 1: This Is Pwani — 10 Years Through Art',
        venue: 'Main Arena',
        details: [
          'Moderator: Tony Omuga',
          'Bahati Ngazi',
          'Performances: DJ Dii (with Takers Dance Group)',
          'Artists: Vee Koros, Mox Ke, Simiyu Ke, Cardiac, Boywaleh',
        ],
      },
      {
        time: '10:20 AM – 10:30 AM',
        title: 'Welcome Remarks',
        venue: 'Main Arena',
        details: [
          'James Ndungu, Head of Programs, Swahilipot Hub Foundation',
          'H.E. Ambassador Philip Thigo, MBS, Board Member, Swahilipot Hub Foundation',
        ],
      },
      {
        time: '10:30 AM – 11:45 AM',
        title: 'Plenary 2: The Coast We Inherited to the Coast We Are Building — 10 Years of Agency, Safe Spaces, Livelihoods',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Alice Gugelev, CEO, GDI Africa - Pwani Vision 2050',
          'Moderator: Ms. Balqees Yasin, Development Practitioner',
          'Partners: Dr. Madiha Salim, Dean, School of Humanities and Social Science, Technical University of Mombasa',
          'Margaret Phombea, Clinical Officer, Kilifi County',
          'Sh. Alawy Abzein, Swahili Culture Advisor',
        ],
      },
      {
        time: '10:30 AM – 1:00 PM',
        title: 'Launch Event 1: Launch of the Swahili Library',
        venue: 'Swahili Culture',
        details: [
          'Moderator: TBC',
          'Partners: H.E. Sultan Hajiyev, Ambassador Extraordinary and Plenipotentiary of Azerbaijan to Kenya',
          'National Museums of Kenya',
        ],
      },
      {
        time: '11:45 AM – 1:00 PM',
        title: 'Fireside Chat 1: The Coast We Have — Unlocking Our Resources, Creating Our Future',
        venue: 'Main Arena',
        details: [
          'Moderator: M\u2019mbetsa Ngome, Assistant Program Manager, Swahilipot Hub Foundation',
          'Panelists: Dr. Mwanasiti Mohamed Bendera, Ag. Managing Director, CDA',
          'Mr. Jamal Abdallah Kidyogo, Founder, Smart Move Community',
        ],
      },
      {time: '1:00 PM – 1:45 PM', title: 'Lunch Break', details: []},
      {
        time: '1:45 PM – 3:30 PM',
        title: 'Plenary 3: From Agency to Livelihoods — Empowering Young People to Shape Their Economic Futures',
        venue: 'Main Arena',
        details: [
          'Moderator: Zipporah Njoki, Community Mentor, Swahilipot Hub Foundation',
          'Keynote: Mr. Atrash Ali, Senior Advisor, Conrad N. Hilton Foundation',
          'Mr. Alvin Kayonga, Africa Regional Lead, Global Opportunity Youth Network',
          'Prof. Jostinah Wawasi Mwang\u2019ombe, SSP, OGW, PhD.con',
          'Partners: Kennedy Omondi, ED, Mizizi Youth Organization',
          'Salome Mshai, Mentee, Likoni',
          'Mariam Abdalla Ali, Mentee, Changamwe',
          'Solomon Kyembeni, Mentee, Kilifi',
          'Screening: Swahilipot Hub 10-year impact documentary',
          'Entertainment Interlude: Ohm\u2019s Law Montana',
        ],
      },
      {
        time: '3:30 PM – 5:00 PM',
        title: 'Plenary 4: The 10-Year Journey — How the Swahilipot Transformation Was Built From the Ground Up',
        venue: 'Main Arena',
        details: [
          'Keynote: Dr. Sam Ikwaye, Chairperson, Mombasa Tourism Council',
          'Moderator: Ohms Law Montana',
          'Partners: Rajab Salim, Community & Operations Associate, Baraza Media Lab',
          'Joab Kose, Head of Technology, Swahilipot',
          'Arafa Mohammed, Assistant Project Associate, Kilifi',
          'Closing Keynote Address: Mahmoud Noor, Chief Mentor, Swahilipot Hub Foundation',
          '10th Anniversary Cake Cutting',
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
          'National Anthem: DJ Lenium',
          'Entertainment Interlude: Otote Band',
          'Welcome Remarks: Mr. Mahmoud Noor, Chief Mentor, Swahilipot Hub Foundation',
          'Ms. Kalkidan Mulugeta, Board Chairperson, Swahilipot Hub Foundation',
          'Dr. Kevit Desai, Chairperson, Pwani Innovation Week',
          'Keynote Addresses: Rev. Canon Chris Kinyanjui, General Secretary, National Council of Churches of Kenya',
          'H.E. Sultan Hajiyev, Ambassador Extraordinary and Plenipotentiary of Azerbaijan to Kenya',
          'H.E. Wadid Benaabou, Ambassador of France to Kenya',
          'H.E. Henk Jan Bakker, Ambassador of the Kingdom of the Netherlands to Kenya',
          'Mr. Sebastian Groth, Ambassador of the Federal Republic of Germany to Kenya, the Seychelles and Somalia, and Permanent Representative to the United Nations Environment Programme (UNEP) and United Nations Human Settlements Programme (UN-HABITAT)',
          'Kamal Abdulsatar Haji, Lord Mayor, Zanzibar City Council',
          'Ms. Hannah Tsadik, Country Representative, Mastercard Foundation',
          'Prof. Shaukat Abdulrazak, PhD, EBS, Principal Secretary, State Department for Science, Research and Innovation',
          'Gerald Mithamo Head of the Youth Affairs Advisory Unit, Office of the Deputy President, Republic of Kenya',
          'H.E. Abdulswamad Shariff Nassir, Governor, County Government of Mombasa',
        ],
      },
      {
        time: '11:30 AM – 12:00 PM',
        title: 'Launch Event: Swahilipot Hub Foundation Impact Report & MOU Signing',
        venue: 'Main Arena',
        details: [
          'Swahilipot Hub Foundation Impact Report & Policy Paper',
          'Moderator (Impact Report): Ken Miheso, Chief Operations Officer, Swahilipot Hub Foundation',
          'Moderator (MOU Signing): Rukiya Janwaala, Head of Communication and Partnerships',
          'Remarks: Hon. Flora Mbetsa Chibule, Deputy Governor, County Government of Kilifi',
          'Prof. James H.P. Kahindi, PhD, FRSB, Vice Chancellor, Pwani University',
          'County Government of Mombasa',
          'Entertainment Interlude: Brothers of Destruction',
        ],
      },
      {
        time: '12:00 PM – 1:00 PM',
        title: 'Fireside Chat 2',
        venue: 'Main Arena',
        details: [
          'Keynote Speaker: Esnas Tsindoli, Chairperson, Youth Advisory Group, Mombasa County',
          'Partners: Mahmoud Noor, Chief Mentor, Swahilipot Hub Foundation',
          'Kalkidan Mulugeta, Chairperson, Swahilipot Hub Foundation Board',
        ],
      },
      {time: '1:00 PM – 2:00 PM', title: 'Lunch Break', details: []},
      {
        time: '2:00 PM – 4:30 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 1: What Does a Better Coast Look Like? More Jobs, Stronger Businesses, and Livable Communities',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Alice Gugelev, CEO, GDI Africa - Pwani Vision 2050 is a long-term development vision to transform Mombasa into a competitive, inclusive, sustainable, and globally connected coastal city by 2050. It provides a shared framework to guide investment and development across tourism, trade, logistics, infrastructure, industry, housing, the blue economy, the environment, and human capital.',
          'Moderator: John Kashagaki, Executive Director, EDIC-Pwani',
          'Partners: Jenny Nuccio, Founder, Imani Collective',
          'Peter Gitata, Peshwood Enterprise',
          'Firdaus Anwar, Seraphic Events',
          'Kevin Nyamweya, Economic Development Investment Council',
        ],
      },
      {
        time: '2:00 PM – 4:30 PM',
        title: 'Digital Transformation Village — Workshop 2: Green Is the New Gold',
        venue: 'Arena B',
        details: [
          'Moderator: Arafat Mukasa, Head of Business Development and Partnerships, Midella',
          'Keynote Address: Ms. Emily Achieng, CECM, Department of Water, Environment, Energy and Natural Resources, County Government of Mombasa',
          'Partners: Shamayel Karani, Co-founder and COO, Ecoprint',
          'Olivier Vanden Eynde, Founder and CEO, Close the Gap',
          'George Awalla, Business Pursuit Lead, VSO International',
        ],
      },
      {
        time: '2:00 PM – 4:30 PM',
        title: 'Sustainable Economies Village — Workshop 3: Wellness to Wealth',
        venue: 'Amphitheatre',
        details: [
          'Moderator: Wangechi Wahome, CEO, Anza Village',
          'Partners: James Kamau, Group Head of Distribution, AAR Insurance',
          'Khadija Hamid Salim, Co-Founder, Africo Limited and Essential Life Organic Kitchen Wellness Company',
        ],
      },
      {
        time: '2:00 PM – 4:30 PM',
        title: 'Sustainable Economies Village — Workshop 4: Food Systems Policy Dialogue',
        venue: 'Ali Mazrui Hall',
        details: [
          'Keynote Address: Sabrina M. Jefwa, CECM Blue Economy, Lamu',
          'Ibrahim Khamisi, CECM for Blue Economy, Cooperatives, Agriculture and Livestock, County Government of Mombasa',
          'Moderator: Muthoni Nyamai, Co-Founding Director, Budget Talk Global',
          'Partners: Hon. Patrick Mbelle Mwavula, MCA, Bamburi Ward, Mombasa',
          'Abud Jamal Said, Chairman, KNCCI, Mombasa Chapter',
          'Cynthia Mabel, Marine Biologist and Emerging Coastal Sustainability Practitioner',
          'Joyce Keingati, Marine and Fisheries Development Professional',
          'Phyllis Muema, Executive Director, Kenya Community Support Centre',
          'Jaffar Masoud, Founder and Board Member, Faza Youth Action Group',
        ],
      },
      {time: '4:00 PM – 4:30 PM', venue: 'Main Arena', title: 'Launch Event: The Mombasa HR Taskforce',  details: []},
      {time: '7:00 PM – 9:00 PM', title: 'Gala Dinner', details: ['Entertainment: Pinto the Band']},
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
        title: 'Fireside Chat 3: Kenya\u2019s Position in AI for the Next 5 Years',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Mr. Jessy K. Maruti, CEO, ICT Authority',
          'HE Peter Maddens, Board Member, Swahilipot Hub Foundation',
          'Moderator: Sir. Michael Onyango',
          'Panelist: Prof. Bitange Ndemo, Global Technocrat',
          'Entertainment Interlude: Angachi',
        ],
      },
      {
        time: '10:15 AM – 1:00 PM',
        title: 'Sustainable Economies Village — Workshop 4: Kazi ya Kesho — Future of Work for the Coast',
        venue: 'Mekatilili Hall',
        details: [
          'Keynote Address: Atrash Ali, Senior Advisor, Conrad N. Hilton Foundation',
          'Moderator: Rukiya Jaanwalla, Head of Communication and Partnerships, Swahilipot Hub Foundation',
          'Panelists: Brenda Nambatya, Regional Platform Inclusion Lead, Jobtech Alliance',
          'Chris Maclay, Programmes Director, Jobtech Alliance',
          'Nick Markham, Investment and Venture Support Lead, Jobtech Alliance',
        ],
      },
      {
        time: '10:15 AM – 1:00 PM',
        title: 'Digital Transformation Village — Workshop 5: Business Modelling',
        venue: 'Arena B',
        description:
          'Equips participants with practical knowledge and skills to develop and refine business models for their innovations and entrepreneurial ventures.',
        details: [
          'Keynote Address: Ken Mwenda Gikunda, Co-Founder & Managing Director, EMobilis Technologies Training Institute',
          'Moderator: Belinda Nasimiyu',
          'Partners: ICT Authority',
          'Ajira',
        ],
      },
      {
        time: '10:15 AM – 1:00 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 6: Unlocking Opportunities for Young Women Beyond the Tarmac — The V2T Experience',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Ibtisam Balala, Human Resource Manager, Freight Forwarders Kenya Ltd',
          'Moderator: Irene Walker, Assistant Project Associate, Swahilipot Hub Foundation',
          'Partners: Yvonne Aoko, Entrepreneur',
          'Hidaya Dena, Youth Advisory Group Member',
          'Elizabeth Simeo, Founder',
          'Closing Remarks: Antony Karanja, Lead Workforce Development',
        ],
      },
      {time: '1:00 PM – 2:00 PM', title: 'Lunch Break', details: []},
      {
        time: '2:00 PM – 3:15 PM',
        title: 'Fireside Chat 3: Capital Reset — When Money Meets Opportunity and Understanding How Investors Think',
        venue: 'Main Arena',
        details: [
          'Innovation Showcase: Mombasa Alive — Hudson Savala, Community Mentor and CEO, Big Foot Arts',
          'Moderator: Sir Michael Onyango',
          'Panelist: Hon. Suleiman Shahbal, Founder and Chairman, GulfCap Group of Companies',
        ],
      },
      {
        time: '3:30 PM – 5:00 PM',
        title: 'Sustainable Economies Village — Workshop 7: Anchoring the Blue Economy — Maritime Education, Youth Innovation, and Kenya\u2019s Untapped Opportunity',
        venue: 'Amphitheatre',
        details: [
          'Entertainment Interlude: Njuguna',
          'Keynote Address: Kenneth Njihia, Startup Coach',
          'Moderator: Irene Mlanga, Pathway Lead, Swahilipot Hub Foundation',
          'Innovation Showcases: Francis Thoya, Samaki Cookie',
          'George Kunga, Biochemist, Fish Value Addition for Industrial Use',
          'Partners: Miss Nicole Sulu, Bandari Maritime Academy',
          'James Waruiru, Environmental Programs Head, Majestic Hub',
        ],
      },
      {
        time: '3:30 PM – 5:00 PM',
        title: 'Digital Transformation Village — Workshop 8: AI and The Brain — Using Machines for Mental Health',
        venue: 'Arena B',
        details: [
          'Keynote Address: Queenie Meria, UN Women',
          'Moderator: Diana Akinyi Odawa',
          'Partners: Shazmeen Kassam, Trauma Informed Psychosocial Counselor, Swahilipot Hub Foundation',
          'Mukami Munyoki, Head of Programs, Mental 360',
          'Peris Mwaniki, Psychotherapist, Mental 360',
        ],
      },
      {
        time: '3:30 PM – 5:00 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 9: Show Me How — Telling Your Story in the Age of AI',
        venue: 'Main Arena',
        details: [
          'Entertainment Interlude: Pish Karry',
          'Moderator: Nancy Moraa, Communication Lead, Swahilipot Hub Foundation',
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
          'Partners: Afrotellers, Swahilipot Hub Foundation',
        ],
      },
      {
        time: '9:00 AM – 10:15 AM',
        title: 'Fireside Chat 4: Gen Z Connect',
        venue: 'Main Arena',
        details: ['Moderator: Stephanie Maseki', 'Panelist: Muna Al-Hussein, Executive Director and Head of Operations and Property Management, Megna Homes'],
      },
      {
        time: '10:15 AM – 11:30 AM',
        title: 'Digital Transformation Village — Workshop 10: Future of Work in the Era of AI — Innovation Showcase',
        venue: 'Main Arena',
        details: [
          'Innovation Showcase: Hebron Mwagodi, Peter Lagat, Najla Yusuf',
          'Moderator: Shamsa Abdi, Radio Presenter, Swahilipot FM',
          'Panelists: Paul Akwabi, CEO, Tech Kids Africa',
          'Jasin Owili, CEO, Afribot Robotics',
          'Brian Keya, Digital Youth Engagement and Platform Manager, UNICEF Kenya',
          'Alice Kimani, Director of Programs, Agian Solutions Ltd',
        ],
      },
      {
        time: '10:15 AM – 11:30 AM',
        title: 'Sustainable Economies Village — Workshop 11: The Ecosystem Exchange — From Connection to Collaboration',
        venue: 'Amphitheatre',
        details: ['Moderator: Bushra Razack, Co-Founder, The Trust Africa Foundation', 'Partners: Sweat Africa', 'Swahilipot Hub Foundation'],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Digital Transformation Village — Workshop 12: Beyond the Hype — AI, Blockchain & DeFi and Africa\u2019s Digital Future',
        venue: 'Arena B',
        details: [
          'Moderator: Joab Kose, Founder, Brickwall Consultancy',
          'Partners: Kagisano Bray, Managing Director, Kagisano Logistics',
          'Leonard Kambona, AU Representative in AI',
          'Enos Weswa, Country Director, UK-Kenya Tech Hub',
          'Dycoh Gacheri, Multimodal AI Data Annotation Specialist',
        ],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Digital Transformation Village — Workshop 13: From Idea to Enterprises — Building Businesses That Can Grow, Scale and Last',
        venue: 'Amphitheatre',
        details: [
          'Moderator: Daisy Chesang, Senior Associate, Global Development Incubator',
          'Partners: Furaha L. Hesketh, Community Programs Officer, Maono Space, Open Institute',
          'Monica Ogetange, Founder, Cenere Growth Hub',
          'Linda Ng\u2019ondu, Chief Product Officer, Ziya',
        ],
      },
      {
        time: '11:35 AM – 1:00 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 14: Make It Official — Is Your Business Ready to Do Business?',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Mohammed Osman, CECM Tourism, Trade and Culture, County Government of Mombasa',
          'Moderator: Charles Kamau, Strategic Partnerships, County Government of Kilifi',
          'Partners: Ken Tuju, Regional Manager, Somo Africa',
          'Zayyad Said, CEO, Hazina Group',
          'Allan Mwangi, Head of Community & Ecosystem, CcHUB',
          'Wanjiku Wambugu, CEO, Nyali Capital',
        ],
      },
      {time: '1:00 PM – 2:00 PM', title: 'Lunch Break', details: []},
      {
        time: '2:00 PM – 4:00 PM',
        title: 'Sustainable Economies Village — Plenary Session 8: The Deals Den',
        venue: 'Main Arena',
        details: [
          'Keynote: Sharon Owino, Entrepreneurship Lead, Swahilipot Hub Foundation',
          'Moderator: Shamsa Abdi & Ali Manzu',
          'Partners: Edwin Mwangi, Founder, Live Mombasa',
          'Emmanuel Mae, Investor',
          'Monica Ogetange, Founder, Cenere Growth Hub',
        ],
      },
      {
        time: '2:00 PM – 4:00 PM',
        title: 'Sustainable Economies Village — Workshop 15: Creative Economy — Your Talent Is the Product, But Where Is Business?',
        venue: 'Amphitheatre',
        details: [
          'Moderator: Rajab Salim, Community & Operations Associate, Baraza Media Lab',
          'Partners: Baraza Media Lab',
          'Iyani',
          'Wanjiku Wambugu, CEO, Nyali Capital',
          'Zayyad Said, CEO, Hazina Group',
          'Ken Tuju, Regional Manager, Somo Africa',
          'Winnie Maua, Upendo Collections',
          'Dr. Bernadette Mutinda, Country Representative, E4Impact Foundation',
        ],
      },
      {time: '4:00 PM – 5:00 PM', title: 'Hackathon Awards', venue: 'Main Arena', details: []},
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
        title: 'Plenary Session 9: Decisions That Shape Us — The Weight of County and National Decisions in Shaping Innovation and Opportunity for Young People',
        venue: 'Main Arena',
        details: [
          'Keynote Speaker: Dorcas Mutemi, Community Mentor, Kilifi Community',
          'Moderator: Esha Mohammed, Program Manager, Swahilipot Hub Foundation',
          'Panelists: Hon. Fikirini Jacobs Katoi Kahindi, Principal Secretary, State Department for Youth Affairs and Creative Economy',
          'Ms. Sabrina M. Jefwa, CECM, Blue Economy, Lamu',
        ],
      },
      {
        time: '10:10 AM – 11:15 AM',
        title: 'Plenary Session 10: Investing in Coastal Futures — Sustainable, Inclusive and Resilient Cities',
        venue: 'Main Arena',
        details: [
          'Keynote Address: Hon. Seth Mwatela, Speaker, Kwale County Assembly',
          'Moderator: Hon. Nasra Nanda, Chair, Africa World GBC',
          'Partners: Mr. Mzee Mwinyi Mzee, Coast Development Authority',
          'Charles G. Mwangi, Clerk of Works, Megna Homes',
          'Fidelis Sakwa, Chief Engineer, Innovation and Technical Services, Bamburi Cement PLC',
        ],
      },
      {
        time: '11:25 AM – 12:30 PM',
        title: 'Sustainable Economies Village — Workshop 16: Financing the Future of Pwani — Exploring New Models for Sustaining and Scaling Development Work Across the Coast',
        venue: 'Amphitheatre',
        details: [
          'Keynote Address: Dr. Hassan Mshinda, Foundation Botnar Country Representative, Tanzania',
          'Moderator: Otumbo Vincent, Co-founder & Principal Consultant, SAV Skills',
          'Partners: Rob Omondi, Imaginable Futures',
          'Jane Githui, County Government of Mombasa, Budget & Planning',
          'Mary Mwachiti, Nawiri CBO, Kwale',
          'James Kimani Gachiri, Acting CEO, ASSEK',
        ],
      },
      {
        time: '11:25 AM – 12:30 PM',
        title: 'Digital Transformation Village — Workshop 17: The Innovator\u2019s Toolkit — A Practical, Human-Centered Design Session on Moving From Ideation to Prototyping for Young Innovators',
        venue: 'Arena B',
        details: [
          'Moderator: Judy Barasa, Assistant Project Associate, Swahilipot Hub Foundation',
          'Keynote Address: Mohammed Gharib, Co-founder, Herbalat',
          'Partners: Derrick Mugasi, Coordinator, IOMe254 Kenya Red Cross Society',
          'Lavenda Odeny, Founder, MashLav Foods Company Ltd',
          'Damaris Mukuhi, Founder, Kilifish',
          'Zayyad Said, Executive Director, Hazina Group',
        ],
      },
      {
        time: '11:25 AM – 12:30 PM',
        title: 'Youth and Entrepreneurship Village — Workshop 18: Reimagining Meaningful Youth Participation and Leadership in Public Decision-Making',
        venue: 'Main Arena',
        details: [
          'Moderator: Salim Ali, Path Youth Organization',
          'Keynote Address: Yusuf Lule Mwatsefu, Executive Director, Human Rights Agenda',
          'Partners: Athman Hassan Mbangwe, Policy Champion',
          'Brian Kithinji, Policy Action Initiative',
          'Edwin Kiritu, YAG Kilifi',
          'Dr. Hafidha Abdallah, Youth Leader',
        ],
      },
      {time: '12:30 PM – 1:00 PM', title: 'Friday Prayers', details: []},
      {time: '1:00 PM – 2:00 PM', title: 'Lunch Break', details: []},
      {
        time: '2:00 PM – 3:30 PM',
        title: 'Plenary Session 11: Creativity as Currency — Unlocking the Potential of the Orange Economy for Youth Innovation and Sustainable Livelihoods',
        venue: 'Main Arena',
        details: ['Moderator: Stephanie Maseki', 'Partners: Jay Melody, Iyanii, Wiwi, Pelzy'],
      },
      {
        time: '3:30 PM – 4:30 PM',
        title: 'Plenary Session 12: Official Closing Ceremony — The Future Is Ours to Build',
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
        venue: 'CoastGymkhana',
        details: ['Partners: Afrotellers, Swahilipot FM', 'Payment: M-Pesa, Airtel Money, Visa or Mastercard — QR ticket delivered by SMS and email'],
        description:
          'The six-day convention closes with a public concert at the Coast Gym Khana, drawing crowds far beyond the delegate list. It is deliberately the most visible single moment of the year — the image that anchors the press coverage and reminds every attendee why this work matters.',
        ticketUrl: 'https://soldoutafrica.com/pwani-gat-talent',
        ticketPriceFrom: 'From KES 1,000',
      },
    ],
  },
];

export const WEEK_LONG_EXPERIENCES: WeekLongExperience[] = [
  {
    title: 'Utamaduni Village',
    description: [
      'Culture comes alive when we experience it, not just hear about it. At Utamaduni Village, visitors can step into the cultural world of the Kenyan coast and discover the indigenous knowledge, creative practices, and traditions that have shaped what it means to be Pwani.',
      'Get hands-on with pottery, a craft with a history spanning more than 500 years in the Jomvu Kuu community. Discover henna art, try on Swahili attire, and celebrate the artistry of everyday coastal life. A gaming corner will bring physical and mobile games into the experience.',
      'The cultural experience extends into the historic streets of Old Town Mombasa through the Creative Trail, curated by Imani Collective. Explore Swahili cuisine and tea-making, natural botanicals, traditional weaving, Swahili wood carving, and mural art while meeting the people and stories behind these creative practices.',
      'Come curious. Take part. Meet the makers. Experience Pwani through the hands, knowledge, and imagination of its people. In the evening, enjoy a Swahili food bazaar along Makadara Road.',
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
  {
    dates: 'Oct 26–30, 2026',
    title: 'Masterclass: The Innovator\u2019s Toolkit',
    description: 'A practical, human-centered design session on moving from ideation to prototyping for young innovators.',
  },
  {dates: 'Oct 26–30, 2026', title: 'Mosaic Painting'},
];

