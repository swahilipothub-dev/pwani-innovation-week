import React from 'react';

const day1Images = [
  '/images/day1/0V6A0015.jpg',
  '/images/day1/0V6A0058.jpg',
  '/images/day1/0V6A0294.jpg',
  '/images/day1/0V6A0304.jpg',
  '/images/day1/0V6A0343.jpg',
  '/images/day1/0V6A0377.jpg',
  '/images/day1/0V6A0422.jpg',
  '/images/day1/0V6A0425.jpg',
  '/images/day1/0V6A9961.jpg',
  '/images/day1/0V6A9978.jpg',
  '/images/day1/2C0A0289.jpg',
  '/images/day1/2C0A0304.jpg',
  '/images/day1/2C0A0313.jpg',
  '/images/day1/2C0A0317.jpg',
  '/images/day1/2C0A0330.jpg',
  '/images/day1/2C0A0333.jpg',
  '/images/day1/2C0A0334.jpg',
  '/images/day1/A21I1136.jpg',
  '/images/day1/A21I1139.jpg',
  '/images/day1/A21I1151.jpg',
  '/images/day1/A21I1190.jpg',
  '/images/day1/A21I1234.jpg',
  '/images/day1/A21I1239.jpg',
  '/images/day1/DSC_0232.jpg',
  '/images/day1/DSC_0292.jpg',
  '/images/day1/DSC_4088.jpg',
  '/images/day1/DSC_4150.jpg',
  '/images/day1/DSC_4303.jpg',
  '/images/day1/IMG_0842.jpg',
  '/images/day1/IMG_0873.jpg',
  '/images/day1/IMG_0895.jpg',
  '/images/day1/IMG_0952.jpg',
  '/images/day1/IMG_0988.jpg',
  '/images/day1/IMG_1070.jpg',
  '/images/day1/IMG_9658.jpg',
  '/images/day1/IMG_9659.jpg',
  '/images/day1/IMG_9803.jpg',
  '/images/day1/IMG_9831.jpg',
  '/images/day1/PGT Intro.jpg',
  '/images/day1/TR7_0037.jpg',
  '/images/day1/TR7_0239.jpg',
  '/images/day1/TR7_0255.jpg',
  '/images/day1/TR7_0527.jpg',
];

const formatCaption = (source: string) => {
  const fileName = source.split('/').pop() ?? '';
  const withoutExtension = fileName.replace(/\.[^/.]+$/, '');
  return withoutExtension.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
};

const Day1Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/20"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-500/10"></div>
        </div>

        <div
          className="section-container relative z-10"
          data-animate-on-scroll="false"
          data-animate-on-scroll-state="loaded"
        >
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-sm font-semibold tracking-wide uppercase text-[#F97316] shadow-sm backdrop-blur dark:bg-slate-900/60 dark:text-orange-300">
              Day 1 Highlights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Relive the opening moments of Pwani Innovation Week
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              A curated collection capturing the energy, connections, and inspiration from day one of the summit.
              Browse the gallery and tap any image to view in full.
            </p>
          </div>
        </div>
      </div>

      <div className="pb-24" data-animate-on-scroll="false" data-animate-on-scroll-state="loaded">
        <div
          className="section-container"
          data-animate-on-scroll="false"
          data-animate-on-scroll-state="loaded"
        >
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {day1Images.map((src) => {
              const caption = formatCaption(src);
              return (
                <figure
                  key={src}
                  className="relative overflow-hidden rounded-3xl bg-white/80 shadow-md ring-1 ring-orange-100/60 dark:bg-slate-900/70 dark:ring-slate-800"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt={caption || 'Pwani Innovation Week Day 1'}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {caption && (
                    <figcaption className="p-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Pwani Innovation Week - Day 1, 27th October, 2025
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day1Gallery;
