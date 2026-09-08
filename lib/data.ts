export const NAV = [
  { href: "/about", label: "About" },
  { href: "/programme", label: "Programme" },
  { href: "/speakers", label: "Speakers" },
  { href: "/themes", label: "Themes" },
  { href: "/exhibitors", label: "Exhibitors" },
  { href: "/partners", label: "Partners" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const EVENT_START = "2026-10-26T08:00:00+03:00";

export const THEMES = [
  { num: "01", title: "Emerging Tech & Innovation", color: "#2CB0EC", blurb: "AI, data and digital tools for coastal resilience, resource management and disaster preparedness.", long: "Inspiring the exploration and adoption of cutting-edge technologies — AI, IoT, geospatial data — for coastal resilience, resource management and disaster preparedness across the six counties." },
  { num: "02", title: "Blue & Green Economy", color: "#0B6FA1", blurb: "Commercialising ocean, fisheries, agri and clean-energy value chains led by young founders.", long: "Turning the Coast’s ocean, fisheries, agriculture and renewable-energy assets into scalable, youth-led enterprises — the central pillar of the 2026 agenda." },
  { num: "03", title: "Climate Action", color: "#16A34A", blurb: "Innovative, adaptive strategies for communities on the front line of climate change.", long: "Leveraging innovative approaches and adaptive strategies for mitigating the impacts of climate change on coastal communities, from mangroves to municipal planning." },
  { num: "04", title: "Creative Economy", color: "#F97316", blurb: "Music, film, design and heritage as engines of jobs and identity for the region.", long: "Music, film, fashion, gaming and Swahili heritage as commercial sectors — the creative economy that Swahilipot Hub has championed for a decade." },
  { num: "05", title: "Peace, Inclusivity & Equity", color: "#A855F7", blurb: "Social cohesion and collaboration among diverse coastal stakeholders.", long: "Building strategies for resilience that foster social cohesion and collaboration among diverse stakeholders, contributing to peace and inclusivity in coastal areas." },
  { num: "06", title: "Participatory Governance", color: "#EAB308", blurb: "Citizen science, community monitoring and co-management of shared resources.", long: "Initiatives that promote citizen science, community-based monitoring and co-management approaches, so that policy for the Coast is made with the Coast." },
];

export type Session = { time: string; kind: string; title: string; desc: string };
export type Day = { num: number; date: string; title: string; tag: string; intro: string; sessions: Session[] };

export const DAYS: Day[] = [
  { num: 1, date: "Mon 26 Oct", title: "Opening & Emerging Tech", tag: "Keynotes · Exhibition opens", intro: "Official opening with county and national government, followed by the Emerging Tech track.", sessions: [
    { time: "08:30", kind: "Registration", title: "Doors & accreditation", desc: "Badge collection, exhibition floor opens to delegates." },
    { time: "10:00", kind: "Plenary", title: "Official opening of PIW 2026", desc: "Welcome from Swahilipot Hub Foundation, County Government of Mombasa and the Ministry of ICT." },
    { time: "11:30", kind: "Keynote", title: "Coastal Futures: what the next decade demands", desc: "Framing keynote on youth agency, technology and sustainable growth on the Coast." },
    { time: "14:00", kind: "Panel", title: "AI and data for coastal resilience", desc: "Practitioners on early-warning systems, fisheries data and municipal digital services." },
    { time: "16:00", kind: "Hackathon", title: "Blue Tech Hackathon kicks off", desc: "48-hour build; teams pitch on Day 3." },
  ]},
  { num: 2, date: "Tue 27 Oct", title: "Blue & Green Economy", tag: "Investor day", intro: "Ocean, agri and clean-energy value chains — and the capital to grow them.", sessions: [
    { time: "09:00", kind: "Keynote", title: "Commercialising the blue economy", desc: "From artisanal fisheries to export-ready enterprises." },
    { time: "10:30", kind: "Panel", title: "Financing youth-led green ventures", desc: "Banks, DFIs and angel networks on what gets funded on the Coast." },
    { time: "13:30", kind: "Workshop", title: "Grant readiness clinic", desc: "Hands-on session for founders preparing applications." },
    { time: "15:30", kind: "Showcase", title: "Green startups exhibition walk", desc: "Guided tour of climate and agri exhibitors." },
  ]},
  { num: 3, date: "Wed 28 Oct", title: "Climate Action & Deals Den", tag: "Pitch stage", intro: "Adaptation strategies in the morning; the Deals Den startup competition in the afternoon.", sessions: [
    { time: "09:00", kind: "Panel", title: "Mangroves, mapping and municipalities", desc: "Nature-based solutions meeting urban planning." },
    { time: "11:00", kind: "Workshop", title: "Climate finance for counties", desc: "Accessing adaptation funds at county level." },
    { time: "14:00", kind: "Pitch", title: "Deals Den — startup competition", desc: "12 shortlisted startups pitch to a live investor panel." },
    { time: "17:00", kind: "Hackathon", title: "Blue Tech Hackathon finals", desc: "Teams present 48-hour builds." },
  ]},
  { num: 4, date: "Thu 29 Oct", title: "Creative Economy", tag: "Showcase night", intro: "The Coast’s music, film, design and heritage economy — and a decade of Swahilipot creatives.", sessions: [
    { time: "09:30", kind: "Keynote", title: "The creative economy as infrastructure", desc: "Why culture is an export sector for the Coast." },
    { time: "11:00", kind: "Panel", title: "Film, gaming and the Swahili story", desc: "Producers and studios on building for global audiences from Mombasa." },
    { time: "14:00", kind: "Workshop", title: "Monetising creative work online", desc: "Rights, platforms and payments for artists." },
    { time: "18:30", kind: "Showcase", title: "10 Years of Swahilipot — anniversary showcase", desc: "Performances and an exhibition of a decade of alumni work." },
  ]},
  { num: 5, date: "Fri 30 Oct", title: "Governance, Inclusion & Close", tag: "Awards", intro: "Peace, equity and participatory governance, closing with awards and the 2027 handover.", sessions: [
    { time: "09:00", kind: "Panel", title: "Co-managing shared coastal resources", desc: "Citizen science and community monitoring in practice." },
    { time: "11:00", kind: "Roundtable", title: "Inclusion on the Coast: youth, women, PWD", desc: "Closed roundtable with policymakers and community leaders." },
    { time: "14:00", kind: "Plenary", title: "PIW 2026 outcomes & Pwani Innovation Strategy", desc: "Commitments from partners and government." },
    { time: "16:00", kind: "Awards", title: "Closing ceremony & awards", desc: "Deals Den winners, hackathon prizes, partner recognition." },
  ]},
];

export const SPEAKERS = [
  { name: "Keynote speaker", role: "National government · to be announced", kind: "KEYNOTE" },
  { name: "Keynote speaker", role: "Development partner · to be announced", kind: "KEYNOTE" },
  { name: "Speaker name", role: "Founder, blue-economy startup", kind: "PANEL" },
  { name: "Speaker name", role: "County Government of Mombasa", kind: "PANEL" },
  { name: "Speaker name", role: "Investor, East Africa fund", kind: "DEALS DEN" },
  { name: "Speaker name", role: "Climate researcher", kind: "PANEL" },
  { name: "Speaker name", role: "Filmmaker, Mombasa", kind: "CREATIVE" },
  { name: "Speaker name", role: "Swahilipot Hub alumni", kind: "SHOWCASE" },
];

export const NEWS = [
  { date: "18 AUG 2026", tag: "Partnerships", title: "Diplomatic community and development partners briefed on PIW 2026", excerpt: "Ambassadors, private sector leaders and Mombasa County officials convened at Swahilipot Hub to unveil plans for the 7th edition and strengthen international collaboration." },
  { date: "23 JUL 2026", tag: "Launch", title: "7th Pwani Innovation Week officially launched in Mombasa" },
  { date: "01 JUL 2026", tag: "Programme", title: "Blue and green economy named central pillar of the 2026 agenda" },
  { date: "15 JUN 2026", tag: "Open call", title: "Deals Den startup competition: applications now open" },
];

export const STATS = [
  { value: "6", label: "coastal counties represented" },
  { value: "69k+", label: "young people reached by Swahilipot Hub since 2016" },
  { value: "800+", label: "entrepreneurs funded with KSh 30M+ in grants" },
  { value: "7th", label: "edition of Pwani Innovation Week" },
];

export const PASSES = [
  { name: "General pass", desc: "Exhibition, keynotes and open sessions, all five days.", price: "Free" },
  { name: "Delegate pass", desc: "Everything in General plus investor lounge, Deals Den seating and networking evenings.", price: "KSh 5,000" },
  { name: "Student pass", desc: "Delegate access with valid student ID.", price: "KSh 1,000" },
];

export const BOOTHS = [
  { name: "Startup", price: "KSh 15,000", perks: ["2×2m shell scheme", "2 exhibitor passes", "Listing on site & app", "Deals Den eligibility"], tone: "light" },
  { name: "Standard", price: "KSh 60,000", perks: ["3×3m shell scheme", "4 exhibitor passes", "Branding on floor map", "Speaking slot on exhibitor stage"], tone: "dark" },
  { name: "Premium", price: "KSh 150,000", perks: ["6×3m island stand", "8 exhibitor passes", "Logo across venue & digital", "Hosted investor meetings"], tone: "sky" },
] as const;

export const PARTNER_LOGOS = ["county logo", "ministry logo", "telco logo", "bank logo", "agency logo", "DFI logo"];

export const PARTNER_TIERS = [
  { name: "Headline partners", h: "h-[110px]", logos: ["County Government of Mombasa", "Ministry of ICT", "partner logo", "partner logo", "partner logo", "partner logo"] },
  { name: "Track partners", h: "h-[84px]", logos: Array(6).fill("partner logo") },
  { name: "Ecosystem & media partners", h: "h-16", logos: Array(6).fill("partner logo") },
];

export const JOURNEY = [
  { year: "2016", title: "Swahilipot Hub opens", text: "A youth-led tech and arts space in Mombasa Old Town." },
  { year: "2018", title: "First PIW", text: "December 3–7: launch of the Pwani Innovation Strategy." },
  { year: "2021", title: "Hybrid edition", text: "Leveraging pandemic-era shifts to widen participation." },
  { year: "2023", title: "Sailed beyond borders", text: "100+ speakers, 53 exhibitors, 1,200 participants, 3 hackathons." },
  { year: "2026", title: "7th edition · 10 years", text: "Coastal Futures — and the hub’s tenth anniversary." },
];

export const EDITIONS = [
  { year: "2025", edition: "6TH EDITION · 27–31 OCT", theme: "Pwani Re-imagined: Youth Agency, Innovation and Sustainability of Coastal Economies", note: "Mombasa, Kenya." },
  { year: "2024", edition: "5TH EDITION", theme: "Coastal resilience through innovation", note: "Four thematic tracks: emerging tech, climate action, peace & inclusivity, participatory governance." },
  { year: "2023", edition: "4TH EDITION", theme: "Sailed beyond borders", note: "30+ keynotes, 12 plenaries, 100+ speakers, 53 exhibitors, 1,200+ participants and the first Deals Den." },
  { year: "2022", edition: "3RD EDITION", theme: "Meeting future aspirations", note: "Return to a full in-person week in Mombasa." },
  { year: "2021", edition: "2ND EDITION", theme: "Leveraging Covid-19’s opportunities for a better future", note: "Hybrid programme." },
  { year: "2018", edition: "1ST EDITION · 3–7 DEC", theme: "Launching the Pwani Innovation Strategy", note: "The consolidated effort begins across the six coastal counties." },
];
