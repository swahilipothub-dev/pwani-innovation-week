import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, ExternalLink } from 'lucide-react';
import { API_ENDPOINTS } from '@/lib/config';

interface TicketType {
  _id: string;
  name: string;
  amount: number;
  description: string;
  payment_link: string;
  createdAt: string;
  updatedAt: string;
}

const Tickets = () => {
  const { data: ticketTypes, isLoading, error } = useQuery<TicketType[]>({
    queryKey: ['ticket-types'],
    queryFn: async () => {
      const response = await fetch(API_ENDPOINTS.TICKET_TYPES);
      if (!response.ok) {
        throw new Error('Failed to fetch ticket types');
      }
      return response.json();
    },
  });

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
    }).format(amount);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading ticket types...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load ticket types</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

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
            {ticketTypes?.map((ticket) => (
              <Card key={ticket._id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-orange-500"></div>
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                    {ticket.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {formatPrice(ticket.amount)}
                  </div>
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
                      href={ticket.payment_link} 
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
          
          {ticketTypes?.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No ticket types available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tickets;