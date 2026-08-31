import React, {useMemo, useState} from 'react';
import {PlayCircle, Ticket, Video, Images} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import { useScrollReveal, fadeUp } from '@/hooks/useScrollReveal';

type ExperienceKey = 'boat' | 'food' | 'bike' | 'workout';

const EXPERIENCE_PRICE_LABEL = 'Ksh 2,000.00';

const Experience: React.FC = () => {
  const [selected, setSelected] = useState<ExperienceKey>('boat');
  const heroRef = useScrollReveal();

  const experiences = useMemo(() => ({
    boat: {
      title: 'Boat Ride / Dhow',
      description: 'Sail the coastal waters on a traditional dhow and enjoy scenic views.',
      images: [
        '/images/Z50_4804.jpg',
        '/images/Z50_5527.jpg',
        '/images/Z50_5583.jpg',
        '/images/Z50_6272.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/21X5lGlDOfg',
      ],
    },
    food: {
      title: 'Food Tour',
      description: 'Taste authentic coastal cuisine on a guided street food adventure.',
      images: [
        '/images/image2.jpg',
        '/images/IMG-145.jpg',
        '/images/IMG-176.jpg',
        '/images/A26I7945.JPG',
      ],
      videos: [
        'https://www.youtube.com/embed/dQw4w9WgXcQ',
      ],
    },
    bike: {
      title: 'Bike Ride',
      description: 'Explore the city and coastline with a scenic guided bike tour.',
      images: [
        '/images/DSC_5019.jpg',
        '/images/DSC_5052.jpg',
        '/images/DSC_5601.jpg',
        '/images/DSC_5665.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/aqz-KE-bpKQ',
      ],
    },
    workout: {
      title: 'Morning Workouts',
      description: 'Start your day right with energizing group workouts by the beach.',
      images: [
        '/images/Z50_8689.jpg',
        '/images/Z50_9796.jpg',
        '/images/A26I8176.JPG',
        '/images/A26I7994.JPG',
      ],
      videos: [
        'https://www.youtube.com/embed/5qap5aO4i9A',
      ],
    },
  } as const), []);

  const current = experiences[selected];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-50 via-white to-emerald-50">
        <div ref={heroRef.ref} className="section-container text-center">
          <h1 style={fadeUp(heroRef.inView, 0)} className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Experience</h1>
          <p style={fadeUp(heroRef.inView, 120)} className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">Choose an activity to explore photos, videos, and grab your ticket.</p>
        </div>
      </section>

      {/* Selector */}
      <section className="py-8 bg-white border-b">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(
              [
                { key: 'boat', label: 'Boat ride / Dhow' },
                { key: 'food', label: 'Food Tour' },
                { key: 'bike', label: 'Bike ride' },
                { key: 'workout', label: 'Morning Workouts' },
              ] as {key: ExperienceKey, label: string}[]
            ).map(({key, label}) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`px-4 py-3 rounded-lg border transition-all text-sm md:text-base ${selected === key ? 'bg-[#F97316] text-white border-[#F97316] shadow' : 'bg-white text-gray-800 hover:bg-gray-50 border-gray-200'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Images className="w-5 h-5 text-[#F97316]"/>
                  {current.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{current.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {current.images.map((src, idx) => (
                    <img key={idx} src={src} alt={`${current.title} ${idx+1}`} className="rounded-lg object-cover w-full h-36 md:h-40"/>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Ticket</span>
                  <Ticket className="w-5 h-5 text-[#F97316]"/>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-800 mb-4">{EXPERIENCE_PRICE_LABEL}</div>
                {/* <Button className="w-full bg-[#F97316] hover:bg-[#EA580C]">Get Ticket</Button> */}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5 text-[#F97316]"/>
                Videos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {current.videos.map((url, idx) => (
                  <div key={idx} className="aspect-video w-full rounded-lg overflow-hidden bg-black/5">
                    <iframe
                      className="w-full h-full"
                      src={url}
                      title={`${current.title} video ${idx+1}`}
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Experience;



