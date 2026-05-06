import React from 'react';
import {Award, Calendar, FileText, Globe, MapPin, Target, Users} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Coastal Focus",
      description: "Dedicated to transforming Kenya's coastal economies through innovation"
    },
    {
      icon: Calendar,
      title: "6th Edition",
      description: "Building on years of successful innovation and collaboration"
    },
    {
      icon: Users,
      title: "Youth-Driven",
      description: "Empowering young changemakers as partners, not beneficiaries"
    },
    {
      icon: Target,
      title: "Impact-Focused",
      description: "Creating sustainable solutions for real coastal challenges"
    }
  ];

  const achievements = [
    {number: "2,000+", label: "Participants Annually", icon: Users},
    {number: "50+", label: "Partner Organizations", icon: Globe},
    {number: "28", label: "Innovation Sessions", icon: Target},
    {number: "6", label: "Years of Impact", icon: Award}
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-orange-50 via-orange-100/50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-orange-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="section-container py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="gradient-text">PIW 2025</span>
            </h1>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Pwani Innovation Week: Where coastal transformation meets youth innovation
            </p>
          </div>
        </div>
      </div>

      {/* Concept Note Section */}
      <section className="py-20 bg-white border-t border-orange-100">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-full flex items-center justify-center">
                <FileText className="text-white w-8 h-8"/>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Concept Note
            </h2>
            <div className="w-24 h-1 bg-[#F97316] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Pwani Innovation Week (PIW) is a regional platform igniting transformation at the Kenyan coast by bringing
              together youth, innovators, creatives, and ecosystem actors to shape a resilient, inclusive, and
              future-ready coastal economy. As we mark the 6th edition, PIW 2025 builds on this legacy, placing young
              people at the center of co-creation and systemic innovation across vital sectors such as tourism,
              fisheries, and the blue economy.
            </p>

            {/* Download Button */}
            <a
              href="/files/PIW 2025 CONCEPT NOTE (1).pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg"
            >
              <FileText className="w-5 h-5 mr-2"/>
              Download Concept Note
            </a>
          </div>
        </div>
      </section>


      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                A Platform for <span className="text-[#F97316]">Coastal Innovation</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  PIW is a Pwani-led and youth-driven annual convening that has become a point of convergence for youth,
                  entrepreneurs, investors, creatives, and changemakers to co-create localized solutions for sustainable
                  growth in Kenya's coast.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#F97316]">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The event, which is entering its 6th edition, has over the years transitioned to fit the
                    entrepreneurial and innovation ecosystem of Pwani squarely.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This has turned it into a much-awaited annual forum that addresses emerging needs of the region by
                  advocating for synergy-led discourses.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in delay-300">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/image1 (3).jpg"
                  alt="PIW 2025 participants"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F97316]/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300/40 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Theme Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative animate-fade-in">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/A26I8176.JPG"
                  alt="Breaking down the theme"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F97316]/10"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in delay-300">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Breaking Down the <span className="text-[#F97316]">Theme</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#F97316]/10 to-transparent p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#F97316] mb-3">Pwani Re-imagined</h3>
                  <p className="text-gray-700">
                    Objectifies a future-oriented transformation of the coastal economies, driving resilience and
                    prosperity through new growth pathways.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-100/50 to-transparent p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#F97316] mb-3">Youth Agency</h3>
                  <p className="text-gray-700">
                    Recognizing young people as active agents of change, empowering them to shape their futures and
                    contribute meaningfully to society.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#F97316]/10 to-transparent p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#F97316] mb-3">Innovation & Sustainability</h3>
                  <p className="text-gray-700">
                    Introducing new ideas, methods, and services to enhance efficiency across tourism, fisheries, and
                    agriculture sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-[#F97316]/5 to-orange-100/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Impact in Numbers</h2>
            <div className="w-24 h-1 bg-[#F97316] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-full flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white"/>
                </div>
                <p className="text-4xl font-bold text-[#F97316] mb-2">{achievement.number}</p>
                <p className="text-gray-600 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
