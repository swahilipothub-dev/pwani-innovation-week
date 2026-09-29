import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {format, parseISO} from 'date-fns';
import {CalendarPlus, Clock, Sparkles} from 'lucide-react';
import {useScrollReveal, fadeUp, scaleIn} from '@/hooks/useScrollReveal';
import {PIW_PROGRAM, WEEK_LONG_EXPERIENCES} from '@/lib/scheduleData';

const safeFormatDate = (date: string, formatString = 'MMM d') => {
  try {
    return format(parseISO(date), formatString);
  } catch {
    return date;
  }
};

const escapeIcsText = (s: string) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n');

// Builds a whole-day, all-day .ics event so attendees can drop the day straight into their calendar.
const downloadDayIcs = (title: string, description: string, dateISO: string) => {
  const fmtDate = (d: Date) => format(d, 'yyyyMMdd');
  const start = parseISO(dateISO);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Pwani Innovation Week//Schedule//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@piw2026`,
    `DTSTAMP:${format(new Date(), "yyyyMMdd'T'HHmmss")}`,
    `DTSTART;VALUE=DATE:${fmtDate(start)}`,
    `DTEND;VALUE=DATE:${fmtDate(end)}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  const blob = new Blob([lines.join('\r\n')], {type: 'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// A live clock dressed in the coast's coral/purple/gold banner colors, so the hero isn't just text.
const CulturalClock: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-[220px] mx-auto lg:mx-0 rounded-2xl border border-gray-200 bg-white/95 shadow-xl overflow-hidden">
      <div className="h-2 flex">
        <span className="flex-1 bg-[#F97316]" />
        <span className="flex-1 bg-purple-500" />
        <span className="flex-1 bg-amber-400" />
        <span className="flex-1 bg-[#F97316]" />
      </div>
      <div className="p-5 text-center">
        <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
          <Clock className="w-3 h-3 text-[#F97316]" /> Mombasa · EAT
        </p>
        <div className="text-3xl font-black text-gray-900 tabular-nums tracking-tight">{format(now, 'h:mm:ss a')}</div>
        <p className="text-xs text-gray-500 mt-1.5">{format(now, 'EEEE, MMM d, yyyy')}</p>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const heroRef = useScrollReveal();

  const activeDay = PIW_PROGRAM.find((day) => day.day === selectedDay) ?? PIW_PROGRAM[0];

  return (
    <div className="min-h-screen page-shell">
      <div className="relative overflow-hidden pt-20">
        <img
          src="/images/piw-2026/WhatsApp Image 2026-06-30 at 14.03.23.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 page-hero-bg" />
        <div ref={heroRef.ref} className="section-container py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div className="text-center lg:text-left">
              <p style={fadeUp(heroRef.inView, 0)} className="page-hero-kicker mb-4">PIW 2026 Programme</p>
              <h1 style={fadeUp(heroRef.inView, 60)} className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Event <span className="gradient-text">Schedule</span>
              </h1>
              <div style={scaleIn(heroRef.inView, 140)} className="w-24 h-1 bg-[#F97316] mx-auto lg:mx-0 mb-6" />
              <p style={fadeUp(heroRef.inView, 220)} className="text-xl text-gray-700 max-w-3xl mx-auto lg:mx-0">
                Six days of innovation, collaboration, and transformation • October 26–31, 2026
              </p>
            </div>
            <div style={scaleIn(heroRef.inView, 300)}>
              <CulturalClock />
            </div>
          </div>
        </div>
      </div>

      <section className="py-6 bg-white border-b sticky top-16 z-20">
        <div className="section-container !py-0">
          <div className="flex flex-wrap justify-center gap-3">
            {PIW_PROGRAM.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDay === day.day
                    ? 'bg-[#F97316] text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="flex flex-col items-center leading-tight">
                  <span className="text-sm">{`Day ${day.day}`}</span>
                  <span className={`text-[11px] font-normal ${selectedDay === day.day ? 'text-white/85' : 'text-gray-500'}`}>
                    {day.weekday}, {safeFormatDate(day.date)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[42vw] leading-none font-black text-gray-900/[0.035]">
            {String(activeDay.day).padStart(2, '0')}
          </span>
        </div>
        <div className="section-container max-w-3xl relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <span className="text-[#F97316] text-sm font-semibold tracking-wide uppercase">
                {activeDay.weekday}, {safeFormatDate(activeDay.date, 'MMMM d, yyyy')}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">{`Day ${activeDay.day}`}</h2>
            </div>
            <button
              type="button"
              onClick={() =>
                downloadDayIcs(
                  `PIW 2026 – Day ${activeDay.day}`,
                  activeDay.summary.join('\n\n'),
                  activeDay.date,
                )
              }
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border border-gray-200 bg-white text-gray-600 hover:border-[#F97316] hover:text-[#F97316] transition-colors self-start"
            >
              <CalendarPlus className="w-3.5 h-3.5" /> Add Day to Calendar
            </button>
          </div>

          <div className="space-y-4">
            {activeDay.summary.map((paragraph, i) => (
              <div key={i} className="page-surface rounded-2xl p-5 md:p-6 flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 text-[#F97316] font-bold text-sm flex items-center justify-center">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-gray-600 leading-relaxed pt-1">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <img
          src="/images/A26I5421.jpg"
          alt="Visitors at the Utamaduni Village Corner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="section-container max-w-3xl relative z-10">
          <div className="mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] bg-white px-3 py-1 rounded-full">
              Happening All Week
            </span>
            {WEEK_LONG_EXPERIENCES.map((experience) => (
              <h2 key={experience.title} className="text-2xl md:text-3xl font-bold text-white mt-3 drop-shadow-md">
                {experience.title}
              </h2>
            ))}
          </div>
          {WEEK_LONG_EXPERIENCES.map((experience) => (
            <div key={experience.title} className="page-surface rounded-2xl border-l-4 border-[#F97316] p-6 md:p-8 space-y-4">
              <Sparkles className="w-5 h-5 text-[#F97316]" />
              {experience.description.map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 text-white overflow-hidden">
        <img
          src="/images/piw-2026/WhatsApp Image 2026-06-30 at 15.13.54.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/55 to-[#EA580C]/60" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="section-container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Register now to secure your spot at Pwani Innovation Week 2026 and be part of the coastal transformation.
          </p>
          <Link
            to="/tickets"
            className="inline-block bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Schedule;