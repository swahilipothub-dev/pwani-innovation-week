import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Award, ArrowRight, Calendar, FileText, Lightbulb, MapPin, Quote, Target, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PIW2025 = () => {
  const features = [
    { icon: Calendar, title: "6th Edition", description: "Five days at Swahilipot Hub, Mombasa, organized by Swahilipot Hub Foundation" },
    { icon: Target, title: "3 Thematic Tracks", description: "Youth Agency, Sustainable Economy, and Digital & Creative Economy" },
    { icon: MapPin, title: "80%+ Coastal Reach", description: "Over 80% of participants were drawn directly from the coastal region" },
    { icon: Users, title: "Global Backing", description: "Supported by HEVA Fund, UK–Kenya Tech Hub, MasterCard Foundation and Mombasa County" },
  ];

  const highlights = [
    { number: "80%+", label: "Participants from the Coast" },
    { number: "10", label: "Plenary Sessions" },
    { number: "20", label: "Keynotes" },
    { number: "16", label: "Breakout Sessions" },
    { number: "15", label: "Startups at the Deals Den" },
  ];

  const dailyRecap = [
    {
      day: "Day 1",
      date: "Mon, 27 Oct",
      title: "Opening & Cultural Foundations",
      summary:
        "A Kick-Off Show blending indigenous art, music and storytelling, including a re-enactment of Swahili hero Fumo Liyongo and the Kishuri Traditional Dancers — set the tone that innovation in Pwani is rooted in culture as much as technology.",
      points: [
        "Keynotes from Ayubu Mohammed (PIW Secretariat), Dr. Tony Omwansa (KENIA), Olivier Vanden Eynde (Close the Gap) and the Youth Advisory Group",
        "Blockchain for Coastal Trade and the Blue Economy",
        "Heritage & Historic Urban Landscapes as catalysts for sustainable development",
        "Sustainable Aquaculture Value Chains",
        "Equity & Inclusion, and AI Agents for Everyone workshop",
      ],
    },
    {
      day: "Day 2",
      date: "Tue, 28 Oct",
      title: "Keynotes & Global Partnerships",
      summary:
        'A formal welcome to ambassadors from Belgium, France and Saudi Arabia. Prof. Abdul Razak Shaukat described PIW as "not just a conference but the future of Kenya."',
      points: [
        "Positioning Mombasa as a Business, Culture and Innovation Hub",
        "From Idea to Impact: Nurturing Youth-Led Startups and Social Enterprises",
        "Cybersecurity, Data Protection & Digital Resilience",
        "Fireside Chat: Youth Mental Health and Well-Being",
      ],
    },
    {
      day: "Day 3",
      date: "Wed, 29 Oct",
      title: "International Perspectives & Circular Economy Launch",
      summary:
        "Saudi Arabia's Salam for Cultural Communication shared its cultural diplomacy and innovation model, followed by the launch of the East African Women WastePreneurs Association and the Baus Taka App.",
      points: [
        "The Journey of Growth and Self-Discovery — mindset, mentorship, faith and disability inclusion",
        "The Unseen Edge: Mastering Power Skills for Pwani's Future Leaders",
        "Incentivizing the ISP Economy in Africa",
        "Building Your Brand, Financial Acumen and Positive Online Identity",
        "Case Management Program recognized 79 mentees and 33 mentors (23 women)",
        "Dinner Gala — Heva Fund's $25,000 contribution supported 100+ performing artists",
      ],
    },
    {
      day: "Day 4",
      date: "Thu, 30 Oct",
      title: "Governance, Circular Economy & Investment",
      summary:
        "Hon. Jacob Fikirini announced the NYOTA Project — a KSh 20 billion initiative targeting 820,000 young people, including 100,000 entrepreneurs and 90,000 unskilled youth for Master Craftsman training.",
      points: [
        "Rethinking Governance Systems and Economic Futures",
        "Coastal Circular Economy: Waste-to-Wealth Solutions",
        "Security Awareness (NTT Data) and Intellectual Property Rights, Patenting & Legalization of Startups",
        "Fireside Chat with Alice Gugilev (GDI) on wealth as mindset and discipline",
        "Deals Den — 15 youth-led ventures pitched across Blue/Green and Orange Economy tracks",
      ],
    },
    {
      day: "Day 5",
      date: "Fri, 31 Oct",
      title: "Creative Economy & Closing",
      summary:
        "The Orange Economy took center stage, followed by the Official Closing Ceremony recognizing bootcamp graduates, hackathon winners and pitch-track entrepreneurs.",
      points: [
        "Building a Sustainable Future through the Creative Gig Economy (HEVA Fund)",
        "Distributing Coastal Creativity Beyond Borders — with Sanaipei Tande & Dazzler Dutchie",
        "UK–Kenya Tech Hub Logistics Hackathon winners: Port Ease (1st), Navi Trace (2nd), Novi Nova (3rd)",
        "Orange Economy Pitch Session — 11 creative entrepreneurs recognized; Heva Fund 9% soft loans announced",
        "Blue & Green Economy Showcase — Chakula Bora Feeds, Killy Fish and Kulthum Seafoods named investment-ready",
      ],
    },
  ];

  const quotes = [
    {
      text: "Heritage is not the past, it is a living force shaping our future.",
      author: "Opening Fumo Liyongo Performance",
    },
    {
      text: "Technology doesn't transform people, people transform with technology.",
      author: "Panelist, Blockchain for Coastal Trade session",
    },
    {
      text: "Waste is not just trash — it's an untapped economy waiting for innovators to claim it.",
      author: "Panelist, Coastal Circular Economy session",
    },
    {
      text: "A business is like a baby — you can never grow it alone.",
      author: "Panelist, Youth-Led Startups session",
    },
    {
      text: "It's not about giving everyone the same chair, but adjusting the height of the table so all can reach.",
      author: "Rev. Canon Christine Kinyanjui, National Council of Churches of Kenya",
    },
    {
      text: "Innovation is a team sport.",
      author: "H.E. Peter Maddens, Belgian Ambassador to Kenya",
    },
    {
      text: "The future can only be claimed by the path we take today — a path not only of hope but of stubborn hope.",
      author: "H.E. Abdulswamad Shariff Nassir, Governor of Mombasa County",
    },
    {
      text: "Your brand is what people say about you when you're not in the room.",
      author: "Hatua Network presentation",
    },
  ];

  const keyTopics = [
    "Blockchain for Coastal Trade & the Blue Economy",
    "Heritage & Historic Urban Landscapes",
    "Sustainable Aquaculture Value Chains",
    "Cybersecurity & Data Protection",
    "Circular Economy & Waste-to-Wealth",
    "Intellectual Property & Startup Legalization",
    "Mentorship & Case Management",
    "The Orange (Creative) Economy",
  ];

  const ventures = [
    { name: "Port Ease", tag: "Hackathon Winner \u2014 1st", description: "UK\u2013Kenya Tech Hub Logistics Hackathon champion, headed for Swahilipot Hub incubation." },
    { name: "Navi Trace", tag: "Hackathon Winner \u2014 2nd", description: "Logistics hackathon runner-up, headed for Swahilipot Hub incubation." },
    { name: "Novi Nova", tag: "Hackathon Winner \u2014 3rd", description: "Third-place logistics hackathon finisher, headed for Swahilipot Hub incubation." },
    { name: "Chakula Bora Feeds", tag: "Investment-Ready", description: "Fish feed venture pitched at the Deals Den, with investor interest pending KEBS certification." },
    { name: "Killy Fish", tag: "Investment-Ready", description: "Named investment-ready in the Blue & Green Economy Showcase." },
    { name: "Kulthum Seafoods", tag: "Investment-Ready", description: "Named investment-ready in the Blue & Green Economy Showcase." },
    { name: "ResQNode", tag: "Deals Den Pitch", description: "Smart emergency response venture pitched to investors and the Heva Fund panel." },
    { name: "Ecowave & Barizi", tag: "Refining for Funding", description: "Encouraged to refine their models for future Blue & Green Economy funding." },
  ];

  const mentorshipStats = [
    { number: "79", label: "Mentees" },
    { number: "33", label: "Mentors" },
    { number: "23", label: "Women Mentors" },
  ];

  const achievements = [
    {
      title: "Innovation Showcase",
      description: "26 total pitch presentations across the Deals Den and Orange Economy track, from AI-driven emergency response to sustainable Blue Economy ventures.",
      icon: Lightbulb,
    },
    {
      title: "Global Partnerships",
      description: "Strategic partners including HEVA Fund, UK–Kenya Tech Hub, MasterCard Foundation and Mombasa County, plus missions from France, Belgium and Saudi Arabia.",
      icon: Globe,
    },
    {
      title: "Policy Impact",
      description: "Launch of the NYOTA Project — a KSh 20 billion initiative targeting 820,000 young people — and the East African Women WastePreneurs Association.",
      icon: Target,
    },
    {
      title: "Award Recognition",
      description: "Hackathon winners Port Ease, Navi Trace and Novi Nova received Swahilipot Hub incubation, alongside Web Development Bootcamp graduates.",
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
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">PIW 2025</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            "Pwani Re-Imagined: Youth Agency, Innovation &amp; Sustainability of Coastal Economies"
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F97316]" />
              <span>27 – 31 October 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Mombasa, Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img src="/images/0V6A0066.jpg" alt="PIW 2025 Event" className="w-full h-80 md:h-[480px] object-cover" loading="eager" fetchPriority="high" decoding="async" />
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
              { label: "Program", href: "#program" },
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
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest whitespace-nowrap">PIW 2025 in Numbers</p>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {highlights.map((s) => (
              <div key={s.label} className="text-center p-6 bg-[#0a1628] hover:bg-white/5 transition-colors">
                <p className="text-3xl md:text-4xl font-black text-white mb-1">
                  {s.number}
                </p>
                <p className="text-white/50 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About PIW 2025 ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Executive Summary</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Pwani Reimagined
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pwani Innovation Week (PIW) 2025 brought together innovators, entrepreneurs, artists, policymakers and development partners over five days to showcase and strengthen the coastal region's innovation ecosystem. The week spanned plenary sessions, breakout discussions, workshops, hackathons, exhibitions and award ceremonies.
            </p>
            <div className="bg-orange-50 border-l-4 border-[#F97316] p-5 rounded-r-xl mb-4">
              <p className="text-gray-700 leading-relaxed">
                Strategic partners including HEVA Fund, UK–Kenya Tech Hub, MasterCard Foundation, the County Government of Mombasa, and international missions from France, Belgium and Saudi Arabia supported capacity-building, mentorship and funding opportunities throughout the week.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Over 80% of participants came from the coastal region, across ten plenary sessions, twenty keynotes and sixteen breakout sessions.
            </p>
          </div>
          <div className="space-y-4">
            <img src="/images/A21I1152.jpg" alt="PIW 2025 Innovation" className="rounded-2xl shadow-lg w-full h-64 object-cover" loading="lazy" decoding="async" />
            <img src="/images/2C0A1199.jpg" alt="PIW 2025 Venue" className="rounded-2xl shadow-lg w-full h-48 object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* ── Theme Breakdown ──────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/A26I8176.JPG" alt="PIW 2025 Theme" className="w-full h-80 object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F97316]/10" />
            </div>
            <div>
              <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Three Tracks</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">How the Week Was Organized</h2>
              <div className="space-y-5">
                {[
                  { title: "Youth Agency Track", body: "Leadership, governance and youth participation in local development." },
                  { title: "Sustainable Economy Track", body: "The Blue, Green and Circular Economies, and environmental resilience." },
                  { title: "Digital and Creative Economy Track", body: "Technology, entrepreneurship and the Orange Economy." },
                ].map((item) => (
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

      {/* ── Day-by-Day Recap ─────────────────────────────── */}
      <section id="program" className="bg-gray-50 border-y border-gray-100 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center">Event Report</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-3">Five Days of Innovation</h2>
          <p className="text-gray-500 text-center mb-12">A day-by-day recap of PIW 2025, 27–31 October 2025</p>

          <div className="relative">
            <span className="absolute left-6 sm:left-8 top-3 bottom-3 w-px bg-gradient-to-b from-[#F97316] via-orange-200 to-transparent" aria-hidden="true" />
            <Accordion type="single" collapsible defaultValue="Day 1" className="space-y-5">
              {dailyRecap.map((d, i) => (
                <AccordionItem
                  key={d.day}
                  value={d.day}
                  className="relative pl-16 sm:pl-20 border-none"
                >
                  <div className="absolute left-0 top-1 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F97316] text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-lg shadow-[#F97316]/30 ring-4 ring-gray-50 z-10">
                    {i + 1}
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <AccordionTrigger className="hover:no-underline px-6 py-5">
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-bold text-[#F97316] bg-orange-50 rounded-full px-2.5 py-0.5">{d.day}</span>
                          <span className="text-xs text-gray-400 font-semibold">{d.date}</span>
                        </div>
                        <p className="font-bold text-gray-900">{d.title}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <p className="text-gray-600 leading-relaxed mb-4">{d.summary}</p>
                      <ul className="space-y-2">
                        {d.points.map((point) => (
                          <li key={point} className="flex gap-2 text-sm text-gray-600">
                            <span className="text-[#F97316] font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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

      {/* ── Startups & Ventures ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center">Deals Den & Hackathon</p>
        <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Startups & Ventures to Watch</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {ventures.map((v) => (
            <div key={v.name} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <Badge className="bg-orange-50 text-[#F97316] hover:bg-orange-50 mb-3">{v.tag}</Badge>
              <h3 className="text-base font-bold text-gray-900 mb-2">{v.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0a1628] rounded-2xl px-6 py-10 sm:px-10">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-2 text-center">Case Management Program</p>
          <h3 className="text-xl font-bold text-white text-center mb-8">Mentorship That Made an Impact</h3>
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {mentorshipStats.map((m) => (
              <div key={m.label} className="text-center px-2">
                <p className="text-3xl md:text-4xl font-black text-white mb-1">{m.number}</p>
                <p className="text-white/50 text-xs sm:text-sm font-medium">{m.label}</p>
              </div>
            ))}
          </div>
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
          {["A21I1578.jpg", "A21I1862.jpg", "2C0A1199.jpg", "A26I4806.jpg", "A26I5500.jpg", "2C0A1590.jpg"].map((img) => (
            <img
              key={img}
              src={`/images/${img}`}
              alt="PIW 2025"
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
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">A Coast Rising as a Hub for Inclusive Innovation</h2>
          <p className="text-white/70 leading-relaxed">
            Over five days, Pwani Innovation Week 2025 reaffirmed the Coast as a rising hub for inclusive innovation — anchoring technology, entrepreneurship and governance discussions in local culture and sustainability. Concrete outcomes included a hackathon, a web development bootcamp, 26 total pitch presentations, the launch of the East African Women WastePreneurs Association, and new commitments from partners including HEVA Fund, UK–Kenya Tech Hub, MasterCard Foundation and the County Government of Mombasa — setting the stage for continued investment in youth-led, coastal-rooted economic transformation ahead of PIW 2026.
          </p>
        </div>
      </section>
      {/* ── PIW 2026 CTA ───────────────────────────────────── */}
      <section className="bg-[#F97316]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">The Journey Continues at PIW 2026</h2>
          <p className="text-white/90 leading-relaxed mb-8">
            Building on 2025's momentum, Pwani Innovation Week returns for its 7th edition — be part of the next chapter of coastal innovation.
          </p>
          <Link
            to="/piw-2026"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#F97316] font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            Explore PIW 2026 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      {/* ── Concept Note ─────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 mx-auto mb-5 bg-[#F97316] rounded-full flex items-center justify-center">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Documentation</p>
            <h2 className="text-2xl font-black text-gray-900 mb-4">PIW 2025 Concept Note</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Pwani Innovation Week (PIW) is a regional platform igniting transformation at the Kenyan coast by bringing together youth, innovators, creatives, and ecosystem actors to shape a resilient, inclusive, and future-ready coastal economy.
            </p>
            <a
              href="/files/PIW 2025 CONCEPT NOTE (1).pdf"
              download
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/25"
            >
              <FileText className="w-5 h-5" /> Download Concept Note
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PIW2025;
