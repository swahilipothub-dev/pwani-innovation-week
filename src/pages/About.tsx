import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Radio, Users, Handshake, TrendingUp } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';
import EditionsTimeline from '@/components/EditionsTimeline';

const pillars = [
  {
    icon: <Radio className="w-6 h-6 text-white" />,
    bg: "bg-[#0EA5E9]",
    title: "A National Media Moment",
    body: "Live broadcast coverage, daily press summaries, and a dedicated hashtag campaign reaching audiences nationwide.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-[#F97316]",
    title: "An Audience Aggregator",
    body: "Thousands of delegates, exhibitors, and attendees converge in one place — the largest tech and innovation gathering on the Kenyan coast.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-white" />,
    bg: "bg-[#9b87f5]",
    title: "A Partnership Showcase",
    body: "Government, corporates, and development partners present side by side — forging alliances that outlast the week.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    bg: "bg-[#22C55E]",
    title: "An Investment Platform",
    body: "Deal Rooms and Pwani Accelerate connect vetted coastal entrepreneurs with investors and capital providers.",
  },
];

const About = () => {
  const header    = useScrollReveal();
  const overview  = useScrollReveal();
  const gallery   = useScrollReveal();
  const pillarsRef= useScrollReveal();
  const stats     = useScrollReveal();
  const cta       = useScrollReveal();

  return (
    <div className="min-h-screen page-shell bg-white">

      {/* ── Header ───────────────────────────────────────── */}
      <div className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src="/images/piw-2026/WhatsApp Image 2026-06-30 at 20.13.58.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div ref={header.ref} className="relative z-10 max-w-7xl mx-auto">
          <p style={fadeUp(header.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4">About</p>
          <h1 style={fadeUp(header.inView, 100)} className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
            Pwani Innovation<br />Week 2026
          </h1>
          <p style={fadeUp(header.inView, 200)} className="text-white/60 text-lg max-w-2xl mb-8">
            The Week the Coast Takes the Stage — celebrating a decade of Swahilipot Hub Foundation and the Coast's most powerful annual platform.
          </p>
          <div style={fadeUp(header.inView, 300)} className="flex flex-wrap gap-5 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F97316]" />
              <span>26 – 31 October 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Mombasa, Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Swahilipot @10 Banner ────────────────────────── */}
      <div className="bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-white font-black text-4xl leading-none">10</span>
            <div className="w-px h-10 bg-white/30" />
            <div>
              <p className="text-white font-bold text-sm">Swahilipot Hub Foundation Anniversary</p>
              <p className="text-orange-100 text-xs">Transformed Youth · Thriving Communities · 2016 – 2026</p>
            </div>
          </div>
          <Link
            to="/tickets"
            className="inline-flex items-center gap-2 bg-white text-[#F97316] font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-orange-50 transition-colors duration-200 flex-shrink-0"
          >
            Register Interest <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── What is PIW 2026 ─────────────────────────────── */}
      <section className="relative overflow-hidden py-20">
        <img
          src="/images/piw-2026/WhatsApp Image 2026-06-30 at 14.03.23.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center scale-110 blur-md"
        />
        <div className="absolute inset-0 bg-[#0a1628]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            <div ref={overview.ref} className="lg:w-1/2 space-y-6">
              <div>
                <p style={fadeUp(overview.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Overview</p>
                <h2 style={fadeUp(overview.inView, 100)} className="text-3xl md:text-4xl font-black text-white leading-tight">
                  What is Pwani Innovation Week?
                </h2>
              </div>
              <p style={fadeUp(overview.inView, 200)} className="text-white/75 leading-relaxed">
                PIW is a Pwani-led and youth-driven annual convening that has become a point of convergence for youth, entrepreneurs, investors, creatives, and changemakers — co-creating localized solutions for sustainable growth in Kenya's coast.
              </p>
              <p style={fadeUp(overview.inView, 280)} className="text-white/75 leading-relaxed">
                PIW 2026 is the most significant edition to date, coinciding with the <strong className="text-white">10th anniversary of Swahilipot Hub Foundation</strong>. It is simultaneously a national media moment, an investment showcase, and a community celebration — all in one week.
              </p>
              <p style={fadeUp(overview.inView, 360)} className="text-white/75 leading-relaxed">
                The six-day convention will feature Swahilipot Dialogues, Sectoral Pre-Conferences, Deal Rooms, Pwani Accelerate, and close with a Grand Concert at Mama Ngina Waterfront — the most visible single moment of the year.
              </p>
            </div>

            <div ref={gallery.ref} className="lg:w-1/2 grid grid-cols-2 gap-3">
              {[
                "/images/piw-2026/WhatsApp Image 2026-06-30 at 11.57.02.webp",
                "/images/piw-2026/WhatsApp Image 2026-06-30 at 13.47.35.webp",
                "/images/piw-2026/WhatsApp Image 2026-06-30 at 15.14.07.webp",
                "/images/piw-2026/WhatsApp Image 2026-06-30 at 15.14.11.webp",
                "/images/piw-2026/WhatsApp Image 2026-06-30 at 16.10.28.webp",
              ].map((src, i) => (
                <div
                  key={src}
                  style={scaleIn(gallery.inView, i * 100)}
                  className={`overflow-hidden rounded-xl ring-1 ring-white/10 aspect-square ${i === 4 ? 'col-span-2 aspect-video' : ''}`}
                >
                  <img
                    src={src}
                    alt="PIW 2026 event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <EditionsTimeline />

      {/* ── Four Pillars ─────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div ref={pillarsRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p style={fadeUp(pillarsRef.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center">Why PIW 2026</p>
          <h2 style={fadeUp(pillarsRef.inView, 100)} className="text-3xl font-black text-gray-900 text-center mb-10">Four Pillars of Impact</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={p.title} style={scaleIn(pillarsRef.inView, 200 + i * 110)} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 rounded-xl ${p.bg} flex items-center justify-center mb-4`}>{p.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Event Stats ──────────────────────────────────── */}
      <section ref={stats.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p style={fadeUp(stats.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-10 text-center">Expected Impact</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "5,000+", label: "Expected Attendees" },
            { value: "6", label: "Days of Programming" },
            { value: "4", label: "Swahilipot Dialogues" },
            { value: "5", label: "Sectoral Pre-Conferences" },
          ].map((s, i) => (
            <div key={s.label} style={scaleIn(stats.inView, 80 + i * 100)} className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-100">
              <p className="text-3xl md:text-4xl font-black text-[#F97316] mb-1">{s.value}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section ref={cta.ref} className="bg-[#0a1628] mx-4 sm:mx-6 lg:mx-8 mb-16 rounded-2xl max-w-7xl lg:mx-auto">
        <div style={fadeUp(cta.inView)} className="px-8 sm:px-12 py-14 text-center">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4">Be Part of History</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Join Us at PIW 2026
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            The 10th anniversary edition of Swahilipot Hub Foundation. October 2026, Mombasa — the week the Coast takes the stage.
          </p>
          <Link
            to="/tickets"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#F97316]/25"
          >
            Register Interest <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
