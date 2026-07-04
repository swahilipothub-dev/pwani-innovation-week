import { Radio, Users, Handshake, TrendingUp, Music } from 'lucide-react';
import { useScrollReveal, fadeUp, fadeLeft, fadeRight, scaleIn } from '@/hooks/useScrollReveal';

const PIW2026Highlights = () => {
  const video    = useScrollReveal();
  const whatHead = useScrollReveal();
  const whatCards= useScrollReveal();
  const dialogues= useScrollReveal();
  const dealHead = useScrollReveal();
  const dealCards= useScrollReveal();
  const concert  = useScrollReveal();

  return (
    <div className="bg-white">

      {/* ── MOTION GRAPHIC ──────────────────────────────── */}
      <div ref={video.ref} style={scaleIn(video.inView)} className="max-w-2xl mx-auto px-4 sm:px-6 pt-14 pb-6">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-widest uppercase">PIW 2026</span>
          </div>
          <video
            src="/images/piw-2026/screnn holder  - Trim.mp4"
            autoPlay loop muted playsInline
            className="w-full block"
          />
        </div>
      </div>

      {/* ── WHAT IS PIW ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={whatHead.ref} className="max-w-2xl mb-14">
          <p style={fadeUp(whatHead.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">About the Event</p>
          <h2 style={fadeUp(whatHead.inView, 100)} className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            What is Pwani Innovation Week?
          </h2>
          <p style={fadeUp(whatHead.inView, 200)} className="mt-4 text-gray-500 text-lg">
            The Coast's most concentrated gathering of changemakers — built for impact that outlasts the week.
          </p>
        </div>

        <div ref={whatCards.ref} className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Radio className="w-5 h-5 text-[#0EA5E9]" />,
              color: "bg-[#0EA5E9]",
              light: "bg-[#0EA5E9]/8 border-[#0EA5E9]/20",
              title: "A National Media Moment",
              body: "Live broadcast coverage, daily press summaries, and a dedicated hashtag campaign reaching audiences across Kenya.",
            },
            {
              icon: <Users className="w-5 h-5 text-[#F97316]" />,
              color: "bg-[#F97316]",
              light: "bg-[#F97316]/8 border-[#F97316]/20",
              title: "An Audience Aggregator",
              body: "Thousands of delegates, exhibitors, and attendees converge in one place — the largest tech and innovation gathering on the Kenyan coast.",
            },
            {
              icon: <Handshake className="w-5 h-5 text-[#9b87f5]" />,
              color: "bg-[#9b87f5]",
              light: "bg-[#9b87f5]/8 border-[#9b87f5]/20",
              title: "A Partnership Showcase",
              body: "Government, corporates, and development partners present side by side — forging alliances that outlast the week itself.",
            },
          ].map((card, i) => (
            <div key={card.title} style={scaleIn(whatCards.inView, i * 120)} className={`rounded-2xl border p-8 ${card.light} transition-shadow hover:shadow-md`}>
              <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center mb-5`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIALOGUES & PRE-CONFERENCES ─────────────────── */}
      <section className="relative border-y border-gray-100 overflow-hidden">
        <img src="/images/piw-2026/WhatsApp Image 2026-06-30 at 15.13.54.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div ref={dialogues.ref} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div style={fadeLeft(dialogues.inView)} className="lg:w-2/5 lg:sticky lg:top-28">
              <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Before the Main Stage</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Dialogues &amp;<br />Pre-Conferences
              </h2>
              <p className="mt-4 text-white/70">
                Setting the agenda before the main stage opens — structured conversations and focused sectoral sessions that feed directly into the convention.
              </p>
            </div>

            <div className="lg:w-3/5 space-y-5">
              <div style={fadeRight(dialogues.inView, 150)} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-[#0EA5E9] text-white text-sm font-black flex items-center justify-center flex-shrink-0">01</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Four Swahilipot Dialogues</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Structured conversations between youth, government, and the private sector on the issues shaping the Coast's economy — held in the weeks ahead of the main convention.
                    </p>
                  </div>
                </div>
              </div>

              <div style={fadeRight(dialogues.inView, 280)} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316] text-white text-sm font-black flex items-center justify-center flex-shrink-0">02</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Five Sectoral Pre-Conferences</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Focused sessions across five sectors, each feeding directly into convention programming.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Music & Creative', 'Technology', 'Enterprise & MSME', 'Civic Governance', 'Sustainability'].map((tag) => (
                        <span key={tag} className="text-xs bg-orange-50 text-[#F97316] border border-orange-200 rounded-full px-3 py-1 font-semibold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEAL ROOMS & CAPITAL ────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={dealHead.ref} className="max-w-2xl mb-14">
          <p style={fadeUp(dealHead.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">Investment & Growth</p>
          <h2 style={fadeUp(dealHead.inView, 100)} className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            Deal Rooms &amp; Capital
          </h2>
          <p style={fadeUp(dealHead.inView, 200)} className="mt-4 text-gray-500 text-lg leading-relaxed">
            Where Coast-based entrepreneurs meet the capital they need to grow. PIW's Deal Rooms pair vetted coastal entrepreneurs with investors, banks, and development finance institutions actively deploying capital in the region.
          </p>
          <p style={fadeUp(dealHead.inView, 280)} className="mt-3 text-gray-400 text-sm">
            Together, these mechanisms move PIW beyond visibility into measurable economic outcomes for the Coast.
          </p>
        </div>

        <div ref={dealCards.ref} className="grid md:grid-cols-2 gap-6">
          <div style={fadeLeft(dealCards.inView, 0)} className="rounded-2xl bg-[#0EA5E9]/6 border border-[#0EA5E9]/20 p-8 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#0EA5E9] flex items-center justify-center mb-5">
              <Handshake className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Deal Rooms</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Closed-door investor matchmaking sessions connecting vetted coastal ventures with capital providers — impact investors, DFIs, and commercial banks.
            </p>
          </div>

          <div style={fadeRight(dealCards.inView, 150)} className="rounded-2xl bg-[#F97316]/6 border border-[#F97316]/20 p-8 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#F97316] flex items-center justify-center mb-5">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pwani Accelerate</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A public showcase of high-potential coastal ventures to partners, media, and prospective customers — turning a pitch into a relationship.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRAND CONCERT ───────────────────────────────── */}
      <section ref={concert.ref} className="mx-4 sm:mx-6 lg:mx-8 mb-16 rounded-2xl bg-[#0a1628] overflow-hidden max-w-7xl lg:mx-auto">
        <div style={fadeUp(concert.inView)} className="px-8 sm:px-12 py-14 flex flex-col md:flex-row items-start md:items-center gap-10">
          <div className="flex-1">
            <p className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-4">Closing Night</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">The Grand Concert</h2>
            <p className="text-[#F97316] font-semibold text-sm mb-4">
              Innovation Week closes the way the Coast does best — with music, on the water's edge.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl">
              The five-day convention closes with a public concert at the Mama Ngina Waterfront, drawing crowds far beyond the delegate list. It is deliberately the most visible single moment of the year — the image that anchors the press coverage and reminds every attendee why this work matters.
            </p>
          </div>
          <div style={scaleIn(concert.inView, 200)} className="flex-shrink-0 bg-[#F97316] rounded-2xl px-8 py-7 text-center">
            <div className="flex items-center gap-3 mb-2">
              <Music className="w-6 h-6 text-white/80" />
            </div>
            <p className="text-4xl font-black text-white">5,000+</p>
            <p className="text-orange-200 text-xs font-semibold mt-1 uppercase tracking-wide">
              Expected concert attendees<br />at Mama Ngina Waterfront
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PIW2026Highlights;
