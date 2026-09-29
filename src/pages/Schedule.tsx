import React, {useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {format, parseISO} from 'date-fns';
import {CalendarPlus, Clock, MapPin, Search, Star, Users} from 'lucide-react';
import {useScrollReveal, fadeUp, scaleIn} from '@/hooks/useScrollReveal';
import {
  PIW_PROGRAM,
  type ProgramSession,
  type SessionType,
  type Village,
  type VillageTrack,
} from '@/lib/scheduleData';

const SESSION_TYPE_META: Record<SessionType, {text: string; border: string}> = {
  Arrival: {text: 'text-gray-500', border: 'border-gray-300'},
  Plenary: {text: 'text-[#EA580C]', border: 'border-[#F97316]'},
  Keynote: {text: 'text-[#EA580C]', border: 'border-[#F97316]'},
  'Fireside Chat': {text: 'text-amber-600', border: 'border-amber-400'},
  Documentary: {text: 'text-sky-600', border: 'border-sky-400'},
  Ceremony: {text: 'text-rose-600', border: 'border-rose-400'},
  Awards: {text: 'text-yellow-600', border: 'border-yellow-400'},
  Break: {text: 'text-gray-400', border: 'border-gray-300'},
  Special: {text: 'text-purple-600', border: 'border-purple-400'},
};

const VILLAGE_META: Record<Village, {text: string; border: string}> = {
  'Sustainable Economies Village': {text: 'text-green-700', border: 'border-green-500'},
  'Digital Transformation Village': {text: 'text-purple-700', border: 'border-purple-500'},
  'Youth and Entrepreneurship Village': {text: 'text-[#EA580C]', border: 'border-[#F97316]'},
};

type TimePeriod = 'Morning' | 'Afternoon' | 'Evening';
const TIME_PERIODS: TimePeriod[] = ['Morning', 'Afternoon', 'Evening'];

const getPeriod = (time: string): TimePeriod => {
  const match = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return 'Morning';
  let hour = parseInt(match[1], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && hour !== 12) hour += 12;
  if (ampm === 'AM' && hour === 12) hour = 0;
  if (hour < 12) return 'Morning';
  if (hour < 17) return 'Afternoon';
  return 'Evening';
};

const periodsPresent = (times: string[]) => {
  const present = new Set(times.map(getPeriod));
  return TIME_PERIODS.filter((p) => present.has(p));
};

const safeFormatDate = (date: string, formatString = 'MMM d') => {
  try {
    return format(parseISO(date), formatString);
  } catch {
    return date;
  }
};

const normalize = (...parts: Array<string | string[] | undefined>) =>
  parts.flat().filter(Boolean).join(' ').toLowerCase();

const sessionMatches = (session: ProgramSession, query: string) =>
  normalize(session.title, session.topic, session.venue, session.moderator, session.speakers, session.keynote, session.panelists, session.partners).includes(query);

const trackMatches = (track: VillageTrack, query: string) =>
  normalize(track.title, track.village, track.venue, track.moderator, track.keynote, track.partners).includes(query);

const BOOKMARKS_KEY = 'piw2026-schedule-bookmarks';

const loadBookmarks = (): Set<string> => {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
};

// Parses a "10:00 AM – 11:30 AM" range against a session's date into real Date objects for .ics export.
const parseTimeRange = (time: string, dateISO: string): {start: Date; end: Date} | null => {
  const [startText, endText] = time.split(/[\u2013-]/).map((s) => s.trim());
  const parseOne = (t: string) => {
    const m = t?.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
    if (!m) return null;
    let hour = parseInt(m[1], 10);
    const ampm = m[3].toUpperCase();
    if (ampm === 'PM' && hour !== 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;
    const d = parseISO(dateISO);
    d.setHours(hour, parseInt(m[2], 10), 0, 0);
    return d;
  };
  const start = parseOne(startText);
  const end = parseOne(endText);
  return start && end ? {start, end} : null;
};

const escapeIcsText = (s: string) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;');

const downloadIcs = (title: string, description: string, location: string, time: string, dateISO: string) => {
  const range = parseTimeRange(time, dateISO);
  if (!range) return;
  const fmt = (d: Date) => format(d, "yyyyMMdd'T'HHmmss");
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Pwani Innovation Week//Schedule//EN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@piw2026`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(range.start)}`,
    `DTEND:${fmt(range.end)}`,
    `SUMMARY:${escapeIcsText(title)}`,
    description ? `DESCRIPTION:${escapeIcsText(description)}` : '',
    location ? `LOCATION:${escapeIcsText(location)}` : '',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean);
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

// Small top-right controls shared by session and breakout cards for bookmarking and calendar export.
const CardActions: React.FC<{
  bookmarked: boolean;
  onToggleBookmark: () => void;
  onAddToCalendar: () => void;
}> = ({bookmarked, onToggleBookmark, onAddToCalendar}) => (
  <div className="absolute top-4 right-4 flex items-center gap-1">
    <button
      type="button"
      onClick={onToggleBookmark}
      aria-label={bookmarked ? 'Remove from my agenda' : 'Add to my agenda'}
      className={`p-1.5 rounded-lg transition-colors ${bookmarked ? 'text-[#F97316] bg-orange-50' : 'text-gray-300 hover:text-gray-400 hover:bg-gray-50'}`}
    >
      <Star className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} />
    </button>
    <button
      type="button"
      onClick={onAddToCalendar}
      aria-label="Add to calendar"
      className="p-1.5 rounded-lg text-gray-300 hover:text-[#F97316] hover:bg-orange-50 transition-colors"
    >
      <CalendarPlus className="w-4 h-4" />
    </button>
  </div>
);

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

const SessionRow: React.FC<{
  session: ProgramSession;
  date: string;
  bookmarked: boolean;
  onToggleBookmark: () => void;
}> = ({session, date, bookmarked, onToggleBookmark}) => {
  const meta = SESSION_TYPE_META[session.type];
  return (
    <div className={`page-surface rounded-2xl border-l-4 ${meta.border} relative grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-8 p-6`}>
      <CardActions
        bookmarked={bookmarked}
        onToggleBookmark={onToggleBookmark}
        onAddToCalendar={() => downloadIcs(session.title, session.topic ?? '', session.venue ?? '', session.time, date)}
      />
      <div className="text-sm font-semibold text-gray-500 md:pt-0.5">{session.time}</div>

      <div className="pr-16">
        <span className={`text-[11px] font-bold uppercase tracking-wider ${meta.text}`}>{session.type}</span>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1">{session.title}</h3>
        {session.topic && <p className="text-gray-600 mt-1">{session.topic}</p>}

        {(session.venue || session.speakers?.length) && (
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-gray-500">
            {session.venue && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                {session.venue}
              </span>
            )}
            {session.speakers?.length ? (
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-gray-400" />
                {session.speakers.join(', ')}
              </span>
            ) : null}
          </div>
        )}

        {session.moderator && (
          <p className="text-sm text-gray-500 mt-1.5">
            <span className="font-semibold text-gray-700">Moderator: </span>
            {session.moderator}
          </p>
        )}

        {session.keynote?.length ? (
          <p className="text-sm text-gray-500 mt-1.5">
            <span className="font-semibold text-gray-700">Keynote: </span>
            {session.keynote.join(' • ')}
          </p>
        ) : null}

        {session.panelists?.length ? (
          <p className="text-sm text-gray-500 mt-1.5">
            <span className="font-semibold text-gray-700">Panelists: </span>
            {session.panelists.join(', ')}
          </p>
        ) : null}

        {session.partners?.length ? (
          <p className="text-sm text-gray-400 mt-1.5">{session.partners.join(' · ')}</p>
        ) : null}

        {session.notes && <p className="text-sm text-gray-400 italic mt-2">{session.notes}</p>}
      </div>
    </div>
  );
};

const BreakoutRow: React.FC<{
  time: string;
  tracks: VillageTrack[];
  date: string;
  bookmarks: Set<string>;
  onToggleBookmark: (id: string) => void;
  idPrefix: string;
}> = ({time, tracks, date, bookmarks, onToggleBookmark, idPrefix}) => (
  <div className="page-surface rounded-2xl grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-8 p-6">
    <div className="text-sm font-semibold text-gray-500 md:pt-0.5">{time}</div>

    <div>
      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Parallel Sessions</span>
      <div className="space-y-7 mt-4">
        {tracks.map((track) => {
          const meta = VILLAGE_META[track.village];
          const id = `${idPrefix}-${track.village}`;
          return (
            <div key={track.village} className={`relative border-l-2 ${meta.border} pl-4 pr-16`}>
              <CardActions
                bookmarked={bookmarks.has(id)}
                onToggleBookmark={() => onToggleBookmark(id)}
                onAddToCalendar={() => downloadIcs(track.title, track.village, track.venue ?? '', time, date)}
              />
              <span className={`text-xs font-bold uppercase tracking-wide ${meta.text}`}>{track.village}</span>
              <h4 className="text-lg font-bold text-gray-900 mt-1 leading-snug">{track.title}</h4>
              {track.format && <p className="text-sm text-gray-400 mt-1">{track.format}</p>}
              {track.venue && (
                <p className="text-sm text-gray-500 mt-2 inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  {track.venue}
                </p>
              )}
              {track.moderator && (
                <p className="text-sm text-gray-500 mt-1.5">
                  <span className="font-semibold text-gray-700">Moderator: </span>
                  {track.moderator}
                </p>
              )}
              {track.keynote?.length ? (
                <p className="text-sm text-gray-500 mt-1.5">
                  <span className="font-semibold text-gray-700">Keynote: </span>
                  {track.keynote.join(' • ')}
                </p>
              ) : null}
              {track.partners?.length ? <p className="text-sm text-gray-400 mt-1.5">{track.partners.join(' · ')}</p> : null}
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('Morning');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [bookmarks, setBookmarks] = useState<Set<string>>(loadBookmarks);
  const heroRef = useScrollReveal();

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarks)));
    } catch {
      // localStorage unavailable (e.g. private browsing) — bookmarks just won't persist.
    }
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const activeDay = PIW_PROGRAM.find((day) => day.day === selectedDay) ?? PIW_PROGRAM[0];

  const availablePeriods = useMemo(
    () => periodsPresent(activeDay.blocks.map((b) => b.time)),
    [activeDay],
  );

  const handleSelectDay = (dayNum: number) => {
    setSelectedDay(dayNum);
    const day = PIW_PROGRAM.find((d) => d.day === dayNum);
    if (day) {
      const present = periodsPresent(day.blocks.map((b) => b.time));
      if (present.length) setSelectedPeriod(present[0]);
    }
  };

  const visibleBlocks = activeDay.blocks.filter((block) => getPeriod(block.time) === selectedPeriod);

  const query = searchQuery.trim().toLowerCase();
  const renderItems = visibleBlocks
    .map((block, index) => {
      const key = `${activeDay.day}-${index}`;
      if (block.kind === 'session') {
        const id = `s-${key}`;
        if (query && !sessionMatches(block, query)) return null;
        if (showBookmarkedOnly && !bookmarks.has(id)) return null;
        return {key, id, kind: 'session' as const, session: block};
      }
      const tracks = block.tracks.filter((track) => {
        const id = `t-${key}-${track.village}`;
        if (query && !trackMatches(track, query)) return false;
        if (showBookmarkedOnly && !bookmarks.has(id)) return false;
        return true;
      });
      if (!tracks.length) return null;
      return {key, id: `t-${key}`, kind: 'breakout' as const, time: block.time, tracks};
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

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
                onClick={() => handleSelectDay(day.day)}
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
          <div className="mb-8">
            <span className="text-[#F97316] text-sm font-semibold tracking-wide uppercase">
              {activeDay.weekday}, {safeFormatDate(activeDay.date, 'MMMM d, yyyy')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
              {`Day ${activeDay.day}`}
              {activeDay.theme ? <span className="text-gray-400"> — {activeDay.theme}</span> : null}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-5">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sessions, speakers..."
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316]"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowBookmarkedOnly((v) => !v)}
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                showBookmarkedOnly ? 'bg-[#F97316] text-white border-[#F97316]' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              <Star className="w-3.5 h-3.5" fill={showBookmarkedOnly ? 'currentColor' : 'none'} />
              My Agenda{bookmarks.size ? ` (${bookmarks.size})` : ''}
            </button>
          </div>

          {availablePeriods.length > 1 && (
            <div className="flex gap-6 border-b border-gray-200 mb-4">
              {availablePeriods.map((period) => {
                const isActive = selectedPeriod === period;
                return (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`pb-3 text-sm font-semibold border-b-2 transition-colors duration-200 ${
                      isActive ? 'border-[#F97316] text-[#F97316]' : 'border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {period}
                  </button>
                );
              })}
            </div>
          )}

          <div className="space-y-5">
            {renderItems.map((item) =>
              item.kind === 'session' ? (
                <SessionRow
                  key={item.key}
                  session={item.session}
                  date={activeDay.date}
                  bookmarked={bookmarks.has(item.id)}
                  onToggleBookmark={() => toggleBookmark(item.id)}
                />
              ) : (
                <BreakoutRow
                  key={item.key}
                  time={item.time}
                  tracks={item.tracks}
                  date={activeDay.date}
                  bookmarks={bookmarks}
                  onToggleBookmark={toggleBookmark}
                  idPrefix={item.id}
                />
              ),
            )}
            {!renderItems.length && (
              <p className="page-surface rounded-2xl p-8 text-center text-gray-400 text-sm">
                {query || showBookmarkedOnly ? 'No sessions match your filters.' : 'No sessions scheduled for this time of day.'}
              </p>
            )}
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