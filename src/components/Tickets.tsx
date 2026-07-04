import { Ticket } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const Check = ({ color }: { color: string }) => (
  <svg className={`w-5 h-5 ${color} mr-2 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const tickets = [
  {
    name: "Standard Pass",
    price: "KES 5,000",
    icon: "text-coral",
    border: "border-coral",
    btn: "bg-coral hover:bg-coral-dark",
    check: "text-coral",
    popular: false,
    features: ["Access to all keynote sessions", "Exhibition hall access", "Networking sessions"],
  },
  {
    name: "Premium Pass",
    price: "KES 10,000",
    icon: "text-ocean",
    border: "border-ocean",
    btn: "bg-ocean hover:bg-ocean-dark",
    check: "text-ocean",
    popular: true,
    features: ["All Standard Pass benefits", "Workshop participation", "Priority seating at keynotes", "Lunch and refreshments"],
  },
  {
    name: "VIP Pass",
    price: "KES 25,000",
    icon: "text-purple",
    border: "border-purple",
    btn: "bg-purple hover:bg-purple-dark",
    check: "text-purple",
    popular: false,
    features: ["All Premium Pass benefits", "Exclusive networking events", "Speaker meet & greet", "Gala dinner invitation"],
  },
];

const Tickets = () => {
  const heading = useScrollReveal();
  const cards = useScrollReveal();

  return (
    <section id="tickets" className="py-20 bg-gradient-to-br from-ocean/10 to-purple/10">
      <div className="section-container">
        <div ref={heading.ref} className="text-center mb-16">
          <h2 style={fadeUp(heading.inView, 0)} className="text-3xl md:text-4xl font-bold mb-4">Get Your Tickets</h2>
          <div style={scaleIn(heading.inView, 120)} className="w-24 h-1 bg-ocean mx-auto" />
          <p style={fadeUp(heading.inView, 200)} className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Join over 3,000 delegates for five days of innovation, learning, and networking.
            Secure your place at Pwani Innovation Week 2026 today.
          </p>
        </div>

        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tickets.map((t, i) => (
            <div
              key={t.name}
              style={scaleIn(cards.inView, i * 130)}
              className={`bg-white rounded-xl shadow-md overflow-hidden relative card-hover border-t-4 ${t.border} ${t.popular ? 'transform scale-105 z-10 shadow-lg' : ''}`}
            >
              {t.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-ocean text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  <Ticket className={`h-12 w-12 ${t.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{t.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-gray-800">{t.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center text-gray-600">
                      <Check color={t.check} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className={`${t.btn} text-white py-2 px-6 rounded-md font-semibold transition-colors duration-300`}>
                    Get Ticket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
