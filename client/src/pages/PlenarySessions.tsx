import React from 'react';
import {Speaker} from 'lucide-react';

const PlenarySessions = () => {
  return (
    <div className="min-h-screen">
      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <Speaker className="w-16 h-16 mx-auto text-[#F97316] mb-6"/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Plenary Sessions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Engage with thought leaders and industry experts in our keynote sessions and discussions
            that shape the future of innovation in the coastal region.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">Key Features</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Keynote speeches from industry leaders</li>
              <li>• Interactive Q&A sessions</li>
              <li>• Thought-provoking presentations</li>
              <li>• Networking opportunities</li>
              <li>• Access to session recordings</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlenarySessions;
