"use client";
import { useEffect, useState } from "react";
import { EVENT_START } from "@/lib/data";

export default function Countdown() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => { setDays(Math.max(0, Math.ceil((new Date(EVENT_START).getTime() - Date.now()) / 86400000))); }, []);
  return (
    <div className="bg-navy text-white rounded-[18px] py-[22px] px-6 flex flex-col justify-between min-h-[150px]">
      <span className="font-mono text-[11px] tracking-[0.12em] text-slate-400 uppercase">Doors open in</span>
      <div className="flex items-baseline gap-2">
        <span className="font-display font-extrabold text-[56px] leading-none tracking-[-0.04em]">{days ?? "—"}</span>
        <span className="text-sm text-slate-400">days</span>
      </div>
    </div>
  );
}
