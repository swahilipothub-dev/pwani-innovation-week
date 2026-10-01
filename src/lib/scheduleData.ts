// Pwani Innovation Week 2026 program (Oct 26–31, 2026), as a narrative day-by-day summary.
// Source: official PIW program summary document (Days 1-5 and Utamaduni Village). Day 6 is not
// covered by that document, so its summary is condensed from the confirmed session list only —
// no unverified figures (e.g. a specific hub count) should be added to it.

export interface ProgramDay {
  day: number;
  date: string;
  weekday: string;
  summary: string[];
}

export interface WeekLongExperience {
  title: string;
  description: string[];
}

export const PIW_PROGRAM: ProgramDay[] = [
  {
    day: 1,
    date: '2026-10-26',
    weekday: 'Monday',
    summary: [
      'The day opens with Fuel Your Fire, an energising sunrise fitness and outdoor session at Mama Ngina, bringing participants together through exercise, sunrise photography and a coordinated outfit activity. The programme then moves to the Main Arena for "This Is Pwani: 10 Years Through Art," a live showcase of coastal poetry, music, theatre, taarab and Mijikenda cultural dance, celebrating the region\u2019s talent, heritage and creative expression. The morning culminates in an intergenerational conversation exploring the Coast inherited, and the Coast communities aspire to build, with a focus on jobs, enterprise, tourism, mentorship and bridging generational gaps.',
      'After lunch, Day One turns inward to celebrate "The Swahilipot Family: 10 Years, Many Generations, One Legacy." The afternoon features keynote reflections on Swahilipot Hub Foundation\u2019s decade of work in culture, mentorship and community development, alongside a conversation on culture, identity, wisdom and what each generation inherits and leaves behind. Storytelling by founding members, alumni and former mentors will bring the Swahilipot journey to life, before the day closes with a Family Concert featuring music, poetry, dance, taarab and DJ performances. Overall, Day One is designed as a celebration of Pwani\u2019s creative identity, Swahilipot\u2019s 10-year journey, intergenerational connection, and the community that has shaped and continues to carry the legacy forward.',
    ],
  },
  {
    day: 2,
    date: '2026-10-27',
    weekday: 'Tuesday',
    summary: [
      'The day brings together young people, innovators, entrepreneurs, partners, and other stakeholders to explore opportunities, partnerships, and solutions shaping the future of the Coast region.',
      'The day features the official opening ceremony, "The Future Starts Here," including the launch of the Swahilipot Hub Foundation Impact Report and its next priorities, followed by a fireside chat involving the Foundation\u2019s Founder and Chief Mentor, with a storytelling session and video presentation from young people who have benefited from our programming. The session highlights the organisation\u2019s growth, achievements and impact through its programmes, partnerships and innovation ecosystem.',
      'In the afternoon, participants will engage in the plenary session, "So, What Does a Better Coast Look Like?", before joining thematic breakout sessions on marine conservation, green economy opportunities, digital transformation, financial literacy and entrepreneurship. The day concludes with networking and exhibitions, creating opportunities for participants, partners, innovators and entrepreneurs to showcase their work, build connections, explore collaborations and identify opportunities for growth and development.',
    ],
  },
  {
    day: 3,
    date: '2026-10-28',
    weekday: 'Wednesday',
    summary: [
      'This day will explore Kenya\u2019s position in artificial intelligence and the future of work, highlighting how emerging technologies can drive inclusion, entrepreneurship and sustainable economic growth. Through fireside chats, innovation showcases and interactive village sessions, participants will engage with topics including AI-powered jobs, remote work, event production, business development and inclusive economic opportunities. The programme will bring together young people, industry leaders and partners to exchange knowledge, showcase practical innovations and prepare youth to thrive in an increasingly digital economy.',
    ],
  },
  {
    day: 4,
    date: '2026-10-29',
    weekday: 'Thursday',
    summary: [
      'What does it really take to turn a hustle, idea, or small business into something that can grow, create value, and open doors?',
      'Day 4 brings together young entrepreneurs, founders, investors, creatives, and ecosystem players for real conversations about what it takes to build businesses that are ready for the next level.',
      'We kick off with a question every founder should ask: "Are You Building a Business or Just Doing a Job?" A candid conversation about moving beyond doing everything yourself and building a business with the people, systems, and mindset to grow.',
      'Then we talk money. "Capital Reset: When Money Meets Opportunity" pulls back the curtain on how investors think, what they look for, and what it really means to be investment-ready. No jargon. Just practical insights for entrepreneurs looking to unlock capital.',
      'From there, we explore the Creative Economy, digital transformation, and business formalisation, showing how skills, creativity, and technology can become real businesses and new opportunities.',
      'And then, it\u2019s time to make the pitch. Two Deals Den sessions will put selected entrepreneurs in front of investors and potential partners, creating a space where ideas meet capital, connections, and opportunity.',
      'Day 4 is about moving from "I have an idea" to "I\u2019m building something." From hustle to growth. From potential to opportunity.',
    ],
  },
  {
    day: 5,
    date: '2026-10-30',
    weekday: 'Friday',
    summary: [
      'Day 5 promises a powerful set of conversations on the future of Pwani, with a focus on youth and governance, innovation, policies shaping the creative sector, sustainable livelihoods, and new approaches to resourcing development. Look out for conversations on how young people can move from participation to meaningful influence in decision-making, how innovation and policy can unlock new possibilities across the various sectors, and how we can sustain, strengthen and build on the development gains being made across the Coast. The day will also take us beyond 2030 as we explore the Pwani we want and the pathways, partnerships and leadership needed to turn that vision into action.',
    ],
  },
  {
    day: 6,
    date: '2026-10-31',
    weekday: 'Saturday',
    summary: [
      'The week closes with an evening of celebration. The Afrotellers Storytelling Stage opens the night with a curated showcase of spoken word, oral storytelling and short performances from across the coast.',
      'Pwani Got Talent then takes the Main Arena stage from 7:00 PM, the grand finale of PIW week with live performances celebrating coastal talent, music and culture, alongside the closing showcase of the week\u2019s Hackathon.',
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

