import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import {Link} from "react-router-dom";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0
  });

  const slides = [
    {
      title: "Pwani Innovation Week 2025",
      subtitle: "Pwani Re-imagined: Youth Agency, Innovation & Sustainability of Coastal Economies",
      image: "/images/breakfast-nbi/1.jpg",
      description: "A Pwani-led and youth-driven annual convening for sustainable coastal development."
    },
    {
      title: "Youth at the Center",
      subtitle: "Empowering young changemakers to shape the future of coastal economies",
      image: "/images/breakfast-nbi/3.jpg",
      description: "Building a resilient and youthful workforce through innovation and entrepreneurship."
    },
    {
      title: "Innovation & Sustainability",
      subtitle: "Harnessing technology and creativity for coastal transformation",
      image: "/images/breakfast-nbi/5.jpg",
      description: "Creating localized solutions for sustainable growth in Kenya's coast."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-10-27T00:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      if (distance < 0) {
        setCountdown({ days: 0, hours: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      setCountdown({ days, hours });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-orange-100/50 to-white overflow-hidden pt-20 dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse-bg dark:bg-orange-500/10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse-bg dark:bg-orange-400/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-100/10 to-transparent rounded-full blur-3xl dark:from-slate-800/20"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="w-full max-w-3xl space-y-8">
            <div className="space-y-4">
              <div className="animate-fade-in">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                  <span className="gradient-text">{slides[currentSlide].title.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="block text-[#F97316] mt-2">{slides[currentSlide].title.split(' ').slice(2).join(' ')}</span>
                </h1>
              </div>

              <div className="animate-fade-in delay-300">
                <p className="text-xl md:text-2xl font-medium text-gray-700 mt-6 dark:text-gray-200">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              <div className="animate-fade-in delay-500">
                <p className="text-lg md:text-xl text-[#F97316] font-medium mt-4">
                  27th - 31st October 2025 • Mombasa, Kenya
                </p>
                <p className="text-lg text-gray-600 mt-4 dark:text-gray-300">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in delay-700 justify-center">
              <Link
                to="/tickets"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-md text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get Tickets <ArrowRight size={20} />
              </Link>
              <Link
                to="/schedule"
                className="border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white px-8 py-4 rounded-md text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View Schedule
              </Link>
            </div>

            {/* Countdown Display */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-6 rounded-full border border-[#F97316]/20 bg-white/70 px-6 py-4 shadow-sm backdrop-blur dark:bg-slate-900/60 dark:border-[#F97316]/30">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hours", value: countdown.hours },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center min-w-[80px]">
                    <span className="text-3xl md:text-4xl font-semibold text-[#F97316]">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-gray-500 mt-1 dark:text-gray-400">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div ref={ref} className="pt-8 border-t border-orange-200 dark:border-orange-500/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className={`text-center transition-all duration-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">2,000+</p>
                  <p className="text-gray-600 font-medium dark:text-gray-300">Participants</p>
                </div>
                <div className={`text-center transition-all duration-700 delay-300 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">5</p>
                  <p className="text-gray-600 font-medium dark:text-gray-300">Days</p>
                </div>
                <div className={`text-center transition-all duration-700 delay-500 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">28</p>
                  <p className="text-gray-600 font-medium dark:text-gray-300">Sessions</p>
                </div>
                <div className={`text-center transition-all duration-700 delay-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">10</p>
                  <p className="text-gray-600 font-medium dark:text-gray-300">Keynote Speakers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
