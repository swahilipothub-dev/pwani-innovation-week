import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, FileText, Globe, Handshake, Lightbulb, MapPin, Music, Radio, Target, TrendingUp, Users } from 'lucide-react';

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const fadeUp = (visible: boolean) =>
  `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

const fadeLeft = (visible: boolean) =>
  `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`;

const fadeRight = (visible: boolean) =>
  `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`;

const PIW2026 = () => {
  const heroImg = useScrollReveal();
  const features = useScrollReveal();
  const stats = useScrollReveal();
  const about = useScrollReveal();
  const theme = useScrollReveal();
  const topics = useScrollReveal();
  const highlights = useScrollReveal();
  const cta = useScrollReveal();

  const featureCards = [
    { icon: MapPin, title: "Coastal Focus", description: "Dedicated to transforming Kenya's coastal economies through innovation and sustainable growth." },
    { icon: Calendar, title: "7th Edition", description: "Building on six successful years of innovation, collaboration, and lasting coastal impact." },
    { icon: Users, title: "Youth-Driven", description: "Empowering young changemakers as active partners, not just beneficiaries." },
    { icon: Target, title: "Impact-Focused", description: "Creating sustainable solutions to real coastal challenges through measurable outcomes." },
  ];

  const statCards = [
    { number: "5,000+", label: "Expected Attendees" },
    { number: "60+", label: "Partner Organizations" },
    { number: "30+", label: "Innovation Sessions" },
    { number: "20+", label: "Startups Pitching" },
    { number: "5", label: "Days of Innovation" },
  ];

  const keyTopics = [
    "Digital Innovation & Technology",
    "Blue Economy & Marine Resources",
    "Youth Agency & Leadership",
    "Peace, Inclusivity and Equity",
    "Climate Action & Sustainability",
    "Entrepreneurship & Investment Readiness",
    "Creative Economy & Culture",
    "Civic Governance & Policy",
  ];

  const achievementCards = [
    {
      icon: Lightbulb,
      title: "Innovation Showcase",
      description: "Featuring 40+ innovative startups and solutions from the coastal region, from AI-driven tools to sustainable Blue Economy prototypes.",
    },
    {
      icon: Users,
      title: "Network Building",
      description: "Connecting 3,000+ participants including entrepreneurs, investors, policymakers, and creatives across the East African coastline.",
    },
    {
      icon: Target,
      title: "Policy Impact",
      description: "Generating actionable recommendations for coastal economic development, with a focus on youth agency and digital skills integration.",
    },
    {
      icon: Award,
      title: "Award Recognition",
      description: "Recognizing outstanding innovations across multiple categories, giving local talent the visibility needed to scale their solutions.",
    },
  ];

  const themePoints = [
    {
      title: "Coastal Futures",
      body: "Repositioning the coast as a hub of economic resilience — leveraging its unique natural and cultural wealth to build pathways for long-term prosperity.",
    },
    {
      title: "Youth at the Centre",
      body: "Young people are not beneficiaries of change; they are its architects. PIW 2026 places youth agency at the core of every programme, pitch, and policy conversation.",
    },
    {
      title: "Innovation & Investment",
      body: "From deal rooms to accelerator showcases, PIW 2026 connects coastal ventures with the capital, partnerships, and visibility needed to grow.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-[#0a1628] pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block mb-5 bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full animate-bounce">
            Current Edition
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 animate-[fadeInDown_0.7s_ease-out]">PIW 2026</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8 animate-[fadeInUp_0.7s_ease-out_0.2s_both]">
            "Coastal Futures: Youth, Innovation &amp; Sustainable Growth"
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 animate-[fadeInUp_0.7s_ease-out_0.35s_both]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F97316]" />
              <span>October 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Mombasa, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#F97316]" />
              <span>7th Annual Edition</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────── */}
      <div ref={heroImg.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${fadeUp(heroImg.visible)}`}>
          <img src="/images/0V6A0066.jpg" alt="PIW 2026 Event" className="w-full h-80 md:h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-1">A Week of Innovation</h3>
            <p className="text-white/80">Bringing together the brightest minds of coastal Kenya</p>
          </div>
        </div>
      </div>

      {/* ── Feature Cards ────────────────────────────────── */}
      <section ref={features.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((f, i) => (
            <div
              key={f.title}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`text-center p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-md transition-all duration-700 ease-out ${
                features.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
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
      <section ref={stats.ref} className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className={`text-xs text-[#F97316] font-bold uppercase tracking-widest text-center mb-10 ${fadeUp(stats.visible)}`}>
            PIW 2026 in Numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {statCards.map((s, i) => (
              <div
                key={s.label}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-700 ease-out ${
                  stats.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <p className="text-3xl md:text-4xl font-black text-[#F97316] mb-1">{s.number}</p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About PIW 2026 ───────────────────────────────── */}
      <section ref={about.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={fadeLeft(about.visible)}>
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">About the Event</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              A Platform for Coastal Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PIW is a Pwani-led and youth-driven annual convening that has become a point of convergence for youth, entrepreneurs, investors, creatives, and changemakers to co-create localized solutions for sustainable growth in Kenya's coast.
            </p>
            <div className="bg-orange-50 border-l-4 border-[#F97316] p-5 rounded-r-xl mb-4">
              <p className="text-gray-700 leading-relaxed">
                The seventh edition builds on this legacy — expanding deal rooms, accelerating coastal ventures, and deepening the policy conversations that shape the region's future.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              By positioning youth as active partners rather than just beneficiaries, PIW 2026 aims to catalyze a future-ready and inclusive economy rooted in the unique cultural and natural wealth of the Pwani region.
            </p>
          </div>
          <div className={`space-y-4 ${fadeRight(about.visible)}`} style={{ transitionDelay: '150ms' }}>
            <img src="/images/A21I1152.jpg" alt="PIW 2026 Innovation" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            <img src="/images/2C0A1199.jpg" alt="PIW 2026 Venue" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* ── Theme Breakdown ──────────────────────────────── */}
      <section ref={theme.ref} className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`relative rounded-2xl overflow-hidden shadow-xl ${fadeLeft(theme.visible)}`}>
              <img src="/images/A26I8176.JPG" alt="PIW 2026 Theme" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F97316]/10" />
            </div>
            <div className={fadeRight(theme.visible)} style={{ transitionDelay: '150ms' }}>
              <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">The Theme</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Breaking Down the Theme</h2>
              <div className="space-y-5">
                {themePoints.map((item, i) => (
                  <div
                    key={item.title}
                    style={{ transitionDelay: `${200 + i * 120}ms` }}
                    className={`bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all duration-700 ease-out ${
                      theme.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                  >
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
      <section ref={topics.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className={`text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 ${fadeUp(topics.visible)}`}>
          Focus Areas
        </p>
        <h2 className={`text-2xl font-black text-gray-900 mb-8 ${fadeUp(topics.visible)}`} style={{ transitionDelay: '100ms' }}>
          Key Topics
        </h2>
        <div className="flex flex-wrap gap-3">
          {keyTopics.map((topic, i) => (
            <span
              key={topic}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`text-sm border border-[#F97316] text-[#F97316] rounded-full px-4 py-2 font-semibold transition-all duration-500 ease-out ${
                topics.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────── */}
      <section ref={highlights.ref} className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className={`text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center ${fadeUp(highlights.visible)}`}>
            What to Expect
          </p>
          <h2 className={`text-3xl font-black text-gray-900 text-center mb-10 ${fadeUp(highlights.visible)}`} style={{ transitionDelay: '100ms' }}>
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementCards.map((a, i) => (
              <div
                key={a.title}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-all duration-700 ease-out ${
                  highlights.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
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
        <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Gallery</p>
        <h2 className="text-3xl font-black text-gray-900 mb-10">Event Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-5">
            <img src="/images/A21I1578.jpg" alt="PIW 2026" className="rounded-2xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300" />
            <img src="/images/A21I1862.jpg" alt="PIW 2026" className="rounded-2xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-300" />
          </div>
          <div className="space-y-5">
            <img src="/images/2C0A1199.jpg" alt="PIW 2026" className="rounded-2xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-300" />
            <img src="/images/A26I4806.jpg" alt="PIW 2026" className="rounded-2xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300" />
          </div>
          <div className="space-y-5">
            <img src="/images/A26I5500.jpg" alt="PIW 2026" className="rounded-2xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300" />
            <img src="/images/2C0A1590.jpg" alt="PIW 2026" className="rounded-2xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section ref={cta.ref} className="bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className={`text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4 ${fadeUp(cta.visible)}`}>
            Join Us
          </p>
          <h2 className={`text-3xl md:text-4xl font-black text-white mb-4 ${fadeUp(cta.visible)}`} style={{ transitionDelay: '100ms' }}>
            Be Part of PIW 2026
          </h2>
          <p className={`text-white/60 text-lg max-w-xl mx-auto mb-10 ${fadeUp(cta.visible)}`} style={{ transitionDelay: '200ms' }}>
            Secure your place at the Coast's most concentrated gathering of changemakers.
          </p>
          <div className={`flex flex-wrap justify-center gap-4 ${fadeUp(cta.visible)}`} style={{ transitionDelay: '300ms' }}>
            <a
              href="/tickets"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/30"
            >
              Register Now
            </a>
            <a
              href="/about"
              className="border border-white/20 hover:border-[#F97316] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:text-[#F97316]"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
};

export default PIW2026;
