import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ArrowRight, Calendar, FileText, Lightbulb, MapPin, Quote, Target, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VoicesShowcase, type Voice } from '@/components/VoicesShowcase';

const PIW2023 = () => {
  const features = [
    { icon: Calendar, title: "4th Edition", description: "Five days at Swahilipot Hub, Mombasa, themed 'Sailing Beyond Borders'" },
    { icon: Target, title: "4IR & Coastal Economies", description: "Digital transformation, the blue & green economy, and the creative (orange) economy" },
    { icon: MapPin, title: "Pan-Swahili Reach", description: "Delegations from Zanzibar, Dar-es-Salaam, Tanga and beyond joined the coastal community" },
    { icon: Users, title: "Global & National Backing", description: "Supported by 4 ambassadors, the Governor of Mombasa, Principal Secretaries and Senate committees" },
  ];

  const highlights = [
    { number: "1,800+", label: "Delegates" },
    { number: "100+", label: "Speakers" },
    { number: "53", label: "Exhibitors" },
    { number: "35", label: "Startups" },
    { number: "4", label: "Ambassadors" },
  ];

  const fundingStats = [
    { number: "Ksh. 0.8M", label: "Prize Money for Innovators" },
    { number: "Ksh. 6.4M", label: "Grant for Startups" },
    { number: "110+", label: "Local & International Organisations" },
  ];

  const voices: Voice[] = [
    {
      tag: "Foreward",
      name: "Osman Varwani",
      title: "Chairman, Pwani Innovation Week 2023",
      highlight: "\u201CHere we are \u2014 creating and writing our history as we\u2019d like it.\u201D",
      body:
        "Reflecting on PIW's journey from a Swahilipot Hub brainchild into a platform with its own character and impact, driving a 'pan-Swahili' vision that drew teams from Zanzibar, Dar-es-Salaam and Tanga to the coast.",
      points: [
        "PIW has shown youth that when given the chance to innovate, lead and create solutions, they become better versions of themselves",
        "Dispelled the notion that innovation only happens in Nairobi — Mombasa is writing its own history",
        "Enabled youth to identify community problems and create unique solutions",
        "Fostered an entrepreneurial ecosystem attracting investment and boosting the local economy",
      ],
    },
    {
      tag: "Remarks",
      name: "H.E. Hon. Abdulswamad Shariff Nassir",
      title: "Governor of Mombasa",
      highlight: "\u201CSwahilipot hasn\u2019t just produced many talents, but a governor too!\u201D",
      body:
        "The Governor outlined plans for a smart city with CCTV installations to curb crime, and a Dimart Act requiring fibre cable installation alongside any new road or property development.",
      points: [
        "Launch of the Fursa App with Swahilipot Hub Foundation to link Mombasa's employers and job seekers",
        "Lack of youth employment named as the greatest challenge facing the county",
        "Praised the SwahiliPot Hub Foundation's role in shaping his own path to governorship",
        "County government committed to boosting creativity and innovation for the people of Mombasa",
      ],
    },
    {
      tag: "Remarks",
      name: "Hon. Peter Maddens",
      title: "Belgian Ambassador to Kenya",
      highlight: "\u201CInnovation starts with a vision, a spark of inspiration that can come from anyone, anywhere.\u201D",
      body:
        "Applauded PIW for nurturing creativity, valuing diverse perspectives and treating failure as a stepping stone rather than a setback, while highlighting youth-led climate innovation.",
      points: [
        "Youth are driving renewable energy, eco-friendly transport and smart resource management",
        "Belgium is retrofitting its Nairobi embassy to become Kenya's first carbon-neutral embassy",
        "Urged new technologies to address healthcare access, education and poverty alleviation",
      ],
    },
    {
      tag: "Remarks",
      name: "Hon. Arnaud Suquet",
      title: "French Ambassador to Kenya",
      highlight: "From filmmaking to Fort Jesus digitization \u2014 investing in Mombasa\u2019s young creatives.",
      body:
        "Announced the Creation Africa/Kenya project, supporting Kenya's creative economy through training, mentorship and national tours, alongside the IOME001 social innovation hub with the Kenya Red Cross Society.",
      points: [
        "Filmmaking training through 'Sinema Mtaani' with local partners",
        "A dedicated creative workspace with coaching at the Alliance Française",
        "Digitization project to preserve Fort Jesus' cultural heritage",
        "IOME001 is training 1,500 youth in 3D printing, robotics, ICT, waste management and entrepreneurship",
      ],
    },
    {
      tag: "Remarks",
      name: "Dr. Safia Lul",
      title: "Chairlady, Swahilipot Hub Foundation",
      highlight: "\u201CA vision is not just a picture of what could be; it\u2019s an appeal to our better selves.\u201D",
      body:
        "Set the stage on empowering youth in the digital economy, urging collaboration as a tool for global impact and highlighting blue economy ventures like aquaculture innovation and ocean energy.",
      points: [
        "Five actions for governments and businesses: education & training, R&D investment, lighter regulation, access to finance, and market creation for innovative products",
        "Recognized the boundless creativity of youth as a resource to be guided, educated and mentored",
      ],
    },
    {
      tag: "Remarks",
      name: "Rajab Salim (Malenga 001)",
      title: "Chairperson, Global Opportunity Youth Network Advisory",
      highlight: "\u201CYou cannot exclude youth in your sectors and expect them to thrive.\u201D",
      body:
        "PIW 2023's youngest keynote speaker, sharing his own transformation at Swahilipot Hub and stressing that youth initiatives must be deliberate, SMART, and genuinely inclusive.",
      points: [
        "Thanked Swahilipot Hub and GOYN for tackling youth unemployment in Mombasa through Youth Hubs and digital platforms",
        "Called for youth voices in decision-making processes that directly affect them",
      ],
    },
  ];

  const quotes = [
    {
      text: "Innovation starts with a vision, a spark of inspiration that can come from anyone, anywhere.",
      author: "Hon. Peter Maddens, Belgian Ambassador to Kenya",
    },
    {
      text: "A vision is not just a picture of what could be; it's an appeal to our better selves, a call to become something more.",
      author: "Dr. Safia Lul, Chairlady, Swahilipot Hub Foundation",
    },
    {
      text: "Swahilipot hasn't just produced many talents, but a governor too!",
      author: "H.E. Abdulswamad Shariff Nassir, Governor of Mombasa",
    },
    {
      text: "You cannot train soldiers with water guns and then send them to war... you cannot exclude youth in your sectors and expect them to thrive.",
      author: "Rajab Salim (Malenga 001), Youth Advisory Chairperson",
    },
  ];

  const keyTopics = [
    "4IR & Digital Transformation",
    "Gender Equality in Technology",
    "Blockchain for the Blue Economy",
    "Coastal Heritage & Cultural Value",
    "Coastal Green Economy",
    "The Orange (Creative) Economy",
    "Future of Work & Well-being",
    "Digital Legislation & Governance",
  ];

  const themeSessions = [
    { title: "Plenary 1: Gender Equality & Innovation in Technology", body: "Tackled the mindset shift needed to bring more women into tech, the power of visible role models, and harnessing local knowledge for innovation." },
    { title: "Plenary 2: Transforming the Coast into a Globally Competitive Digital Economy", body: "Explored digital value addition for traditional coastal industries like fishing, and building confidence in digital tools and platforms." },
    { title: "Plenary 3: Navigating the Future of Work", body: "Covered remote, gig and hybrid work models, the digital economy boom, and prioritizing remote worker well-being." },
    { title: "Plenary 4 & 7: Coastal Heritage & the Green Economy", body: "Made the case for engaging, tech-enabled museums and heritage sites, and outlined governance and sustainable infrastructure for the Coastal Green Economy." },
    { title: "Plenary 8: The Orange Economy", body: "Examined culture, creativity and IP as economic drivers — and the copyright, tax and digital-divide challenges still facing creatives." },
    { title: "Intergenerational Forum: Digital Transformation & Legislation", body: "Kenyan Senate ICT Committee members discussed progressive legislation, critical digital literacy and unlocking youth-led digital business." },
  ];

  const ventures = [
    { name: "StockApp", tag: "Deals Den Pitcher", description: "Ken Gitonga's platform lets entrepreneurs manage stock, sales and cash flow in real-time from their phone." },
    { name: "Muru Technologies", tag: "Deals Den Pitcher", description: "Roy Maingi's studio elevates business value through custom software, product design, QA and consultancy." },
    { name: "Indexfand", tag: "Deals Den Pitcher", description: "Collins Becky's peer-to-peer savings platform helps users resist premature spending of their savings." },
    { name: "Rentspot", tag: "Deals Den Pitcher", description: "Patrick Oginga's listing platform helps property managers and verified agents find tenants efficiently." },
    { name: "Social Hub", tag: "Deals Den Pitcher", description: "Suhayl Hamid's venture turbocharges growth for purpose-driven businesses." },
    { name: "Leta Franchise", tag: "Deals Den Pitcher", description: "Tony Odipo & Musa Oyoo's agency organizes music, dance, drama and theatre experiences." },
    { name: "Kuza Freezer", tag: "Deals Den Pitcher", description: "Dennis Okangi's solar-powered coolers bridge the cold-chain gap in the fish value and supply chain." },
    { name: "Sensational Tea", tag: "Born at Swahilipot Hub", description: "Amal Mohammed's ten-spice tea blend, offering relaxation and health benefits, was born at Swahilipot Hub." },
    { name: "Twende Green Ecocycle", tag: "Deals Den Pitcher", description: "Zeinab Mahmoud & Lawrence Kagei transform marine plastic waste into high-quality school furniture." },
    { name: "Kubrate Learning", tag: "Deals Den Pitcher", description: "Shen Wayombe's secure platform offers structured, customizable online digital learning." },
    { name: "TechKidz", tag: "Deals Den Pitcher", description: "Grace Irungu & Albert Mwaniki's academy cultivates a Silicon Valley spirit in African children through robotics and software coaching." },
  ];

  const achievements = [
    {
      title: "Innovation Showcase",
      description: "35 startups and 53 exhibitors showcased innovative solutions, with 11 pitching live at the first-ever Deals Den on Pitching Thursday.",
      icon: Lightbulb,
    },
    {
      title: "Network Building",
      description: "1,800+ delegates connected, including 100+ speakers, 4 ambassadors, the Governor of Mombasa, and 110+ local and international organisations.",
      icon: Users,
    },
    {
      title: "Global Partnerships",
      description: "Belgium, France and diplomatic missions committed to youth innovation, carbon-neutral initiatives and creative-economy training like Sinema Mtaani.",
      icon: Globe,
    },
    {
      title: "Innovation Funding",
      description: "Ksh. 0.8M awarded in prize money for innovators and Ksh. 6.4M in grants for startups across the week.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen page-shell bg-white">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-[#0a1628] pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block mb-5 bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Past Event
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">PIW 2023</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            "Sailing Beyond Borders"
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F97316]" />
              <span>2 – 6 October 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Swahilipot Hub, Mombasa, Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src="/images/DSC_5601.jpg" alt="PIW 2023 Event" className="w-full h-80 md:h-[480px] object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-1">A Week of Innovation</h3>
            <p className="text-white/80">Bringing together the brightest minds of coastal Kenya</p>
          </div>
        </div>
      </div>

      {/* ── Quick nav ────────────────────────────────────── */}
      <nav className="sticky top-16 sm:top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto no-scrollbar text-sm font-semibold text-gray-500">
            {[
              { label: "Overview", href: "#overview" },
              { label: "Voices", href: "#voices" },
              { label: "Impact", href: "#impact" },
              { label: "Quotes", href: "#quotes" },
              { label: "Gallery", href: "#gallery" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="py-3 whitespace-nowrap hover:text-[#F97316] transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Event at a Glance ────────────────────────────── */}
      <section id="overview" className="bg-[#0a1628] scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#F97316]/40 transition-colors">
                <div className="w-12 h-12 mb-4 bg-[#F97316] rounded-xl flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-10">
            <span className="h-px flex-1 bg-white/10" />
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest whitespace-nowrap">PIW 2023 in Numbers</p>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden mb-8">
            {highlights.map((s) => (
              <div key={s.label} className="text-center p-6 bg-[#0a1628] hover:bg-white/5 transition-colors">
                <p className="text-3xl md:text-4xl font-black text-white mb-1">
                  {s.number}
                </p>
                <p className="text-white/50 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {fundingStats.map((s) => (
              <div key={s.label} className="text-center p-6 bg-[#0a1628] hover:bg-white/5 transition-colors">
                <p className="text-2xl md:text-3xl font-black text-[#F97316] mb-1">
                  {s.number}
                </p>
                <p className="text-white/50 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About PIW 2023 ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">About the Event</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Sailing Beyond Borders
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pwani Innovation Week represents a collaborative initiative led by the Swahilipot Hub Foundation and its partners, aimed at cultivating a vibrant culture of innovation and fostering the growth of the innovation ecosystem across the coastal region of Eastern Africa.
            </p>
            <div className="bg-orange-50 border-l-4 border-[#F97316] p-5 rounded-r-xl mb-4">
              <p className="text-gray-700 leading-relaxed">
                By bringing together local and international stakeholders, the event sought to attract and catalyze investment while nurturing practical skills essential for generating impactful innovations that address the needs of the Kenyan people, especially youth.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The 4th edition drew delegations from Zanzibar, Dar-es-Salaam and Tanga, cementing a 'pan-Swahili' vision of coastal collaboration and proving that innovation and impact are not confined to Nairobi.
            </p>
          </div>
          <div className="space-y-4">
            <img src="/images/J26A0003 (1).jpg" alt="PIW 2023 Innovation" className="rounded-2xl shadow-lg w-full h-64 object-cover" loading="lazy" decoding="async" />
            <img src="/images/DSC_5665.jpg" alt="PIW 2023 Venue" className="rounded-2xl shadow-lg w-full h-48 object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* ── Theme Breakdown ──────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/DSC_5674.jpg" alt="PIW 2023 Theme" className="w-full h-80 object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F97316]/10" />
            </div>
            <div>
              <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Key Sessions</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">4IR & Coastal Economies Themes</h2>
              <div className="space-y-5">
                {themeSessions.map((item) => (
                  <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <h3 className="text-base font-bold text-[#F97316] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-gray-200">
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4">Focus Areas Across the Week</p>
            <div className="flex flex-wrap gap-3">
              {keyTopics.map((topic) => (
                <span key={topic} className="text-sm border border-[#F97316] text-[#F97316] rounded-full px-4 py-2 font-semibold">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Foreward & Keynote Voices ─────────────────────── */}
      <section id="voices" className="bg-gray-50 border-y border-gray-100 scroll-mt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center">Event Report</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-3">Foreward & Keynote Remarks</h2>
          <p className="text-gray-500 text-center mb-4">Voices from the foreward and keynote speakers at PIW 2023, 2–6 October 2023</p>
          <p className="text-gray-400 text-xs text-center mb-10">Tap a bar to jump between speakers, or let it auto-play</p>

          <VoicesShowcase voices={voices} />
        </div>
      </section>

      {/* ── Achievements ─────────────────────────────────── */}
      <section id="impact" className="bg-gray-50 border-y border-gray-100 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center">Impact</p>
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 bg-[#F97316] rounded-full flex items-center justify-center">
                  <a.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deals Den Startups ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center">Pitching Thursday</p>
        <h2 className="text-3xl font-black text-gray-900 text-center mb-3">Deals Den Highlights</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
          On 5th October 2023, 11 innovators pitched before a panel of investors and entrepreneurship support organisations in PIW's first-ever Deals Den — each receiving material and non-material support, including mentorship and valuable resources.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ventures.map((v) => (
            <div key={v.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <Badge className="bg-orange-50 text-[#F97316] hover:bg-orange-50 mb-3">{v.tag}</Badge>
              <h3 className="text-base font-bold text-gray-900 mb-2">{v.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Notable Quotes ───────────────────────────────── */}
      <section id="quotes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-32">
        <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center">In Their Words</p>
        <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Notable Quotes</h2>
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {quotes.map((q) => (
            <Card key={q.text} className="bg-orange-50 border-orange-100 rounded-2xl shrink-0 w-72 snap-start">
              <CardContent className="p-6">
                <Quote className="w-6 h-6 text-[#F97316] mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{q.text}"</p>
                <p className="text-xs font-bold text-gray-500">— {q.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-32">
        <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Highlights</p>
        <h2 className="text-3xl font-black text-gray-900 mb-10">Event Gallery</h2>
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {["DSC_8833.jpg", "J26A9713.jpg", "IMG-176.jpg", "IMG-145.jpg", "Z50_4804.jpg", "Z50_5527.jpg", "Z50_5583.jpg", "Z50_6272.jpg"].map((img) => (
            <img
              key={img}
              src={`/images/${img}`}
              alt="PIW 2023"
              className="rounded-2xl w-72 sm:w-80 h-64 object-cover shrink-0 snap-start hover:opacity-90 transition-opacity"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </section>

      {/* ── Conclusion ───────────────────────────────────── */}
      <section className="bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Conclusion</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">A Coast Sailing Beyond Its Borders</h2>
          <p className="text-white/70 leading-relaxed">
            Over five days, Pwani Innovation Week 2023 brought together 1,800+ delegates, 100+ speakers, 4 ambassadors and the Governor of Mombasa to reaffirm the coast as a hub for innovation. Concrete outcomes included Ksh. 6.4M in startup grants, Ksh. 0.8M in innovator prizes, a first-ever Deals Den for 11 pitching startups, and new commitments from Belgium, France and national government partners — setting the stage for continued growth ahead of PIW 2024.
          </p>
        </div>
      </section>

      {/* ── PIW 2026 CTA ───────────────────────────────────── */}
      <section className="bg-[#F97316]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">The Journey Continues at PIW 2026</h2>
          <p className="text-white/90 leading-relaxed mb-8">
            Building on years of momentum since 2023, Pwani Innovation Week returns for its 7th edition — be part of the next chapter of coastal innovation.
          </p>
          <Link
            to="/piw-2026"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#F97316] font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            Explore PIW 2026 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── Full Report ───────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 mx-auto mb-5 bg-[#F97316] rounded-full flex items-center justify-center">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Documentation</p>
            <h2 className="text-2xl font-black text-gray-900 mb-4">PIW 2023 Report</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Read the full PIW 2023 report — "Sailing Beyond Borders" — covering the foreward, keynote remarks, thematic sessions, Deals Den pitches and event statistics in detail.
            </p>
            <a
              href="/files/PIW 2023 Report.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/25"
            >
              <FileText className="w-5 h-5" /> Download Full Report
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PIW2023;
