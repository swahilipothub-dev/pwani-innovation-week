import { ArrowUpRight, CalendarDays, Clock3, Compass, Fish, MapPin, ShieldCheck, Ship, Users } from 'lucide-react';
import oceanImage from '../../client/public/images/ocean.jpeg';
import { useScrollReveal, fadeUp } from '@/hooks/useScrollReveal';

const challengeAreas = [
  { title: 'Smart Fisheries & Aquaculture', icon: Fish },
  { title: 'Maritime Trade, Ports & Logistics', icon: Ship },
  { title: 'Coastal Travel & Tourism', icon: Compass },
  { title: 'Cybersecurity', detail: 'Industry Talks & Hack The Box CTF', icon: ShieldCheck },
];

const Hackathon = () => {
  const content = useScrollReveal();

  return (
    <main className="min-h-screen page-shell pt-20">
      <section className="bg-[#062D49] text-white">
        <div ref={content.ref} className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <p style={fadeUp(content.inView, 0)} className="mb-5 inline-flex rounded-sm bg-[#F97316] px-3 py-2 text-xs font-bold uppercase tracking-wider text-white">Call for participants <span className="mx-2">|</span> OceanHack 2026</p>
            <h1 style={fadeUp(content.inView, 80)} className="mb-6 text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">Ocean<span className="text-[#F97316]">Hack</span> <span className="block text-3xl text-cyan-200 sm:text-4xl">2026</span></h1>
            <p style={fadeUp(content.inView, 140)} className="max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              Swahilipot Hub Foundation invites developers, designers, data and AI enthusiasts, cybersecurity practitioners and innovators to OceanHack 2026, the official Pre-Pwani Innovation Week Hackathon.
            </p>
            <p style={fadeUp(content.inView, 190)} className="mt-4 max-w-2xl leading-relaxed text-cyan-100">
              Over three days, participants will build digital solutions to real challenges facing the Indian Ocean economy.
            </p>

            <div style={fadeUp(content.inView, 240)} className="mt-8 grid max-w-2xl gap-4 border-y border-white/20 py-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#FDBA74]" aria-hidden="true" />
                <div><p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Dates</p><p className="mt-1 font-semibold">15th–17th October 2026</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#FDBA74]" aria-hidden="true" />
                <div><p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Daily</p><p className="mt-1 font-semibold">8:00 AM–4:00 PM</p></div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FDBA74]" aria-hidden="true" />
                <div><p className="text-xs font-bold uppercase tracking-wider text-cyan-200">Venue</p><p className="mt-1 font-semibold">Swahilipot Hub Foundation, Mombasa</p></div>
              </div>
            </div>

            <a
              href="https://swahilipot.jengasol.co.ke/survey/6182cfd0-fb7e-4b34-8841-72351a3fdc14"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#F97316] px-6 py-3 font-bold text-white transition-colors hover:bg-[#EA580C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
            >
              Apply to OceanHack
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <figure style={fadeUp(content.inView, 120)} className="mx-auto w-full max-w-xl overflow-hidden rounded-lg shadow-[0_24px_64px_rgba(0,0,0,0.35)] ring-1 ring-white/20">
            <img src={oceanImage} alt="OceanHack 2026 call for participants poster with event dates, venue, and challenge areas" className="block h-auto w-full" fetchPriority="high" />
            <figcaption className="sr-only">OceanHack 2026 takes place 15th–17th October at Swahilipot Hub Foundation in Mombasa.</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">Build for the Indian Ocean economy</p>
            <h2 className="text-3xl font-black text-[#062D49] sm:text-4xl">Challenge areas</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {challengeAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon className="mb-5 h-7 w-7 text-[#087E8B]" aria-hidden="true" />
                  <h3 className="text-lg font-bold leading-snug text-[#062D49]">{area.title}</h3>
                  {area.detail && <p className="mt-2 text-sm leading-relaxed text-slate-600">{area.detail}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF3F5]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-start gap-4">
            <Users className="mt-1 h-6 w-6 shrink-0 text-[#087E8B]" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-bold text-[#062D49]">Bring your idea. Beginners are welcome.</h2>
              <p className="mt-1 text-slate-700">Apply as an individual or as a team of 3–5.</p>
            </div>
          </div>
          <a
            href="https://swahilipot.jengasol.co.ke/survey/6182cfd0-fb7e-4b34-8841-72351a3fdc14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#062D49] px-6 py-3 font-bold text-white transition-colors hover:bg-[#087E8B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
          >
            Apply to OceanHack
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hackathon;
