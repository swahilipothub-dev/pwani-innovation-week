import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Arrow from "@/components/Arrow";
import Placeholder from "@/components/Placeholder";
import Countdown from "@/components/Countdown";
import Ticker from "@/components/Ticker";
import { THEMES, DAYS, SPEAKERS, NEWS, STATS, PARTNER_LOGOS } from "@/lib/data";

function SectionHead({ eyebrow, title, href, link }: { eyebrow: string; title: string; href: string; link: string }) {
  return (
    <div className="flex justify-between items-end gap-6 flex-wrap">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display font-bold text-[40px] leading-[1.05] tracking-[-0.03em] mt-4">{title}</h2>
      </div>
      <Link href={href} className="link-underline">{link} <Arrow /></Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="container-site pt-[72px] pb-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-14 items-end">
        <div>
          <div className="flex items-center gap-3 eyebrow">
            <span>7th Edition</span><span className="w-6 h-px bg-orange" /><span className="text-slate-600">26 – 30 October 2026 · Mombasa, Kenya</span>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(56px,7vw,104px)] leading-[0.92] tracking-[-0.035em] mt-7 text-balance">Coastal<br />Futures<span className="text-sky">.</span></h1>
          <p className="font-display font-semibold text-2xl leading-tight text-slate-700 mt-7 max-w-[560px] tracking-tight">Youth, Innovation &amp; Sustainable Growth — five days where the Coast&apos;s founders, policymakers, investors and creatives shape what comes next.</p>
          <div className="flex gap-3.5 mt-10 flex-wrap">
            <Link href="/register" className="btn-primary text-[15px] py-4 px-7">Register to attend <Arrow /></Link>
            <Link href="/programme" className="inline-flex items-center gap-2.5 bg-white border border-slate-300 font-semibold text-[15px] py-4 px-7 rounded-[10px] hover:border-navy hover:text-navy">View programme</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          <Placeholder label="hero image · Mombasa skyline / PIW crowd" className="col-span-2 aspect-[16/10] rounded-[18px] text-xs">
            <span className="absolute left-[18px] bottom-[18px] bg-navy text-white text-[11px] py-1.5 px-2.5 rounded-md tracking-[0.08em]">PIW 2026</span>
          </Placeholder>
          <Countdown />
          <div className="bg-sky text-navy rounded-[18px] py-[22px] px-6 flex flex-col justify-between min-h-[150px]">
            <span className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-75">Venue</span>
            <div><div className="font-display font-bold text-xl leading-tight tracking-tight">Swahilipot Hub</div><div className="text-[13px] mt-1 opacity-80">Mombasa Old Town · Kenya</div></div>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="container-site pt-24 grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-16 items-start">
        <div>
          <Eyebrow>Why PIW</Eyebrow>
          <h2 className="font-display font-bold text-[44px] leading-[1.05] tracking-[-0.03em] mt-[18px] text-balance">The Coast&apos;s meeting point for startups, enablers, government and academia.</h2>
          <p className="text-[17px] leading-relaxed text-slate-600 mt-[22px] max-w-[520px]">Since 2018, Pwani Innovation Week has been the consolidated effort of Swahilipot Hub Foundation and its partners to build a culture of innovation across Kenya&apos;s six coastal counties — Mombasa, Kwale, Kilifi, Tana River, Lamu and Taita-Taveta.</p>
          <Link href="/about" className="link-underline mt-7">About the week <Arrow /></Link>
        </div>
        <div className="grid grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {STATS.map(s => (
            <div key={s.label} className="bg-white py-7 px-[26px] min-w-0 [overflow-wrap:anywhere]">
              <div className="font-display font-extrabold text-[clamp(32px,3.2vw,44px)] tracking-[-0.04em] leading-none">{s.value}</div>
              <div className="text-sm text-slate-500 mt-2.5 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site pt-24">
        <SectionHead eyebrow="Thematic areas" title="Six tracks, one coastline" href="/themes" link="All themes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {THEMES.map(t => (
            <Link key={t.num} href="/themes" className="bg-white border border-line rounded-2xl p-7 flex flex-col gap-[18px] min-h-[210px] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(2,8,23,0.08)] hover:text-navy">
              <div className="flex justify-between items-center"><span className="font-mono text-xs text-slate-500">{t.num}</span><span className="w-2.5 h-2.5 rounded-full" style={{ background: t.color }} /></div>
              <div className="font-display font-bold text-[22px] tracking-tight leading-tight">{t.title}</div>
              <p className="text-[14.5px] leading-relaxed text-slate-500 mt-auto">{t.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white mt-24 py-24">
        <div className="container-site grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div>
            <Eyebrow className="!text-sky">Five days</Eyebrow>
            <h2 className="font-display font-bold text-[44px] leading-[1.05] tracking-[-0.03em] mt-4 text-balance">Programme at a glance</h2>
            <p className="text-base leading-relaxed text-slate-400 mt-5 max-w-[440px]">Keynotes, plenaries, hackathons, the Deals Den pitch stage and an open exhibition floor. Each day carries one theme.</p>
            <Link href="/programme" className="inline-flex items-center gap-2.5 mt-8 bg-white text-navy font-semibold py-3.5 px-6 rounded-[10px] hover:bg-sky hover:text-navy">Full programme <Arrow /></Link>
          </div>
          <div className="flex flex-col border-t border-white/15">
            {DAYS.map(d => (
              <Link key={d.num} href="/programme" className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr_auto] gap-x-5 gap-y-1 items-center py-5 border-b border-white/15 text-white hover:text-sky">
                <span className="font-mono text-[13px] text-slate-400">{d.date}</span>
                <span className="font-display font-semibold text-xl tracking-tight">{d.title}</span>
                <span className="text-[13px] text-slate-400 col-start-2 sm:col-start-auto">{d.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site pt-24">
        <SectionHead eyebrow="Speakers" title="Voices shaping the Coast" href="/speakers" link="All speakers" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {SPEAKERS.slice(0, 4).map((p, i) => (
            <Link key={i} href="/speakers" className="flex flex-col gap-3.5">
              <Placeholder label="speaker portrait" className="aspect-[4/5] rounded-[14px]" />
              <div><div className="font-display font-bold text-[17px] tracking-tight">{p.name}</div><div className="text-[13.5px] text-slate-500 mt-[3px]">{p.role}</div></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-site mt-24">
        <div className="bg-orange rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-[90px] font-display font-extrabold text-[360px] leading-none text-white/10 tracking-[-0.06em] pointer-events-none select-none">10</div>
          <div className="relative">
            <div className="font-mono text-xs tracking-[0.12em] uppercase opacity-85">2016 – 2026</div>
            <h2 className="font-display font-extrabold text-[48px] leading-none tracking-[-0.035em] mt-3.5 text-balance">Ten years of Swahilipot Hub Foundation</h2>
            <p className="text-[17px] leading-relaxed mt-[18px] max-w-[560px] opacity-90">PIW 2026 doubles as the anniversary celebration of the hub that started it all — a decade of youth, technology and the creative economy in Mombasa.</p>
          </div>
          <Link href="/past-editions" className="relative bg-navy text-white font-semibold py-4 px-[26px] rounded-[10px] inline-flex gap-2.5 items-center whitespace-nowrap hover:bg-white hover:text-navy">Our journey <Arrow /></Link>
        </div>
      </section>

      <section className="container-site pt-24">
        <div className="flex justify-between items-end gap-6 flex-wrap">
          <h2 className="font-display font-bold text-[32px] tracking-[-0.03em]">Latest news</h2>
          <Link href="/news" className="link-underline">Newsroom <Arrow /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9">
          {NEWS.slice(0, 3).map(n => (
            <Link key={n.title} href="/news" className="bg-white border border-line rounded-2xl overflow-hidden flex flex-col hover:text-navy hover:shadow-[0_18px_40px_rgba(2,8,23,0.08)] transition-shadow">
              <Placeholder label="news photo" className="aspect-video rounded-none border-0 border-b" />
              <div className="pt-[22px] px-6 pb-[26px]">
                <div className="font-mono text-[11.5px] text-orange tracking-[0.08em]">{n.date}</div>
                <div className="font-display font-bold text-[19px] tracking-tight leading-tight mt-2.5">{n.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-site py-24">
        <div className="flex justify-between items-center gap-6 flex-wrap mb-7">
          <div className="font-mono text-xs tracking-[0.12em] uppercase text-slate-500">Convened with</div>
          <Link href="/partners" className="text-sm font-semibold text-slate-700">Become a partner →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PARTNER_LOGOS.map(l => <div key={l} className="h-[76px] border border-dashed border-slate-300 rounded-[10px] grid place-items-center font-mono text-[11px] text-slate-400 bg-white">{l}</div>)}
        </div>
      </section>
    </>
  );
}
