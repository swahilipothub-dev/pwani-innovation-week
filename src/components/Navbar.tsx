
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 $`relative transition-all duration-300 ${
      scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
    }`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src='/piw_logo.png' height={30} width={150} className='bg-[#F97316] rounded-md' alt='PIW Logo'/>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  Home
                </Link>
                <a href="#about" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  About
                </a>
                <a href="#objectives" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  Objectives
                </a>
                <a href="#themes" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  Themes
                </a>
                {/*<a href="#tickets" className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300">
                  Tickets
                </a>}
              </div>
            </ScrollArea>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#objectives"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Objectives
            </a>
            <a
              href="#themes"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Themes
            </a>
            {/*<a
              href="#tickets"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#F97316] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Tickets
            </a>*/}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
