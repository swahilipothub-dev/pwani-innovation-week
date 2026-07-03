import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const activities = [
  {
    label: "Hackathons",
    color: "text-[#F97316]",
    border: "border-[#F97316]/30",
    bg: "bg-[#F97316]/5",
    body: "Driving digital transformation by providing tech solutions to local challenges facing coastal communities.",
  },
  {
    label: "Impact-led Sessions",
    color: "text-[#0EA5E9]",
    border: "border-[#0EA5E9]/30",
    bg: "bg-[#0EA5E9]/5",
    body: "Well-curated daily sessions facilitated and driven by leaders across multiple industries.",
  },
  {
    label: "Keynote Addresses",
    color: "text-[#9b87f5]",
    border: "border-[#9b87f5]/30",
    bg: "bg-[#9b87f5]/5",
    body: "Engaging keynotes by renowned players across different sectors driving transformative change.",
  },
  {
    label: "Utamaduni Village",
    color: "text-[#22C55E]",
    border: "border-[#22C55E]/30",
    bg: "bg-[#22C55E]/5",
    body: "Experience a rich celebration of coastal cultures at the Utamaduni Village — what it truly means to be Pwani.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* ── Intro ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-16">
          <div className="lg:w-1/2 space-y-6">
            <div>
              <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">About PIW 2026</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Pwani Innovation Week 2026
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              PIW 2026 is the most significant edition of Pwani Innovation Week to date — coinciding with the 10th anniversary of Swahilipot Hub Foundation. It is a Pwani-led and youth-driven convening that brings together entrepreneurs, investors, creatives, government, and changemakers to co-create localized solutions for sustainable growth on Kenya's coast.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hosted in Mombasa from <strong className="text-gray-800">26 – 30 October 2026</strong>, this edition marks a decade of impact under the theme of the Coast taking the national stage — a media moment, an investment showcase, and a community celebration, all in one week.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#F97316] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Learn more about PIW 2026 <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-3">
            {[4, 5, 6, 7].map((n) => (
              <div key={n} className="overflow-hidden rounded-xl aspect-square">
                <img
                  src={`/images/breakfast-nbi/${n}.jpg`}
                  alt="PIW event"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Activities ────────────────────────────── */}
        <div>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">What to Expect</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activities.map((a) => (
              <div key={a.label} className={`rounded-2xl border ${a.border} ${a.bg} p-6 hover:shadow-md transition-shadow`}>
                <p className={`text-lg font-black mb-2 ${a.color}`}>{a.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
