import { Link } from 'react-router-dom';
import {
  CalendarClock,
  ShieldCheck,
  Sparkles,
  Ticket,
  Mic2,
  ArrowUpRight,
  Flame,
  MapPin,
  Users,
  QrCode,
  Check,
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const events = [
  {
    id: 'piw',
    badge: 'AT 10!',
    icon: Ticket,
    name: 'Pwani Innovation Week',
    dates: '26 – 31 October 2026',
    tagline: 'One pass for the full week keynotes, innovation labs, exhibitions and networking across six days.',
    features: [
      'Access to all keynote stages & panels',
      'Innovation Labs and exhibition hall',
      'Networking & Blue Economy Forum',
      'County government bilateral sessions',
    ],
    cta: 'Get My PIW Pass',
    href: 'https://soldoutafrica.com/pwani-innovation-week',
    iconWrap: 'bg-[#F97316]/10 text-[#F97316]',
    check: 'text-[#F97316]',
    btn: 'bg-[#F97316] hover:bg-[#EA580C]',
    badgeClass: 'bg-[#F97316] text-white',
    featured: true,
  },
  {
    id: 'pgt',
    badge: 'Closing Night · 31 Oct',
    icon: Mic2,
    name: 'Pwani Gat Talent',
    dates: '31 October 2026',
    tagline: 'The grand finale of PIW week — live performances celebrating coastal talent, music and culture.',
    features: ['Live performances & finalists', 'Music, culture and comedy acts', 'One night, once a year'],
    cta: 'Get My PGT Pass',
    href: 'https://soldoutafrica.com/pwani-gat-talent',
    iconWrap: 'bg-[#0EA5E9]/10 text-[#0EA5E9]',
    check: 'text-[#0EA5E9]',
    btn: 'bg-[#0EA5E9] hover:bg-[#0284C7]',
    badgeClass: 'bg-slate-100 text-slate-600',
    featured: false,
  },
];

const reasons = [
  { icon: ShieldCheck, title: 'Secure Checkout', body: 'Processed via Sold Out Africa, our verified booking partner.' },
  { icon: CalendarClock, title: 'Instant Confirmation', body: 'Your pass is sent the moment payment clears.' },
  { icon: Flame, title: 'Seats Are Moving', body: 'Past editions have sold out ahead of the event.' },
  { icon: QrCode, title: 'Easy Entry', body: 'Just scan your QR confirmation at the gate.' },
];

const faqs = [
  {
    q: 'Are tickets refundable or transferable?',
    a: 'This follows Sold Out Africa\'s standard policy — check your confirmation email, or ask our organizers for help.',
  },
  {
    q: 'Can I book for a group?',
    a: 'Yes, add multiple passes in one checkout. For large delegations, contact our team directly.',
  },
  {
    q: 'Do I need to print my ticket?',
    a: 'No — your QR confirmation on your phone is all you need at the gate.',
  },
  {
    q: 'Is there ticket access at the gate?',
    a: 'Popular categories sell out ahead of time, so booking online early is the safest bet.',
  },
];

const Tickets = () => {
  return (
    <div className="min-h-screen page-shell bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden px-4 pt-24 pb-14 sm:px-6 lg:px-8">
        <img
          src="/images/piw-2026/WhatsApp Image 2026-06-30 at 15.13.54.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
            <Sparkles className="h-3.5 w-3.5" /> Tickets Are Live
          </p>
          <h1 className="mb-5 text-4xl font-black leading-tight text-white md:text-5xl">
            Claim Your Seat at PIW 2026
          </h1>
          <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Booking is open for Pwani Innovation Week and Pwani Gat Talent. Choose your pass below,
            checkout opens in a new tab, so this page stays right here for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-[#F97316]" /> 26 – 31 Oct 2026
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#F97316]" /> Mombasa, Kenya
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#F97316]" /> 2,500+ delegates
            </span>
          </div>
        </div>
      </div>

      {/* ── Ticket Cards ─────────────────────────────────── */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-3 border-b border-slate-200 pb-6 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Choose Your Pass</h2>
              <p className="text-sm text-slate-500">Two events, two tickets — pick what fits your week.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316]">
              <Flame className="h-4 w-4" /> Early categories are already moving
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <article
                key={event.id}
                className={`relative flex flex-col rounded-2xl border bg-white transition-shadow duration-200 hover:shadow-lg ${
                  event.featured ? 'border-[#F97316]/40 shadow-md' : 'border-slate-200 shadow-sm'
                }`}
              >
                {event.featured && (
                  <span className="absolute -top-3 left-6 rounded-md bg-[#F97316] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {event.badge}
                  </span>
                )}

                <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-6">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{event.name}</h3>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                      <CalendarClock className="h-3.5 w-3.5" /> {event.dates}
                    </p>
                  </div>
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg ${event.iconWrap}`}>
                    <event.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {!event.featured && (
                    <span className={`mb-3 inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${event.badgeClass}`}>
                      {event.badge}
                    </span>
                  )}
                  <p className="mb-5 text-sm leading-relaxed text-slate-600">{event.tagline}</p>
                  <ul className="mb-6 flex-1 space-y-2.5">
                    {event.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${event.check}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition-colors duration-200 ${event.btn}`}
                  >
                    {event.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="page-hero-kicker mb-3">Why Book With Us</p>
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Booking Made Simple</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] transition-transform duration-300 group-hover:scale-x-100" />
                <span className="absolute right-5 top-5 text-3xl font-black text-slate-100">
                  0{i + 1}
                </span>
                <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] transition-colors duration-200 group-hover:bg-[#F97316] group-hover:text-white">
                  <reason.icon className="h-5 w-5" />
                </div>
                <p className="relative mb-1.5 text-base font-black text-slate-900">{reason.title}</p>
                <p className="relative text-sm leading-relaxed text-slate-500">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="page-hero-kicker mb-3">Good to Know</p>
            <h2 className="text-3xl font-black text-slate-900">Ticket Questions, Answered</h2>
          </div>
          <Accordion type="single" collapsible className="rounded-xl border border-slate-200 bg-white px-6">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className={i === faqs.length - 1 ? 'border-b-0' : ''}>
                <AccordionTrigger className="text-left text-base font-bold text-slate-900 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-slate-600">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="border-t border-slate-200 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-black text-slate-900">Still deciding?</h2>
          <p className="mb-6 text-sm text-slate-500">Categories move fast every edition — lock in your pass now.</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            {events.map((event) => (
              <a
                key={event.id}
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-colors duration-200 sm:w-auto ${event.btn}`}
              >
                {event.cta} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <Link to="/" className="font-semibold text-slate-500 transition-colors duration-200 hover:text-slate-900">
              Back to Home
            </Link>
            <span className="text-slate-300">·</span>
            <Link to="/contact" className="font-semibold text-slate-500 transition-colors duration-200 hover:text-slate-900">
              Contact Organizers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
