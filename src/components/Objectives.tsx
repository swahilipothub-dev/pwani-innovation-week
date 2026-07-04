import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const cards = [
  {
    img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Innovation landscape",
    title: "Amplify (Paza)",
    items: [
      "Allow SMEs driving coastal economies to showcase and amplify their work.",
      "Situate youth at the center of change and improved livelihoods",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Coastal ecosystem",
    title: "Empower (Inua)",
    items: ["A pitch deck for startups to access investors and seed fund."],
  },
  {
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Coastal region aerial view",
    title: "Connect (Unganisha)",
    items: [
      "Public and private sector in driving coastal economies",
      "Connect coastal businesses to consumers",
    ],
  },
];

const Objectives = () => {
  const heading = useScrollReveal();
  const grid = useScrollReveal();

  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="section-container">
        <div ref={heading.ref} className="text-center mb-16">
          <h2 style={fadeUp(heading.inView, 0)} className="text-3xl md:text-4xl font-bold mb-4">
            Objectives of the Event
          </h2>
          <div style={scaleIn(heading.inView, 150)} className="w-24 h-1 bg-coral mx-auto" />
        </div>

        <div ref={grid.ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={card.title} style={scaleIn(grid.inView, i * 130)} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                <ul className="container mx-auto list-disc text-gray-600">
                  {card.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
