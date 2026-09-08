import Eyebrow from "@/components/Eyebrow";
import PartnerForm from "@/components/PartnerForm";
import { PARTNER_TIERS } from "@/lib/data";

export const metadata = { title: "Partners & sponsors — Pwani Innovation Week" };

export default function Partners() {
  return (
    <>
      <section className="container-site pt-20">
      <Eyebrow>Partners &amp; sponsors</Eyebrow>
      <h1 className="h-display text-[clamp(44px,5.5vw,76px)] mt-5 max-w-[900px] text-balance">Convened together, county to continent.</h1>
        <p className="text-[17px] text-slate-600 leading-relaxed mt-5 max-w-[640px]">PIW is delivered with the County Government of Mombasa, national agencies, development partners, the diplomatic community and private sector leaders.</p>
      </section>
      <section className="container-site pt-16 flex flex-col gap-12">
        {PARTNER_TIERS.map(tier => (
          <div key={tier.name}>
            <div className="flex items-center gap-4 mb-[18px]"><span className="font-display font-bold text-lg tracking-tight">{tier.name}</span><span className="flex-1 h-px bg-line" /></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {tier.logos.map((l, i) => <div key={i} className={`${tier.h} border border-dashed border-slate-300 rounded-[10px] grid place-items-center font-mono text-[11px] text-slate-400 bg-white text-center p-2`}>{l}</div>)}
            </div>
          </div>
        ))}
      </section>
      <section className="container-site my-24">
        <div className="bg-navy text-white rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-[40px] tracking-[-0.03em] leading-[1.05]">Partner with PIW 2026</h2>
            <p className="text-slate-400 text-base leading-relaxed mt-[18px]">Sponsorship tiers from Track Partner to Headline Partner, plus in-kind and hackathon sponsorship. We&apos;ll send the partnership deck within one working day.</p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
