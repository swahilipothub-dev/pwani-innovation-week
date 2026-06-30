import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import Objectives from '@/components/Objectives';
import ThematicAreas from '@/components/ThematicAreas';
import GalleryHighlights from '@/components/GalleryHighlights';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <GalleryHighlights />
      <About/>
      <ThematicAreas/>
    </div>
  );
};

export default Index;
