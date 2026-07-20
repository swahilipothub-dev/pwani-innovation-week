import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, Leaf, Palette, Rocket, Globe, Sparkles, Users, Calendar, ArrowRight } from 'lucide-react';
import { useScrollReveal, fadeUp, fadeLeft, fadeRight, scaleIn } from '@/hooks/useScrollReveal';

const economies = [
  {
    icon: <Waves className="w-6 h-6 text-white" />,
    color: "bg-[#0EA5E9]",
    light: "bg-[#0EA5E9]/6 border-[#0EA5E9]/20",
    title: "Blue Economy",
    body: "Aquaculture, marine resources, and the tourism value chain — unlocking sustainable livelihoods from the coastline itself.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-white" />,
    color: "bg-[#22C55E]",
    light: "bg-[#22C55E]/6 border-[#22C55E]/20",
    title: "Green Economy",
    body: "Climate action, renewable energy, and conservation-led enterprise building resilience across coastal communities.",
  },
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    color: "bg-[#9b87f5]",
    light: "bg-[#9b87f5]/6 border-[#9b87f5]/20",
    title: "Creative Economy",
    body: "Music, art, fashion, and cultural industries turning Pwani's identity into a globally competitive creative sector.",
  },
];

const gallery = [
  { src: "/images/piw-2026/WhatsApp Image 2026-06-30 at 11.57.02.jpeg", label: "Hackathons & Tech", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/piw-2026/WhatsApp Image 2026-06-30 at 13.47.35.jpeg", label: "Keynote Sessions", span: "" },
  { src: "/images/piw-2026/WhatsApp Image 2026-06-30 at 14.03.23.jpeg", label: "Investor Deal Rooms", span: "" },
  { src: "/images/piw-2026/WhatsApp Image 2026-06-30 at 15.14.03.jpeg", label: "Utamaduni Village", span: "" },
  { src: "/images/piw-2026/WhatsApp Image 2026-06-30 at 15.14.07.jpeg", label: "Youth Innovators", span: "" },
  { src: "/images/piw-2026/WhatsApp Image 2026-06-30 at 15.14.09.jpeg", label: "Panel Discussions", span: "sm:col-span-2" },
  { src: "/images/piw-2026/WhatsApp Image 2026-06-30 at 16.10.28.jpeg", label: "The Grand Concert", span: "" },
];

const stats = [
  { icon: <Users className="w-4 h-4" />, value: "2,500+", label: "Participants" },
  { icon: <Calendar className="w-4 h-4" />, value: "6", label: "Days of Programming" },
  { icon: <Sparkles className="w-4 h-4" />, value: "7th", label: "Edition" },
  { icon: <Globe className="w-4 h-4" />, value: "East Africa", label: "Regional Reach" },
];

const DecadeAndBeyond = () => {
  const intro = useScrollReveal();
  const econHead = useScrollReveal();
  const econCards = useScrollReveal();
  const agenda = useScrollReveal();
  const statsRow = useScrollReveal();
  const galleryHead = useScrollReveal();
  const galleryGrid = useScrollReveal();

  return (
    <section className="relative bg-[#fbf9f6] overflow-hidden">
      {/* decorative background glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F97316]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#0EA5E9]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ── INTRO ─────────────────────────────────── */}
        <div ref={intro.ref} className="max-w-3xl mx-auto text-center mb-20">
          <span style={fadeUp(intro.inView, 0)} className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" /> 2016 – 2026 · A Decade of Impact
          </span>
          <h2 style={fadeUp(intro.inView, 100)} className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            A Decade and Beyond:<br />
            <span className="text-[#F97316]">Youth, Innovation &amp; Coastal Futures</span>
          </h2>
          <p style={fadeUp(intro.inView, 200)} className="text-gray-600 text-lg leading-relaxed">
            Pwani Innovation Week is a Pwani-led, youth-driven annual convening — the premier gathering for youth, entrepreneurs, investors, creatives, and changemakers co-creating localised solutions for sustainable growth along Kenya's coast and across the East African coastline.
          </p>
          <p style={fadeUp(intro.inView, 280)} className="mt-4 text-gray-500 leading-relaxed">
            Now in its 7th edition, PIW 2026 coincides with the <strong className="text-gray-800">Swahilipot Hub Foundation's 10th Anniversary</strong>. This milestone edition celebrates a decade of impact while charting the next ten years of coastal transformation.
          </p>
        </div>

        {/* ── ECONOMY PILLARS ──────────────────────── */}
        <div ref={econHead.ref} className="text-center max-w-2xl mx-auto mb-12">
          <p style={fadeUp(econHead.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Deepening Our Focus</p>
          <h3 style={fadeUp(econHead.inView, 100)} className="text-2xl md:text-3xl font-black text-gray-900">
            Blue, Green &amp; Creative Economies
          </h3>
        </div>

        <div ref={econCards.ref} className="grid md:grid-cols-3 gap-6 mb-24">
          {economies.map((e, i) => (
            <div
              key={e.title}
              style={scaleIn(econCards.inView, i * 120)}
              className={`group rounded-2xl border p-8 ${e.light} transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5`}
            >
              <div className={`w-12 h-12 rounded-xl ${e.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                {e.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{e.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>

        {/* ── AGENDA 2026-2036 CALLOUT ─────────────── */}
        <div ref={agenda.ref} style={fadeUp(agenda.inView)} className="relative rounded-3xl bg-[#0a1628] overflow-hidden mb-24">
          <div className="absolute inset-0 opacity-20">
            <img src="/images/piw-2026/WhatsApp Image 2026-06-30 at 16.18.08.jpeg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/70" />
          <div className="relative z-10 px-8 sm:px-12 py-14 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#F97316] flex items-center justify-center">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Launching at PIW 2026</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                The Pwani Innovation Agenda 2026 – 2036
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl">
                A bold, co-created ten-year roadmap for the coastal region — building on the success of previous editions to expand East African participation and chart the next decade of Blue, Green, and Creative Economy transformation.
              </p>
            </div>
            <Link
              to="/about"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white hover:bg-orange-50 text-[#0a1628] font-bold text-sm px-6 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Read the Agenda <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* ── STATS ─────────────────────────────────── */}
        <div ref={statsRow.ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={scaleIn(statsRow.inView, i * 90)}
              className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F97316]/10 text-[#F97316] mb-3">
                {s.icon}
              </div>
              <p className="text-2xl md:text-3xl font-black text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── PHOTO GALLERY ─────────────────────────── */}
        <div ref={galleryHead.ref} className="max-w-2xl mb-10">
          <p style={fadeUp(galleryHead.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Moments From the Coast</p>
          <h3 style={fadeUp(galleryHead.inView, 100)} className="text-2xl md:text-3xl font-black text-gray-900">
            Six Days, One Movement
          </h3>
        </div>

        <div ref={galleryGrid.ref} className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] gap-4">
          {gallery.map((g, i) => (
            <div
              key={g.label}
              style={scaleIn(galleryGrid.inView, i * 90)}
              className={`gallery-card group relative overflow-hidden rounded-2xl shadow-md cursor-pointer ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="gallery-shine absolute inset-0" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-sm leading-tight drop-shadow-sm">{g.label}</p>
                <span className="block h-0.5 w-8 bg-[#F97316] mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .gallery-shine {
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%);
          background-size: 200% 200%;
          background-position: -100% -100%;
          transition: background-position 0.8s ease;
          pointer-events: none;
        }
        .gallery-card:hover .gallery-shine {
          background-position: 100% 100%;
        }
      `}</style>
    </section>
  );
};

export default DecadeAndBeyond;
