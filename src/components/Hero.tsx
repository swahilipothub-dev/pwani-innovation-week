import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const images = [
  "/images/breakfast-nbi/1.jpg",
  "/images/breakfast-nbi/3.jpg",
  "/images/breakfast-nbi/5.jpg",
];

const stats = [
  { value: "10,000+", label: "Expected Attendees" },
  { value: "5", label: "Days of Programming" },
  { value: "4", label: "Swahilipot Dialogues" },
  { value: "5", label: "Sectoral Pre-Conferences" },
];

const countdown_items = ["Days", "Hrs", "Min", "Sec"] as const;

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % images.length), 6000);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#0a1628] flex items-center overflow-hidden">
        {/* subtle right glow */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#F97316]/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── LEFT: copy ── */}
            <div className="w-full lg:w-1/2 space-y-8">

              {/* Anniversary badge */}
              <div className="inline-flex items-center gap-3 bg-white/8 border border-white/15 rounded-full px-5 py-2.5 backdrop-blur-sm">
                <span className="text-[#F97316] font-black text-2xl leading-none">10</span>
                <div className="w-px h-5 bg-white/25" />
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                  Swahilipot Hub Foundation · 2016 – 2026
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                  Pwani<br />
                  Innovation<br />
                  <span className="text-[#F97316]">Week 2026</span>
                </h1>
                <p className="pt-4 text-sm sm:text-base text-white/50 font-semibold uppercase tracking-[0.2em]">
                  The Week the Coast Takes the Stage
                </p>
              </div>

              {/* Date + Location */}
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-2 text-white/70">
                  <Calendar className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                  <span className="text-sm font-semibold">26 – 30 October 2026</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                  <span className="text-sm font-semibold">Mombasa, Kenya</span>
                </div>
              </div>

              {/* Countdown */}
              <div>
                <p className="text-xs text-white/35 uppercase tracking-widest mb-3 font-semibold">
                  Countdown to PIW 2026
                </p>
                <div className="flex gap-3">
                  {countdown_items.map((label, i) => (
                    <div key={label} className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-black text-[#F97316]">
                          {String(countdownValues[i]).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/35 mt-2 font-semibold uppercase tracking-widest">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/tickets"
                  className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3.5 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-xl hover:shadow-[#F97316]/25 hover:-translate-y-0.5"
                >
                  Register Interest <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* ── RIGHT: image slider ── */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/60">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="PIW 2026"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                {/* dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white w-6' : 'bg-white/40 w-1.5'}`}
                    />
                  ))}
                </div>
              </div>

              {/* pull quote */}
              <blockquote className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-white/65 text-sm leading-relaxed italic">
                  "Swahilipot's single most powerful platform — a national media moment, an investment showcase, and a community celebration, all in one week."
                </p>
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <div ref={ref} className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center py-8 px-6 border-r border-gray-100 last:border-r-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-3xl lg:text-4xl font-black text-[#F97316]">{s.value}</p>
                <p className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
