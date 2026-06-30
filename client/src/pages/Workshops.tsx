import React from 'react';
import {Wrench} from 'lucide-react';

const Workshops = () => {
  return (
    <div className="min-h-screen">
      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <Wrench className="w-16 h-16 mx-auto text-[#F97316] mb-6"/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Workshops</h1>
          <p className="text-lg text-gray-600 mb-8">
            Participate in hands-on workshops led by industry experts. Gain practical skills
            and insights into the latest technologies and innovation practices.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">Workshop Benefits</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Hands-on learning experience</li>
              <li>• Expert-led sessions</li>
              <li>• Practical skill development</li>
              <li>• Interactive learning environment</li>
              <li>• Take-home resources and materials</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workshops;
