"use client";
import { useState, FormEvent } from "react";
import { PASSES } from "@/lib/data";

const COUNTIES = ["Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita-Taveta", "Other"];
const ROLES = ["Founder / startup", "Student", "Investor", "Government", "Development partner", "Media", "Other"];

export default function RegisterForm({ intro }: { intro: React.ReactNode }) {
  const [pass, setPass] = useState(0);
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <section className="container-site pt-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        {intro}
      <div className="flex flex-col gap-3 mt-10">
        {PASSES.map((p, i) => (
          <button key={p.name} type="button" onClick={() => setPass(i)} className={`text-left border rounded-[14px] py-[22px] px-6 grid grid-cols-[1fr_auto] gap-4 transition-colors ${i === pass ? "bg-navy text-white border-navy" : "bg-white text-navy border-line hover:border-slate-400"}`}>
            <div>
              <div className="font-display font-bold text-[19px] tracking-tight">{p.name}</div>
              <div className="text-sm opacity-75 mt-1">{p.desc}</div>
            </div>
            <div className="font-display font-extrabold text-[22px] tracking-tight">{p.price}</div>
          </button>
        ))}
      </div>
      </div>
      <form onSubmit={submit} className="bg-white border border-line rounded-[20px] p-9 flex flex-col gap-3.5 lg:sticky lg:top-24 min-w-0 ">
        <div className="font-display font-bold text-[22px] tracking-tight">Your details</div>
        <div className="text-[13px] text-slate-500 -mt-1.5">Selected: <span className="text-navy font-semibold">{PASSES[pass].name}</span></div>
        <div className="grid grid-cols-2 gap-3">
          <input required placeholder="First name" className="field" />
          <input required placeholder="Last name" className="field" />
        </div>
        <input required type="email" placeholder="Email" className="field" />
        <input placeholder="Organisation / institution" className="field" />
        <select className="field" defaultValue=""><option value="" disabled>County</option>{COUNTIES.map(c => <option key={c}>{c}</option>)}</select>
        <select className="field" defaultValue=""><option value="" disabled>I am a…</option>{ROLES.map(c => <option key={c}>{c}</option>)}</select>
        <button type="submit" className="btn-primary justify-center text-[15px] p-4 mt-1.5">{sent ? "Registered — check your inbox" : "Complete registration"}</button>
        <div className="text-xs text-slate-400 text-center">A confirmation is emailed within minutes.</div>
      </form>
    </section>
  );
}
