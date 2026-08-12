import React, { Suspense, lazy } from 'react';
import Hero from '@/components/Hero';
// import Objectives from '@/components/Objectives';

const DecadeAndBeyond = lazy(() => import('@/components/DecadeAndBeyond'));
const PIW2026Highlights = lazy(() => import('@/components/PIW2026Highlights'));
const ThemeBreakdown = lazy(() => import('@/components/ThemeBreakdown'));
const About = lazy(() => import('@/components/About'));
const ThematicAreas = lazy(() => import('@/components/ThematicAreas'));

const SectionFallback = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
    <div className="h-56 bg-slate-100/80 border border-slate-200 animate-pulse" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f7fafe]">
      <Hero/>
      <Suspense fallback={<SectionFallback />}>
        <DecadeAndBeyond/>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PIW2026Highlights/>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ThemeBreakdown />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <About/>
      </Suspense>
      {/* <Objectives /> */}
      <Suspense fallback={<SectionFallback />}>
        <ThematicAreas/>
      </Suspense>
    </div>
  );
};

export default Index;
