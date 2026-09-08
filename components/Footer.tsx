import Link from "next/link";

const col = "flex flex-col gap-3 text-[14.5px]";
const head = "font-mono text-[11px] tracking-[0.12em] text-slate-500 mb-1";
const lnk = "text-slate-300 hover:text-orange";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="container-site pt-[72px] pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
        <div>
          <div className="font-display font-extrabold text-[28px] tracking-[-0.03em] leading-none">Pwani Innovation Week<span className="text-orange">.</span></div>
          <p className="text-slate-400 text-[14.5px] leading-relaxed mt-4 max-w-[360px]">Convened by Swahilipot Hub Foundation with partners across the Pwani region. 26 – 30 October 2026, Mombasa.</p>
          <form className="flex gap-2.5 mt-[22px]" action="#">
            <input placeholder="Email for updates" className="field-dark !w-auto flex-1 max-w-[260px] !py-3 !px-3.5 !rounded-lg !text-sm" />
            <button type="submit" className="bg-sky text-navy font-semibold py-3 px-4 rounded-lg hover:bg-white">Subscribe</button>
          </form>
        </div>
        <div className={col}>
          <div className={head}>EVENT</div>
          <Link href="/about" className={lnk}>About</Link>
          <Link href="/programme" className={lnk}>Programme</Link>
          <Link href="/speakers" className={lnk}>Speakers</Link>
          <Link href="/themes" className={lnk}>Thematic areas</Link>
          <Link href="/register" className={lnk}>Register</Link>
        </div>
        <div className={col}>
          <div className={head}>TAKE PART</div>
          <Link href="/exhibitors" className={lnk}>Exhibitors</Link>
          <Link href="/partners" className={lnk}>Partners &amp; sponsors</Link>
          <Link href="/past-editions" className={lnk}>Past editions</Link>
          <Link href="/news" className={lnk}>News</Link>
          <Link href="/contact" className={lnk}>Contact</Link>
        </div>
        <div className={col}>
          <div className={head}>FOLLOW</div>
          <a href="https://www.linkedin.com/company/piwkenya" target="_blank" rel="noreferrer" className={lnk}>LinkedIn</a>
          <a href="https://www.instagram.com/pwaniinnovationweek/" target="_blank" rel="noreferrer" className={lnk}>Instagram</a>
          <a href="https://www.facebook.com/pwaniinnovationweek/" target="_blank" rel="noreferrer" className={lnk}>Facebook</a>
          <a href="https://x.com/swahilipothub" target="_blank" rel="noreferrer" className={lnk}>X</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex justify-between gap-4 flex-wrap font-mono text-[11.5px] text-slate-500 tracking-wide">
          <span>© 2026 Swahilipot Hub Foundation</span>
          <span>#PIW2026 · #PwaniInnovationWeek</span>
        </div>
      </div>
    </footer>
  );
}
