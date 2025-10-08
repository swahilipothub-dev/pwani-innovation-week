import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`static top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 bg-[#F97316] rounded-md p-1">
            <img src="/piw_logo.png" alt="PIW Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex">
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex items-center space-x-6">
                <Link
                  to="/"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  to="/schedule"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300"
                >
                  Schedule
                </Link>
                <Link
                  to="/speakers"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300"
                >
                  Speakers
                </Link>
                <Link
                  to="/tickets"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300"
                >
                  Tickets
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-4 py-2 rounded-md shadow hover:brightness-110 transition-all duration-300">
                    Engage <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg border rounded-md z-50">
                    <DropdownMenuItem>
                      <Link
                        to="/speaking/apply"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Apply to Speak
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/experience"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Experience
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/vendors"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Vendor Application
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/exhibitors"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Exhibitor Application
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/contact"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Contact / Inquiries
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/engage"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Engage Overview
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-4 py-2 rounded-md shadow hover:brightness-110 transition-all duration-300">
                    Experiences <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg border rounded-md z-50">
                    <DropdownMenuItem>
                      <Link
                        to="/hackathon"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Hackathon
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/plenary-sessions"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Plenary Sessions
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/workshops"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Workshops
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/panel-discussions"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Panel Discussions
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/networking-events"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Networking Events
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/exhibitions"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        Exhibitions
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-4 py-2 rounded-md shadow hover:brightness-110 transition-all duration-300">
                    Past Events <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white shadow-lg border rounded-md z-50">
                    <DropdownMenuItem>
                      <Link
                        to="/piw-2023"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        PIW 2023
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        to="/piw-2024"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        PIW 2024
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </ScrollArea>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="static inset-0 z-40 bg-black/40 md:hidden">
          <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl animate-slideDown">
            <div className="flex flex-col px-6 pt-6 pb-8 space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors"
              >
                About
              </Link>
              <Link
                to="/schedule"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors"
              >
                Schedule
              </Link>
              <Link
                to="/speakers"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors"
              >
                Speakers
              </Link>
              <Link
                to="/tickets"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors"
              >
                Tickets
              </Link>

              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Engage</p>
                <div className="flex flex-col space-y-2 pl-2">
                  <Link
                    to="/speaking/apply"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors"
                  >
                    Apply to Speak
                  </Link>
                    <Link
                      to="/experience"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] transition-colors"
                    >
                      Experience
                    </Link>
                  <Link
                    to="/vendors"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors"
                  >
                    Vendor Application
                  </Link>
                  <Link
                    to="/exhibitors"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors"
                  >
                    Exhibitor Application
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors"
                  >
                    Contact / Inquiries
                  </Link>
                  <Link
                    to="/engage"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors"
                  >
                    Engage Overview
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Experiences</p>
                <div className="flex flex-col space-y-2 pl-2">
                  <Link to="/hackathon" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] transition-colors">Hackathon</Link>
                  <Link to="/plenary-sessions" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] transition-colors">Plenary Sessions</Link>
                  <Link to="/workshops" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] transition-colors">Workshops</Link>
                  <Link to="/panel-discussions" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] transition-colors">Panel Discussions</Link>
                  <Link to="/networking-events" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] transition-colors">Networking Events</Link>
                  <Link to="/exhibitions" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] transition-colors">Exhibitions</Link>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Past Events</p>
                <div className="flex flex-col space-y-2 pl-2">
                  <Link
                    to="/piw-2023"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors"
                  >
                    PIW 2023
                  </Link>
                  <Link
                    to="/piw-2024"
                    onClick={() => setIsOpen(false)}
                    className="text-base text-gray-700 hover:text-[#F97316] transition-colors"
                  >
                    PIW 2024
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation for mobile menu */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
