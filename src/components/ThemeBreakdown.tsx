import { useScrollReveal, fadeUp, fadeLeft, fadeRight } from '@/hooks/useScrollReveal';

const themeBreakdown = [
  {
    title: "A Decade & Beyond",
    body: "The anniversary anchor: a decade of proof, institutional memory, and staying power for a community-rooted model. And Beyond leans forward, signalling that everything built in ten years is a foundation, not a finish line.",
    tone: "bg-[#fff3e8] text-[#ea580c] border-[#ea580c]",
  },
  {
    title: "Youth",
    body: "Swahilipot's non-negotiable centre of gravity. Youth here is not a target beneficiary category; it is the subject and the agent. PIW 2026 frames young people not as recipients of innovation, but as its primary architects.",
    tone: "bg-[#e9f5ff] text-[#0369a1] border-[#0369a1]",
  },
  {
    title: "Innovation",
    body: "The methodology and the marketplace. Innovation at PIW is both a practice, how coastal communities solve their own problems, and an economy of startups, digital platforms, creative enterprises, green manufacturing, and blue economy ventures.",
    tone: "bg-[#edf4ff] text-[#1d4ed8] border-[#1d4ed8]",
  },
  {
    title: "Coastal Futures",
    body: "The destination, deliberately plural. Coastal Futures means multiple pathways, multiple communities, and multiple visions of prosperity being built simultaneously across Mombasa, Kilifi, Kwale, Lamu, Tana River, and the broader East African coastline.",
    tone: "bg-[#eaf8f0] text-[#15803d] border-[#15803d]",
  },
];

const ThemeBreakdown = () => {
  const theme = useScrollReveal();

  return (
    <section ref={theme.ref} className="relative overflow-hidden bg-[#eef4ff] py-20 md:py-24 border-y border-[#d9e5f7]">
      <div className="absolute inset-0">
        <img src="/images/new/download (5).jpg" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#eef4ff]/85" />
      </div>
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full border-[28px] border-[#F97316]/8" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#38a6df]/8 blur-3xl" />
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
              className={`group grid gap-6 rounded-none border border-l-4 px-6 py-7 shadow-[0_10px_24px_rgba(2,8,23,0.05)] transition-all duration-300 hover:shadow-[0_14px_28px_rgba(2,8,23,0.08)] sm:grid-cols-[220px_1fr] sm:items-center sm:px-10 ${item.tone}`}
            >
                <h3 className="text-2xl font-black leading-tight sm:text-3xl">{item.title}</h3>
              <p className="max-w-4xl text-sm leading-relaxed text-gray-700 sm:text-base">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeBreakdown;
