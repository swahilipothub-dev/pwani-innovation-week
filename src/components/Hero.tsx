import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, PartyPopper } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const images = [
  { src: "/images/new/download (7).jpg", effect: "zoom-out" },
  { src: "/images/new/download (9).jpg", effect: "pan-left" },
  { src: "/images/new/download (2).jpg", effect: "drift-up" },
  { src: "/images/piw-2026/WhatsApp Image 2026-06-30 at 15.13.54.jpeg", effect: "tilt-in" },
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

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* ── Background image slideshow ── */}
        {images.map((image, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image.src}
              alt=""
              className={`w-full h-full object-cover ${i === currentSlide ? `hero-slide-${image.effect}` : 'hero-slide-reset'}`}
            />
          </div>
        ))}

        {/* dark overlay so text stays legible */}
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        {/* subtle orange right glow */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#F97316]/10 to-transparent pointer-events-none" />

        {/* slide dots — bottom centre */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white w-6' : 'bg-white/40 w-1.5'}`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── copy ── */}
            <div className="w-full lg:max-w-2xl space-y-8">

              {/* Anniversary badge */}
              <div className="relative inline-block">
                <div className="inline-flex items-center gap-2.5 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2">
                  <PartyPopper className="w-4 h-4 text-yellow-400 animate-[wiggle_1.4s_ease-in-out_infinite] flex-shrink-0" />
                  <span className="text-yellow-300 font-bold text-sm tracking-wide">
                    Celebrating 10 Years — Swahilipot Hub Foundation
                  </span>
                  <span className="font-black text-yellow-400 text-sm">2016–2026</span>
                </div>

                {/* dripping sparks */}
                <span className="spark" style={{left:'8%',  color:'#facc15', fontSize:'14px', animationDelay:'0s',   animationDuration:'1.6s'}}>★</span>
                <span className="spark" style={{left:'22%', color:'#F97316', fontSize:'11px', animationDelay:'0.4s', animationDuration:'1.9s'}}>✦</span>
                <span className="spark" style={{left:'38%', color:'#fde68a', fontSize:'16px', animationDelay:'0.8s', animationDuration:'1.5s'}}>★</span>
                <span className="spark" style={{left:'54%', color:'#F97316', fontSize:'12px', animationDelay:'0.2s', animationDuration:'2.0s'}}>✦</span>
                <span className="spark" style={{left:'68%', color:'#facc15', fontSize:'15px', animationDelay:'1.0s', animationDuration:'1.7s'}}>★</span>
                <span className="spark" style={{left:'82%', color:'#fde68a', fontSize:'11px', animationDelay:'0.6s', animationDuration:'1.4s'}}>✦</span>
                <span className="spark" style={{left:'93%', color:'#F97316', fontSize:'13px', animationDelay:'0.3s', animationDuration:'1.8s'}}>★</span>
              </div>

              <style>{`
                @keyframes wiggle {
                  0%, 100% { transform: rotate(-10deg); }
                  50%      { transform: rotate(10deg); }
                }
                @keyframes drip {
                  0%   { opacity: 0;    transform: translateY(0px)  scale(0.5) rotate(0deg); }
                  15%  { opacity: 1; }
                  60%  { opacity: 0.9;  transform: translateY(30px) scale(1.2) rotate(180deg); }
                  100% { opacity: 0;    transform: translateY(52px) scale(0.7) rotate(360deg); }
                }
                .spark {
                  position: absolute;
                  top: 100%;
                  pointer-events: none;
                  animation: drip ease-in infinite;
                  user-select: none;
                  filter: drop-shadow(0 0 4px currentColor);
                  line-height: 1;
                }
              `}</style>


              {/* Headline */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                  Pwani<br />
                  Innovation<br />
                  <span className="text-[#F97316]">Week 2026</span>
                </h1>
                <p className="pt-4 text-sm sm:text-base text-white/50 font-semibold uppercase tracking-[0.2em]">
                  A Decade and Beyond · Youth, Innovation &amp; Coastal Futures
                </p>
                <p className="max-w-xl pt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                  Ten years of Swahilipot and the next chapter for Pwani&apos;s innovation ecosystem.
                </p>
              </div>

              {/* Date + Location */}
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-2 text-white/70">
                  <Calendar className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                  <span className="text-sm font-semibold">26 – 31 October 2026</span>
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

          </div>
        </div>
      </section>

      <style>{`
        @keyframes hero-zoom-out {
          from { transform: scale(1.12); }
          to { transform: scale(1); }
        }
        @keyframes hero-pan-left {
          from { transform: scale(1.1) translateX(2%); }
          to { transform: scale(1.1) translateX(-2%); }
        }
        @keyframes hero-drift-up {
          from { transform: scale(1.1) translateY(2%); }
          to { transform: scale(1.1) translateY(-2%); }
        }
        @keyframes hero-tilt-in {
          from { transform: scale(1.13) rotate(1deg); }
          to { transform: scale(1) rotate(0deg); }
        }
        .hero-slide-zoom-out {
          animation: hero-zoom-out 6s ease-out both;
        }
        .hero-slide-pan-left {
          animation: hero-pan-left 6s ease-in-out both;
        }
        .hero-slide-drift-up {
          animation: hero-drift-up 6s ease-in-out both;
        }
        .hero-slide-tilt-in {
          animation: hero-tilt-in 6s ease-out both;
        }
        .hero-slide-reset {
          transform: scale(1.12);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-slide-zoom-out,
          .hero-slide-pan-left,
          .hero-slide-drift-up,
          .hero-slide-tilt-in,
          .hero-slide-reset {
            animation: none;
            transform: scale(1);
          }
        }
      `}</style>

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
