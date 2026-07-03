import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import Objectives from '@/components/Objectives';
import ThematicAreas from '@/components/ThematicAreas';
import PIW2026Highlights from '@/components/PIW2026Highlights';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <PIW2026Highlights/>
      <About/>
      {/* <Objectives /> */}
      <ThematicAreas/>
    </div>
  );
};

export default Index;
