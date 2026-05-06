import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const ticketEvents = [
  {
    id: 'piw',
    name: 'Pwani Innovation Week Tickets',
    description: 'Secure your spot for the flagship innovation gathering in the coast region.',
    link: 'https://apps.little.africa/events/pwani-innovation-week',
  },
  {
    id: 'pgt',
    name: 'Pwani Gat Talent',
    description: 'Join the celebration of coastal talent and creativity. Book your ticket today.',
    link: 'https://apps.little.africa/events/pwani-gat-talent',
  },
];

const Tickets = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white text-center relative">
        <div className="section-container">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Tickets & Registration
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Choose your ticket type for the PIW 2025 experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ticketEvents.map((ticket) => (
              <Card key={ticket.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-orange-500"></div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                    {ticket.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {ticket.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <a 
                      href={ticket.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Get Ticket
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Tickets;
