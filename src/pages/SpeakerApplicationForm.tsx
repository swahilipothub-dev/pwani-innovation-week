import { Mic2, CalendarClock, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpeakerApplicationForm = () => {
  return (
    <div className="min-h-screen page-shell">
      <section className="page-hero-bg pt-24 pb-20">
        <div className="section-container text-center">
          <p className="page-hero-kicker mb-4">PIW 2026</p>
          <h1 className="mb-5 text-4xl font-black text-slate-900 md:text-6xl">Call for Speakers</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            The call for speakers is not open yet. Applications and submission criteria will be published soon.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <article className="page-surface p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-[#F97316]/10 text-[#F97316]">
                <Mic2 className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-base font-black text-slate-900">Submission Tracks</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Speaker categories and thematic tracks will be announced at launch.
              </p>
            </article>

            <article className="page-surface p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-[#F97316]/10 text-[#F97316]">
                <CalendarClock className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-base font-black text-slate-900">Opening Dates</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We will share timelines for applications, review, and confirmations.
              </p>
            </article>

            <article className="page-surface p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-[#F97316]/10 text-[#F97316]">
                <Bell className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-base font-black text-slate-900">Announcements</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Follow PIW updates to be among the first to know when applications open.
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
