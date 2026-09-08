"use client";
import { useState, FormEvent } from "react";

export default function PartnerForm() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <input required placeholder="Organisation" className="field-dark" />
      <input required type="email" placeholder="Work email" className="field-dark" />
      <button type="submit" className="btn-primary justify-center py-3.5 px-5">{sent ? "Request received" : "Request partnership deck"}</button>
    </form>
  );
}
