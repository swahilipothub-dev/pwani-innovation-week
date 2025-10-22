import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pwani Innovation Week</h2>
          <div className="w-24 h-1 bg-ocean mx-auto"></div>
        </div>
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] items-center max-w-6xl mx-auto">
          <div className="lg:max-w-xl mx-auto text-center lg:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              Pwani Innovation Week is the coast’s flagship gathering where youth, founders, investors, and policy shapers co-create solutions for resilient coastal economies.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#F97316]" />
                <span>Sixth edition focused on youth agency, innovation, and sustainability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#F97316]" />
                <span>Five days of workshops, showcases, and deal-making tailored to the coastal ecosystem.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#F97316]" />
                <span>Built to spark partnerships that unlock new jobs and investment across the blue economy.</span>
              </li>
            </ul>
            <a
              href="/about"
              className="inline-block mt-6 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300"
            >
              Read More
            </a>
          </div>
          <div className="relative max-w-4xl mx-auto w-full">
            <div className="overflow-hidden rounded-[2.25rem] shadow-lg">
              <img
                src="/images/breakfast-nbi/4.jpg"
                alt="Innovation showcase"
                className="h-[460px] w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-14 -right-12 hidden h-28 w-28 rounded-full bg-[#F97316]/10 blur-2xl lg:block" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
