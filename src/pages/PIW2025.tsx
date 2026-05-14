import React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Award, Calendar, Lightbulb, MapPin, Target, Users} from 'lucide-react';

const PIW2025 = () => {
  const highlights = [
    {number: "1,500+", label: "Participants"},
    {number: "50+", label: "Speakers"},
    {number: "25", label: "Sessions"},
    {number: "15", label: "Startups Pitched"},
    {number: "5", label: "Days of Innovation"}
  ];

  const keyTopics = [
    "Digital Innovation & Technology",
    "Blue Economy & Marine Resources",
    "Youth Agency & Leadership",
    "Peace, Inclusivity and Equity",
    "Climate Action & Sustainability",
    "Entrepreneurship & Investment Readiness"
  ];

  const achievements = [
    {
      title: "Innovation Showcase",
      description: "Featured 30+ innovative startups and solutions from the coastal region, ranging from AI-driven data tools to sustainable Blue Economy prototypes.",
      icon: Lightbulb
    },
    {
      title: "Network Building",
      description: "Connected 1,500+ participants including entrepreneurs, investors, and policymakers, fostering collaborations that span the East African coastline.",
      icon: Users
    },
    {
      title: "Policy Impact",
      description: "Generated actionable recommendations for coastal economic development, specifically focusing on youth agency and the integration of digital skills into the local workforce",
      icon: Target
    },
    {
      title: "Award Recognition",
      description: "Recognized outstanding innovations in various categories, providing platforms for local talent to gain visibility and scale their solutions.",
      icon: Award
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
              <span className="gradient-text">PIW 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              "Pwani Re-Imagined: Youth Agency, Innovation & Sustainability of Coastal Economies."
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#F97316]"/>
                <span>October 27th to 31st, 2025</span>
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
              src="/images/0V6A0066.jpg"
              alt="PIW 2025 Event"
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">A Week of Innovation</h3>
              <p className="text-lg opacity-90">Bringing together the brightest minds of coastal Kenya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            PIW 2025 <span className="gradient-text">By Numbers</span>
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

      {/* About PIW 2025 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">PIW 2025</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
               The sixth edition of Pwani Innovation Week 2025 focused on reimagining coastal development through youth-led innovation and sustainability. 
               The event brought together young entrepreneurs, investors, policymakers, and development partners to explore opportunities in the blue, green, and creative economies, digital transformation,
                and climate resilience in Kenya’s coastal region
              </p>
              <p className="text-lg text-gray-600 mb-8">
                PIW 2025 served as a platform for knowledge sharing, networking, and showcasing innovative solutions that address local challenges while creating economic opportunities for coastal communities.
                By positioning youth as active partners rather than just beneficiaries, the summit aimed to catalyze a future-ready and inclusive economy rooted in the unique cultural and natural wealth of the Pwani region.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Key Focus Areas:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {keyTopics.map((topic, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="p-2 justify-start text-sm border-[#F97316] text-[#F97316]"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-slide-up delay-300">
              <img
                src="/images/A21I1152.jpg"
                alt="PIW 2025 Innovation"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/images/2C0A1199.jpg"
                alt="PIW 2025 Venue"
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
            Key <span className="gradient-text">Achievements</span>
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

      {/* Event Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Event <span className="gradient-text">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <img
                src="/images/A21I1578.jpg"
                alt="PIW 2025 Session"
                className="rounded-2xl shadow-lg w-full h-64 object-cover card-hover"
              />
              <img
                src="/images/A21I1862.jpg"
                alt="PIW 2025 Networking"
                className="rounded-2xl shadow-lg w-full h-48 object-cover card-hover"
              />
            </div>
            <div className="space-y-6">
              <img
                src="/images/2C0A1199.jpg"
                alt="PIW 2025 Exhibition"
                className="rounded-2xl shadow-lg w-full h-48 object-cover card-hover"
              />
              <img
                src="/images/A26I4806.jpg"
                alt="PIW 2025 Workshop"
                className="rounded-2xl shadow-lg w-full h-64 object-cover card-hover"
              />
            </div>
            <div className="space-y-6">
              <img
                src="/images/A26I5500.jpg"
                alt="PIW 2025 Panel"
                className="rounded-2xl shadow-lg w-full h-64 object-cover card-hover"
              />
              <img
                src="/images/2C0A1590.jpg"
                alt="PIW 2025 Awards"
                className="rounded-2xl shadow-lg w-full h-48 object-cover card-hover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PIW2025;
