import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { clsx } from 'clsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
// this is the fix when
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropDownengage, setDropDownEngage] = useState(false);
  const [dropDownExperiences, setDropDownExperiences] = useState(false);
  const [dropDownPastEvents, setDropDownPastEvents] = useState(false);

  const handleDropEngageBtn = () => {
    setDropDownEngage((prevValue) => !prevValue);
  }

  const handleDropExperiencesBtn = () => {
    setDropDownExperiences((prevValue) => !prevValue);
  }

  const handleDropPastEventsBtn = () => {
    setDropDownPastEvents((prevValue) => !prevValue);
  }
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
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
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
                  to="/about"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300"
                >
                  About
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
                    <DropdownMenuItem>
                       <Link
                        to="/piw-2025"
                        className="block w-full text-gray-800 hover:text-[#F97316]"
                      >
                        PIW 2025
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </ScrollArea>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden relative z-[80]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-white/90 backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/40 md:hidden">
          <div className="absolute top-0 left-0 right-0 max-h-[90vh] bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl animate-slideDown flex flex-col">
            {/* Close button positioned at top right */}
            <div className="flex justify-end p-4 flex-shrink-0">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-white/90 backdrop-blur-sm"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto px-6 pb-8 mobile-menu-scroll">
              <div className="flex flex-col space-y-4">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-white bg-[#F97316] shadow-lg shadow-[#F97316]/30'
                      : 'text-gray-800 hover:text-[#F97316] hover:bg-orange-50 hover:shadow-md hover:shadow-[#F97316]/20'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-white bg-[#F97316] shadow-lg shadow-[#F97316]/30'
                      : 'text-gray-800 hover:text-[#F97316] hover:bg-orange-50 hover:shadow-md hover:shadow-[#F97316]/20'
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/speakers"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-white bg-[#F97316] shadow-lg shadow-[#F97316]/30'
                      : 'text-gray-800 hover:text-[#F97316] hover:bg-orange-50 hover:shadow-md hover:shadow-[#F97316]/20'
                    }`
                  }
                >
                  Speakers
                </NavLink>
                <NavLink
                  to="/tickets"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-white bg-[#F97316] shadow-lg shadow-[#F97316]/30'
                      : 'text-gray-800 hover:text-[#F97316] hover:bg-orange-50 hover:shadow-md hover:shadow-[#F97316]/20'
                    }`
                  }
                >
                  Tickets
                </NavLink>

                <div>
                  <button
                    onClick={handleDropEngageBtn}
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-4 py-3 rounded-lg shadow-lg shadow-[#F97316]/30 mb-4 hover:brightness-110 transition-all duration-300 flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold">Engage</h3>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${dropDownengage ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div className={clsx(dropDownengage ? "block" : "hidden", "flex flex-col space-y-2 pl-4")}>
                    <Link
                      to="/speaking/apply"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20"
                    >
                      Apply to Speak
                    </Link>
                    <Link
                      to="/experience"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20"
                    >
                      Experience
                    </Link>
                    <Link
                      to="/vendors"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20"
                    >
                      Vendor Application
                    </Link>
                    <Link
                      to="/exhibitors"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20"
                    >
                      Exhibitor Application
                    </Link>
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20"
                    >
                      Contact / Inquiries
                    </Link>
                    <Link
                      to="/engage"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20"
                    >
                      Engage Overview
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleDropExperiencesBtn}
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-4 py-3 rounded-lg shadow-lg shadow-[#F97316]/30 mb-4 hover:brightness-110 transition-all duration-300 flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold">Experiences</h3>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${dropDownExperiences ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={clsx(dropDownExperiences ? "block" : "hidden", "flex flex-col space-y-2 pl-4")}>
                    <Link to="/hackathon" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20">Hackathon</Link>
                    <Link to="/plenary-sessions" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20">Plenary Sessions</Link>
                    <Link to="/workshops" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20">Workshops</Link>
                    <Link to="/panel-discussions" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20">Panel Discussions</Link>
                    <Link to="/networking-events" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20">Networking Events</Link>
                    <Link to="/exhibitions" onClick={() => setIsOpen(false)} className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20">Exhibitions</Link>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleDropPastEventsBtn}
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-4 py-3 rounded-lg shadow-lg shadow-[#F97316]/30 mb-4 hover:brightness-110 transition-all duration-300 flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold">Past Events</h3>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${dropDownPastEvents ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={clsx(dropDownPastEvents ? "block" : "hidden", "flex flex-col space-y-2 pl-4")}>
                    <Link
                      to="/piw-2023"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20"
                    >
                      PIW 2023
                    </Link>
                    <Link
                      to="/piw-2024"
                      onClick={() => setIsOpen(false)}
                      className="text-base text-gray-700 hover:text-[#F97316] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-[#F97316]/20"
                    >
                      PIW 2024
                    </Link>
                  </div>
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
        /* Custom scrollbar for mobile menu */
        .mobile-menu-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .mobile-menu-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .mobile-menu-scroll::-webkit-scrollbar-thumb {
          background: #F97316;
          border-radius: 3px;
        }
        .mobile-menu-scroll::-webkit-scrollbar-thumb:hover {
          background: #EA580C;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
