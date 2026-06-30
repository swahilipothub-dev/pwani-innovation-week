import React from 'react';
import {Award} from 'lucide-react';

const Hackathon = () => {
  return (
    <div className="min-h-screen">
      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 mx-auto text-[#F97316] mb-6"/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Hackathon</h1>
          <p className="text-lg text-gray-600 mb-8">
            Join our intensive coding competition where innovative minds come together to solve real-world
            challenges. Experience 48 hours of coding, mentorship, and the opportunity to showcase your
            solutions to industry experts.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">What to Expect</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Intensive 48-hour coding challenge</li>
              <li>• Expert mentorship and guidance</li>
              <li>• Access to cutting-edge tools and resources</li>
              <li>• Networking opportunities with industry leaders</li>
              <li>• Exciting prizes for winning teams</li>
            </ul>
          </div>
        </div>
      </main>
      ¬ </div>
  );
};

export default Hackathon;
