import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Mic2, Trophy, Palmtree } from 'lucide-react';
import { useScrollReveal, fadeUp, fadeLeft, fadeRight, scaleIn } from '@/hooks/useScrollReveal';

const activities = [
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "Hackathons",
    color: "text-[#F97316]",
    bg: "bg-[#F97316]",
    body: "Driving digital transformation by providing tech solutions to local challenges facing coastal communities.",
  },
  {
    icon: <Mic2 className="w-5 h-5" />,
    label: "Impact-led Sessions",
    color: "text-[#0EA5E9]",
    bg: "bg-[#0EA5E9]",
    body: "Well-curated daily sessions facilitated and driven by leaders across multiple industries.",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    label: "Keynote Addresses",
    color: "text-[#9b87f5]",
    bg: "bg-[#9b87f5]",
    body: "Engaging keynotes by renowned players across different sectors driving transformative change.",
  },
  {
    icon: <Palmtree className="w-5 h-5" />,
    label: "Utamaduni Village",
    color: "text-[#22C55E]",
    bg: "bg-[#22C55E]",
    body: "Experience a rich celebration of coastal cultures — what it truly means to be Pwani.",
  },
];

const stats = [
  { value: "5,000+", label: "Expected Attendees" },
  { value: "6", label: "Days" },
  { value: "7th", label: "Edition" },
  { value: "10", label: "Years of Impact" },
];

const images = [
  "/images/A21I1862.jpg",
  "/images/A26I5421.jpg",
  "/images/A26I5516.jpg",
  "/images/A26I7052.jpg",
];

const About = () => {
  const copy = useScrollReveal();
  const mosaic = useScrollReveal();
  const statsRow = useScrollReveal();
  const activitiesRef = useScrollReveal();

  return (
    <section id="about" className="bg-white">

      {/* ── Main content ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT: copy */}
          <div ref={copy.ref} className="w-full lg:w-1/2 space-y-8">
            <div>
              <span style={fadeUp(copy.inView, 0)} className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                About PIW 2026
              </span>
              <h2 style={fadeUp(copy.inView, 100)} className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                The Week the Coast<br />
                <span className="text-[#F97316]">Takes the Stage</span>
              </h2>
            </div>

            <p style={fadeUp(copy.inView, 200)} className="text-gray-600 leading-relaxed text-lg">
              PIW 2026 is the most significant edition of Pwani Innovation Week to date — coinciding with the <strong className="text-gray-800">10th anniversary of Swahilipot Hub Foundation</strong>. A Pwani-led, youth-driven convening bringing together entrepreneurs, investors, creatives, government, and changemakers.
            </p>
            <p style={fadeUp(copy.inView, 280)} className="text-gray-500 leading-relaxed">
              Hosted in Mombasa from <strong className="text-gray-700">26 – 31 October 2026</strong>, this edition marks a decade of impact — a national media moment, an investment showcase, and a community celebration, all in one week.
            </p>

            {/* Stats row */}
            <div ref={statsRow.ref} className="grid grid-cols-4 gap-4 pt-2">
              {stats.map((s, i) => (
                <div key={s.label} style={scaleIn(statsRow.inView, i * 80)} className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <p className="text-2xl font-black text-[#F97316]">{s.value}</p>
                  <p className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            <div style={fadeUp(copy.inView, 360)}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/25 hover:-translate-y-0.5"
              >
                Learn more about PIW 2026 <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT: image mosaic */}
          <div ref={mosaic.ref} className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[520px]">
              <div style={fadeLeft(mosaic.inView, 0)} className="row-span-2 overflow-hidden rounded-2xl shadow-md">
                <img src={images[0]} alt="PIW 2026" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div style={fadeRight(mosaic.inView, 100)} className="overflow-hidden rounded-2xl shadow-md">
                <img src={images[1]} alt="PIW 2026" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div style={fadeRight(mosaic.inView, 200)} className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <img src={images[2]} alt="PIW 2026" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <img src={images[3]} alt="PIW 2026" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── What to Expect ───────────────────────────────── */}
      <div className="bg-[#0a1628]">
        <div ref={activitiesRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p style={fadeUp(activitiesRef.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-10 text-center">What to Expect</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {activities.map((a, i) => (
              <div key={a.label} style={fadeUp(activitiesRef.inView, 80 + i * 100)} className="bg-[#0a1628] p-8 hover:bg-white/5 transition-colors duration-200">
                <div className={`w-10 h-10 rounded-xl ${a.bg} flex items-center justify-center text-white mb-5`}>
                  {a.icon}
                </div>
                <p className={`text-base font-black mb-3 ${a.color}`}>{a.label}</p>
                <p className="text-white/55 text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
