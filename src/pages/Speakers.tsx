import React, {useState} from 'react';
import {Briefcase, Globe, Users} from 'lucide-react';

type Speaker = {
  image: string;
  name?: string;
};

const keynoteSpeakers: Speaker[] = [
  {image: '/images/keynotespeakers/DR Kevit Desai.png'},
  {image: '/images/keynotespeakers/Governor.png'},
  {image: '/images/keynotespeakers/Kalkidan Mulugeta.png'},
  {image: '/images/keynotespeakers/Mahmoud Noor.png'},
  {image: '/images/keynotespeakers/Peter Maddens.png'},
];

const speakerCategories: Record<string, Speaker[]> = {
  'Keynote Speakers': keynoteSpeakers,
  'Panel Experts': [],
  'Workshop Leaders': [],
};

if (typeof window !== 'undefined') {
  const styleId = 'speakers-hover-zoom';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      /* Smooth transform and proper origin */
      img.speaker-card-image {   
        transition: transform 400ms ease;
        transform-origin: center;
        will-change: transform;
      }

      /* Slight zoom when the parent card is hovered */
      div:hover > img.speaker-card-image {
        transform: scale(1.06);
      }

      /* Optional: make the card overflow hidden in case it's not already */
      div:hover > img.speaker-card-image {
        display: block;
      }
    `;
    document.head.appendChild(style);
  }
}

const Speakers = () => {
  const categories = ['All', ...Object.keys(speakerCategories)];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const speakersInView =
    selectedCategory === 'All'
      ? Object.entries(speakerCategories).flatMap(([category, speakers]) =>
          speakers.map((speaker) => ({...speaker, category}))
        )
      : (speakerCategories[selectedCategory] || []).map((speaker) => ({
          ...speaker,
          category: selectedCategory,
        }));
  const currentHeading = selectedCategory === 'All' ? 'All Speakers' : selectedCategory;
  const speakerLabel = (category: string) =>
    category.endsWith('s') ? category.slice(0, -1) : category;

  return (
    <div className="min-h-screen">
      <div className="pt-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="section-container py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Event <span className="gradient-text">Speakers</span>
            </h1>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Inspiring leaders, innovators, and changemakers driving coastal transformation
            </p>
            
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 border-b">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-[#F97316] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            {currentHeading}
          </h2>
          {speakersInView.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {speakersInView.map((speaker, idx) => (
                <div
                  key={`${speaker.category}-${idx}`}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={speaker.image}
                    alt={`${speakerLabel(speaker.category)} ${idx + 1}`}
                    className="w-full h-auto object-cover speaker-card-image"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                We’re curating an amazing lineup of {selectedCategory.toLowerCase()}. Check back soon for
                updates.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Speakers;
