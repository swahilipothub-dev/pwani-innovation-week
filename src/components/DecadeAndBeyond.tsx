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
  { src: "/images/A21I1862.jpg", label: "Hackathons & Tech", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/A26I5421.jpg", label: "Keynote Sessions", span: "" },
  { src: "/images/A26I5516.jpg", label: "Investor Deal Rooms", span: "" },
  { src: "/images/new/download (2).jpg", label: "Utamaduni Village", span: "" },
  { src: "/images/DSC_5052.jpg", label: "Youth Innovators", span: "" },
  { src: "/images/DSC_5665.jpg", label: "Panel Discussions", span: "sm:col-span-2" },
  { src: "/images/DSC_8833.jpg", label: "The Grand Concert", span: "" },
];

const stats = [
  { icon: <Users className="w-4 h-4" />, value: "2,500+", label: "Participants" },
  { icon: <Calendar className="w-4 h-4" />, value: "6", label: "Days of Programming" },
  { icon: <Sparkles className="w-4 h-4" />, value: "7th", label: "Edition" },
  { icon: <Globe className="w-4 h-4" />, value: "East Africa", label: "Regional Reach" },
];

const DecadeAndBeyond = () => {
  const executiveSummary = useScrollReveal();
  const econHead = useScrollReveal();
  const econCards = useScrollReveal();
  const agenda = useScrollReveal();
  const statsRow = useScrollReveal();
  const galleryHead = useScrollReveal();
  const galleryGrid = useScrollReveal();

  return (
    <section className="relative bg-[#fbf9f6] overflow-hidden border-y border-[#f1ece4]">
      {/* decorative background glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F97316]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#0EA5E9]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ── EXECUTIVE SUMMARY ────────────────────── */}
        <section ref={executiveSummary.ref} className="mb-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p style={fadeUp(executiveSummary.inView, 0)} className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#F97316]">
                2016 – 2026 · A Decade of Impact
              </p>
              <h2 style={fadeUp(executiveSummary.inView, 100)} className="mb-6 max-w-3xl font-serif text-3xl font-bold italic leading-tight text-gray-900 sm:text-4xl">
                A Decade and Beyond: Youth, Innovation &amp; Coastal Futures
              </h2>
              <p style={fadeUp(executiveSummary.inView, 180)} className="text-base leading-relaxed text-gray-600">
                Pwani Innovation Week (PIW) is a Pwani-led, youth-driven annual convening that has become the premier point of convergence for youth, entrepreneurs, investors, creatives, and changemakers to co-create localised solutions for sustainable growth along Kenya&apos;s coast and across the East African coastline. Now entering its 7th edition, PIW has evolved to fit the entrepreneurial and innovation ecosystem of Pwani squarely, addressing emerging regional needs through synergy-led discourse, action-oriented programming, and a relentless focus on coastal youth as the primary architects of change.
              </p>
            </div>

            <div style={fadeRight(executiveSummary.inView, 180)} className="relative overflow-hidden rounded-2xl bg-[#F97316] p-7 text-white shadow-[0_16px_36px_rgba(2,8,23,0.16)] sm:p-9">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-white/15" />
              <p className="relative text-sm leading-relaxed text-white/95">
                Building on the momentum of PIW 2025, the 2026 edition deepens the Blue Economy, Green Economy, and Creative Economy tracks; expands East African coastline participation; and introduces a landmark new activity, the co-creation and public launch of the Pwani Innovation Agenda 2026–2036, a ten-year roadmap for coastal economic transformation.
              </p>
              <div className="relative mt-7 h-0.5 w-full bg-white/80" />
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <p style={fadeLeft(executiveSummary.inView, 260)} className="text-base leading-relaxed text-gray-600">
              The 2026 edition arrives at a uniquely defining moment: it marks Swahilipot Hub Foundation&apos;s 10th Anniversary (2016–2026), a decade of transforming youth potential into enterprise, civic agency, and creative power along the Kenyan coast. Under the theme “A Decade and Beyond: Youth, Innovation &amp; Coastal Futures,” PIW 2026 holds two stories in equal tension: a celebration of ten years of institutional staying power, and a declaration that everything built over a decade is a foundation, not a finish line.
            </p>
            <div style={scaleIn(executiveSummary.inView, 260)} className="grid grid-cols-2 gap-4">
              <img src="/images/image1 (3).jpg" alt="PIW cultural performance" className="h-48 w-full rounded-2xl object-cover shadow-[0_14px_28px_rgba(2,8,23,0.12)] sm:h-60" />
              <img src="/images/image2.jpg" alt="PIW community showcase" className="mt-8 h-48 w-full rounded-2xl object-cover shadow-[0_14px_28px_rgba(2,8,23,0.12)] sm:h-60" />
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <img style={fadeUp(executiveSummary.inView, 340)} src="/images/A21I1862.jpg" alt="Pwani Innovation Week participants" className="h-64 w-full rounded-2xl object-cover shadow-[0_14px_28px_rgba(2,8,23,0.12)] sm:h-72" />
            <p style={fadeRight(executiveSummary.inView, 340)} className="text-base leading-relaxed text-gray-600">
              PIW 2026 will convene 2,500+ participants across six days, delivering five thematic tracks, a flagship Deals Den investment showcase, three innovation hackathons, Utamaduni cultural village showcase, field tours, cross-border dialogues, and Pwani Got Talent (PGT), the Grand Closing Concert that brings together the best creative voices in the region.
            </p>
          </div>
        </section>

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
              className={`group rounded-2xl border p-8 ${e.light} shadow-[0_10px_24px_rgba(2,8,23,0.05)] transition-all duration-300 hover:shadow-[0_16px_32px_rgba(2,8,23,0.08)]`}
            >
              <div className={`w-12 h-12 rounded-xl ${e.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105`}>
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
            <img src="/images/piw-2026/WhatsApp Image 2026-06-30 at 16.17.35.jpeg" alt="" className="w-full h-full object-cover" />
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
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white hover:bg-orange-50 text-[#0a1628] font-bold text-sm px-6 py-3.5 rounded-lg transition-all duration-200 shadow-[0_10px_24px_rgba(2,8,23,0.16)] whitespace-nowrap"
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
              className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_24px_rgba(2,8,23,0.05)] hover:shadow-[0_14px_28px_rgba(2,8,23,0.08)] transition-all duration-300"
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
              className={`gallery-card group relative overflow-hidden rounded-2xl shadow-[0_14px_30px_rgba(2,8,23,0.12)] ring-1 ring-black/5 cursor-pointer ${g.span}`}
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
          background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%);
          background-size: 220% 220%;
          background-position: -110% -110%;
          transition: background-position 0.9s ease;
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
