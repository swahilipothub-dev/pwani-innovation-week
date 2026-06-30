import React from 'react';
import {PanelLeft} from 'lucide-react';

const PanelDiscussions = () => {
  return (
    <div className="min-h-screen">
      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <PanelLeft className="w-16 h-16 mx-auto text-[#F97316] mb-6"/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Panel Discussions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Join engaging discussions with diverse panels of experts exploring critical topics
            in innovation, technology, and regional development.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">Discussion Topics</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Innovation and entrepreneurship</li>
              <li>• Technology trends</li>
              <li>• Regional development</li>
              <li>• Sustainable solutions</li>
              <li>• Youth empowerment</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PanelDiscussions;
