
import React from 'react';
import { Ticket } from 'lucide-react';

const Tickets = () => {
  return (
    <section id="tickets" className="py-20 bg-gradient-to-br from-ocean/10 to-purple/10">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Tickets</h2>
          <div className="w-24 h-1 bg-ocean mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Join over 3,000 delegates for five days of innovation, learning, and networking. 
            Secure your place at Pwani Innovation Week 2025 today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden relative card-hover border-t-4 border-coral">
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <Ticket className="h-12 w-12 text-coral" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Standard Pass</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-gray-800">KES 5,000</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-coral mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Access to all keynote sessions
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-coral mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Exhibition hall access
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-coral mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Networking sessions
                </li>
              </ul>
              <div className="text-center">
                <button className="bg-coral hover:bg-coral-dark text-white py-2 px-6 rounded-md font-semibold transition-colors duration-300">
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden relative card-hover border-t-4 border-ocean transform scale-105 z-10">
            <div className="absolute top-0 right-0">
              <div className="bg-ocean text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <Ticket className="h-12 w-12 text-ocean" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Premium Pass</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-gray-800">KES 10,000</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-ocean mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  All Standard Pass benefits
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-ocean mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Workshop participation
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-ocean mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Priority seating at keynotes
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-ocean mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Lunch and refreshments
                </li>
              </ul>
              <div className="text-center">
                <button className="bg-ocean hover:bg-ocean-dark text-white py-2 px-6 rounded-md font-semibold transition-colors duration-300">
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden relative card-hover border-t-4 border-purple">
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <Ticket className="h-12 w-12 text-purple" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">VIP Pass</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-gray-800">KES 25,000</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-purple mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  All Premium Pass benefits
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-purple mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Exclusive networking events
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-purple mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Speaker meet & greet
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-purple mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Gala dinner invitation
                </li>
              </ul>
              <div className="text-center">
                <button className="bg-purple hover:bg-purple-dark text-white py-2 px-6 rounded-md font-semibold transition-colors duration-300">
                  Get Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
