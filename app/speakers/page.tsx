import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Placeholder from "@/components/Placeholder";
import { SPEAKERS } from "@/lib/data";

export const metadata = { title: "Speakers — Pwani Innovation Week" };

export default function Speakers() {
  return (
    <section className="container-site pt-20 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <Eyebrow>Speakers</Eyebrow>
          <h1 className="h-display text-[clamp(44px,5.5vw,76px)] mt-5">Voices shaping the Coast</h1>
        </div>
        <p className="text-[17px] text-slate-600 leading-relaxed">The 2026 line-up is being confirmed. Want to speak? Session proposals from founders, researchers and practitioners across the six counties are welcome.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
        {SPEAKERS.map((p, i) => (
          <div key={i} className="flex flex-col gap-3.5">
            <Placeholder label="speaker portrait" className="aspect-[4/5] rounded-[14px]">
              <span className="absolute left-3 top-3 text-[10px] tracking-[0.1em] bg-navy text-white py-1 px-2 rounded">{p.kind}</span>
            </Placeholder>
            <div><div className="font-display font-bold text-[17px] tracking-tight">{p.name}</div><div className="text-[13.5px] text-slate-500 mt-[3px]">{p.role}</div></div>
          </div>
        ))}
      </div>
      <div className="mt-[72px] border border-line bg-white rounded-[20px] p-10 flex justify-between items-center gap-8 flex-wrap">
        <div><div className="font-display font-bold text-[26px] tracking-tight">Call for speakers &amp; sessions</div><div className="text-slate-500 mt-1.5">Proposals close 15 September 2026.</div></div>
        <Link href="/contact" className="bg-navy text-white font-semibold py-3.5 px-6 rounded-[10px] hover:bg-orange hover:text-white">Submit a proposal →</Link>
      </div>
    </section>
  );
}
