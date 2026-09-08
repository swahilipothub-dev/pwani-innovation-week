import Eyebrow from "@/components/Eyebrow";
import DayTabs from "@/components/DayTabs";

export const metadata = { title: "Programme — Pwani Innovation Week" };

export default function Programme() {
  return (
    <section className="container-site pt-20">
      <Eyebrow>Programme · 26 – 30 Oct 2026</Eyebrow>
      <h1 className="h-display text-[clamp(44px,5.5vw,76px)] mt-5 max-w-[900px] text-balance">Five days. One theme a day.</h1>
      <p className="text-[17px] text-slate-600 max-w-[600px] leading-relaxed mt-5">Draft schedule — sessions and speakers are being confirmed. Times are East Africa Time (UTC+3).</p>
      <DayTabs />
    </section>
  );
}
