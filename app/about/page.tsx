import Eyebrow from "@/components/Eyebrow";
import Placeholder from "@/components/Placeholder";
import { JOURNEY } from "@/lib/data";

export const metadata = { title: "About — Pwani Innovation Week" };

export default function About() {
  return (
    <>
      <section className="container-site pt-20">
      <Eyebrow>About</Eyebrow>
      <h1 className="h-display text-[clamp(44px,5.5vw,76px)] mt-5 max-w-[900px] text-balance">A week built to devolve innovation to the Coast.</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-14 items-start">
          <Placeholder label="photo · Swahilipot Hub courtyard" className="aspect-[4/3] rounded-[18px] text-xs" />
          <div className="text-[17px] leading-[1.65] text-slate-700 flex flex-col gap-[18px]">
            <p>Pwani Innovation Week (PIW) is a consolidated effort by Swahilipot Hub Foundation and its partners to create a widespread culture of innovation and stimulate the innovation ecosystem in the Coastal (Pwani) region of eastern Africa.</p>
            <p>It is the meeting point of startups, innovators, entrepreneurs, enablers, established companies, government agencies and academia — a shared platform to understand, demonstrate and articulate ideas, needs and solutions for sustainable economic development.</p>
            <p>Launched in December 2018 in Mombasa, the week now anchors a regional innovation strategy spanning all six coastal counties.</p>
          </div>
        </div>
      </section>
      <section className="container-site pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { k: "MISSION", kc: "text-sky", bg: "bg-navy text-white", t: "Build an ecosystem that creates and supports new businesses and value chains across the Pwani region." },
            { k: "WHO ATTENDS", kc: "opacity-70", bg: "bg-sky text-navy", t: "Founders, students, investors, county and national government, development partners, creatives." },
            { k: "CONVENER", kc: "text-orange", bg: "bg-white border border-line", t: "Swahilipot Hub Foundation — a youth-led technology and arts space in Mombasa, founded in 2016." },
          ].map(c => (
            <div key={c.k} className={`${c.bg} rounded-2xl p-8 min-h-[240px] flex flex-col justify-between`}>
              <span className={`font-mono text-xs tracking-[0.12em] ${c.kc}`}>{c.k}</span>
              <p className="font-display font-semibold text-[22px] leading-[1.3] tracking-tight">{c.t}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-site py-24">
        <h2 className="font-display font-bold text-4xl tracking-[-0.03em] mb-9">The journey</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t-2 border-navy">
          {JOURNEY.map(j => (
            <div key={j.year} className="pt-6 pr-5 mr-5 border-r border-line last:border-r-0">
              <div className="font-display font-extrabold text-[28px] tracking-[-0.03em] text-orange">{j.year}</div>
              <div className="font-semibold text-[15px] mt-2.5">{j.title}</div>
              <div className="text-[13.5px] leading-relaxed text-slate-500 mt-1.5">{j.text}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
