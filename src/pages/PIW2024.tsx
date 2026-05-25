import React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Calendar, Globe, Handshake, MapPin, Rocket, Users} from 'lucide-react';

const PIW2024 = () => {
  const highlights = [
    {number: "2,000+", label: "Participants"},
    {number: "60+", label: "Speakers"},
    {number: "35", label: "Sessions"},
    {number: "25", label: "Startups Pitched"},
    {number: "8", label: "Countries Represented"}
  ];

  const themes = [
    "Youth Agency & Leadership",
    "Cultural Innovation",
    "Peace & Social Cohesion",
    "Cross-border Collaboration",
    "Blue Economy Expansion",
    "Digital Transformation"
  ];

  const achievements = [
    {
      title: "Regional Expansion",
      description: "First edition to include Tanzania through Tanga Yetu partnership",
      icon: Globe
    },
    {
      title: "Cross-border Partnerships",
      description: "Established lasting partnerships across East African coastal communities",
      icon: Handshake
    },
    {
      title: "Innovation Accelerator",
      description: "Launched startup accelerator program for coastal entrepreneurs",
      icon: Rocket
    },
    {
      title: "Community Impact",
      description: "Reached over 10,000 people through community outreach programs",
      icon: Users
    }
  ];

  const keyMoments = [
    {
      title: "Opening Ceremony",
      description: "Grand opening with cultural performances and keynote addresses from regional leaders",
      image: "/images/Z50_9796.jpg"
    },
    {
      title: "Youth Innovation Summit",
      description: "Young innovators from Kenya and Tanzania presented groundbreaking solutions",
      image: "/images/Z50_8689.jpg"
    },
    {
      title: "Cultural Exchange",
      description: "Celebrating the rich cultural heritage of coastal communities",
      image: "/images/DSC_5052.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-[#F97316] text-white px-4 py-2 text-lg">
              Past Event
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">PIW 2024</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              "The Pwani We Desire: Youth, Culture, Peace and Innovation in the Decade of Action"
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#F97316]"/>
                <span>October 28 - November 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#F97316]"/>
                <span>Mombasa, Kenya</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-scale-in delay-300">
            <img
              src="/images/Z50_5583.jpg"
              alt="PIW 2024 Event"
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Bridging Borders, Building Futures</h3>
              <p className="text-lg opacity-90">First cross-border PIW connecting Kenya and Tanzania</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            PIW 2024 <span className="gradient-text">Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {highlights.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F97316]/10 to-blue-50 card-hover animate-slide-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#F97316] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About PIW 2024 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">PIW 2024</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The 5th edition of Pwani Innovation Week marked a historic milestone by expanding beyond
                Kenya's borders to include Tanzania. Themed "The Pwani We Desire: Youth, Culture, Peace
                and Innovation in the Decade of Action," PIW 2024 emphasized the power of regional collaboration
                in driving sustainable development.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                This groundbreaking edition fostered meaningful cross-border partnerships, celebrated
                coastal cultures, and positioned youth as key drivers of innovation and peace-building
                in the region. The event successfully demonstrated how shared challenges can become
                opportunities for collective growth.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Key Themes:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {themes.map((theme, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-2 justify-start text-sm border-[#F97316] text-[#F97316]"
                    >
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-slide-up delay-300">
              <img
                src="/images/DSC_5019.jpg"
                alt="PIW 2024 Cross-border"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/Z50_5527.jpg"
                alt="PIW 2024 Culture"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Breakthrough <span className="gradient-text">Achievements</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 text-center card-hover animate-scale-in"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardContent className="p-0">
                  <div className="bg-[#F97316] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-white"/>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Moments */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Memorable <span className="gradient-text">Moments</span>
          </h2>
          <div className="space-y-12">
            {keyMoments.map((moment, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center animate-fade-in ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold mb-4">{moment.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{moment.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="rounded-2xl shadow-lg w-full h-64 object-cover card-hover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gradient-to-r from-[#F97316] to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
            The Legacy Continues
          </h2>
          <p className="text-xl max-w-4xl mx-auto mb-8 animate-slide-up delay-300">
            PIW 2024 set the foundation for regional collaboration and cross-border innovation.
            The partnerships formed and initiatives launched continue to drive positive change
            across coastal East Africa, inspiring the next generation of leaders and innovators.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="animate-scale-in delay-500">
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p>Ongoing Partnerships</p>
            </div>
            <div className="animate-scale-in delay-700">
              <h3 className="text-2xl font-bold mb-2">15</h3>
              <p>Funded Startups</p>
            </div>
            <div className="animate-scale-in delay-1000">
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p>Commitment to Impact</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PIW2024;
