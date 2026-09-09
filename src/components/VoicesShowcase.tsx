import { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Voice = {
  tag: string;
  name: string;
  title: string;
  highlight: string;
  body: string;
  points: string[];
};

const VOICE_DURATION = 6000;

/** Instagram-stories-style showcase: auto-advancing, skimmable pull-quotes with optional deep-dive. */
export const VoicesShowcase = ({ voices }: { voices: Voice[] }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const total = voices.length;

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % total);
      setExpanded(false);
    }, VOICE_DURATION);
    return () => clearTimeout(timer);
  }, [active, paused, total]);

  const goTo = (idx: number) => {
    setActive((idx + total) % total);
    setExpanded(false);
  };

  const current = voices[active];
  const initials = current.name
    .replace(/[()]/g, '')
    .split(' ')
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div
      className="relative bg-gradient-to-br from-[#0a1628] via-[#0f1f38] to-[#0a1628] rounded-3xl border border-white/10 shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex gap-1.5 p-4 sm:p-5">
        {voices.map((v, idx) => (
          <button
            key={v.name}
            onClick={() => goTo(idx)}
            className="h-1 flex-1 rounded-full bg-white/15 overflow-hidden"
            aria-label={`View ${v.name}`}
          >
            {idx < active && <span className="block h-full w-full bg-[#F97316] rounded-full" />}
            {idx === active && (
              <span
                key={active}
                className={cn("block h-full bg-[#F97316] rounded-full animate-story-fill", paused && "[animation-play-state:paused]")}
              />
            )}
          </button>
        ))}
      </div>

      <div className="px-6 sm:px-12 pb-10 pt-2 min-h-[280px]">
        <div key={active} className="animate-in fade-in-0 slide-in-from-right-4 duration-500">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#F97316] flex items-center justify-center text-white font-black text-lg shrink-0">
              {initials}
            </div>
            <div>
              <span className="text-xs font-bold text-[#F97316] bg-white/10 rounded-full px-2.5 py-0.5 uppercase tracking-widest">
                {current.tag}
              </span>
              <p className="font-bold text-white mt-1">{current.name}</p>
              <p className="text-white/50 text-sm">{current.title}</p>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <Quote className="w-8 h-8 text-[#F97316] shrink-0" />
            <p className="text-xl sm:text-2xl font-bold text-white leading-snug">{current.highlight}</p>
          </div>

          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-sm font-semibold text-[#F97316] hover:text-orange-400 transition-colors inline-flex items-center gap-1.5"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown className={cn("w-4 h-4 transition-transform", expanded && "rotate-180")} />
          </button>

          {expanded && (
            <div className="animate-in fade-in-0 slide-in-from-top-2 duration-300 mt-4 space-y-3">
              <p className="text-white/70 leading-relaxed text-sm">{current.body}</p>
              <ul className="space-y-2">
                {current.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-white/70">
                    <span className="text-[#F97316] font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => goTo(active - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo(active + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
