import { useState } from 'react';
import { CalendarDays, Radio, Users, Handshake, TrendingUp, Music, Mic, Zap, MapPin, Theater } from 'lucide-react';
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
    title: 'Saturday · Pwani Gat Talent (PGT)',
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

      {/* ── PWANI GAT TALENT: CLOSING NIGHT ─────────────── */}
      <section ref={concert.ref} className="mx-4 sm:mx-6 lg:mx-8 mb-16 rounded-3xl overflow-hidden max-w-7xl lg:mx-auto">
        {/* Bold solid background with accent */}
        <div className="relative bg-[#1a1a2e] overflow-hidden">
          {/* Graffiti-style background elements */}
          <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
            <defs>
              <pattern id="graffiti-dots" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="4" fill="#F97316"/>
              </pattern>
              <pattern id="graffiti-lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#F97316" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#graffiti-dots)"/>
            <polyline points="0,300 200,250 400,300 600,200 800,300 1000,150" stroke="#F97316" strokeWidth="3" fill="none" opacity="0.3"/>
          </svg>

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#F97316]" />
          
          {/* Decorative corner graphic */}
          <div className="absolute -top-20 -right-20 w-64 h-64 border-4 border-[#F97316] rounded-full opacity-10" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 border-4 border-[#F97316] rounded-full opacity-10" />
          
          <div className="relative z-10 px-8 sm:px-12 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
            {/* Left content */}
            <div style={fadeLeft(concert.inView)} className="flex-1 text-white">
              {/* Graffiti-style label */}
              <div className="inline-block mb-4 relative">
                <div className="absolute -inset-2 border-2 border-[#F97316] rounded-lg transform -rotate-1 opacity-50"></div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-[#F97316] relative pl-1 py-1 flex items-center gap-2">
                  <Mic className="w-4 h-4" />
                  Closing Night
                </div>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-5xl font-black leading-tight mb-6 relative">
                <span className="relative inline-block">
                  Pwani Gat Talent
                  {/* Underline doodle effect */}
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 300 20" preserveAspectRatio="none">
                    <path d="M 0,10 Q 25,5 50,10 T 100,10 T 150,10 T 200,10 T 250,10 T 300,10" stroke="#F97316" strokeWidth="2" fill="none"/>
                  </svg>
                </span>
              </h2>
              
              <p className="text-lg md:text-xl font-bold text-[#F97316] mb-4">
                The Coast's Premier Creative Arts Showcase
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                At the iconic Coast Gymkhana Club Ground, the Coast's brightest creative voices take the stage. From emerging artists to established performers, Pwani Gat Talent is where innovation meets artistry. It's the moment the entire region comes together to celebrate the creative spirit that defines our coast.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="bg-[#F97316] rounded-full px-5 py-2.5 inline-flex items-center gap-2 relative hover:shadow-lg transition-all hover:-translate-y-1">
                  <Music className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">Live Music</span>
                  <div className="absolute -inset-1 border border-[#F97316] rounded-full opacity-0 group-hover:opacity-20"></div>
                </div>
                <div className="border-2 border-[#F97316] rounded-full px-5 py-2.5 inline-flex items-center gap-2 relative hover:bg-[#F97316]/10 transition-all hover:-translate-y-1">
                  <Theater className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">Performances</span>
                </div>
                <div className="border-2 border-[#F97316] rounded-full px-5 py-2.5 inline-flex items-center gap-2 relative hover:bg-[#F97316]/10 transition-all hover:-translate-y-1">
                  <Zap className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">Waterfront Vibes</span>
                </div>
              </div>
            </div>

            {/* Right side - Stats cards */}
            <div style={scaleIn(concert.inView, 200)} className="flex-shrink-0 w-full md:w-auto">
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {/* Artists performing */}
                <div className="bg-[#F97316] rounded-2xl px-6 py-7 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative group">
                  {/* Graffiti tag effect */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-white rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <p className="text-4xl md:text-5xl font-black text-white">10+</p>
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider mt-2">Artists &amp;</p>
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Performers</p>
                </div>

                {/* Attendees */}
                <div className="bg-[#F97316] rounded-2xl px-6 py-7 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative group">
                  {/* Graffiti tag effect */}
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-2 border-white rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <p className="text-4xl md:text-5xl font-black text-white">5,000+</p>
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider mt-2">Expected</p>
                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider">Attendees</p>
                </div>

                {/* Location */}
                <div className="border-2 border-[#F97316] rounded-2xl px-6 py-7 text-center col-span-2 hover:bg-[#F97316]/5 transition-all duration-300 relative group">
                  {/* Graffiti star decorations */}
                  <div className="absolute -top-1 -left-1 text-lg opacity-30 group-hover:opacity-100 transition-opacity">★</div>
                  <div className="absolute -top-1 -right-1 text-lg opacity-30 group-hover:opacity-100 transition-opacity">★</div>
                  <p className="text-white font-bold text-sm md:text-base flex items-center gap-2 justify-center">
                    <MapPin className="w-4 h-4" />
                    Coast Gymkhana Club Ground
                  </p>
                  <p className="text-white/60 text-xs mt-1">Mombasa, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PIW2026Highlights;
