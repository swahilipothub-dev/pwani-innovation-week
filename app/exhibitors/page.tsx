import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Placeholder from "@/components/Placeholder";
import { BOOTHS } from "@/lib/data";

export const metadata = { title: "Exhibitors — Pwani Innovation Week" };
const TONE = { light: "bg-white text-navy", dark: "bg-navy text-white", sky: "bg-sky text-navy" };

export default function Exhibitors() {
  return (
    <>
      <section className="container-site pt-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-end">
        <div>
          <Eyebrow>Exhibitors</Eyebrow>
          <h1 className="h-display text-[clamp(44px,5.5vw,76px)] mt-5">Show the Coast what you build.</h1>
          <p className="text-[17px] text-slate-600 leading-relaxed mt-5 max-w-[520px]">The exhibition floor runs all five days and is open to the public. Startups, SMEs, universities, agencies and corporates showcase products, programmes and services to 1,000+ visitors.</p>
          <Link href="/contact" className="btn-primary mt-8 py-4 px-[26px]">Apply for a booth →</Link>
        </div>
        <Placeholder label="photo · exhibition floor" className="aspect-[4/3] rounded-[18px] text-xs" />
      </section>
      <section className="container-site py-24">
        <h2 className="font-display font-bold text-4xl tracking-[-0.03em] mb-9">Booth packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BOOTHS.map(b => (
            <div key={b.name} className={`${TONE[b.tone]} border border-line rounded-[18px] p-8 flex flex-col gap-[18px] min-h-[340px]`}>
              <div className="font-mono text-xs tracking-[0.12em] uppercase opacity-70">{b.name}</div>
              <div className="font-display font-extrabold text-4xl tracking-[-0.03em]">{b.price}</div>
              <ul className="text-[14.5px] leading-[1.7] opacity-85">{b.perks.map(p => <li key={p}>{p}</li>)}</ul>
              <Link href="/contact" className="mt-auto font-semibold text-inherit border-b-2 border-orange self-start pb-[3px] hover:text-orange">Reserve →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
