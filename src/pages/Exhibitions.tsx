import { GalleryHorizontal } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const Exhibitions = () => {
  const content = useScrollReveal();
  return (
    <div className="min-h-screen">
      <main className="section-container pt-32">
        <div ref={content.ref} className="max-w-4xl mx-auto text-center">
          <div style={fadeUp(content.inView, 0)} className="mb-8 overflow-hidden rounded-2xl shadow-xl">
            <img src="/images/DSC_5674.jpg" alt="Pwani Innovation Week technology exhibition" className="h-64 w-full object-cover md:h-96" />
          </div>
          <div style={scaleIn(content.inView, 120)} className="w-16 h-16 mx-auto mb-6">
            <GalleryHorizontal className="w-full h-full text-[#F97316]" />
          </div>
          <h1 style={fadeUp(content.inView, 180)} className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Exhibitions</h1>
          <p style={fadeUp(content.inView, 160)} className="text-lg text-gray-600 mb-8">
            Explore innovative projects, products, and solutions from startups, companies,
            and research institutions in our dynamic exhibition space.
          </p>
          <div style={fadeUp(content.inView, 240)} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">Exhibition Features</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Interactive demonstrations</li>
              <li>• Product showcases</li>
              <li>• Innovation displays</li>
              <li>• Tech presentations</li>
              <li>• Startup booths</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Exhibitions;
