import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { useTheme } from '@/hooks/useTheme.ts';
// this is the fix on push request
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

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
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-md backdrop-blur-md dark:bg-slate-900/80 dark:shadow-lg'
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 bg-[#F97316] rounded-md p-1">
            <img
              src="/piw_logo.png"
              alt="PIW Logo"
              className="h-10 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex items-center space-x-6">
                <Link
                  to="/about"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 dark:text-gray-100"
                >
                  About
                </Link>
                <Link
                  to="/schedule"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 dark:text-gray-100"
                >
                  Schedule
                </Link>
                <Link
                  to="/speakers"
                  className="text-base font-medium text-gray-800 hover:text-[#F97316] transition-colors duration-300 dark:text-gray-100"
                >
                  Speakers
                </Link>
                <Link
                  to="/tickets"
                  className="text-base font-medium text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] px-4 py-2 rounded-md shadow hover:brightness-110 transition-all duration-300"
                >
                  Tickets
                </Link>
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white/60 p-2 text-gray-700 transition-colors duration-300 hover:bg-white dark:bg-slate-900/60 dark:text-gray-200 dark:hover:bg-slate-800"
                  aria-label={`Activate ${isDark ? 'light' : 'dark'} theme`}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </ScrollArea>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden relative z-[80]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-white/90 backdrop-blur-sm dark:bg-slate-900/70 dark:text-gray-100 dark:hover:bg-slate-800"
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
          <div className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl animate-slideDown dark:bg-slate-900/95">
            {/* Close button positioned at top right */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#F97316] bg-white/90 backdrop-blur-sm dark:bg-slate-800/80 dark:text-gray-100 dark:hover:bg-slate-700"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col px-6 pb-8 space-y-4">
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors dark:text-gray-100"
              >
                About
              </Link>
              <Link
                to="/schedule"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors dark:text-gray-100"
              >
                Schedule
              </Link>
              <Link
                to="/speakers"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-gray-800 hover:text-[#F97316] transition-colors dark:text-gray-100"
              >
                Speakers
              </Link>
              <Link
                to="/tickets"
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] px-4 py-2 rounded-md shadow hover:brightness-110 transition-all"
              >
                Tickets
              </Link>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="inline-flex items-center justify-center rounded-md border border-[#F97316]/40 px-4 py-2 text-base font-semibold text-gray-800 transition-colors hover:bg-[#F97316]/10 dark:text-gray-100 dark:hover:bg-slate-800"
                aria-label={`Activate ${isDark ? 'light' : 'dark'} theme`}
              >
                {isDark ? (
                  <>
                    <Sun size={18} className="mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={18} className="mr-2" /> Dark Mode
                  </>
                )}
              </button>
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