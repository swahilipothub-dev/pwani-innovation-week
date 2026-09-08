import Eyebrow from "@/components/Eyebrow";
import Placeholder from "@/components/Placeholder";
import { EDITIONS } from "@/lib/data";

export const metadata = { title: "Past editions — Pwani Innovation Week" };

export default function PastEditions() {
  return (
    <section className="container-site pt-20 pb-24">
      <Eyebrow>Past editions &amp; gallery</Eyebrow>
      <h1 className="h-display text-[clamp(44px,5.5vw,76px)] mt-5 max-w-[900px] text-balance">Six editions since 2018.</h1>
      <div className="flex flex-col mt-16 gap-5">
        {EDITIONS.map(e => (
          <div key={e.year} className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr_1fr] gap-8 bg-white border border-line rounded-[18px] p-8 items-center">
            <div><div className="font-display font-extrabold text-[48px] tracking-[-0.04em] leading-none text-orange">{e.year}</div><div className="font-mono text-xs text-slate-500 mt-2">{e.edition}</div></div>
            <div><div className="font-display font-bold text-[22px] tracking-tight leading-tight">{e.theme}</div><div className="text-[14.5px] text-slate-500 mt-2 leading-relaxed">{e.note}</div></div>
            <div className="grid grid-cols-3 gap-2 md:col-span-2 lg:col-span-1">
              <Placeholder className="aspect-square rounded-lg" /><Placeholder className="aspect-square rounded-lg" /><Placeholder label="gallery" className="aspect-square rounded-lg text-[10px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
