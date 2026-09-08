"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <form onSubmit={submit} className="bg-white border border-line rounded-[20px] p-9 flex flex-col gap-3.5 min-w-0">
      <div className="font-display font-bold text-[22px] tracking-tight">Send a message</div>
      <select className="field" defaultValue="">
        <option value="" disabled>Topic</option>
        {["Speaking / session proposal", "Exhibiting", "Partnership", "Media", "General"].map(t => <option key={t}>{t}</option>)}
      </select>
      <input required placeholder="Full name" className="field" />
      <input required type="email" placeholder="Email" className="field" />
      <textarea required placeholder="Message" rows={6} className="field resize-y" />
      <button type="submit" className="bg-navy text-white font-semibold text-[15px] p-4 rounded-[10px] hover:bg-orange transition-colors">{sent ? "Message sent" : "Send message"}</button>
    </form>
  );
}
