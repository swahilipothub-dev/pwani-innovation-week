import { Handshake } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

type Partner = {
  name: string;
  logo?: string;
};

const partners: Partner[] = [
  { name: 'Share', logo: '/images/partners/share.jpeg' },
  { name: 'UNICEF', logo: '/images/partners/unicef.jpeg' },
  { name: 'UN Women', logo: '/images/partners/un-women.jpeg' },
  { name: 'UK Kenya Tech Hub', logo: '/images/partners/uk-kenya-tech-hub.jpeg' },
  { name: 'TrustAfrica', logo: '/images/partners/trustafrica.jpeg' },
  { name: 'ICT Authority', logo: '/images/partners/ict-authority.jpeg' },
  { name: 'Huria', logo: '/images/partners/huria.jpeg' },
  { name: 'Ajira Digital', logo: '/images/partners/ajira.jpeg' },
  { name: 'Afrotellers', logo: '/images/partners/afrotellers.jpeg' },
  { name: 'ABSA', logo: '/images/partners/absa.jpg' },
  { name: 'Coca-Cola Coastal Bottlers Limited', logo: '/images/partners/coca-cola-coastal-bottlers.jpg' },
  { name: 'DIGIKEN - Digital Platforms Kenya', logo: '/images/partners/digiken.jpg' },
  { name: 'Imaginable Futures', logo: '/images/partners/imaginable-futures.jpg' },
  { name: 'Conrad N. Hilton Foundation', logo: '/images/partners/conrad-hilton-foundation.jpg' },
  { name: 'KENIA - Kenya National Innovation Agency', logo: '/images/partners/kenia.jpg' },
  { name: 'Mastercard Foundation', logo: '/images/partners/mastercard-foundation.jpg' },
];

const Partners = () => {
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
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="              inline-block w-80 md:w-96 mx-4 align-top">
                              <div className="bg-white border border-gray-100 rounded-lg p-3 flex items-center justify-center h-56 md:h-64 card-hover">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <Handshake className="h-12 w-12 mb-2" />
                      <div className="text-sm font-medium">{partner.name}</div>
                    </div>
                  )}
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
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default Partners;
