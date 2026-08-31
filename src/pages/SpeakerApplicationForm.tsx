import { Mic2, CalendarClock, Bell, Map, Code, Users, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SURVEY_LINKS } from '@/lib/config';

const stats = [
  { number: '6', label: 'Days of Programming' },
  { number: '3', label: 'Submission Tracks' },
  { number: '2,500+', label: 'Delegates & Investors' },
  { number: 'Rolling', label: 'Application Review' },
];

const tracks = [
  { title: 'Sustainable Coastal Economies', icon: Map, description: 'Aquaculture, cultural & creative industries, tourism value chain, Blue Economy and climate action.' },
  { title: 'Digital Transformation', icon: Code, description: 'Digital innovation, remote work, cybersecurity, and digital inclusion for coastal communities.' },
  { title: 'Youth Agency', icon: Users, description: 'Youth leadership, mental health, civic engagement, and creative storytelling.' },
];

const benefits = [
  'A stage in front of 2,500+ delegates, investors, and policymakers',
  'Feature in PIW media coverage and post-event highlight reels',
  'Direct access to Deal Rooms, Pwani Accelerate, and partner networks',
];

const process = [
  { icon: Mic2, title: 'Submit Your Application', description: 'Share your topic, track, and expertise through the online form — takes about 5 minutes.' },
  { icon: CalendarClock, title: 'Rolling Review', description: 'The programme committee reviews applications on a rolling basis ahead of PIW 2026.' },
  { icon: Bell, title: 'Get Confirmed', description: 'Shortlisted speakers are contacted directly with session details and next steps.' },
];

const pastSpeakers = [
  '/images/keynotespeakers/DR Kevit Desai.png',
  '/images/keynotespeakers/Governor.png',
  '/images/keynotespeakers/Kalkidan Mulugeta.png',
  '/images/keynotespeakers/Mahmoud Noor.png',
  '/images/keynotespeakers/Peter Maddens.png',
  '/images/keynotespeakers/Alex Chesosi.png',
];

const SpeakerApplicationForm = () => {
  return (
    <div className="min-h-screen page-shell">
      <section className="relative overflow-hidden pt-24 pb-16">
        <img
          src="/images/piw-2026/WhatsApp Image 2026-06-30 at 14.02.22.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 page-hero-bg" />
        <div className="section-container relative text-center pb-0">
          <p className="page-hero-kicker mb-4">PIW 2026</p>
          <h1 className="mb-5 text-4xl font-black text-slate-900 md:text-6xl">Call for Speakers</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Applications for PIW 2026 speakers are now open. Tell us about your expertise and the track you'd like to speak on.
          </p>
          <a
            href={SURVEY_LINKS.CALL_FOR_SPEAKERS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-[#F97316] px-8 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#EA580C]"
          >
            <Mic2 className="h-4 w-4" /> Apply Now
          </a>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/80 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-4 py-6 text-center">
                <p className="text-2xl md:text-3xl font-black text-[#F97316]">{s.number}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks + speaker benefits */}
      <section className="pb-20">
        <div className="section-container pt-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <div>
              <h2 className="mb-6 text-2xl font-black text-slate-900">Submission Tracks</h2>
              <div className="space-y-4">
                {tracks.map((track, i) => (
                  <article key={track.title} className="page-surface flex gap-4 p-5 border-l-4 border-l-[#F97316] transition-transform duration-200 hover:-translate-y-0.5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-[#F97316]/10 text-[#F97316] font-black text-sm">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 flex items-center gap-2 text-sm font-black text-slate-900">
                        <track.icon className="h-4 w-4 text-[#F97316]" /> {track.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">{track.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/images/piw-2026/WhatsApp Image 2026-06-30 at 13.47.35.jpeg"
                alt="A speaker addressing the PIW audience"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
              />
              <h2 className="mb-4 text-2xl font-black text-slate-900">Why Speak at PIW 2026</h2>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="page-surface flex items-start gap-3 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" />
                    <p className="text-sm leading-relaxed text-slate-600">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="page-surface mt-4 p-5">
                <Quote className="h-5 w-5 text-[#F97316] mb-2" />
                <p className="text-sm italic leading-relaxed text-slate-600">
                  "Speaking at PIW connected me with investors and collaborators I still work with today — it's more than a stage, it's a network."
                </p>
                <p className="mt-2 text-xs font-bold text-slate-400">— PIW 2025 Keynote Speaker</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#0a1628]">
        <div className="section-container">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3 text-center">How It Works</p>
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-12">From Application to the Stage</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-colors">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316] text-white font-black">
                  {i + 1}
                </div>
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-[#F97316]">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past speakers teaser */}
      <section className="section-container text-center">
        <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Set the Bar</p>
        <h2 className="mb-8 text-2xl font-black text-slate-900">Join Past PIW Keynote Speakers</h2>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4 mb-8">
          {pastSpeakers.map((src) => (
            <img
              key={src}
              src={src}
              alt="Past PIW keynote speaker"
              loading="lazy"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-white shadow-md"
            />
          ))}
        </div>
        <Link to="/speakers" className="text-sm font-bold text-[#F97316] hover:text-[#EA580C] underline underline-offset-4">
          View all past keynote speakers →
        </Link>
      </section>

      <section className="pb-24">
        <div className="section-container pt-0">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SURVEY_LINKS.CALL_FOR_SPEAKERS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-[#F97316] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#EA580C] sm:w-auto"
            >
              <Mic2 className="h-4 w-4" /> Apply Now
            </a>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-400 hover:bg-white sm:w-auto"
            >
              Contact Organizers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakerApplicationForm;
