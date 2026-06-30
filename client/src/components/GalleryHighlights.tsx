import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryHighlights = [
  {
    day: 'Day 1',
    date: '27th October 2025',
    image: '/images/day1/0V6A0294.jpg',
    description: 'Opening plenary energy, networking lounges, and the first wave of innovators.'
  },
  {
    day: 'Day 2',
    date: '30th October 2025',
    image: '/images/day2/A26I4013.jpg',
    description: 'Workshops, plenaries, and emerging talent showcases lighting up the stage.'
  },
  {
    day: 'Day 3',
    date: '31st October 2025',
    image: '/images/day3/TR7_1730.jpg',
    description: 'Final day celebrations featuring Pwani Got Talent performances and awards.'
  }
];

const GalleryHighlights = () => {
  return (
    <section className="section-container py-20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold tracking-wide uppercase text-[#F97316] shadow-sm dark:bg-slate-900/60 dark:text-orange-300">
          Event Highlights
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Dive into the Pwani Innovation Week gallery
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Relive the moments from each summit day, explore curated photo collections, and experience the energy that
          powered the coastal innovation community.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {galleryHighlights.map((item) => (
          <article
            key={item.day}
            className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/90 shadow-lg ring-1 ring-orange-100/70 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900/70 dark:ring-slate-800"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={item.image}
                alt={`${item.day} highlight`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">{item.date}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{item.day} Gallery</h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 space-y-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              <Link
                to={`/gallery/${item.day.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center justify-center rounded-lg bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#EA580C]"
              >
                View {item.day} Gallery
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GalleryHighlights;
