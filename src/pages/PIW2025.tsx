import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, FileText, Lightbulb, MapPin, Target, Users, Globe } from 'lucide-react';

const PIW2025 = () => {
  const features = [
    { icon: MapPin, title: "Coastal Focus", description: "Dedicated to transforming Kenya's coastal economies through innovation" },
    { icon: Calendar, title: "6th Edition", description: "Building on five years of successful innovation and collaboration" },
    { icon: Users, title: "Youth-Driven", description: "Empowering young changemakers as partners, not beneficiaries" },
    { icon: Target, title: "Impact-Focused", description: "Creating sustainable solutions for real coastal challenges" },
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
    "Digital Innovation & Technology",
    "Blue Economy & Marine Resources",
    "Youth Agency & Leadership",
    "Peace, Inclusivity and Equity",
    "Climate Action & Sustainability",
    "Entrepreneurship & Investment Readiness",
  ];

  const achievements = [
    {
      title: "Innovation Showcase",
      description: "Featured 30+ innovative startups and solutions from the coastal region, ranging from AI-driven data tools to sustainable Blue Economy prototypes.",
      icon: Lightbulb,
    },
    {
      title: "Network Building",
      description: "Connected 2,000+ participants including entrepreneurs, investors, and policymakers, fostering collaborations that span the East African coastline.",
      icon: Users,
    },
    {
      title: "Policy Impact",
      description: "Generated actionable recommendations for coastal economic development, specifically focusing on youth agency and digital skills integration.",
      icon: Target,
    },
    {
      title: "Award Recognition",
      description: "Recognized outstanding innovations across multiple categories, providing platforms for local talent to gain visibility and scale their solutions.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

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
          <img src="/images/0V6A0066.jpg" alt="PIW 2025 Event" className="w-full h-80 md:h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-1">A Week of Innovation</h3>
            <p className="text-white/80">Bringing together the brightest minds of coastal Kenya</p>
          </div>
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-[#F97316] rounded-full flex items-center justify-center">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest text-center mb-10">PIW 2025 in Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {highlights.map((s) => (
              <div key={s.label} className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-3xl md:text-4xl font-black text-[#F97316] mb-1">{s.number}</p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About PIW 2025 ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">About the Event</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              A Platform for Coastal Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PIW is a Pwani-led and youth-driven annual convening that has become a point of convergence for youth, entrepreneurs, investors, creatives, and changemakers to co-create localized solutions for sustainable growth in Kenya's coast.
            </p>
            <div className="bg-orange-50 border-l-4 border-[#F97316] p-5 rounded-r-xl mb-4">
              <p className="text-gray-700 leading-relaxed">
                The sixth edition built on this legacy by placing young people at the center of co-creation and systemic innovation across tourism, fisheries, and the blue economy.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By positioning youth as active partners rather than just beneficiaries, PIW 2025 catalyzed a future-ready and inclusive economy rooted in the unique cultural and natural wealth of the Pwani region.
            </p>
          </div>
          <div className="space-y-4">
            <img src="/images/A21I1152.jpg" alt="PIW 2025 Innovation" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            <img src="/images/2C0A1199.jpg" alt="PIW 2025 Venue" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* ── Theme Breakdown ──────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/images/A26I8176.JPG" alt="PIW 2025 Theme" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F97316]/10" />
            </div>
            <div>
              <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">The Theme</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Breaking Down the Theme</h2>
              <div className="space-y-5">
                {[
                  { title: "Pwani Re-imagined", body: "Objectifies a future-oriented transformation of the coastal economies, driving resilience and prosperity through new growth pathways." },
                  { title: "Youth Agency", body: "Recognizing young people as active agents of change, empowering them to shape their futures and contribute meaningfully to society." },
                  { title: "Innovation & Sustainability", body: "Introducing new ideas, methods, and services to enhance efficiency across tourism, fisheries, and agriculture sectors." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <h3 className="text-base font-bold text-[#F97316] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Topics ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Focus Areas</p>
        <h2 className="text-2xl font-black text-gray-900 mb-8">Key Topics</h2>
        <div className="flex flex-wrap gap-3">
          {keyTopics.map((topic) => (
            <span key={topic} className="text-sm border border-[#F97316] text-[#F97316] rounded-full px-4 py-2 font-semibold">
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* ── Achievements ─────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
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

      {/* ── Gallery ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Highlights</p>
        <h2 className="text-3xl font-black text-gray-900 mb-10">Event Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-5">
            <img src="/images/A21I1578.jpg" alt="PIW 2025" className="rounded-2xl w-full h-64 object-cover hover:opacity-90 transition-opacity" />
            <img src="/images/A21I1862.jpg" alt="PIW 2025" className="rounded-2xl w-full h-48 object-cover hover:opacity-90 transition-opacity" />
          </div>
          <div className="space-y-5">
            <img src="/images/2C0A1199.jpg" alt="PIW 2025" className="rounded-2xl w-full h-48 object-cover hover:opacity-90 transition-opacity" />
            <img src="/images/A26I4806.jpg" alt="PIW 2025" className="rounded-2xl w-full h-64 object-cover hover:opacity-90 transition-opacity" />
          </div>
          <div className="space-y-5">
            <img src="/images/A26I5500.jpg" alt="PIW 2025" className="rounded-2xl w-full h-64 object-cover hover:opacity-90 transition-opacity" />
            <img src="/images/2C0A1590.jpg" alt="PIW 2025" className="rounded-2xl w-full h-48 object-cover hover:opacity-90 transition-opacity" />
          </div>
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
