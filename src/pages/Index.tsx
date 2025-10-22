import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import Objectives from '@/components/Objectives';
import ThematicAreas from '@/components/ThematicAreas';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <About/>
      <ThematicAreas/>
    </div>
  );
};

export default Index;
