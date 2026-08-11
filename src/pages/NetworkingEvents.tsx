import { Users } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const NetworkingEvents = () => {
  const content = useScrollReveal();
  return (
    <div className="min-h-screen bg-white">
      <main className="section-container pt-32">
        <div ref={content.ref} className="max-w-4xl mx-auto text-center">
          <div style={scaleIn(content.inView, 0)} className="w-16 h-16 mx-auto mb-6">
            <Users className="w-full h-full text-[#F97316]" />
          </div>
          <h1 style={fadeUp(content.inView, 80)} className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Networking Events</h1>
          <p style={fadeUp(content.inView, 160)} className="text-lg text-gray-600 mb-8">
            Connect with fellow innovators, entrepreneurs, and industry leaders in our
            carefully curated networking sessions designed to foster collaboration.
          </p>
          <div style={fadeUp(content.inView, 240)} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">Event Highlights</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Speed networking sessions</li>
              <li>• Industry mixers</li>
              <li>• Mentorship opportunities</li>
              <li>• Business card exchange</li>
              <li>• Social events</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NetworkingEvents;
