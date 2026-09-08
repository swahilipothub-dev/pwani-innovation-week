import Eyebrow from "@/components/Eyebrow";
import Placeholder from "@/components/Placeholder";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact — Pwani Innovation Week" };
const k = "font-mono text-[11px] tracking-[0.12em] text-slate-500";

export default function Contact() {
  return (
    <section className="container-site pt-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="h-display text-[clamp(44px,5.5vw,72px)] mt-5">Karibu. Let&apos;s talk.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-11 text-[15px] leading-relaxed">
          <div><div className={k}>VENUE</div><div className="mt-2 font-semibold">Swahilipot Hub Foundation</div><div className="text-slate-600">Mombasa Old Town, Kenya</div></div>
          <div><div className={k}>EMAIL</div><div className="mt-2 font-semibold">info@pwaniinnovationweek.com</div><div className="text-slate-600">partners@pwaniinnovationweek.com</div></div>
          <div><div className={k}>SOCIAL</div><div className="mt-2 flex gap-3.5 font-semibold"><a href="https://www.linkedin.com/company/piwkenya" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/pwaniinnovationweek/" target="_blank" rel="noreferrer">Instagram</a><a href="https://x.com/swahilipothub" target="_blank" rel="noreferrer">X</a></div></div>
          <div><div className={k}>MEDIA</div><div className="mt-2 font-semibold">Press accreditation</div><div className="text-slate-600">media@pwaniinnovationweek.com</div></div>
        </div>
        <Placeholder label="map · Swahilipot Hub, Mombasa" className="mt-11 aspect-video rounded-2xl" />
      </div>
      <ContactForm />
    </section>
  );
}
