import { Clock, MapPin } from 'lucide-react';
import type { ProgramSession } from '@/lib/scheduleData';
import { getSpeakerPhoto } from '@/lib/speakers2026';

const TRACK_STYLES: Record<string, {bar: string; chip: string}> = {
  'Digital Transformation Village': {bar: 'from-blue-400 to-blue-600', chip: 'bg-blue-50 text-blue-600 border-blue-100'},
  'Sustainable Economies Village': {bar: 'from-emerald-400 to-emerald-600', chip: 'bg-emerald-50 text-emerald-600 border-emerald-100'},
  'Youth and Entrepreneurship Village': {bar: 'from-purple-400 to-purple-600', chip: 'bg-purple-50 text-purple-600 border-purple-100'},
};
const DEFAULT_TRACK_STYLE = {bar: 'from-[#F97316] to-[#EA580C]', chip: 'bg-orange-50 text-[#F97316] border-orange-100'};

// Splits "<Village Name> Village — Rest of Title" into a track badge + the display title.
const splitTrack = (title: string) => {
  const idx = title.indexOf(' — ');
  if (idx === -1) return {track: null as string | null, title};
  const prefix = title.slice(0, idx);
  if (!prefix.endsWith('Village')) return {track: null as string | null, title};
  return {track: prefix, title: title.slice(idx + 3)};
};

interface SpeakerEntry {
  role: string;
  name: string;
}

const ROLE_REGEX = /^(keynote|moderator|panelist|partner|facilitator|welcome|remarks|speaker)/i;

// Turns detail lines like "Moderator: Jane Doe, Title" into speaker chips, carrying the
// last labeled role forward so continuation lines (extra panelists/partners) stay tagged correctly.
const extractSpeakers = (details: string[]): SpeakerEntry[] => {
  const speakers: SpeakerEntry[] = [];
  let currentRole: string | null = null;
  for (const line of details) {
    const colonIdx = line.indexOf(':');
    const hasLabel = colonIdx > -1 && colonIdx < 40;
    const label = hasLabel ? line.slice(0, colonIdx).trim() : null;
    const rest = (hasLabel ? line.slice(colonIdx + 1) : line).trim();

    if (label) {
      if (!ROLE_REGEX.test(label)) {
        currentRole = null;
        continue;
      }
      currentRole = label;
    }
    if (!currentRole) continue;

    const name = (rest.includes(',') ? rest.slice(0, rest.indexOf(',')) : rest).trim();
    if (!name || /^tbc$/i.test(name)) continue;
    speakers.push({role: currentRole, name});
  }
  return speakers;
};

const initials = (name: string) =>
  name
    .replace(/^(Hon\.?|Dr\.?|Prof\.?|Mr\.?|Ms\.?|Mrs\.?|Sir\.?|H\.E\.?)\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

export function ExperienceSessionCard({session, index}: {session: ProgramSession; index: number}) {
  const {track, title} = splitTrack(session.title);
  const style = (track && TRACK_STYLES[track]) || DEFAULT_TRACK_STYLE;
  const speakers = extractSpeakers(session.details);

  return (
    <div
      style={{animationDelay: `${Math.min(index, 8) * 90}ms`}}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300 p-5 md:p-6 animate-fade-slide-in"
    >
      <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.bar}`} />
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500">
          <Clock className="w-3.5 h-3.5 text-[#F97316]" /> {session.time}
        </span>
        {track && (
          <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${style.chip}`}>
            {track.replace(' Village', '')}
          </span>
        )}
      </div>
      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug group-hover:text-[#F97316] transition-colors">
        {title}
      </h3>
      {session.description && <p className="text-sm text-gray-600 leading-relaxed mt-2">{session.description}</p>}
      {session.venue && (
        <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 border border-orange-100 px-2.5 py-1 mt-3">
          <MapPin className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
          <span className="text-xs font-semibold text-gray-800">{session.venue}</span>
        </div>
      )}
      {speakers.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Speakers &amp; Partners</p>
          <div className="flex flex-wrap gap-2">
            {speakers.map((speaker, i) => {
              const photo = getSpeakerPhoto(speaker.name);
              return (
                <div
                  key={`${speaker.name}-${i}`}
                  className="flex items-center gap-2 rounded-full bg-gray-50 border border-gray-100 pl-1 pr-3 py-1 hover:bg-orange-50 hover:border-orange-100 transition-colors"
                  title={photo ? `${photo.role} — ${photo.title}` : speaker.role}
                >
                  {photo ? (
                    <img
                      src={photo.photo}
                      alt={speaker.name}
                      className="w-6 h-6 rounded-full object-cover shrink-0"
                      loading="lazy"
                    />
                  ) : (
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {initials(speaker.name) || '•'}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-gray-800">{speaker.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
