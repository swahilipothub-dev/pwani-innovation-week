import Eyebrow from "@/components/Eyebrow";
import Placeholder from "@/components/Placeholder";
import { NEWS } from "@/lib/data";

export const metadata = { title: "News — Pwani Innovation Week" };

export default function News() {
  const [f, ...rest] = NEWS;
  return (
    <section className="container-site pt-20 pb-24">
      <Eyebrow>Newsroom</Eyebrow>
      <h1 className="h-display text-[clamp(44px,5.5vw,76px)] mt-5 max-w-[900px] text-balance">Updates from the road to October.</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 mt-14">
        <article className="bg-navy text-white rounded-[20px] overflow-hidden flex flex-col">
          <Placeholder dark label="feature photo" className="aspect-[2/1] rounded-none" />
          <div className="p-8">
            <div className="font-mono text-[11.5px] text-sky tracking-[0.08em]">{f.date} · {f.tag}</div>
            <div className="font-display font-bold text-[30px] tracking-[-0.025em] leading-[1.15] mt-3">{f.title}</div>
            <p className="text-slate-400 leading-relaxed mt-3.5">{f.excerpt}</p>
          </div>
        </article>
        <div className="flex flex-col gap-5">
          {rest.map(n => (
            <article key={n.title} className="bg-white border border-line rounded-2xl p-6 flex gap-5 items-start">
              <Placeholder className="w-24 shrink-0 aspect-square rounded-[10px]" />
              <div>
                <div className="font-mono text-[11.5px] text-orange tracking-[0.08em]">{n.date} · {n.tag}</div>
                <div className="font-display font-bold text-lg tracking-tight leading-tight mt-2">{n.title}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
