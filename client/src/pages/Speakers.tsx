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
  { image: '/images/keynotespeakers/Alex Chesosi.png' },
  { image: '/images/keynotespeakers/Canon Chris Kinaynjui.png' },
  { image: '/images/keynotespeakers/H.E Amb Arnaud Suquet.png' },
  { image: '/images/keynotespeakers/Kennedy Miheso.png' },
  { image: '/images/keynotespeakers/Prof  Abdulrazak Shaukat.png' },
];

const speakerCategories: Record<string, Speaker[]> = {
  'Keynote Speakers': keynoteSpeakers,
  // These are intentionally empty to demonstrate the "No sessions found" message
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
  
  // Combine speakers from selected category, adding the category label
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

  // This check is now only used to determine if we render the *list or the message*.
  const hasSpeakersInView = speakersInView.length > 0;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="pt-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white relative overflow-hidden transition-colors duration-300 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="section-container py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 dark:text-white">
              Event <span className="gradient-text">Speakers</span>
            </h1>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 dark:text-gray-300">
              Inspiring leaders, innovators, and changemakers driving coastal transformation
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 border-b transition-colors duration-300 dark:bg-slate-950 dark:border-slate-800">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-[#F97316] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md dark:bg-slate-900 dark:text-gray-200 dark:hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Speakers Section - Always visible after the filters */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white transition-colors duration-300 dark:from-slate-950 dark:to-slate-900">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">
            {currentHeading}
          </h2>
          {hasSpeakersInView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {speakersInView.map((speaker, idx) => (
                <div
                  key={`${speaker.category}-${idx}`}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-slate-900"
                >
                  <img
                    src={speaker.image}
                    alt={`${speakerLabel(speaker.category)} ${idx + 1}`}
                    className="w-full h-auto object-cover speaker-card-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ) : (
            // Placeholder message when a category is selected but has no speakers
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                We’re curating an amazing lineup of **{selectedCategory.toLowerCase()}**. Check back soon for
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