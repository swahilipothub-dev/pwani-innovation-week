import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const images = [
  "/images/new/download (7).jpg",
  "/images/new/download (9).jpg",
  "/images/new/download (2).jpg",
  "/images/piw-2026/WhatsApp Image 2026-06-30 at 15.13.54.jpeg",
];

const stats = [
  { value: "5,000+", label: "Expected Attendees" },
  { value: "6", label: "Days of Programming" },
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
  const heroPanelClass = "bg-gradient-to-br from-[#0a1b37]/86 via-[#0d2447]/80 to-[#3a220f]/56 backdrop-blur-md shadow-[0_12px_30px_rgba(2,8,26,0.34)] rounded-sm";

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* ── Background image slideshow ── */}
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={src}
              alt=""
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${i === currentSlide ? 'scale-100' : 'scale-105'}`}
            />
          </div>
        ))}

        {/* dark + blur treatment for strong contrast and cleaner focus */}
        <div className="absolute inset-0 bg-black/86" />
        <div className="absolute inset-0 backdrop-blur-[6px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/88 to-black/78 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/94 to-transparent pointer-events-none" />

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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pb-24">
          <div className="flex flex-col items-start">

            {/* ── copy ── */}
            <div className="w-full lg:max-w-2xl space-y-8">

              {/* Anniversary badge */}
              <div className="inline-block">
                <div className={`inline-flex items-center gap-3 ${heroPanelClass} px-4 py-2`}>
                  <span className="text-white font-semibold text-xs sm:text-sm tracking-[0.08em] uppercase">
                    Celebrating 10 Years · Swahilipot Hub Foundation
                  </span>
                  <span className="w-px h-4 bg-[#dbeafe]/35" />
                  <span className="font-bold text-[#fde68a] text-xs sm:text-sm tracking-[0.06em]">2016-2026</span>
                </div>
              </div>


              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.92] tracking-tight">
                  Pwani<br />
                  Innovation<br />
                  <span className="text-[#fdba74]">Week 2026</span>
                </h1>
                <p className="text-sm sm:text-base text-[#e0f2fe] font-semibold uppercase tracking-[0.14em]">
                  A Decade and Beyond · Youth, Innovation &amp; Coastal Futures
                </p>
                <p className="max-w-xl text-base leading-relaxed text-white sm:text-lg">
                  Ten years of Swahilipot and the next chapter for Pwani&apos;s innovation ecosystem.
                </p>
              </div>

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

              {/* Countdown */}
              <div className="space-y-3">
                <p className="text-xs text-[#dbeafe] uppercase tracking-widest font-semibold">
                  Countdown to PIW 2026
                </p>
                <div className="flex gap-3 flex-wrap">
                  {countdown_items.map((label, i) => (
                    <div key={label} className="text-center">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 ${heroPanelClass} flex items-center justify-center`}>
                        <span className="text-2xl sm:text-3xl font-black text-[#fde68a]">
                          {String(countdownValues[i]).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#e2e8f0] mt-2 font-semibold uppercase tracking-widest">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-1">
                <Link
                  to="/tickets"
                  className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3 text-sm font-bold transition-colors duration-200"
                >
                  Register Interest <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-[#0a1b37]/86 via-[#0d2447]/80 to-[#3a220f]/56 hover:from-[#0d2447]/88 hover:via-[#12305d]/84 hover:to-[#4a2b12]/60 backdrop-blur-md shadow-[0_12px_30px_rgba(2,8,26,0.34)] text-white hover:text-white rounded-sm px-7 py-3 text-sm font-semibold transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
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
                className={`text-center py-9 px-6 border-r border-gray-100 last:border-r-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-3xl lg:text-4xl font-black text-[#F97316]">{s.value}</p>
                <p className="text-xs text-gray-500 font-semibold mt-2 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
