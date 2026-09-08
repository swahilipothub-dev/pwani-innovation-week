import Eyebrow from "@/components/Eyebrow";
import Placeholder from "@/components/Placeholder";
import { THEMES } from "@/lib/data";

export const metadata = { title: "Thematic areas — Pwani Innovation Week" };

export default function Themes() {
  return (
    <section className="container-site pt-20 pb-24">
      <Eyebrow>Thematic areas</Eyebrow>
      <h1 className="h-display text-[clamp(44px,5.5vw,76px)] mt-5 max-w-[900px] text-balance">Six tracks for coastal resilience and growth.</h1>
      <div className="flex flex-col mt-16 border-t border-navy">
        {THEMES.map(t => (
          <div key={t.num} className="grid grid-cols-[60px_1fr] lg:grid-cols-[80px_1fr_1.2fr_280px] gap-x-8 gap-y-4 py-9 border-b border-line items-start">
            <div className="font-display font-extrabold text-[32px] tracking-[-0.03em]" style={{ color: t.color }}>{t.num}</div>
            <div className="font-display font-bold text-[28px] tracking-[-0.025em] leading-tight">{t.title}</div>
            <p className="text-base leading-relaxed text-slate-600 col-start-2 lg:col-start-auto">{t.long}</p>
            <Placeholder label="track image" className="aspect-[16/10] rounded-xl col-start-2 lg:col-start-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
