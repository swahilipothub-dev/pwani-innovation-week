import { Link } from 'react-router-dom';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';
import { Clock } from 'lucide-react';

interface ComingSoonProps {
  title?: string;
  description?: string;
}

const ComingSoon = ({ title = 'Coming Soon', description = 'This page is currently under development. Check back soon!' }: ComingSoonProps) => {
  const card = useScrollReveal();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0a1628] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4">PIW 2026</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{title}</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {description}
          </p>
        </div>
      </div>

      {/* Coming Soon */}
      <div ref={card.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-lg mx-auto text-center space-y-8">
          <div style={scaleIn(card.inView, 0)} className="w-24 h-24 rounded-3xl bg-[#F97316]/10 border-2 border-[#F97316] flex items-center justify-center mx-auto">
            <Clock className="w-12 h-12 text-[#F97316]" />
          </div>

          <div>
            <div style={fadeUp(card.inView, 50)} className="inline-block mb-6">
              <span className="bg-[#F97316] text-white text-xs md:text-sm font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full">
                Coming Soon
              </span>
            </div>
            <h2 style={fadeUp(card.inView, 100)} className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
              {title}
            </h2>
            <p style={fadeUp(card.inView, 200)} className="text-gray-600 text-lg leading-relaxed">
              We're working hard to bring you something amazing. Stay tuned for updates!
            </p>
          </div>

          <div style={fadeUp(card.inView, 400)} className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-[#F97316] text-gray-700 hover:text-[#F97316] text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
