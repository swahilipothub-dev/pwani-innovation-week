import { useScrollReveal, fadeUp, fadeLeft, fadeRight } from '@/hooks/useScrollReveal';

const themeBreakdown = [
  {
    title: "A Decade & Beyond",
    body: "The anniversary anchor: a decade of proof, institutional memory, and staying power for a community-rooted model. And Beyond leans forward, signalling that everything built in ten years is a foundation, not a finish line.",
    surface: "bg-white border-gray-200",
    titleTone: "text-[#c2410c]",
    stripe: "bg-[#F97316]",
  },
  {
    title: "Youth",
    body: "Swahilipot's non-negotiable centre of gravity. Youth here is not a target beneficiary category; it is the subject and the agent. PIW 2026 frames young people not as recipients of innovation, but as its primary architects.",
    surface: "bg-white border-gray-200",
    titleTone: "text-[#075985]",
    stripe: "bg-[#0EA5E9]",
  },
  {
    title: "Innovation",
    body: "The methodology and the marketplace. Innovation at PIW is both a practice, how coastal communities solve their own problems, and an economy of startups, digital platforms, creative enterprises, green manufacturing, and blue economy ventures.",
    surface: "bg-white border-gray-200",
    titleTone: "text-[#1d4ed8]",
    stripe: "bg-[#1D4ED8]",
  },
  {
    title: "Coastal Futures",
    body: "The destination, deliberately plural. Coastal Futures means multiple pathways, multiple communities, and multiple visions of prosperity being built simultaneously across Mombasa, Kilifi, Kwale, Lamu, Tana River, and the broader East African coastline.",
    surface: "bg-white border-gray-200",
    titleTone: "text-[#166534]",
    stripe: "bg-[#22C55E]",
  },
];

const ThemeBreakdown = () => {
  const theme = useScrollReveal();

  return (
    <section ref={theme.ref} className="home-section-frame relative overflow-hidden bg-gradient-to-b from-[#eef4ff] via-[#edf3ff] to-[#e8f0fd] py-20 md:py-24 border-[#d9e5f7]">
      <div className="absolute inset-0">
        <img src="/images/new/download (8).webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#eef4ff]/88" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1.5px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />
      <div className="pointer-events-none absolute -right-20 top-8 h-56 w-56 border-[20px] border-[#F97316]/8" />
      <div className="pointer-events-none absolute -left-12 bottom-6 h-44 w-56 bg-[#38a6df]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p style={fadeUp(theme.inView, 0)} className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">The idea behind 2026</p>
          <h2 style={fadeUp(theme.inView, 100)} className="text-3xl md:text-4xl font-black leading-tight text-gray-900">
            Breaking Down the <span className="text-[#F97316]">Theme</span>
          </h2>
          <p style={fadeUp(theme.inView, 200)} className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600">
            Pwani Innovation Week is a Pwani-led, youth-driven annual convening where entrepreneurs, investors, creatives, and changemakers co-create localised solutions for sustainable growth along Kenya's coast and across the East African coastline.
          </p>
        </div>

        <div className="space-y-5">
          {themeBreakdown.map((item, index) => (
            <article
              key={item.title}
              style={index % 2 === 0 ? fadeLeft(theme.inView, 100 + index * 90) : fadeRight(theme.inView, 100 + index * 90)}
              className={`group relative grid gap-6 overflow-hidden rounded-2xl border px-6 py-7 shadow-[0_12px_26px_rgba(2,8,23,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(2,8,23,0.10)] sm:grid-cols-[230px_1fr] sm:items-start sm:px-10 ${item.surface}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${item.stripe}`} />
              <div className="sm:pr-6 sm:border-r sm:border-black/10">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Theme Pillar</p>
                <h3 className={`text-2xl font-black leading-tight sm:text-3xl ${item.titleTone}`}>{item.title}</h3>
              </div>
              <p className="max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeBreakdown;
