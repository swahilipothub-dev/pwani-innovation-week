import { Users, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';

const Speakers = () => {
  const card = useScrollReveal();

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-[#0a1628] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4">PIW 2026</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Event Speakers</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Inspiring leaders, innovators, and changemakers driving coastal transformation.
          </p>
        </div>
      </div>

      {/* Coming Soon */}
      <div ref={card.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-lg mx-auto text-center space-y-8">

          <div style={scaleIn(card.inView, 0)} className="w-20 h-20 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto">
            <Users className="w-9 h-9 text-[#F97316]" />
          </div>

          <div>
            <h2 style={fadeUp(card.inView, 100)} className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Speakers Coming Soon
            </h2>
            <p style={fadeUp(card.inView, 200)} className="text-gray-500 leading-relaxed">
              We're curating an outstanding lineup of keynote speakers, panellists, and workshop leaders for PIW 2026. Announcements will be made in the coming months.
            </p>
          </div>

          <div style={fadeUp(card.inView, 300)} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left space-y-3">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">What to expect</p>
            {[
              "Keynote addresses from national and regional leaders",
              "Panel experts across technology, enterprise, and creative industries",
              "Workshop leaders from government and development partners",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 flex-shrink-0" />
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>

          <div style={fadeUp(card.inView, 400)} className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* <Link
              to="/tickets"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/25"
            >
              <Bell className="w-4 h-4" /> Register Interest
            </Link> */}
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Speakers;
