import React from 'react';

const day2Images = [
  '/images/day2/2C0A0436.jpg',
  '/images/day2/2C0A0447.jpg',
  '/images/day2/2C0A0548.jpg',
  '/images/day2/2C0A0555.jpg',
  '/images/day2/2C0A0559.jpg',
  '/images/day2/2C0A0567.jpg',
  '/images/day2/A21I1330.jpg',
  '/images/day2/A21I1349.jpg',
  '/images/day2/A21I1358.jpg',
  '/images/day2/A21I1370.jpg',
  '/images/day2/A21I1381.jpg',
  '/images/day2/A21I1414.jpg',
  '/images/day2/A21I1416.jpg',
  '/images/day2/A21I1418.jpg',
  '/images/day2/A21I1474.jpg',
  '/images/day2/A21I1478.jpg',
  '/images/day2/A21I1519.jpg',
  '/images/day2/A21I1573.jpg',
  '/images/day2/A21I1577.jpg',
  '/images/day2/A21I1592.jpg',
  '/images/day2/A21I1599.jpg',
  '/images/day2/A21I1661.jpg',
  '/images/day2/A21I1688.jpg',
  '/images/day2/A21I1717.jpg',
  '/images/day2/A21I1750.jpg',
  '/images/day2/A21I1757.jpg',
  '/images/day2/A21I1774.jpg',
  '/images/day2/A21I1775.jpg',
  '/images/day2/A21I1818.jpg',
  '/images/day2/A26I3292.jpg',
  '/images/day2/A26I3344.jpg',
  '/images/day2/A26I3392.jpg',
  '/images/day2/A26I3399.jpg',
  '/images/day2/A26I3424.jpg',
  '/images/day2/A26I3489.jpg',
  '/images/day2/A26I3497.jpg',
  '/images/day2/A26I3531.jpg',
  '/images/day2/A26I3559.jpg',
  '/images/day2/A26I3562.jpg',
  '/images/day2/A26I3728.jpg',
  '/images/day2/A26I3730.jpg',
  '/images/day2/A26I3946.jpg',
  '/images/day2/A26I4013.jpg',
  '/images/day2/A26I4046.jpg',
  '/images/day2/A26I4053.jpg',
  '/images/day2/A26I4057.jpg',
  '/images/day2/A26I4074.jpg',
  '/images/day2/A26I4083.jpg',
  '/images/day2/A26I4087.jpg',
  '/images/day2/A26I4098.jpg',
  '/images/day2/A26I4104.jpg',
  '/images/day2/A26I4214.jpg',
  '/images/day2/A26I4270.jpg',
  '/images/day2/A26I4347.jpg',
  '/images/day2/A26I4400.jpg',
  '/images/day2/A26I4419.jpg',
  '/images/day2/A26I4436.jpg',
  '/images/day2/A26I4458.jpg',
  '/images/day2/A26I4465.jpg',
  '/images/day2/DSC_0222.jpg',
  '/images/day2/IMG_1122.jpg',
  '/images/day2/IMG_1381.jpg',
  '/images/day2/IMG_1438.jpg',
  '/images/day2/IMG_1480.jpg',
  '/images/day2/TR7_0666.jpg',
  '/images/day2/TR7_0819.jpg',
  '/images/day2/TR7_0884.jpg',
  '/images/day2/TR7_0993.jpg',
  '/images/day2/TR7_1012.jpg',
  '/images/day2/TR7_1022.jpg',
  '/images/day2/TR7_1047.jpg',
  '/images/day2/TR7_1054.jpg',
  '/images/day2/TR7_1075.jpg',
  '/images/day2/TR7_1099.jpg',
  '/images/day2/TR7_1104.jpg',
  '/images/day2/TR7_1110.jpg',
];

const formatCaption = (source: string) => {
  const fileName = source.split('/').pop() ?? '';
  const withoutExtension = fileName.replace(/\.[^/.]+$/, '');
  return withoutExtension.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
};

const Day2Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/20"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-500/10"></div>
        </div>

        <div
          className="section-container relative z-10"
          data-animate-on-scroll="false"
          data-animate-on-scroll-state="loaded"
        >
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-sm font-semibold tracking-wide uppercase text-[#F97316] shadow-sm backdrop-blur dark:bg-slate-900/60 dark:text-orange-300">
              Day 2 Highlights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Celebrate the momentum of Pwani Innovation Week day two
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Explore the connections, workshops, and groundbreaking ideas that shaped the second day of the summit.
              Tap any image to enjoy it in full.
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
            {day2Images.map((src) => {
              const caption = formatCaption(src);
              return (
                <figure
                  key={src}
                  className="relative overflow-hidden rounded-3xl bg-white/80 shadow-md ring-1 ring-orange-100/60 dark:bg-slate-900/70 dark:ring-slate-800"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt={caption || 'Pwani Innovation Week Day 2'}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Pwani Innovation Week - Day 2 Moments
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day2Gallery;
