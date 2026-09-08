"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/data";
import Arrow from "./Arrow";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menuLinks = [...NAV.slice(0, 6), { href: "/past-editions", label: "Past editions" }, ...NAV.slice(6)];
  return (
    <>
      <div className="bg-navy text-canvas text-[13px] tracking-wide flex justify-center items-center gap-3.5 py-[9px] px-6 font-mono">
        <span className="w-2 h-2 rounded-full bg-orange inline-block" />
        <span>2026 marks 10 years of Swahilipot Hub Foundation · 7th edition of PIW</span>
        <Link href="/register" className="text-sky underline underline-offset-[3px] hover:text-sky">Register free</Link>
      </div>
      <header className="sticky top-0 z-50 bg-canvas/85 backdrop-blur-xl border-b border-line">
        <nav className="container-site h-[72px] flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 whitespace-nowrap shrink-0 hover:text-navy" onClick={() => setOpen(false)}>
            <span className="relative w-10 h-10 rounded-[10px] bg-navy grid place-items-center text-white font-display font-extrabold text-[11px] tracking-tight shrink-0 overflow-hidden">
              PIW<span className="absolute -right-1.5 -bottom-1.5 w-4 h-4 rounded-full bg-orange" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display font-bold text-[15px] tracking-tight">Pwani Innovation Week</span>
              <span className="hidden min-[560px]:block font-mono text-[10.5px] text-slate-500 mt-[3px] tracking-[0.08em]">SWAHILIPOT HUB FOUNDATION · 2026</span>
            </span>
          </Link>
          <div className="hidden min-[1100px]:flex items-center gap-[22px] text-sm font-medium shrink-0 whitespace-nowrap">
            {NAV.map(n => (
              <Link key={n.href} href={n.href} className={`hover:text-orange ${path === n.href ? "text-navy" : "text-slate-700"}`}>{n.label}</Link>
            ))}
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <Link href="/register" className="btn-primary text-sm py-[11px] px-5 rounded-lg whitespace-nowrap">Register <Arrow /></Link>
            <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)} className="min-[1100px]:hidden inline-flex flex-col items-center justify-center gap-[5px] w-[42px] h-[42px] rounded-lg border border-slate-300 bg-white">
              <span className="w-[18px] h-0.5 bg-navy block" /><span className="w-[18px] h-0.5 bg-navy block" /><span className="w-[18px] h-0.5 bg-navy block" />
            </button>
          </div>
        </nav>
        {open && (
          <div className="min-[1100px]:hidden border-t border-line bg-canvas px-8 pt-4 pb-5 grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2 text-[15px] font-medium">
            {menuLinks.map(n => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-slate-700 hover:bg-white hover:text-orange">{n.label}</Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
