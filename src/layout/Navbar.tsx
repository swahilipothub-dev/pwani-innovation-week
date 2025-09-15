import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    <nav className="bg-white shadow-md static w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/piw_logo.png"
              alt="Pwani Innovation Week Logo"
              className="h-12 w-auto md:h-14"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const textFallback = document.createElement('span');
                textFallback.className = 'text-ocean font-display font-bold text-2xl';
                textFallback.textContent = 'PIW';
                target.parentNode?.appendChild(textFallback);
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-base font-sans font-medium transition-colors duration-200 ${
                location.pathname === '/' ? 'text-ocean' : 'text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-base font-sans font-medium transition-colors duration-200 ${
                location.pathname === '/about' ? 'text-ocean' : 'text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean'
              }`}
            >
              About
            </Link>
            <Link
              to="/events"
              className={`text-base font-sans font-medium transition-colors duration-200 ${
                location.pathname === '/events' ? 'text-ocean' : 'text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean'
              }`}
            >
              Events
            </Link>
            <Link
              to="/speakers"
              className={`text-base font-sans font-medium transition-colors duration-200 ${
                location.pathname === '/speakers' ? 'text-ocean' : 'text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean'
              }`}
            >
              Speakers
            </Link>
            <Link
              to="/partners"
              className={`text-base font-sans font-medium transition-colors duration-200 ${
                location.pathname === '/partners' ? 'text-ocean' : 'text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean'
              }`}
            >
              Partners
            </Link>
            <Link
              to="/gallery"
              className={`text-base font-sans font-medium transition-colors duration-200 ${
                location.pathname === '/gallery' ? 'text-ocean' : 'text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/news"
              className={`text-base font-sans font-medium transition-colors duration-200 ${
                location.pathname === '/news' ? 'text-ocean' : 'text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean'
              }`}
            >
              News
            </Link>
            <Link
              to="/contact"
              className={`text-base font-sans font-medium transition-colors duration-200 ${
                location.pathname === '/contact' ? 'text-ocean' : 'text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean'
              }`}
            >
              Contact
            </Link>

            {/* Engage Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-base font-sans font-medium text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean transition-colors duration-200`}
              >
                Engage <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border border-muted rounded-md p-2">
                <DropdownMenuItem>
                  <Link
                    to="/speaking/apply"
                    className="block w-full text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:bg-muted py-1 px-2 rounded"
                  >
                    Apply to Speak
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/vendors"
                    className="block w-full text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:bg-muted py-1 px-2 rounded"
                  >
                    Vendor Application
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/exhibitors"
                    className="block w-full text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:bg-muted py-1 px-2 rounded"
                  >
                    Exhibitor Application
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Experiences Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-base font-sans font-medium text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean transition-colors duration-200`}
              >
                Experiences <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border border-muted rounded-md p-2">
                <DropdownMenuItem>
                  <Link
                    to="/hackathon"
                    className="block w-full text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:bg-muted py-1 px-2 rounded"
                  >
                    Hackathon
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/workshops"
                    className="block w-full text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:bg-muted py-1 px-2 rounded"
                  >
                    Workshops
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="/exhibitions"
                    className="block w-full text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:bg-muted py-1 px-2 rounded"
                  >
                    Exhibitions
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-ocean-light hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ocean"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
          <div className="absolute top-0 left-0 right-0 bg-white shadow-lg rounded-b-xl">
            <div className="flex flex-col px-6 pt-6 pb-8 space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-semibold text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-semibold text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                About
              </Link>
              <Link
                to="/events"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-semibold text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                Events
              </Link>
              <Link
                to="/speakers"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-semibold text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                Speakers
              </Link>
              <Link
                to="/partners"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-semibold text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                Partners
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-semibold text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                Gallery
              </Link>
              <Link
                to="/news"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-semibold text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                News
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-sans font-semibold text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                Contact
              </Link>
              <div>
                <p className="text-sm font-sans font-semibold text-muted-foreground mb-2">Engage</p>
                <div className="flex flex-col space-y-2 pl-2">
                  <Link
                    to="/speaking/apply"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-sans text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
                  >
                    Apply to Speak
                  </Link>
                  <Link
                    to="/vendors"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-sans text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
                  >
                    Vendor Application
                  </Link>
                  <Link
                    to="/exhibitors"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-sans text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
                  >
                    Exhibitor Application
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-sm font-sans font-semibold text-muted-foreground mb-2">Experiences</p>
                <div className="flex flex-col space-y-2 pl-2">
                  <Link
                    to="/hackathon"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-sans text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
                  >
                    Hackathon
                  </Link>
                  <Link
                    to="/workshops"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-sans text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
                  >
                    Workshops
                  </Link>
                  <Link
                    to="/exhibitions"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-sans text-foreground hover:text-ocean-light focus:text-ocean-light focus:outline-none focus:ring-2 focus:ring-ocean"
                  >
                    Exhibitions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;