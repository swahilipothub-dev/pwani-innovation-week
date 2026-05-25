import React, {useState} from 'react';
import {ArrowRight, Clock, Code, Map, MapPin, Mic, Palette, Star, Trophy, Users} from 'lucide-react';
import {Link} from "react-router-dom";

const Engage = () => {
  const [activeTab, setActiveTab] = useState('sessions');

  const engagementTypes = [
    {
      title: 'Keynote Addresses',
      description: 'Engaging keynotes by renowned players across different sectors in public and private service at the head of transformative change',
      icon: Mic,
      color: 'from-blue-500 to-blue-600',
      features: ['Industry Leaders', 'Transformative Insights', 'Q&A Sessions'],
      sessions: '10+ Keynotes'
    },
    {
      title: 'Impact-led Sessions',
      description: 'Well-curated daily sessions facilitated and driven by leaders across multiple industries',
      icon: Users,
      color: 'from-green-500 to-green-600',
      features: ['Expert Facilitators', 'Interactive Discussions', 'Actionable Insights'],
      sessions: '28+ Sessions'
    },
    {
      title: 'Hackathons',
      description: 'Driving digital transformations by providing digital solutions to local problems',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      features: ['72-hour Challenge', 'Mentorship Support', 'Prize Pool'],
      sessions: '3-day Event'
    },
    {
      title: 'Field Tours',
      description: 'This year\'s edition will include field tours, driven by young tour guides trained at Swahilipot Hub Foundation\'s Mombasa Tourism Innovation Lab',
      icon: Map,
      color: 'from-orange-500 to-orange-600',
      features: ['Local Guides', 'Innovation Hubs', 'Cultural Sites'],
      sessions: '5+ Tours'
    },
    {
      title: 'Exhibitions',
      description: 'Mashinani entrepreneurs and partners exhibit and amplify their work, reaching various audiences across the week',
      icon: Trophy,
      color: 'from-red-500 to-red-600',
      features: ['Local Entrepreneurs', 'Product Showcase', 'Network Building'],
      sessions: '50+ Exhibitors'
    },
    {
      title: 'Utamaduni Village',
      description: 'Enjoy a touch of coastal cultures at the Utamaduni village, and get a feel of what it means to be Pwani',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      features: ['Cultural Performances', 'Traditional Crafts', 'Local Cuisine'],
      sessions: 'All Week'
    }
  ];

  const goals = [
    {
      title: 'Amplify (Paza)',
      description: 'Allow SMEs driving coastal economies to showcase and amplify their work',
      icon: Trophy,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Empower (Inua)',
      description: 'Situate youth at the center of change and improved livelihoods',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Connect (Unganisha)',
      description: 'Connect coastal businesses to consumers and investors',
      icon: Map,
      color: 'from-green-500 to-green-600'
    }
  ];

  const tracks = [
    {
      title: 'Sustainable Coastal Economies',
      description: 'Exploring opportunities in aquaculture, Cultural & Creative Industries, and tourism value chain. Encompasses Blue Economy, Marine Resources, and Climate Action.',
      icon: Map,
      color: 'from-teal-500 to-teal-600',
      topics: ['Aquaculture Innovation', 'Cultural Tourism', 'Blue Economy', 'Marine Conservation']
    },
    {
      title: 'Digital Transformation',
      description: 'Empowering coastal communities to harness digital technologies for problem-solving and economic advancement.',
      icon: Code,
      color: 'from-indigo-500 to-indigo-600',
      topics: ['Digital Innovation', 'Remote Work', 'Cybersecurity', 'Digital Inclusion']
    },
    {
      title: 'Youth Agency',
      description: 'Celebrating Pwani youth as agents of change, policy influencers, and culture shapers with focus on leadership and civic engagement.',
      icon: Users,
      color: 'from-rose-500 to-rose-600',
      topics: ['Youth Leadership', 'Mental Health', 'Civic Engagement', 'Creative Storytelling']
    }
  ];

  const specialEvents = [
    {
      title: 'Pwani Got Talent Evening',
      description: 'Special evening showcasing the creative talents of coastal youth',
      time: 'October 30, 7:00 PM',
      location: 'Main Auditorium',
      icon: Star
    },
    {
      title: 'Gala Dinner',
      description: 'Networking dinner with keynote speakers and industry leaders',
      time: 'October 31, 6:00 PM',
      location: 'Seaside Venue',
      icon: Users
    },
    {
      title: 'Innovation Awards',
      description: 'Recognizing outstanding innovations in coastal development',
      time: 'October 31, 8:00 PM',
      location: 'Awards Hall',
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-emerald-50 via-emerald-100/50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-teal-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="section-container py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              How to <span className="gradient-text">Engage</span>
            </h1>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Multiple ways to participate, learn, and contribute to coastal transformation
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {id: 'sessions', label: 'Sessions & Events'},
              {id: 'tracks', label: 'Focus Tracks'},
              {id: 'goals', label: 'Our Goals'},
              {id: 'special', label: 'Special Events'}
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#F97316] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          {/* Sessions & Events */}
          {activeTab === 'sessions' && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Sessions & Events</h2>
                <p className="text-xl text-gray-700">Diverse engagement opportunities throughout the week</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {engagementTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
                    style={{animationDelay: `${index * 150}ms`}}
                  >
                    <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
                    <div className="p-6">
                      <div
                        className={`w-16 h-16 mb-4 bg-gradient-to-br ${type.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <type.icon className="w-8 h-8 text-white"/>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3">{type.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{type.description}</p>

                      <div className="space-y-2 mb-4">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-[#F97316] rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[#F97316] font-semibold text-sm">{type.sessions}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#F97316] transition-colors"/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Focus Tracks */}
          {activeTab === 'tracks' && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Focus Tracks</h2>
                <p className="text-xl text-gray-700">Three strategic areas driving coastal innovation</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className={`h-3 bg-gradient-to-r ${track.color}`}></div>
                    <div className="p-8">
                      <div
                        className={`w-20 h-20 mb-6 bg-gradient-to-br ${track.color} rounded-full flex items-center justify-center mx-auto`}>
                        <track.icon className="w-10 h-10 text-white"/>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{track.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed text-center">{track.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 text-center">Key Topics:</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {track.topics.map((topic, topicIndex) => (
                            <span
                              key={topicIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Goals */}
          {activeTab === 'goals' && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">This Year's Goals</h2>
                <p className="text-xl text-gray-700">Three strategic objectives for PIW 2025</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="text-center bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div
                      className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${goal.color} rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                      <goal.icon className="w-12 h-12 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{goal.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special Events */}
          {activeTab === 'special' && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Special Events</h2>
                <p className="text-xl text-gray-700">Exclusive experiences beyond regular sessions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {specialEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] p-6 text-white">
                      <event.icon className="w-12 h-12 mb-4 mx-auto"/>
                      <h3 className="text-xl font-bold text-center">{event.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-[#F97316]"/>
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-[#F97316]"/>
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Engage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Choose your engagement level and join us in transforming coastal economies through innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/*<button className="bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">*/}
            {/*  Register as Participant*/}
            {/*</button>*/}
            <Link
              to="/speaking/apply"
              className="bg-white text-[#F97316] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block"
            >
              Apply to Speak
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Engage;
