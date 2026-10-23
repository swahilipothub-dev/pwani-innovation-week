import { Link } from 'react-router-dom';
import { Mic, ArrowUpRight, CalendarDays, Users2 } from 'lucide-react';
import { PIW_PROGRAM } from '@/lib/scheduleData';
import { ExperienceSessionCard } from '@/components/ExperienceSessionCard';

const plenaryDays = PIW_PROGRAM.map((day) => ({
  ...day,
  sessions: day.sessions.filter((session) => /plenary/i.test(session.title)),
})).filter((day) => day.sessions.length > 0);

const totalSessions = plenaryDays.reduce((sum, day) => sum + day.sessions.length, 0);

const PlenarySessions = () => {
  return (
    <div className="min-h-screen page-shell">
      <section className="relative overflow-hidden pt-32 pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(760px 360px at 15% -10%, rgba(249,115,22,0.14), transparent 60%), radial-gradient(640px 320px at 95% 10%, rgba(14,165,233,0.10), transparent 62%)',
          }}
        />
        <Mic className="pointer-events-none absolute -right-6 top-24 w-40 h-40 text-[#F97316]/10 animate-float" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center animate-fade-slide-in">
            <Mic className="w-8 h-8 text-[#F97316]" />
          </div>
          <p className="page-hero-kicker mb-3 animate-fade-slide-in" style={{animationDelay: '60ms'}}>PIW 2026 Programme</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 gradient-text animate-fade-slide-in" style={{animationDelay: '120ms'}}>
            Plenary Sessions
          </h1>
          <p className="text-lg text-gray-600 mb-6 animate-fade-slide-in" style={{animationDelay: '180ms'}}>
            The main-arena keynotes and panels that set the tone for each day of Pwani Innovation Week 2026 — opening and closing
            ceremonies, fireside chats, and the headline conversations shaping innovation across the coast.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-slide-in" style={{animationDelay: '240ms'}}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 shadow-sm px-3.5 py-1.5 text-xs font-bold text-gray-700">
              <Mic className="w-3.5 h-3.5 text-[#F97316]" /> {totalSessions} plenary sessions
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 shadow-sm px-3.5 py-1.5 text-xs font-bold text-gray-700">
              <CalendarDays className="w-3.5 h-3.5 text-[#F97316]" /> Across {plenaryDays.length} days
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 shadow-sm px-3.5 py-1.5 text-xs font-bold text-gray-700">
              <Users2 className="w-3.5 h-3.5 text-[#F97316]" /> Speakers &amp; partners listed
            </span>
          </div>

          <Link
            to="/schedule"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F97316] hover:text-[#EA580C] transition-colors animate-fade-slide-in"
            style={{animationDelay: '300ms'}}
          >
            View the full schedule <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <main className="section-container pt-0 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {plenaryDays.map((day) => (
            <section key={day.day}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#F97316] text-white text-xs font-black flex items-center justify-center shrink-0">
                  {day.day}
                </span>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  {day.weekday}, {day.date}
                </h2>
                <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
              </div>
              <div className="space-y-4">
                {day.sessions.map((session, i) => (
                  <ExperienceSessionCard key={session.title} session={session} index={i} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PlenarySessions;
