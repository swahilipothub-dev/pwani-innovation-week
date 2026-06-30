import React from 'react';
import { Timer, Hammer, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PIW2026 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl">
        <div className="inline-block p-4 rounded-full bg-orange-100 dark:bg-orange-950 mb-6 animate-bounce">
          <Timer className="w-12 h-12 text-[#F97316]" />
        </div>
        <h1 className="text-5xl font-bold mb-4">PIW <span className="gradient-text">2026</span></h1>
        <Badge variant="outline" className="mb-6">The Next Chapter</Badge>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          We are currently in the laboratory, re-imagining the future of coastal innovation. 
          Stay tuned for 2026 dates and themes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#F97316] hover:bg-orange-600">
            <Bell className="mr-2 w-4 h-4" /> Notify Me
          </Button>
          <Button variant="outline">
            <Hammer className="mr-2 w-4 h-4" /> Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PIW2026;