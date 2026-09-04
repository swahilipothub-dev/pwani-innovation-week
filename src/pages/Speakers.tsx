import { Users, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal, fadeUp, scaleIn } from '@/hooks/useScrollReveal';
import { SURVEY_LINKS } from '@/lib/config';

const pastKeynoteSpeakers = [
  '/images/keynotespeakers/DR Kevit Desai.png',
  '/images/keynotespeakers/Governor.png',
  '/images/keynotespeakers/Kalkidan Mulugeta.png',
  '/images/keynotespeakers/Mahmoud Noor.png',
  '/images/keynotespeakers/Peter Maddens.png',
  '/images/keynotespeakers/Alex Chesosi.png',
  '/images/keynotespeakers/Canon Chris Kinaynjui.png',
  '/images/keynotespeakers/H.E Amb Arnaud Suquet.png',
  '/images/keynotespeakers/Kennedy Miheso.png',
  '/images/keynotespeakers/Prof  Abdulrazak Shaukat.png',
];

const Speakers = () => {
  const card = useScrollReveal();
  const gallery = useScrollReveal();

  return (
    <div className="min-h-screen page-shell bg-white">

      {/* Header */}
      <div className="relative pt-28 pb-16 overflow-hidden bg-[#0a1628]">
        <img
          src="/images/piw-2026/WhatsApp Image 2026-06-30 at 13.47.35.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/90 to-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4">PIW 2026</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Event Speakers</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Inspiring leaders, innovators, and changemakers driving coastal transformation.
          </p>
        </div>
      </div>

      {/* Lineup announcement + call for speakers */}
      <div ref={card.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <div style={scaleIn(card.inView, 0)} className="w-20 h-20 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center">
              <Users className="w-9 h-9 text-[#F97316]" />
            </div>

            <div>
              <h2 style={fadeUp(card.inView, 100)} className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                Call for Speakers Is Now Open
              </h2>
              <p style={fadeUp(card.inView, 200)} className="text-gray-500 leading-relaxed">
                We're curating an outstanding lineup of keynote speakers, panellists, and workshop leaders for PIW 2026. Have expertise to share with 2,500+ delegates, investors, and policymakers? Apply to speak today.
              </p>
            </div>

            <div style={fadeUp(card.inView, 300)} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left space-y-3">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Who we're looking for</p>
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

            <div style={fadeUp(card.inView, 400)} className="flex flex-col sm:flex-row gap-3">
              <a
                href={SURVEY_LINKS.CALL_FOR_SPEAKERS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/25"
              >
                <Mic2 className="w-4 h-4" /> Apply to Speak
              </a>
              <Link
                to="/speaking/apply"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div style={scaleIn(card.inView, 200)} className="grid grid-cols-2 gap-4">
            <img
              src="/images/piw-2026/WhatsApp Image 2026-06-30 at 14.03.23.webp"
              alt="PIW session in progress"
              className="w-full h-64 object-cover rounded-2xl shadow-lg col-span-2"
            />
            <img
              src="/images/piw-2026/WhatsApp Image 2026-06-30 at 16.17.12.webp"
              alt="PIW audience"
              className="w-full h-40 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="/images/piw-2026/WhatsApp Image 2026-06-30 at 15.14.03.webp"
              alt="PIW exhibition"
              className="w-full h-40 object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>

      {/* Past keynote speakers */}
      <div ref={gallery.ref} className="bg-gray-50 border-t border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={fadeUp(gallery.inView, 0)} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">A Look Back</p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">PIW 2025 Keynote Speakers</h2>
            <p className="text-gray-500 leading-relaxed">
              A glimpse of the leaders who took the stage at last year's edition — setting the bar for PIW 2026.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pastKeynoteSpeakers.map((src, idx) => (
              <div key={src} style={scaleIn(gallery.inView, idx * 60)} className="card-hover rounded-2xl overflow-hidden shadow-md bg-white">
                <img src={src} alt="PIW 2025 keynote speaker" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Speakers;
