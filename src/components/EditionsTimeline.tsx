import { useEffect, useRef, useState } from 'react';
import { Flag, CalendarCheck, Wifi, Users, Ship, Compass, Rocket, Trophy, Sparkles } from 'lucide-react';
import { useScrollReveal, fadeUp } from '@/hooks/useScrollReveal';

const editions = [
  {
    n: "1st", year: "2018", tag: "",
    title: "The Beginning",
    body: "Inaugural experimental edition that established PIW as a viable platform for coastal innovation.",
    icon: Flag,
    accent: "text-slate-300", badge: "bg-slate-500/15 border-slate-400/30", chip: "bg-slate-500/15 text-slate-200",
  },
  {
    n: "2nd", year: "2019", tag: "",
    title: "A Fixture is Born",
    body: "Cemented PIW as a permanent fixture on the coastal innovation calendar.",
    icon: CalendarCheck,
    accent: "text-violet-300", badge: "bg-violet-500/15 border-violet-400/30", chip: "bg-violet-500/15 text-violet-200",
  },
  {
    n: "2nd", year: "2020", tag: "Special Edition",
    title: "Digital-First",
    body: "Adapted format during the pandemic period; digital-first convening maintained the coastal innovation community when in-person gathering was not possible.",
    icon: Wifi,
    accent: "text-sky-300", badge: "bg-sky-500/15 border-sky-400/30", chip: "bg-sky-500/15 text-sky-200",
  },
  {
    n: "3rd", year: "2021", tag: "",
    title: "Back In Person",
    body: "Re-established in-person convening and continued growing the platform's reach across coastal counties.",
    icon: Users,
    accent: "text-emerald-300", badge: "bg-emerald-500/15 border-emerald-400/30", chip: "bg-emerald-500/15 text-emerald-200",
  },
  {
    n: "4th", year: "2023", tag: "Sailing Beyond Borders",
    title: "Sailing Beyond Borders",
    body: "12 plenary sessions, 30 keynote speakers, and 3 hackathons brought together more than 1,200 participants in a stronger regional conversation.",
    stat: "1,200+ participants",
    icon: Ship,
    accent: "text-orange-300", badge: "bg-orange-500/15 border-orange-400/30", chip: "bg-orange-500/15 text-orange-200",
  },
  {
    n: "5th", year: "2024", tag: "The Pwani We Desire",
    title: "The Pwani We Desire",
    body: "The Pwani We Desire: Youth, Culture, Peace and Innovation in the Decade of Action featured 10 plenary sessions, 28 keynote speakers, 4 workshops, and 20 innovation showcases. It also marked PIW's first cross-border collaboration with Tanga Yetu, Tanzania.",
    stat: "2,000+ participants",
    icon: Compass,
    accent: "text-rose-300", badge: "bg-rose-500/15 border-rose-400/30", chip: "bg-rose-500/15 text-rose-200",
  },
  {
    n: "6th", year: "2025", tag: "Pwani Re-Imagined",
    title: "Pwani Re-Imagined",
    body: "Pwani Re-Imagined: Youth Agency, Innovation & Sustainability of Coastal Economies deepened the Blue, Green, and Creative Economy tracks; expanded East African coastline participation; and introduced Deals Den and Pwani Accelerate.",
    icon: Rocket,
    accent: "text-indigo-300", badge: "bg-indigo-500/15 border-indigo-400/30", chip: "bg-indigo-500/15 text-indigo-200",
  },
  {
    n: "7th", year: "2026", tag: "A Decade and Beyond",
    title: "A Decade and Beyond",
    body: "The Swahilipot Hub 10th Anniversary milestone edition, launching the Pwani Innovation Agenda 2026–2036 and bringing the next chapter of coastal innovation into focus.",
    stat: "Targeting 2,500+ participants",
    icon: Trophy,
    accent: "text-[#F97316]", badge: "bg-[#F97316]/15 border-[#F97316]/40", chip: "bg-white/10 text-orange-300",
    current: true,
  },
];

const EditionsTimeline = () => {
  const head = useScrollReveal();
  const stageRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = editions.length;

  useEffect(() => {
    let ticking = false;

    const computeActive = () => {
      ticking = false;
      const el = stageRef.current;
      if (!el) return;
      const stickyHeight = stickyRef.current?.getBoundingClientRect().height ?? window.innerHeight;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - stickyHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      const idx = Math.min(total - 1, Math.floor(progress * total));
      setActiveIndex(idx);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(computeActive);
    };

    computeActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [total]);

  const jumpTo = (i: number) => {
    const el = stageRef.current;
    if (!el) return;
    const stickyHeight = stickyRef.current?.getBoundingClientRect().height ?? window.innerHeight;
    const rect = el.getBoundingClientRect();
    const scrollable = rect.height - stickyHeight;
    const targetProgress = (i + 0.5) / total;
    const targetY = window.scrollY + rect.top + scrollable * targetProgress;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section className="relative border-y border-gray-100 bg-[#120b24]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        <div ref={head.ref} className="max-w-2xl mx-auto text-center mb-6">
          <p style={fadeUp(head.inView, 0)} className="text-xs text-[#FDBA74] font-bold uppercase tracking-widest mb-3">Our Journey</p>
          <h2 style={fadeUp(head.inView, 100)} className="text-3xl md:text-4xl font-black text-white leading-tight">
            PIW Through the Editions
          </h2>
          <p style={fadeUp(head.inView, 200)} className="mt-4 text-white/65 leading-relaxed">
            From an experimental gathering in 2018 to a decade-defining, region-spanning convention — each edition has evolved to meet the coast's entrepreneurial and innovation needs, strengthening cross-border collaboration along the way.
          </p>
        </div>

        {/* ── Pinned stage: scroll through the section, one edition on screen at a time ── */}
        <div ref={stageRef} className="relative" style={{ height: `${total * 70}vh` }}>
          <div ref={stickyRef} className="sticky top-20 h-[70vh] overflow-hidden flex items-center justify-center">

            {/* background: stretched PIW logo watermark, scoped to the pinned box */}
            <img
              src="/piw_logo.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-fill opacity-[0.07]"
            />
            <div className="absolute inset-0 bg-[#120b24]/70" />

            {/* progress rail */}
            <div className="hidden sm:flex absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20">
              {editions.map((e, i) => (
                <button
                  key={`${e.n}-${e.year}-dot`}
                  onClick={() => jumpTo(i)}
                  aria-label={`Jump to ${e.year} edition`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-2.5 h-6 bg-[#F97316]' : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {editions.map((e, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              const Icon = e.icon;
              return (
                <div
                  key={`${e.n}-${e.year}-${i}`}
                  aria-hidden={!isActive}
                  className={`absolute inset-0 flex items-center justify-center px-4 transition-all duration-700 ease-out ${
                    isActive
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                      : `opacity-0 pointer-events-none ${isPast ? '-translate-y-10 scale-95' : 'translate-y-10 scale-95'}`
                  }`}
                >
                  <div
                    className={`w-full max-w-2xl group relative rounded-3xl border bg-white/[0.04] backdrop-blur-md p-7 sm:p-10 max-h-[58vh] overflow-y-auto shadow-[0_20px_50px_rgba(2,8,23,0.35)] ${
                      e.current ? 'border-[#F97316]/40' : 'border-white/10'
                    }`}
                  >
                    {/* giant faint index numeral */}
                    <span className="pointer-events-none select-none absolute -top-2 right-4 text-[7rem] sm:text-[8.5rem] font-black leading-none text-white/[0.04]">
                      {e.n}
                    </span>

                    {e.current && (
                      <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 bg-[#F97316] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                        <Sparkles className="w-3 h-3" /> You Are Here
                      </span>
                    )}

                    <div className="relative flex items-center gap-4 mb-5">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl border flex items-center justify-center ${e.badge}`}>
                        <Icon className={`w-6 h-6 ${e.accent}`} />
                      </div>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-widest ${e.accent}`}>
                          {e.n} Edition{e.tag && e.tag !== e.title ? ` · ${e.tag}` : ''}
                        </p>
                        <p className="text-2xl font-black text-white">{e.year}</p>
                      </div>
                    </div>

                    <h3 className="relative text-xl sm:text-2xl font-black mb-3 text-white">{e.title}</h3>
                    <p className="relative text-sm sm:text-base leading-relaxed text-white/70">{e.body}</p>

                    {e.stat && (
                      <span className={`relative inline-block mt-5 text-xs font-bold px-3 py-1.5 rounded-full ${e.chip}`}>
                        {e.stat}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* position counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold tracking-widest">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditionsTimeline;
