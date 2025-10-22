
import React from 'react';
import { Waves, Smartphone, Users } from 'lucide-react';
import { Globe, UsersRound, Laptop } from 'lucide-react';

const ThematicAreas = () => {
  return (
    <section id="themes" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Focus (Tracks)</h2>
          <div className="w-24 h-1 bg-[#F97316] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-[#F97316]/20 bg-white/80 p-8 shadow-sm transition-transform duration-300 hover:translate-y-[-6px] hover:shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-[#F97316]/10 rounded-xl">
                <Waves className="text-[#F97316] h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sustainable Coastal Economies</h3>
            </div>
            <p className="text-gray-700">
              Blue economy livelihood track—spotlights aquaculture, tourism, and creative industries that create inclusive jobs for youth and women.
            </p>
          </div>
          
          <div className="rounded-3xl border border-[#F97316]/20 bg-white/80 p-8 shadow-sm transition-transform duration-300 hover:translate-y-[-6px] hover:shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-[#0EA5E9]/10 rounded-xl">
                <Smartphone className="text-[#0EA5E9] h-8 w-8" />
                <Laptop className="text-[#0EA5E9] h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Digital Transformation</h3>
            </div>
            <p className="text-gray-700">
              Tech adoption for the coast—how mobile, AI, and cloud tools unlock new ventures, gig work, and smarter public services.
            </p>
          </div>
          
          <div className="rounded-3xl border border-[#F97316]/20 bg-white/80 p-8 shadow-sm transition-transform duration-300 hover:translate-y-[-6px] hover:shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-[#22C55E]/10 rounded-xl">
                <Users className="text-[#22C55E] h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Youth Agency</h3>
            </div>
            <p className="text-gray-700">
              Youth leadership and wellbeing—centers civic voice, policy influence, and mental health for coastal changemakers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThematicAreas;
