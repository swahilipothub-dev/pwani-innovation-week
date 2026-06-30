import React from 'react';

const day3Images = [
  '/images/day3/2C0A0621.jpg',
  '/images/day3/2C0A0776.jpg',
  '/images/day3/2C0A0781.jpg',
  '/images/day3/2C0A0807.jpg',
  '/images/day3/2C0A0810.jpg',
  '/images/day3/2C0A0812.jpg',
  '/images/day3/2C0A0813.jpg',
  '/images/day3/2C0A0845.jpg',
  '/images/day3/2C0A0901.jpg',
  '/images/day3/2C0A0909.jpg',
  '/images/day3/2C0A0925.jpg',
  '/images/day3/2C0A0930.jpg',
  '/images/day3/2C0A0965.jpg',
  '/images/day3/2C0A0973.jpg',
  '/images/day3/2C0A1036.jpg',
  '/images/day3/2C0A1058.jpg',
  '/images/day3/2C0A1089.jpg',
  '/images/day3/A21I1843.jpg',
  '/images/day3/A21I1849.jpg',
  '/images/day3/A21I1850.jpg',
  '/images/day3/A21I1860.jpg',
  '/images/day3/A21I1866.jpg',
  '/images/day3/A21I1900.jpg',
  '/images/day3/A21I1916.jpg',
  '/images/day3/A21I1945.jpg',
  '/images/day3/A21I1952.jpg',
  '/images/day3/A21I1968.jpg',
  '/images/day3/A21I1980.jpg',
  '/images/day3/A21I1998.jpg',
  '/images/day3/DSC_1596.jpg',
  '/images/day3/DSC_5701.jpg',
  '/images/day3/DSC_5710.jpg',
  '/images/day3/DSC_5744.jpg',
  '/images/day3/DSC_5748.jpg',
  '/images/day3/DSC_5795.jpg',
  '/images/day3/DSC_5803.jpg',
  '/images/day3/DSC_5819.jpg',
  '/images/day3/IMG_1497.jpg',
  '/images/day3/IMG_1580.jpg',
  '/images/day3/IMG_1583.jpg',
  '/images/day3/J26A0200.jpg',
  '/images/day3/J26A0261.jpg',
  '/images/day3/TR7_1133.jpg',
  '/images/day3/TR7_1207.jpg',
  '/images/day3/TR7_1221.jpg',
  '/images/day3/TR7_1259.jpg',
  '/images/day3/TR7_1307.jpg',
  '/images/day3/TR7_1344.jpg',
  '/images/day3/TR7_1352.jpg',
  '/images/day3/TR7_1361.jpg',
  '/images/day3/TR7_1455.jpg',
  '/images/day3/TR7_1618.jpg',
  '/images/day3/TR7_1631.jpg',
  '/images/day3/TR7_1671.jpg',
  '/images/day3/TR7_1690.jpg',
  '/images/day3/TR7_1730.jpg',
  '/images/day3/TR7_1747.jpg',
];

const formatCaption = (source: string) => {
  const fileName = source.split('/').pop() ?? '';
  const withoutExtension = fileName.replace(/\.[^/.]+$/, '');
  return withoutExtension.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
};

const Day3Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-500/20"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-500/10"></div>
        </div>

        <div
          className="section-container relative z-10"
          data-animate-on-scroll="false"
          data-animate-on-scroll-state="loaded"
        >
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-sm font-semibold tracking-wide uppercase text-[#F97316] shadow-sm backdrop-blur dark:bg-slate-900/60 dark:text-orange-300">
              Day 3 Highlights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Closing the summit with creativity, collaboration, and celebration
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Relive the final day of Pwani Innovation Week with snapshots of performers, partners, and audiences
              bringing the coastal creative economy to life.
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
            {day3Images.map((src) => {
              const caption = formatCaption(src);
              return (
                <figure
                  key={src}
                  className="relative overflow-hidden rounded-3xl bg-white/80 shadow-md ring-1 ring-orange-100/60 dark:bg-slate-900/70 dark:ring-slate-800"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt={caption || 'Pwani Innovation Week Day 3'}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Pwani Innovation Week - Day 3 Finale
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

export default Day3Gallery;
