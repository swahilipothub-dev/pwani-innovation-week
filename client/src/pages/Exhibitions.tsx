import React from 'react';
import {GalleryHorizontal} from 'lucide-react';

const Exhibitions = () => {
  return (
    <div className="min-h-screen">
      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <GalleryHorizontal className="w-16 h-16 mx-auto text-[#F97316] mb-6"/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Exhibitions</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore innovative projects, products, and solutions from startups, companies,
            and research institutions in our dynamic exhibition space.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">Exhibition Features</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Interactive demonstrations</li>
              <li>• Product showcases</li>
              <li>• Innovation displays</li>
              <li>• Tech presentations</li>
              <li>• Startup booths</li>
            </ul>
          </div>
        </div>
      </main>
      ¬ </div>
  );
};

export default Exhibitions;
