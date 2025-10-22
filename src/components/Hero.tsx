import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
    hours: 0,
    minutes: 0,
    seconds: 0
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
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-orange-100/50 to-white overflow-hidden pt-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse-bg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse-bg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-100/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="animate-fade-in">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                  <span className="gradient-text">{slides[currentSlide].title.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="block text-[#F97316] mt-2">{slides[currentSlide].title.split(' ').slice(2).join(' ')}</span>
                </h1>
              </div>

              <div className="animate-fade-in delay-300">
                <p className="text-xl md:text-2xl font-medium text-gray-700 mt-6">
                  {slides[currentSlide].subtitle}
                </p>
              </div>

              <div className="animate-fade-in delay-500">
                <p className="text-lg md:text-xl text-[#F97316] font-medium mt-4">
                  27th - 31st October 2025 • Mombasa, Kenya
                </p>
                <p className="text-lg text-gray-600 mt-4">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in delay-700">
              <Link
                to="/tickets"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-md text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Get Tickets <ArrowRight size={20} />
              </Link>
            </div>

            {/* Countdown Display - Responsive for Mobile */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center max-w-xs sm:max-w-md mx-auto w-full">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-2 sm:border-4 border-[#F97316] rounded-xl p-3 sm:p-4 shadow-lg flex flex-col items-center justify-center min-w-[70px]"
                >
                  <p className="text-2xl sm:text-4xl font-extrabold text-[#F97316]">{item.value}</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase">{item.label}</p>
                </div>
              ))}
            </div>

            <div ref={ref} className="pt-8 border-t border-orange-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className={`text-center transition-all duration-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">2,000+</p>
                  <p className="text-gray-600 font-medium">Participants</p>
                </div>
                <div className={`text-center transition-all duration-700 delay-300 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">5</p>
                  <p className="text-gray-600 font-medium">Days</p>
                </div>
                <div className={`text-center transition-all duration-700 delay-500 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">28</p>
                  <p className="text-gray-600 font-medium">Sessions</p>
                </div>
                <div className={`text-center transition-all duration-700 delay-700 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
                  <p className="text-4xl font-bold text-[#F97316]">10</p>
                  <p className="text-gray-600 font-medium">Keynote Speakers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading={index === currentSlide ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                ))}

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#F97316]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300/30 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
