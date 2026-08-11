import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import Objectives from '@/components/Objectives';
import ThematicAreas from '@/components/ThematicAreas';
import PIW2026Highlights from '@/components/PIW2026Highlights';
import DecadeAndBeyond from '@/components/DecadeAndBeyond';
import ThemeBreakdown from '@/components/ThemeBreakdown';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f7fafe]">
      <Hero/>
      <DecadeAndBeyond/>
      <PIW2026Highlights/>
      <ThemeBreakdown />
      <About/>
      {/* <Objectives /> */}
      <ThematicAreas/>
    </div>
  );
};

export default Index;
