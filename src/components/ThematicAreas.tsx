
import React from 'react';
import { Waves, Smartphone, Users } from 'lucide-react';
import { Globe, UsersRound, Laptop } from 'lucide-react';

const ThematicAreas = () => {
  return (
    <section id="themes" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Focus (Tracks)</h2>
          <div className="w-24 h-1 bg-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-ocean/20 rounded-lg">
                <Waves className="text-ocean h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sustainable Coastal Economies</h3>
            </div>
            <p className="text-gray-700">
              Explores opportunities for youth and women within sustainable coastal economies, specifically in aquaculture, Cultural & Creative Industries (CCIs), and tourism value chain. Encompasses Blue Economy, Marine Resources, and Climate Action themes.
              This track, a follow-up to
              discussions at PIW2024,
              explores opportunities for
              youth and women within
              Sustainable Coastal
              Economies, specifically in
              aquaculture (including young
              mothers in fish, emerging
              sectors like rging trends in
              seaweed and fish farming),
              the Cultural & Creative
              Industries (CCIs), and the
              tourism value chain.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-8 transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-leaf/20 rounded-lg">
                <Smartphone className="text-leaf h-8 w-8" />
                <Laptop className="text-leaf h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Digital Transformation</h3>
            </div>
            <p className="text-gray-700">
              Empowers coastal communities to harness digital technologies for problem-solving and economic advancement. From mobile apps and AI to blockchain, exploring how tech can disrupt traditional models and unlock new opportunities in the digital gig economy.
              This track empowers coastal
              communities to harness
              digital technologies for
              problem-solving and
              economic advancement.
              From mobile apps and AI to
              cloud services and
              blockchain, participants will
              explore how tech can disrupt
              traditional models and unlock
              new opportunities.
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-purple/20 rounded-lg">
                <Users className="text-purple h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Youth Agency</h3>
            </div>
            <p className="text-gray-700">
              Celebrates Pwani youth as agents of change, policy influencers, and culture shapers. Highlights their roles in leadership, civic engagement, and social innovation while emphasizing mental health and well-being as essential for sustained impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThematicAreas;
