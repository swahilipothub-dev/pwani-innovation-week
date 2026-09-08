"use client";
import { useState } from "react";
import Link from "next/link";
import { DAYS } from "@/lib/data";
import Placeholder from "./Placeholder";
import Arrow from "./Arrow";

export default function DayTabs() {
  const [i, setI] = useState(0);
  const d = DAYS[i];
  return (
    <>
      <div className="flex gap-2 mt-11 flex-wrap">
        {DAYS.map((t, k) => (
          <button key={t.num} onClick={() => setI(k)} className={`border font-display font-semibold text-sm py-3 px-[18px] rounded-full flex gap-2.5 items-center transition-colors ${k === i ? "bg-navy text-white border-navy" : "bg-white text-slate-700 border-slate-300 hover:border-navy"}`}>
            <span className="font-mono text-xs opacity-70">{t.date.slice(4)}</span>{t.title.split(" & ")[0]}
          </button>
        ))}
      </div>
      <section className="pt-10 pb-24 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-14 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="font-mono text-xs text-slate-500 tracking-[0.08em]">{d.date} · DAY {d.num}</div>
          <h2 className="font-display font-bold text-[40px] tracking-[-0.03em] leading-[1.05] mt-3.5">{d.title}</h2>
          <p className="text-base leading-relaxed text-slate-600 mt-[18px]">{d.intro}</p>
          <Placeholder label="day photo" className="mt-7 aspect-[4/3] rounded-[14px]" />
        </div>
        <div className="flex flex-col border-t border-line">
          {d.sessions.map(s => (
            <div key={s.time + s.title} className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-6 py-[26px] border-b border-line">
              <div className="font-mono text-[13px] pt-[3px]">{s.time}</div>
              <div>
                <span className="font-mono text-[10.5px] tracking-[0.1em] uppercase py-1 px-2 rounded bg-sky-tint text-sky-deep">{s.kind}</span>
                <div className="font-display font-bold text-[21px] tracking-tight mt-2.5 leading-tight">{s.title}</div>
                <div className="text-[14.5px] text-slate-500 mt-2 leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
          <Link href="/register" className="btn-primary mt-8 py-4 px-[26px] self-start">Register for this day <Arrow /></Link>
        </div>
      </section>
    </>
  );
}
