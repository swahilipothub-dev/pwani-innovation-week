import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const stats = [
  { value: "3,000+", label: "Delegates" },
  { value: "5", label: "Days" },
  { value: "12+", label: "Sessions" },
  { value: "50+", label: "Speakers" },
];

const Impacts = () => {
  const heading = useScrollReveal();
  const grid = useScrollReveal();

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div ref={heading.ref} className="text-center mb-16">
          <h2 style={fadeUp(heading.inView, 0)} className="text-3xl md:text-4xl font-bold mb-4">
            Pwani Innovation Week in Numbers
          </h2>
          <div style={scaleIn(heading.inView, 150)} className="w-24 h-1 bg-ocean mx-auto" />
        </div>

        <div ref={grid.ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} style={scaleIn(grid.inView, i * 120)} className="text-center">
              <p className="text-4xl font-bold text-[#F97316]">{s.value}</p>
              <p className="text-gray-600 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impacts;
