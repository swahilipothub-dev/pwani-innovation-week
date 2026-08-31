import React from 'react';
import { Waves, Smartphone, Users } from 'lucide-react';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const tracks = [
  {
    icon: <Waves className="w-6 h-6 text-[#0EA5E9]" />,
    iconBg: "bg-[#0EA5E9]/10",
    accent: "border-t-[#0EA5E9]",
    tag: "Track 01",
    tagColor: "text-[#0EA5E9]",
    title: "Sustainable Coastal Economies",
    body: "Explores opportunities for youth and women within sustainable coastal economies — specifically in aquaculture, Cultural & Creative Industries, and the tourism value chain. Encompasses Blue Economy, Marine Resources, and Climate Action.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[#22C55E]" />,
    iconBg: "bg-[#22C55E]/10",
    accent: "border-t-[#22C55E]",
    tag: "Track 02",
    tagColor: "text-[#22C55E]",
    title: "Digital Transformation",
    body: "Empowers coastal communities to harness digital technologies for problem-solving and economic advancement. From mobile apps and AI to blockchain, participants explore how tech can disrupt traditional models and unlock new opportunities.",
    image: "/images/DSC_5674.jpg",
  },
  {
    icon: <Users className="w-6 h-6 text-[#9b87f5]" />,
    iconBg: "bg-[#9b87f5]/10",
    accent: "border-t-[#9b87f5]",
    tag: "Track 03",
    tagColor: "text-[#9b87f5]",
    title: "Youth Agency",
    body: "Celebrates Pwani youth as agents of change, policy influencers, and culture shapers. Highlights their roles in leadership, civic engagement, and social innovation, while emphasizing mental health and well-being as essential for sustained impact.",
  },
];

const ThematicAreas = () => {
  const heading = useScrollReveal();
  const cards = useScrollReveal();

  return (
    <section id="themes" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div ref={heading.ref} className="max-w-2xl mb-14">
          <p style={fadeUp(heading.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Areas of Focus</p>
          <h2 style={fadeUp(heading.inView, 100)} className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Thematic Tracks</h2>
          <p style={fadeUp(heading.inView, 200)} className="mt-4 text-gray-500">
            Three interconnected areas that anchor the PIW 2026 programme — each designed to move the Coast's most pressing conversations from dialogue into action.
          </p>
        </div>

        <div ref={cards.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              style={scaleIn(cards.inView, i * 120)}
              className={`overflow-hidden bg-white rounded-2xl border border-gray-200 border-t-4 ${track.accent} hover:shadow-lg transition-shadow duration-300`}
            >
              {track.image && (
                <div className="relative h-36 overflow-hidden">
                  <img src={track.image} alt="Digital Transformation workshop" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-[#0a1628]/25" />
                </div>
              )}
              <div className="p-8">
                <div className={`w-12 h-12 rounded-xl ${track.iconBg} flex items-center justify-center mb-5`}>
                  {track.icon}
                </div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${track.tagColor}`}>{track.tag}</p>
                <h3 className="text-lg font-black text-gray-900 mb-3 leading-snug">{track.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{track.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThematicAreas;
