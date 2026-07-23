import { useState } from 'react';
import { CalendarDays, Radio, Users, Handshake, TrendingUp, Music } from 'lucide-react';
import { useScrollReveal, fadeUp, fadeLeft, fadeRight, scaleIn } from '@/hooks/useScrollReveal';

const programmeDays = [
  {
    day: 'Day 1',
    title: 'Monday · Arrivals & Opening',
    accent: 'from-[#5420b5] to-[#3f1598]',
    activities: ['Delegate registration and Decade Exhibition opening.', 'Alumni Homecoming session.', 'Opening Culture Night.'],
  },
  {
    day: 'Day 2',
    title: 'Tuesday · Sectoral Sessions',
    accent: 'from-[#5420b5] to-[#3f1598]',
    activities: ['Official opening ceremony.', 'Parallel track sessions across all five themes.', 'Innovation Labs and Utamaduni Village open.', 'SPH Decade Impact Report launch ceremony.'],
  },
  {
    day: 'Day 3',
    title: 'Wednesday · Deal Rooms',
    accent: 'from-[#5420b5] to-[#3f1598]',
    activities: ['Deals Den pitch competition.', 'Pwani Accelerate investor showcase.', 'Hackathons continue.', 'Investor roundtables and one-on-one matchmaking.', 'Fireside Chats.'],
  },
  {
    day: 'Day 4',
    title: 'Thursday · Policy & Partnership',
    accent: 'from-[#5420b5] to-[#3f1598]',
    activities: ['East African Coastline Forum.', 'Pwani Innovation Agenda 2036 co-creation plenary.', 'Coastal Innovation Declaration adoption.', 'County Government bilateral meetings.', 'Field Tours.'],
  },
  {
    day: 'Day 5',
    title: 'Friday · Synthesis & Closing',
    accent: 'from-[#5420b5] to-[#3f1598]',
    activities: ['Hackathon finals and awards ceremony.', 'Track wrap-up sessions.', 'Grand Closing Concert at Mama Ngina Waterfront.'],
  },
  {
    day: 'Day 6',
    title: 'Saturday · Pwani Got Talent (PGT)',
    accent: 'from-[#5420b5] to-[#3f1598]',
    activities: ['The ultimate creative arts showcase.'],
  },
];

const PIW2026Highlights = () => {
  const [selectedDay, setSelectedDay] = useState(0);
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
        <div ref={whatHead.ref} className="max-w-2xl mb-10">
          <p style={fadeUp(whatHead.inView, 0)} className="text-xs text-[#F97316] font-bold uppercase tracking-widest mb-3">About the Event</p>
          <h2 style={fadeUp(whatHead.inView, 100)} className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            What is Pwani Innovation Week?
          </h2>
          <p style={fadeUp(whatHead.inView, 200)} className="mt-4 text-gray-500 text-lg">
            The Coast&apos;s most concentrated gathering of changemakers — built for impact that outlasts the week. Select a day to explore the programme.
          </p>
        </div>

        <div ref={whatCards.ref} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {programmeDays.map((programmeDay, index) => (
              <button
                key={programmeDay.day}
                type="button"
                onClick={() => setSelectedDay(index)}
                style={scaleIn(whatCards.inView, index * 80)}
                className={`group relative min-h-28 overflow-hidden rounded-2xl p-4 text-left text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${selectedDay === index ? `bg-gradient-to-br ${programmeDay.accent} ring-2 ring-[#F97316] ring-offset-2` : 'bg-[#0a1628]'}`}
              >
                <span className="absolute -right-3 -top-5 text-6xl font-black text-white/10 transition-transform duration-300 group-hover:rotate-12">{index + 1}</span>
                <CalendarDays className="relative mb-3 h-5 w-5 text-[#FDBA74]" />
                <span className="relative block text-xs font-black uppercase tracking-widest text-[#FDBA74]">{programmeDay.day}</span>
                <span className="relative mt-1 block text-sm font-bold leading-tight">{programmeDay.title.split(' · ')[1]}</span>
              </button>
            ))}
          </div>

          <div style={fadeRight(whatCards.inView, 180)} className="relative overflow-hidden rounded-3xl bg-[#5420b5] p-7 text-white shadow-xl sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[22px] border-white/10" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FDBA74]">{programmeDays[selectedDay].day}</p>
              <h3 className="mt-2 max-w-xl text-2xl font-black leading-tight sm:text-3xl">{programmeDays[selectedDay].title}</h3>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {programmeDays[selectedDay].activities.map((activity, index) => (
                  <div key={activity} className="flex gap-3 rounded-xl border border-white/15 bg-white/10 p-4 transition-colors hover:bg-white/15">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-xs font-black">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-relaxed text-white/90">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              The six-day convention closes with a public concert at the Mama Ngina Waterfront, drawing crowds far beyond the delegate list. It is deliberately the most visible single moment of the year — the image that anchors the press coverage and reminds every attendee why this work matters.
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
