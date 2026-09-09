import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Calendar, Users, CalendarDays, Mic2, Layers } from 'lucide-react';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

const images = [
  "/images/new/download (7).jpg",
  "/images/new/download (9).jpg",
  "/images/new/download (2).jpg",
  "/images/piw-2026/WhatsApp Image 2026-06-30 at 15.13.54.jpeg",
];

const stats = [
  { value: 4902, suffix: "+", label: "Expected Attendees", icon: Users },
  { value: 6, suffix: "", label: "Days of Programming", icon: CalendarDays },
  { value: 4, suffix: "", label: "Swahilipot Dialogues", icon: Mic2 },
  { value: 5, suffix: "", label: "Sectoral Pre-Conferences", icon: Layers },
];

const countdown_items = ["Days", "Hrs", "Min", "Sec"] as const;

/** Counts up from 0 to `value` once it scrolls into view. */
const AnimatedNumber = ({ value, suffix = "", inView, duration = 1600 }: { value: number; suffix?: string; inView: boolean; duration?: number }) => {
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return <>{display.toLocaleString()}{suffix}</>;
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.25, triggerOnce: true });

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % images.length), 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const nextIndex = (currentSlide + 1) % images.length;
    const nextImage = new Image();
    nextImage.src = images[nextIndex];
  }, [currentSlide]);

  useEffect(() => {
    const target = new Date('2026-10-26T00:00:00').getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) { setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const countdownValues = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds];
  const heroPanelClass = "border border-white/4 bg-gradient-to-br from-[#0a1b37]/86 via-[#0d2447]/80 to-[#3a220f]/56 backdrop-blur-md shadow-[0_12px_30px_rgba(2,8,26,0.34)] rounded-xl";

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050b18]">

        {/* ── Background image slideshow (ken-burns) ── */}
        <div className="absolute inset-0">
          <img
            key={images[currentSlide]}
            src={images[currentSlide]}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="hero-kenburns w-full h-full object-cover"
          />
        </div>

        {/* dark + blur treatment for strong contrast and cleaner focus */}
        <div className="absolute inset-0 bg-black/86" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/88 to-black/78 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#0b1f3d]/45 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/94 to-transparent pointer-events-none" />

        {/* ── Wallpaper: aurora mesh + tech grid, screen-blended on top of the dark photo so it actually glows ── */}
        <div className="absolute inset-0 mix-blend-screen pointer-events-none">
          <div className="hero-aurora hero-aurora-a" />
          <div className="hero-aurora hero-aurora-b" />
          <div className="hero-aurora hero-aurora-c" />
        </div>

        {/* slide dots — bottom centre */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`View slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white w-7' : 'bg-white/45 w-2.5'}`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 lg:items-end">

            {/* ── Poster-style headline ── */}
            <div className="lg:col-span-7 space-y-6">

              {/* Anniversary badge */}
              <div className="inline-block hero-in hero-float" style={{ animationDelay: '0ms' }}>
                <div className={`hero-shimmer inline-flex items-center gap-3 ${heroPanelClass} px-4 py-2`}>
                  <span className="relative flex h-2 w-2">
                    <span className="hero-live-ping absolute inline-flex h-full w-full rounded-full bg-[#fde68a] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fde68a]" />
                  </span>
                  <span className="text-white font-semibold text-xs sm:text-sm tracking-[0.08em] uppercase">
                    Celebrating 10 Years · Swahilipot Hub Foundation
                  </span>
                  <span className="w-px h-4 bg-[#dbeafe]/35" />
                  <span className="font-bold text-[#fde68a] text-xs sm:text-sm tracking-[0.06em]">2016-2026</span>
                </div>
              </div>

              {/* Headline: mixed weight + outline + shimmer for graphic depth */}
              <h1 className="leading-[0.86] tracking-tight">
                <span className="hero-in block text-3xl sm:text-4xl lg:text-5xl font-medium text-white/80" style={{ animationDelay: '90ms' }}>
                  Pwani Innovation
                </span>
                <span className="hero-in flex flex-wrap items-baseline gap-x-4 gap-y-1" style={{ animationDelay: '180ms' }}>
                  <span className="hero-outline-text text-6xl sm:text-7xl lg:text-8xl font-black">WEEK</span>
                  <span className="hero-text-shine text-6xl sm:text-7xl lg:text-8xl font-black">2026</span>
                </span>
              </h1>

              {/* Subheading with vertical accent bar */}
              <div className="hero-in flex items-center gap-3" style={{ animationDelay: '270ms' }}>
                <span className="h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-[#F97316] to-[#fde68a]" />
                <p className="text-sm sm:text-base text-[#e0f2fe] font-semibold uppercase tracking-[0.14em]">
                  A Decade and Beyond · Youth, Innovation &amp; Coastal Futures
                </p>
              </div>
            </div>

            {/* ── Floating info / CTA panel ── */}
            <div className="lg:col-span-5">
              <div
                className="hero-in space-y-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(2,8,26,0.45)]"
                style={{ animationDelay: '360ms' }}
              >
                <p className="pl-4 border-l-2 border-[#F97316]/60 text-white/85 text-sm sm:text-base leading-relaxed">
                  Six days built for young innovators on the Coast — pitch for funding, learn from people building real ventures, and connect with thousands like you.
                </p>

                {/* Date + Location */}
                <div className="flex flex-wrap gap-3">
                  <div className={`flex items-center gap-2 text-white ${heroPanelClass} px-4 py-2`}>
                    <Calendar className="w-4 h-4 text-[#fde68a] flex-shrink-0" />
                    <span className="text-sm font-semibold">26 – 31 October 2026</span>
                  </div>
                  <div className={`flex items-center gap-2 text-white ${heroPanelClass} px-4 py-2`}>
                    <MapPin className="w-4 h-4 text-[#fde68a] flex-shrink-0" />
                    <span className="text-sm font-semibold">Mombasa, Kenya</span>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                {/* Countdown */}
                <div className="space-y-3">
                  <p className="text-xs text-[#dbeafe] uppercase tracking-widest font-semibold">
                    Countdown to PIW 2026
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    {countdown_items.map((label, i) => (
                      <React.Fragment key={label}>
                        <div className="text-center">
                          <div className="hero-countdown-card relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl">
                            <div className="absolute inset-[1.5px] rounded-[15px] bg-[#0a1424]/90 backdrop-blur-md flex items-center justify-center overflow-hidden">
                              <span key={countdownValues[i]} className="hero-digit text-2xl sm:text-3xl font-black text-[#fde68a]">
                                {String(countdownValues[i]).padStart(2, '0')}
                              </span>
                            </div>
                          </div>
                          <p className="text-[10px] text-[#e2e8f0] mt-2 font-semibold uppercase tracking-widest">{label}</p>
                        </div>
                        {i < countdown_items.length - 1 && (
                          <span className="hero-colon text-[#fde68a]/70 font-black text-xl sm:text-2xl -mt-4">:</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    to="/tickets"
                    className="hero-pulse hero-shine group relative inline-flex items-center gap-2 overflow-hidden bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 text-sm font-bold rounded-lg transition-colors duration-200"
                  >
                    Register Interest <ArrowRight size={16} className="hero-nudge" />
                  </Link>
                  <Link
                    to="/about"
                    className="hero-shine relative inline-flex items-center gap-2 overflow-hidden bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md text-white hover:text-white rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200"
                  >
                    See the Full Programme
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP: modern event 'by the numbers' deck ─── */}
      <div ref={statsRef} className="relative bg-[#070f1f] overflow-hidden">
        <div className="absolute inset-0 mix-blend-screen opacity-50 pointer-events-none">
          <div className="hero-aurora hero-aurora-a" />
          <div className="hero-aurora hero-aurora-b" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px flex-1 bg-white/10" />
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-[0.2em] whitespace-nowrap">PIW 2026 By The Numbers</p>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-5 py-8 text-center overflow-hidden hover:border-[#F97316]/50 hover:bg-white/[0.06] transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#F97316]/10 blur-2xl group-hover:bg-[#F97316]/20 transition-colors duration-500" />
                <div className="relative w-11 h-11 mx-auto mb-4 rounded-xl bg-[#F97316]/10 border border-[#F97316]/25 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-all duration-300">
                  <s.icon className="w-5 h-5 text-[#fdba74]" />
                </div>
                <p className="relative hero-text-shine text-4xl lg:text-5xl font-black tabular-nums">
                  <AnimatedNumber value={s.value} suffix={s.suffix} inView={statsInView} />
                </p>
                <span className="block mx-auto mt-3 mb-2 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#F97316] to-[#fde68a] group-hover:w-12 transition-all duration-300" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-in {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .hero-float {
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards, heroFloat 4s ease-in-out 1.2s infinite;
        }
        @keyframes heroPulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.45); }
          50% { box-shadow: 0 0 0 8px rgba(249, 115, 22, 0); }
        }
        .hero-pulse {
          animation: heroPulseRing 2.6s ease-out 2s infinite;
        }
        @keyframes heroNudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .hero-nudge {
          animation: heroNudge 1.6s ease-in-out 2s infinite;
        }

        /* Shimmer sweep across the anniversary badge */
        .hero-shimmer { position: relative; }
        .hero-shimmer::after {
          content: '';
          position: absolute; inset: 0;
          border-radius: inherit;
          background: linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.16) 50%, transparent 80%);
          background-size: 250% 100%;
          animation: heroShimmerSweep 5s ease-in-out 1.5s infinite;
          pointer-events: none;
        }
        @keyframes heroShimmerSweep {
          0% { background-position: 200% 0; }
          60%, 100% { background-position: -100% 0; }
        }

        /* Button shine sweep on hover */
        .hero-shine::before {
          content: '';
          position: absolute; top: 0; left: -60%;
          width: 40%; height: 100%;
          background: linear-gradient(115deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }
        .hero-shine:hover::before { left: 130%; }

        /* Aurora mesh wallpaper */
        .hero-aurora {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.55;
          will-change: transform;
        }
        .hero-aurora-a {
          top: -12%; left: -8%; width: 46vw; height: 46vw;
          background: radial-gradient(circle, rgba(249,115,22,0.5), transparent 70%);
          animation: heroAuroraDrift 22s ease-in-out infinite;
        }
        .hero-aurora-b {
          bottom: -18%; right: -10%; width: 50vw; height: 50vw;
          background: radial-gradient(circle, rgba(14,165,233,0.4), transparent 70%);
          animation: heroAuroraDrift 26s ease-in-out infinite reverse;
        }
        .hero-aurora-c {
          top: 30%; right: 18%; width: 30vw; height: 30vw;
          background: radial-gradient(circle, rgba(253,230,138,0.3), transparent 70%);
          animation: heroAuroraDrift 18s ease-in-out infinite;
          animation-delay: -6s;
        }
        @keyframes heroAuroraDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(4%, 6%) scale(1.08); }
          66% { transform: translate(-3%, -4%) scale(0.96); }
        }

        /* Ken-burns slow zoom on the slideshow */
        @keyframes heroKenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.09); }
        }
        .hero-kenburns {
          animation: heroKenBurns 6.5s ease-out forwards;
        }

        /* Countdown: pulsing glow border (no rotation) + digit flip */
        .hero-countdown-card {
          background: linear-gradient(135deg, #F97316, #fde68a 55%, #0ea5e9);
          animation: heroCountdownPulse 2.2s ease-in-out infinite;
        }
        @keyframes heroCountdownPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.5), 0 8px 20px rgba(2,8,26,0.4); transform: scale(1); }
          50% { box-shadow: 0 0 0 7px rgba(249,115,22,0), 0 10px 26px rgba(2,8,26,0.5); transform: scale(1.035); }
        }
        @keyframes heroLivePing {
          0% { transform: scale(1); opacity: 0.75; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        .hero-live-ping {
          animation: heroLivePing 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes heroTextShine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .hero-text-shine {
          background-image: linear-gradient(110deg, #fdba74 20%, #fde68a 40%, #F97316 60%, #fdba74 80%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards, heroTextShine 6s linear 1s infinite;
        }
        @keyframes heroOutlinePulse {
          0%, 100% { -webkit-text-stroke-color: rgba(255,255,255,0.55); }
          50% { -webkit-text-stroke-color: rgba(253,186,116,0.9); }
        }
        .hero-outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.55);
          paint-order: stroke fill;
          animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards, heroOutlinePulse 3.5s ease-in-out 1s infinite;
        }
        @keyframes heroDigitFlip {
          0% { opacity: 0; transform: rotateX(90deg) translateY(-6px); }
          100% { opacity: 1; transform: rotateX(0deg) translateY(0); }
        }
        .hero-digit {
          display: inline-block;
          animation: heroDigitFlip 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-origin: 50% 100%;
        }
        .hero-colon {
          animation: heroPulseRing2 1.4s ease-in-out infinite;
        }
        @keyframes heroPulseRing2 {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-in, .hero-float, .hero-pulse, .hero-nudge,
          .hero-shimmer::after, .hero-aurora, .hero-kenburns, .hero-countdown-card,
          .hero-digit, .hero-colon, .hero-text-shine, .hero-live-ping, .hero-outline-text { animation: none; opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Hero;
