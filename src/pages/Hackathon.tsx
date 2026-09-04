import { Award } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const Hackathon = () => {
  const content = useScrollReveal();

  return (
    <div className="min-h-screen page-shell">
      <main className="section-container pt-32">
        <div ref={content.ref} className="max-w-4xl mx-auto text-center">
          <div style={fadeUp(content.inView, 0)} className="mb-8 overflow-hidden rounded-2xl shadow-xl">
            <img src="/images/DSC_5674.webp" alt="Pwani Innovation Week hackathon workshop" className="h-64 w-full object-cover md:h-96" />
          </div>
          <div style={scaleIn(content.inView, 120)} className="w-16 h-16 mx-auto mb-6">
            <Award className="w-full h-full text-[#F97316]" />
          </div>
          <h1 style={fadeUp(content.inView, 180)} className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Hackathon</h1>
          <p style={fadeUp(content.inView, 160)} className="text-lg text-gray-600 mb-8">
            Join our intensive coding competition where innovative minds come together to solve real-world
            challenges. Experience 48 hours of coding, mentorship, and the opportunity to showcase your
            solutions to industry experts.
          </p>
          <div style={fadeUp(content.inView, 240)} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#F97316]">What to Expect</h2>
            <ul className="text-left space-y-4 text-gray-600">
              <li>• Intensive 48-hour coding challenge</li>
              <li>• Expert mentorship and guidance</li>
              <li>• Access to cutting-edge tools and resources</li>
              <li>• Networking opportunities with industry leaders</li>
              <li>• Exciting prizes for winning teams</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hackathon;
