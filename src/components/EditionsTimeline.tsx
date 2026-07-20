import { Sparkles } from 'lucide-react';
import { useScrollReveal, fadeUp, fadeLeft, fadeRight, scaleIn } from '@/hooks/useScrollReveal';

const editions = [
  {
    n: "1st", year: "2018", tag: "",
    title: "The Beginning",
    body: "Inaugural experimental edition that established PIW as a viable platform for coastal innovation.",
  },
  {
    n: "2nd", year: "2019", tag: "",
    title: "A Fixture is Born",
    body: "Cemented PIW as a permanent fixture on the coastal innovation calendar.",
  },
  {
    n: "2nd", year: "2020", tag: "Special Edition",
    title: "Digital-First",
    body: "A digital-first format during the pandemic, keeping the community connected when it mattered most.",
  },
  {
    n: "3rd", year: "2021", tag: "",
    title: "Back In Person",
    body: "A successful return to in-person format, with expanded reach across coastal counties.",
  },
  {
    n: "4th", year: "2023", tag: "Sailing Beyond Borders",
    title: "Sailing Beyond Borders",
    body: "12 plenaries, 30 keynote speakers, and 3 hackathons brought together over 1,200 participants.",
    stat: "1,200+ participants",
  },
  {
    n: "5th", year: "2024", tag: "The Pwani We Desire",
    title: "The Pwani We Desire",
    body: "The first cross-border collaboration — with Tanga Yetu, Tanzania — drew 2,000+ participants.",
    stat: "2,000+ participants",
  },
  {
    n: "6th", year: "2025", tag: "Pwani Re-Imagined",
    title: "Pwani Re-Imagined",
    body: "Deepened Blue, Green & Creative Economy tracks, and introduced the Deals Den and Pwani Accelerate.",
  },
  {
    n: "7th", year: "2026", tag: "A Decade and Beyond",
    title: "A Decade and Beyond",
    body: "The Swahilipot Hub 10th Anniversary milestone edition, launching the Pwani Innovation Agenda 2026–2036.",
    stat: "Targeting 2,500+ participants",
    current: true,
  },
];

const EditionsTimeline = () => {
  const head = useScrollReveal();
  const rowRef = useScrollReveal({ threshold: 0.08 });

  return (
    <section className="bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div ref={head.ref} className="max-w-2xl mx-auto text-center mb-16">
          <p style={fadeUp(head.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Our Journey</p>
          <h2 style={fadeUp(head.inView, 100)} className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            PIW Through the Editions
          </h2>
          <p style={fadeUp(head.inView, 200)} className="mt-4 text-gray-500 leading-relaxed">
            From an experimental gathering in 2018 to a decade-defining, region-spanning convention — each edition has evolved to meet the coast's entrepreneurial and innovation needs, strengthening cross-border collaboration along the way.
          </p>
        </div>

        <div ref={rowRef.ref} className="relative">
          {/* center spine — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-2 bottom-2 w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-6 lg:space-y-0">
            {editions.map((e, i) => {
              const fromSide = i % 2 === 0 ? fadeLeft : fadeRight;
              return (
                <div
                  key={`${e.n}-${e.year}-${i}`}
                  className={`relative lg:flex lg:items-center ${i % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}
                >
                  {/* center node — desktop only */}
                  <div
                    style={scaleIn(rowRef.inView, i * 70)}
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10 ${e.current ? 'bg-[#F97316] shadow-[0_0_0_4px_rgba(249,115,22,0.25)] animate-pulse' : 'bg-gray-300'}`}
                  />

                  <div
                    style={fromSide(rowRef.inView, i * 70)}
                    className={`w-full lg:w-[46%] group relative rounded-2xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      e.current
                        ? 'bg-[#0a1628] border-[#F97316]/40 shadow-lg shadow-[#F97316]/10'
                        : 'bg-white border-gray-200 hover:border-[#F97316]/30'
                    }`}
                  >
                    {e.current && (
                      <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 bg-[#F97316] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        <Sparkles className="w-3 h-3" /> You Are Here
                      </span>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm ${e.current ? 'bg-[#F97316] text-white' : 'bg-orange-50 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300'}`}>
                        {e.n}
                      </div>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-widest ${e.current ? 'text-[#F97316]' : 'text-gray-400'}`}>
                          {e.n} Edition{e.tag === 'Special Edition' ? ` · ${e.tag}` : ''}
                        </p>
                        <p className={`text-lg font-black ${e.current ? 'text-white' : 'text-gray-900'}`}>{e.year}</p>
                      </div>
                    </div>

                    <h3 className={`text-base font-bold mb-2 ${e.current ? 'text-white' : 'text-gray-900'}`}>{e.title}</h3>
                    <p className={`text-sm leading-relaxed ${e.current ? 'text-white/60' : 'text-gray-500'}`}>{e.body}</p>

                    {e.stat && (
                      <span className={`inline-block mt-4 text-xs font-bold px-3 py-1.5 rounded-full ${e.current ? 'bg-white/10 text-orange-300' : 'bg-orange-50 text-[#F97316]'}`}>
                        {e.stat}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditionsTimeline;
