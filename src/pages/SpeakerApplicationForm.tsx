import { Mic2, CalendarClock, Bell, Map, Code, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SURVEY_LINKS } from '@/lib/config';

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

const SpeakerApplicationForm = () => {
  return (
    <div className="min-h-screen page-shell">
      <section className="relative overflow-hidden pt-24 pb-20">
        <img
          src="/images/piw-2026/WhatsApp Image 2026-06-30 at 14.02.22.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 page-hero-bg" />
        <div className="section-container relative text-center">
          <p className="page-hero-kicker mb-4">PIW 2026</p>
          <h1 className="mb-5 text-4xl font-black text-slate-900 md:text-6xl">Call for Speakers</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Applications for PIW 2026 speakers are now open. Tell us about your expertise and the track you'd like to speak on.
          </p>
          <a
            href={SURVEY_LINKS.CALL_FOR_SPEAKERS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-[#F97316] px-8 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#EA580C]"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Tracks + speaker benefits */}
      <section className="pb-24">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <div>
              <h2 className="mb-6 text-2xl font-black text-slate-900">Submission Tracks</h2>
              <div className="space-y-4">
                {tracks.map((track) => (
                  <article key={track.title} className="page-surface flex gap-4 p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-[#F97316]/10 text-[#F97316]">
                      <track.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-black text-slate-900">{track.title}</h3>
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
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" />
                    <p className="text-sm leading-relaxed text-slate-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
            <article className="page-surface p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-[#F97316]/10 text-[#F97316]">
                <Mic2 className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-base font-black text-slate-900">Session Formats</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Keynotes, panels, fireside chats, and workshop-style sessions across the six-day programme.
              </p>
            </article>

            <article className="page-surface p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-[#F97316]/10 text-[#F97316]">
                <CalendarClock className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-base font-black text-slate-900">Opening Dates</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Applications are reviewed on a rolling basis ahead of PIW 2026.
              </p>
            </article>

            <article className="page-surface p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-[#F97316]/10 text-[#F97316]">
                <Bell className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-base font-black text-slate-900">Announcements</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Follow PIW updates for confirmation and next steps after you apply.
              </p>
            </article>
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/speakers"
              className="inline-flex w-full items-center justify-center bg-[#F97316] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#EA580C] sm:w-auto"
            >
              View Speakers Page
            </Link>
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
