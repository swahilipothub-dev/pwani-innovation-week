import { Handshake } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const Partners = () => {
  const partners = Array.from({ length: 8 }, (_, index) => index + 1);
  const heading = useScrollReveal();
  const cta = useScrollReveal();

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="section-container">
        <div ref={heading.ref} className="text-center mb-16">
          <h2 style={fadeUp(heading.inView, 0)} className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <div style={scaleIn(heading.inView, 120)} className="w-24 h-1 bg-leaf mx-auto" />
          <p style={fadeUp(heading.inView, 220)} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Pwani Innovation Week is made possible through the collaboration and support of various organizations committed to fostering innovation and development in the coastal region.
          </p>
        </div>

        {/* Continuous Carousel — already animated via CSS marquee */}
        <div className="relative overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            {[...partners, ...partners].map((index, i) => (
              <div key={i} className="inline-block w-64 mx-4 align-top">
                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-40 card-hover">
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <Handshake className="h-12 w-12 mb-2" />
                    <div className="text-sm font-medium">Partner {index}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={cta.ref} className="mt-16 text-center">
          <h3 style={fadeUp(cta.inView, 0)} className="text-2xl font-bold mb-6">Become a Partner</h3>
          <p style={fadeUp(cta.inView, 100)} className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join us in shaping the innovation landscape in coastal Kenya. Partner with Pwani Innovation Week 2026 and help us foster creativity, entrepreneurship, and sustainable development.
          </p>
          <div style={scaleIn(cta.inView, 220)}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-semibold transition-colors duration-300">
              Partnership Opportunities
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
