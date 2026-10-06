import { ArrowUpRight, CalendarDays, Clock3, MapPin, Music2, Sparkles } from 'lucide-react';
import pgtBanner from '../../client/public/piw_banner.jpeg';
import pgtVideo from '../../client/public/pgt_mg.mp4';

const performanceTypes = [
  'Music',
  'Dance',
  'Spoken word',
  'Comedy',
  'Fashion',
  'DJ performances',
  'Live bands',
  'Artist performances',
  'Creative arts',
  'Emerging talent',
];

const PwaniGotTalent = () => (
  <main className="min-h-screen bg-[#180b09] pt-24 text-white">
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_35%,rgba(249,115,22,0.2),transparent_38%),radial-gradient(ellipse_at_90%_8%,rgba(250,204,21,0.12),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.78fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
            <Music2 className="h-4 w-4" aria-hidden="true" /> Swahilipot FM Radio presents
          </p>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.92] sm:text-6xl lg:text-7xl">Pwani <span className="text-[#FDBA74]">Gat Talent</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-orange-50/85 sm:text-xl">
            The Coast takes the stage for a full-throttle celebration of creativity, from live bands and dance to spoken word, comedy, fashion, and emerging talent.
          </p>

          <div className="mt-9 grid max-w-xl gap-4 border-y border-white/15 py-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
              <div><p className="text-xs font-bold uppercase tracking-wider text-white/50">Date</p><p className="mt-1 font-semibold">Saturday, 31 October 2026</p></div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
              <div><p className="text-xs font-bold uppercase tracking-wider text-white/50">Time</p><p className="mt-1 font-semibold">From 2 PM till late</p></div>
            </div>
            <div className="flex items-start gap-3 sm:col-span-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
              <div><p className="text-xs font-bold uppercase tracking-wider text-white/50">Venue</p><p className="mt-1 font-semibold">Gymkhana, Mombasa · near KRA offices</p></div>
            </div>
          </div>

          <a
            href="https://soldoutafrica.com/pwani-gat-talent"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3 font-bold text-white transition-colors hover:bg-[#EA580C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          >
            Get PGT tickets <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <p className="mt-3 text-sm text-white/50">Tickets available now via Sold Out Africa.</p>
        </div>

        <figure className="mx-auto w-full max-w-md rounded-xl bg-[#3d170d] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.45)] ring-1 ring-orange-200/20 sm:p-3">
          <img src={pgtBanner} alt="Pwani Gat Talent event poster with date, performance categories, ticket information, and Gymkhana venue" className="block h-auto w-full rounded-lg" fetchPriority="high" />
          <figcaption className="sr-only">Pwani Gat Talent, 31 October 2026, from 2 PM till late at Gymkhana, Mombasa.</figcaption>
        </figure>
      </div>
    </section>

    <section className="border-t border-orange-100/10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.16),transparent_55%),linear-gradient(145deg,#3d170d,#180b09_70%)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Feel the energy</p>
        <h2 className="max-w-2xl text-3xl font-black sm:text-4xl">A taste of Pwani Gat Talent.</h2>
        <video
          className="mt-8 aspect-video w-full rounded-xl bg-[#3d170d] object-contain shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
          autoPlay
          muted
          loop
          controls
          playsInline
          preload="auto"
          poster={pgtBanner}
        >
          <source src={pgtVideo} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    </section>

    <section className="border-t border-white/10 bg-[#100806]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300"><Sparkles className="h-4 w-4" aria-hidden="true" /> PGT celebrates creativity in every form</p>
        <h2 className="max-w-2xl text-3xl font-black sm:text-4xl">One stage. Every kind of talent.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {performanceTypes.map((type) => (
            <span key={type} className="rounded-full border border-orange-100/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-orange-50/90">{type}</span>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default PwaniGotTalent;