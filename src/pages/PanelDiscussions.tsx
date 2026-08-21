import { PanelLeft } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const PanelDiscussions = () => {
  const content = useScrollReveal();
  return (
    <div className="min-h-screen page-shell">
      <main className="section-container pt-32">
        <div ref={content.ref} className="max-w-4xl mx-auto text-center">
          <div style={scaleIn(content.inView, 0)} className="w-16 h-16 mx-auto mb-6">
            <PanelLeft className="w-full h-full text-[#F97316]" />
          </div>
          <h1 style={fadeUp(content.inView, 80)} className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Panel Discussions</h1>
          <p style={fadeUp(content.inView, 160)} className="text-lg text-gray-600 mb-8">
            Join engaging discussions with diverse panels of experts exploring critical topics
            in innovation, technology, and regional development.
          </p>
          <div style={fadeUp(content.inView, 240)} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">Discussion Topics</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Innovation and entrepreneurship</li>
              <li>• Technology trends</li>
              <li>• Regional development</li>
              <li>• Sustainable solutions</li>
              <li>• Youth empowerment</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PanelDiscussions;
