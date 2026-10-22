import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {format, intervalToDuration, parseISO} from 'date-fns';
import {CalendarPlus, Clock, Coffee, Handshake, Layers, MapPin, MessageSquare, Mic, Music2, Rocket, Sparkles, Trophy, Waves, Wrench} from 'lucide-react';
import {useScrollReveal} from '@/hooks/useScrollReveal';
import {PIW_PROGRAM, WEEK_LONG_EXPERIENCES, SIDE_EVENTS, type ProgramDay, type ProgramSession} from '@/lib/scheduleData';

// A distinct visual accent per day so the six-day journey reads as a sequence, not a repeated template.
interface DayAccent {
  grad: string;
  text: string;
  soft: string;
  glow: string;
  dot: string;
  line: string;
}
const DAY_ACCENTS: DayAccent[] = [
  {grad: 'from-[#F97316] to-[#EA580C]', text: 'text-[#F97316]', soft: 'bg-orange-50/80 border-orange-100', glow: 'shadow-orange-500/25', dot: 'bg-[#F97316]', line: 'from-[#F97316]'},
  {grad: 'from-purple-500 to-purple-700', text: 'text-purple-600', soft: 'bg-purple-50/80 border-purple-100', glow: 'shadow-purple-500/25', dot: 'bg-purple-600', line: 'from-purple-500'},
  {grad: 'from-sky-500 to-blue-700', text: 'text-sky-600', soft: 'bg-sky-50/80 border-sky-100', glow: 'shadow-sky-500/25', dot: 'bg-sky-600', line: 'from-sky-500'},
  {grad: 'from-emerald-500 to-emerald-700', text: 'text-emerald-600', soft: 'bg-emerald-50/80 border-emerald-100', glow: 'shadow-emerald-500/25', dot: 'bg-emerald-600', line: 'from-emerald-500'},
  {grad: 'from-amber-500 to-amber-700', text: 'text-amber-600', soft: 'bg-amber-50/80 border-amber-100', glow: 'shadow-amber-500/25', dot: 'bg-amber-600', line: 'from-amber-500'},
  {grad: 'from-pink-500 to-rose-700', text: 'text-pink-600', soft: 'bg-pink-50/80 border-pink-100', glow: 'shadow-pink-500/25', dot: 'bg-pink-600', line: 'from-pink-500'},
];
const getDayAccent = (day: number): DayAccent => DAY_ACCENTS[(day - 1) % DAY_ACCENTS.length];

// Pulls the day's headline straight from its own Plenary/Launch/Fireside title — no new copy, just a bigger spotlight on what's already there.
const getDayHeadline = (day: ProgramDay): string | null => {
  const main = day.sessions.find((s) => /^plenary|^launch event|^fireside chat/i.test(s.title));
  if (!main) return null;
  const idx = main.title.indexOf(':');
  return idx > -1 ? main.title.slice(idx + 1).trim() : main.title;
};

// Scene-setting one-liners for Day 1 only, to give the opening day a narrative arc. Descriptive flavor text, not new facts.
const DAY_ONE_TAGLINES: Record<string, string> = {
  'Arrival, Registration & Setting Up': 'Badges on, seats found \u2014 energy building before the first bell.',
  'Plenary 1: This Is Pwani — 10 Years Through Art': 'A decade of the coast, told through art, music, and memory.',
  'Launch Event: Launch of the Swahili Library': 'A new home for Swahili heritage opens its doors at Fort Jesus.',
  'Fireside Chat': 'An honest, unscripted conversation on community-led change.',
  'Plenary 2: The Coast We Inherited to the Coast We Are Building — 10 Years of Agency, Safe Spaces, Livelihoods':
    'From the coast we inherited to the coast we\u2019re building \u2014 ten years of agency and livelihoods.',
  'Lunch Break': 'Recharge before the afternoon sessions.',
  'Plenary 3: The 10-Year Journey — How the Swahilipot Transformation Was Built From the Ground Up':
    'How Swahilipot\u2019s transformation was built, told by the people who built it.',
  'Plenary 4: From Agency to Livelihoods — Empowering Young People to Shape Their Economic Futures':
    'Putting opportunity and ownership in the hands of coastal youth.',
};

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
  /** True when items were merged because their time ranges overlap but aren't identical — i.e. a real parallel-tracks moment. */
  overlapping?: boolean;
  range?: {start: number; end: number};
}

const parseClockToken = (token: string): number | null => {
  const m = token.trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!m) return null;
  let h = parseInt(m[1], 10) % 12;
  if (m[3].toUpperCase() === 'PM') h += 12;
  return h * 60 + parseInt(m[2], 10);
};

// Parses "10:00 AM – 11:30 AM" into minutes-since-midnight; returns null for open-ended slots like "onward"/"till late".
const parseTimeRange = (time: string): {start: number; end: number} | null => {
  const [startPart, endPart] = time.split(/[–-]/);
  if (!startPart || !endPart) return null;
  const start = parseClockToken(startPart);
  const end = parseClockToken(endPart);
  if (start === null || end === null) return null;
  return {start, end};
};

const minutesToClock = (mins: number): string => {
  const h24 = Math.floor(mins / 60) % 24;
  const mer = h24 >= 12 ? 'PM' : 'AM';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(mins % 60).padStart(2, '0')} ${mer}`;
};

// Groups sessions whose time ranges overlap (not just match exactly), so genuinely parallel tracks at different venues
// render together as "pick one" clusters instead of reading like a sequential list.
const groupSessionsByTime = (sessions: ProgramSession[]): SessionTimeGroup[] => {
  const groups: SessionTimeGroup[] = [];
  sessions.forEach((session) => {
    const range = parseTimeRange(session.time);
    const current = groups[groups.length - 1];
    if (current) {
      if (current.time === session.time) {
        current.items.push(session);
        return;
      }
      if (range && current.range && range.start < current.range.end && range.end > current.range.start) {
        current.items.push(session);
        current.overlapping = true;
        current.range = {start: Math.min(current.range.start, range.start), end: Math.max(current.range.end, range.end)};
        current.time = `${minutesToClock(current.range.start)} – ${minutesToClock(current.range.end)}`;
        return;
      }
    }
    groups.push({time: session.time, items: [session], range: range ?? undefined});
  });
  return groups;
};

const TRACK_BADGE_STYLES: Record<string, string> = {
  'Sustainable Economies Village': 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-transparent shadow-sm shadow-emerald-500/30',
  'Digital Transformation Village': 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-transparent shadow-sm shadow-blue-500/30',
  'Youth and Entrepreneurship Village': 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-transparent shadow-sm shadow-purple-500/30',
};

// Lifts a "X Village — " prefix out of the title into its own track badge, for clearer scanning.
const splitTrack = (title: string): {track: string | null; title: string} => {
  const idx = title.indexOf(' — ');
  if (idx === -1) return {track: null, title};
  const prefix = title.slice(0, idx);
  if (!prefix.endsWith('Village')) return {track: null, title};
  return {track: prefix, title: title.slice(idx + 3)};
};

// Renders each detail as a small role-caption + bold name + muted title/org row, so it scans like a speaker card rather than a wall of bold text.
const renderDetailLine = (line: string, key: number) => {
  const colonIdx = line.indexOf(':');
  const hasLabel = colonIdx > -1 && colonIdx < 40;
  const label = hasLabel ? line.slice(0, colonIdx) : null;
  const rest = hasLabel ? line.slice(colonIdx + 1).trim() : line;
  const commaIdx = rest.indexOf(',');
  const name = commaIdx > -1 ? rest.slice(0, commaIdx) : rest;
  const tail = commaIdx > -1 ? rest.slice(commaIdx + 1).trim() : '';
  return (
    <div key={key} className="flex gap-2.5">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
      <p className="text-sm text-gray-600 leading-snug min-w-0">
        {label && <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">{label}</span>}
        <span className="font-semibold text-gray-900">{name}</span>
        {tail && <span>, {tail}</span>}
      </p>
    </div>
  );
};

// Shared session card markup, reused by the standard grid and the Day 1 timeline so both stay visually consistent.
// showOwnTime is set for overlapping/parallel clusters, where the group header shows a span rather than one fixed time.
const renderSessionCard = (session: ProgramSession, key: number, showOwnTime = false, delayMs = 0) => {
  const {track, title} = splitTrack(session.title);
  const kind = getSessionKind(session.title);
  const tagline = DAY_ONE_TAGLINES[session.title];
  return (
    <div
      key={key}
      style={{animationDelay: `${delayMs}ms`}}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300 p-5 md:p-6 animate-fade-slide-in"
    >
      <span className={`absolute inset-x-0 top-0 h-1.5 ${kind.bar}`} />
      {showOwnTime && (
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gray-500 mb-2">
          <Clock className="w-3 h-3 text-[#F97316]" /> {session.time}
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2 mb-2.5">
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
      <h3 className="text-[15px] md:text-base font-bold text-gray-900 leading-snug group-hover:text-[#F97316] transition-colors">{title}</h3>
      {tagline && <p className="text-xs text-gray-500 italic mt-1 leading-snug">{tagline}</p>}
      {session.venue && (
        <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 border border-orange-100 px-2.5 py-1 mt-2.5">
          <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
          <span className="text-xs font-semibold text-gray-800">{session.venue}</span>
        </div>
      )}
      {session.details.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100 space-y-2.5">
          {session.details.map((line, k) => renderDetailLine(line, k))}
        </div>
      )}
    </div>
  );
};

interface SessionKind {
  label: string;
  icon: typeof Mic;
  bar: string;
  iconWrap: string;
}

const DEFAULT_KIND: SessionKind = {label: 'Session', icon: Sparkles, bar: 'bg-gray-300', iconWrap: 'bg-gray-100 text-gray-500'};

const SESSION_KINDS: {regex: RegExp; kind: SessionKind}[] = [
  {regex: /deals den/i, kind: {label: 'Deals Den', icon: Handshake, bar: 'bg-gradient-to-r from-emerald-400 to-emerald-600', iconWrap: 'bg-emerald-50 text-emerald-600'}},
  {regex: /^plenary/i, kind: {label: 'Plenary', icon: Mic, bar: 'bg-gradient-to-r from-[#F97316] to-[#EA580C]', iconWrap: 'bg-[#F97316]/10 text-[#F97316]'}},
  {regex: /^fireside chat/i, kind: {label: 'Fireside Chat', icon: MessageSquare, bar: 'bg-gradient-to-r from-purple-400 to-purple-600', iconWrap: 'bg-purple-50 text-purple-600'}},
  {regex: /workshop/i, kind: {label: 'Workshop', icon: Wrench, bar: 'bg-gradient-to-r from-blue-400 to-blue-600', iconWrap: 'bg-blue-50 text-blue-600'}},
  {regex: /^launch event/i, kind: {label: 'Launch Event', icon: Rocket, bar: 'bg-gradient-to-r from-amber-400 to-amber-600', iconWrap: 'bg-amber-50 text-amber-600'}},
  {regex: /festival|gat talent/i, kind: {label: 'Live Culture', icon: Music2, bar: 'bg-gradient-to-r from-pink-400 to-pink-600', iconWrap: 'bg-pink-50 text-pink-600'}},
  {regex: /hackathon awards/i, kind: {label: 'Awards', icon: Trophy, bar: 'bg-gradient-to-r from-yellow-400 to-yellow-600', iconWrap: 'bg-yellow-50 text-yellow-600'}},
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

// A frosted countdown-and-clock panel over the hero art: ticks down to Day 1 arrival, then flips to a live Mombasa clock.
const EventPulse: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const eventStart = parseISO(`${PIW_PROGRAM[0].date}T08:30:00`);
  const eventEnd = parseISO(`${PIW_PROGRAM[PIW_PROGRAM.length - 1].date}T23:59:59`);
  const hasStarted = now >= eventStart;
  const hasEnded = now > eventEnd;
  const duration = hasStarted ? null : intervalToDuration({start: now, end: eventStart});

  return (
    <div className="w-full max-w-[260px] mx-auto lg:mx-0 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="h-1.5 flex">
        <span className="flex-1 bg-[#F97316]" />
        <span className="flex-1 bg-purple-500" />
        <span className="flex-1 bg-amber-400" />
        <span className="flex-1 bg-sky-400" />
      </div>
      <div className="p-5">
        {duration ? (
          <>
            <p className="text-center text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-3">Counting Down To PIW 2026</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                ['Days', duration.days ?? 0],
                ['Hrs', duration.hours ?? 0],
                ['Min', duration.minutes ?? 0],
                ['Sec', duration.seconds ?? 0],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white/10 py-2">
                  <div className="text-lg md:text-xl font-black text-white tabular-nums">{String(value).padStart(2, '0')}</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/60">{label}</div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-sm font-bold text-amber-300 uppercase tracking-widest">
            {hasEnded ? 'See You Next Year' : 'Happening Now'}
          </p>
        )}
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1.5">
            <Clock className="w-3 h-3 text-[#F97316]" /> Mombasa · EAT
          </p>
          <div className="text-xl font-black text-white tabular-nums">{format(now, 'h:mm:ss a')}</div>
          <p className="text-[11px] text-white/50 mt-1">{format(now, 'EEEE, MMM d, yyyy')}</p>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const heroRef = useScrollReveal();

  const activeDay = PIW_PROGRAM.find((day) => day.day === selectedDay) ?? PIW_PROGRAM[0];
  const dayAccent = getDayAccent(activeDay.day);
  const dayHeadline = getDayHeadline(activeDay);

  return (
    <div className="min-h-screen page-shell">
      <div className="relative overflow-hidden pt-20">
        <img
          src="/Teal Coastal Tech Event Background.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" />
        <Waves className="absolute bottom-6 right-6 w-20 h-20 md:w-28 md:h-28 text-white/10 animate-float" />
        <div ref={heroRef.ref} className="section-container py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-10">
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300 mb-4 animate-fade-slide-in">PIW 2026 Programme</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-slide-in" style={{animationDelay: '90ms'}}>
                Event <span className="gradient-text">Schedule</span>
              </h1>
              <div className="w-24 h-1 bg-[#F97316] mx-auto lg:mx-0 mb-6 animate-fade-slide-in" style={{animationDelay: '180ms'}} />
              <p className="text-xl text-white/85 max-w-3xl mx-auto lg:mx-0 drop-shadow animate-fade-slide-in" style={{animationDelay: '260ms'}}>
                Six days of innovation, collaboration, and transformation • October 26–31, 2026
              </p>
            </div>
            <div className="animate-fade-slide-in" style={{animationDelay: '340ms'}}>
              <EventPulse />
            </div>
          </div>
        </div>
      </div>


      <section className="py-5 md:py-7 bg-white border-b sticky top-16 z-20">
        <div className="section-container !py-0">
          <div className="relative flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray-200 -z-10" />
            {PIW_PROGRAM.map((day) => {
              const accent = getDayAccent(day.day);
              const isActive = selectedDay === day.day;
              return (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`shrink-0 snap-start group flex items-center gap-2 pl-2 pr-4 md:pr-5 py-1.5 md:py-2 rounded-full font-semibold transition-all duration-300 border ${
                    isActive
                      ? `bg-gradient-to-br ${accent.grad} text-white border-transparent shadow-lg ${accent.glow} md:scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-colors ${
                      isActive ? 'bg-white/20 text-white animate-ping-soft' : `${accent.soft} ${accent.text} border`
                    }`}
                  >
                    {day.day}
                  </span>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-sm">{`Day ${day.day}`}</span>
                    <span className={`text-[11px] font-normal ${isActive ? 'text-white/85' : 'text-gray-500'}`}>
                      {day.weekday}, {safeFormatDate(day.date)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[42vw] leading-none font-black text-gray-900/[0.035]">
            {String(activeDay.day).padStart(2, '0')}
          </span>
        </div>
        <div key={activeDay.day} className="section-container max-w-4xl relative z-10 animate-fade-slide-in">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <span className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${dayAccent.grad} text-white flex items-center justify-center text-xl font-black shadow-lg ${dayAccent.glow}`}>
                {String(activeDay.day).padStart(2, '0')}
              </span>
              <div>
                <span className={`${dayAccent.text} text-sm font-semibold tracking-wide uppercase`}>
                  {activeDay.weekday}, {safeFormatDate(activeDay.date, 'MMMM d, yyyy')}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{`Day ${activeDay.day}`}</h2>
                {dayHeadline && <p className="text-sm text-gray-500 mt-0.5 max-w-md leading-snug">{dayHeadline}</p>}
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
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-md hover:bg-gradient-to-r ${dayAccent.grad
                .split(' ')
                .map((c) => `hover:${c}`)
                .join(' ')} hover:shadow-lg hover:${dayAccent.glow} transition-all duration-300 self-start`}
            >
              <CalendarPlus className="w-3.5 h-3.5" /> Add Day to Calendar
            </button>
          </div>

          {activeDay.day === 1 && (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-[#7c2d12] text-white p-6 md:p-8 shadow-xl mb-10 animate-fade-slide-in" style={{animationDelay: '80ms'}}>
              <Waves className="absolute -right-6 -bottom-8 w-36 h-36 text-white/10" />
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-2.5">
                <Sparkles className="w-3.5 h-3.5" /> Opening Day · 10 Years of Pwani
              </span>
              <p className="relative z-10 text-sm md:text-base text-white/85 max-w-2xl leading-relaxed">
                The story starts here — a decade of the coast told through art, a new home for Swahili heritage at Fort Jesus,
                and the honest conversations that trace how Pwani built its agency, its spaces, and its livelihoods.
              </p>
            </div>
          )}

          <div className="relative pl-9 md:pl-11">
            <span className={`absolute left-[13px] md:left-[15px] top-1 bottom-1 w-px bg-gradient-to-b ${dayAccent.line} via-gray-200 to-transparent animate-grow-line`} />
            <div className="space-y-8">
              {groupSessionsByTime(activeDay.sessions).map((group, i) => {
                const groupDelay = Math.min(i * 90, 540);
                if (group.items.length === 1 && isLogistics(group.items[0])) {
                  const kind = getSessionKind(group.items[0].title);
                  return (
                    <div
                      key={i}
                      className="relative flex items-center gap-3 text-sm text-gray-500 animate-fade-slide-in"
                      style={{animationDelay: `${groupDelay}ms`}}
                    >
                      <span className={`absolute -left-9 md:-left-11 w-7 h-7 rounded-full flex items-center justify-center ring-4 ring-gray-50 ${kind.iconWrap}`}>
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
                  <div key={i} className="relative animate-fade-slide-in" style={{animationDelay: `${groupDelay}ms`}}>
                    <span className={`absolute -left-9 md:-left-11 top-0 w-7 h-7 rounded-full ${dayAccent.dot} ring-4 ring-gray-50 flex items-center justify-center shadow-sm`}>
                      <Clock className="w-3.5 h-3.5 text-white" />
                    </span>
                    {group.overlapping ? (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                          {group.time}
                        </span>
                        <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mt-2">
                          <Layers className="w-3.5 h-3.5 text-[#F97316]" />
                          Parallel sessions — pick where you'll be, times overlap below
                        </p>
                      </div>
                    ) : (
                      <span className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm mb-3">
                        {group.time}
                      </span>
                    )}
                    <div className={`grid gap-4 ${group.items.length > 1 ? 'md:grid-cols-2' : ''}`}>
                      {group.items.map((session, j) => renderSessionCard(session, j, group.overlapping, groupDelay + j * 70))}
                    </div>
                  </div>
                );
              })}
            </div>
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