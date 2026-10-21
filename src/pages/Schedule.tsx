import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {format, parseISO} from 'date-fns';
import {CalendarPlus, Clock, Coffee, Handshake, MapPin, MessageSquare, Mic, Music2, Rocket, Sparkles, Trophy, Wrench} from 'lucide-react';
import {useScrollReveal, fadeUp, scaleIn} from '@/hooks/useScrollReveal';
import {PIW_PROGRAM, WEEK_LONG_EXPERIENCES, SIDE_EVENTS, type ProgramSession} from '@/lib/scheduleData';

const safeFormatDate = (date: string, formatString = 'MMM d') => {
  try {
    return format(parseISO(date), formatString);
  } catch {
    return date;
  }
};

const escapeIcsText = (s: string) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n');

interface SessionTimeGroup {
  time: string;
  items: ProgramSession[];
}

// Groups consecutive sessions that share the same time slot, so parallel tracks render side by side.
const groupSessionsByTime = (sessions: ProgramSession[]): SessionTimeGroup[] => {
  const groups: SessionTimeGroup[] = [];
  sessions.forEach((session) => {
    const current = groups[groups.length - 1];
    if (current && current.time === session.time) {
      current.items.push(session);
    } else {
      groups.push({time: session.time, items: [session]});
    }
  });
  return groups;
};

const TRACK_BADGE_STYLES: Record<string, string> = {
  'Sustainable Economies Village': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Digital Transformation Village': 'bg-blue-50 text-blue-700 border-blue-200',
  'Youth and Entrepreneurship Village': 'bg-purple-50 text-purple-700 border-purple-200',
};

// Lifts a "X Village — " prefix out of the title into its own track badge, for clearer scanning.
const splitTrack = (title: string): {track: string | null; title: string} => {
  const idx = title.indexOf(' — ');
  if (idx === -1) return {track: null, title};
  const prefix = title.slice(0, idx);
  if (!prefix.endsWith('Village')) return {track: null, title};
  return {track: prefix, title: title.slice(idx + 3)};
};

// Bolds the "Moderator:" / "Keynote Address:" style label at the start of a detail line.
const renderDetailLine = (line: string, key: number) => {
  const idx = line.indexOf(':');
  if (idx > -1 && idx < 40) {
    return (
      <li key={key}>
        <span className="font-semibold text-gray-700">{line.slice(0, idx + 1)}</span>
        {line.slice(idx + 1)}
      </li>
    );
  }
  return <li key={key}>{line}</li>;
};

interface SessionKind {
  label: string;
  icon: typeof Mic;
  bar: string;
  iconWrap: string;
}

const DEFAULT_KIND: SessionKind = {label: 'Session', icon: Sparkles, bar: 'bg-gray-300', iconWrap: 'bg-gray-100 text-gray-500'};

const SESSION_KINDS: {regex: RegExp; kind: SessionKind}[] = [
  {regex: /deals den/i, kind: {label: 'Deals Den', icon: Handshake, bar: 'bg-emerald-400', iconWrap: 'bg-emerald-50 text-emerald-600'}},
  {regex: /^plenary/i, kind: {label: 'Plenary', icon: Mic, bar: 'bg-[#F97316]', iconWrap: 'bg-[#F97316]/10 text-[#F97316]'}},
  {regex: /^fireside chat/i, kind: {label: 'Fireside Chat', icon: MessageSquare, bar: 'bg-purple-400', iconWrap: 'bg-purple-50 text-purple-600'}},
  {regex: /workshop/i, kind: {label: 'Workshop', icon: Wrench, bar: 'bg-blue-400', iconWrap: 'bg-blue-50 text-blue-600'}},
  {regex: /^launch event/i, kind: {label: 'Launch Event', icon: Rocket, bar: 'bg-amber-400', iconWrap: 'bg-amber-50 text-amber-600'}},
  {regex: /festival|gat talent/i, kind: {label: 'Live Culture', icon: Music2, bar: 'bg-pink-400', iconWrap: 'bg-pink-50 text-pink-600'}},
  {regex: /hackathon awards/i, kind: {label: 'Awards', icon: Trophy, bar: 'bg-yellow-400', iconWrap: 'bg-yellow-50 text-yellow-600'}},
  {regex: /lunch break|arrival|registration|setting up/i, kind: {label: 'Logistics', icon: Coffee, bar: 'bg-gray-300', iconWrap: 'bg-gray-100 text-gray-500'}},
];

const getSessionKind = (title: string): SessionKind =>
  SESSION_KINDS.find(({regex}) => regex.test(title))?.kind ?? DEFAULT_KIND;

// Plain logistics entries (arrival, lunch) render as a slim row instead of a full card.
const isLogistics = (session: ProgramSession) =>
  session.details.length === 0 && !session.venue && /lunch break|arrival|registration|setting up/i.test(session.title);

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
          <div className="flex flex-wrap justify-center gap-2.5">
            {PIW_PROGRAM.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedDay === day.day
                    ? 'bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white shadow-lg shadow-orange-500/25 scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-[#F97316] border border-gray-200'
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
        <div className="section-container max-w-4xl relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <span className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white flex items-center justify-center text-xl font-black shadow-lg shadow-orange-500/25">
                {String(activeDay.day).padStart(2, '0')}
              </span>
              <div>
                <span className="text-[#F97316] text-sm font-semibold tracking-wide uppercase">
                  {activeDay.weekday}, {safeFormatDate(activeDay.date, 'MMMM d, yyyy')}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{`Day ${activeDay.day}`}</h2>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                downloadDayIcs(
                  `PIW 2026 – Day ${activeDay.day}`,
                  activeDay.sessions
                    .map((s) => `${s.time} — ${s.title}${s.venue ? ` (${s.venue})` : ''}`)
                    .join('\n'),
                  activeDay.date,
                )
              }
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold bg-gray-900 text-white hover:bg-[#F97316] transition-colors self-start"
            >
              <CalendarPlus className="w-3.5 h-3.5" /> Add Day to Calendar
            </button>
          </div>

          <div className="space-y-8">
            {groupSessionsByTime(activeDay.sessions).map((group, i) => {
              if (group.items.length === 1 && isLogistics(group.items[0])) {
                const kind = getSessionKind(group.items[0].title);
                return (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${kind.iconWrap}`}>
                      <kind.icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold text-gray-900">{group.time}</span>
                    <span>—</span>
                    <span>{group.items[0].title}</span>
                    <span className="h-px flex-1 bg-gray-100" />
                  </div>
                );
              }
              return (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="shrink-0 inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-[#F97316]" /> {group.time}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                  </div>
                  <div className={`grid gap-4 ${group.items.length > 1 ? 'md:grid-cols-2' : ''}`}>
                    {group.items.map((session, j) => {
                      const {track, title} = splitTrack(session.title);
                      const kind = getSessionKind(session.title);
                      return (
                        <div
                          key={j}
                          className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 md:p-6"
                        >
                          <span className={`absolute inset-x-0 top-0 h-1 ${kind.bar}`} />
                          <div className="flex items-center gap-2 mb-2.5">
                            <span className={`w-7 h-7 rounded-full flex items-center justify-center ${kind.iconWrap}`}>
                              <kind.icon className="w-3.5 h-3.5" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{kind.label}</span>
                            {track && (
                              <span
                                className={`ml-auto text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${
                                  TRACK_BADGE_STYLES[track] ?? 'bg-gray-50 text-gray-600 border-gray-200'
                                }`}
                              >
                                {track}
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-900 leading-snug">{title}</h3>
                          {session.venue && (
                            <p className="flex items-center gap-1 text-xs text-gray-500 mt-1.5">
                              <MapPin className="w-3 h-3 text-[#F97316]" /> {session.venue}
                            </p>
                          )}
                          {session.details.length > 0 && (
                            <ul className="mt-3 space-y-1 text-sm text-gray-600 leading-relaxed list-disc list-inside">
                              {session.details.map((line, k) => renderDetailLine(line, k))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <img
          src="/images/A26I5421.jpg"
          alt="Visitors at the Utamaduni Village Corner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25" />
        <div className="section-container max-w-4xl relative z-10">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white bg-[#F97316] px-4 py-1.5 rounded-full shadow-lg shadow-orange-900/30">
              <Sparkles className="w-3.5 h-3.5" /> Happening All Week
            </span>
            {WEEK_LONG_EXPERIENCES.map((experience) => (
              <h2 key={experience.title} className="text-3xl md:text-5xl font-black text-white mt-4 drop-shadow-lg">
                {experience.title}
              </h2>
            ))}
          </div>
          {WEEK_LONG_EXPERIENCES.map((experience) => (
            <div
              key={experience.title}
              className="bg-white/95 backdrop-blur rounded-3xl border-t-4 border-[#F97316] p-6 md:p-10 shadow-2xl space-y-4"
            >
              <div className="flex flex-wrap gap-2">
                {['Henna Art', 'Pottery Making', 'Language Corner'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-50 text-[#F97316] border border-orange-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {experience.description.map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F97316] bg-white px-3 py-1 rounded-full">
              Side Events & Bootcamps
            </span>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {SIDE_EVENTS.map((event, i) => (
                <div key={i} className="page-surface rounded-2xl border-l-4 border-[#F97316] p-5">
                  <p className="text-xs font-semibold text-[#F97316] uppercase tracking-wide mb-1">{event.dates}</p>
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  {event.description && <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">{event.description}</p>}
                </div>
              ))}
            </div>
          </div>
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