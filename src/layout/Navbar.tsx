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

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Schedule", to: "/schedule" },
  { label: "Speakers", to: "/speakers" },
];

const engageLinks = [
  { label: "Apply to Speak", to: "/speaking/apply" },
  { label: "Experience", to: "/experience" },
  { label: "Vendor Application", to: "/vendors" },
  { label: "Exhibitor Application", to: "/exhibitors" },
  { label: "Contact / Inquiries", to: "/contact" },
  { label: "Engage Overview", to: "/engage" },
];

const experienceLinks = [
  { label: "Hackathon", to: "/hackathon" },
  { label: "Plenary Sessions", to: "/plenary-sessions" },
  { label: "Workshops", to: "/workshops" },
  { label: "Panel Discussions", to: "/panel-discussions" },
  { label: "Networking Events", to: "/networking-events" },
  { label: "Exhibitions", to: "/exhibitions" },
];

const pastEventLinks = [
  { label: "PIW 2023", to: "/piw-2023" },
  { label: "PIW 2024", to: "/piw-2024" },
  { label: "PIW 2025", to: "/piw-2025" },
  { label: "PIW 2026", to: "/piw-2026" },
];

const navLinkCls = "text-sm font-medium text-gray-700 hover:text-[#F97316] transition-colors duration-200";
const dropTriggerCls = "flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#F97316] transition-colors duration-200 outline-none";
const dropItemCls = "text-sm text-gray-700 hover:text-[#F97316] cursor-pointer w-full";
const mobileActiveCls = "text-white bg-[#F97316]";
const mobileInactiveCls = "text-gray-800 hover:text-[#F97316] hover:bg-orange-50";
const mobileLinkCls = "text-base font-semibold px-4 py-3 rounded-lg transition-all duration-200";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (key: string) =>
    setOpenSection((prev) => (prev === key ? null : key));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 bg-[#F97316] rounded-lg p-1.5">
            <img src="/piw_logo.png" alt="PIW Logo" className="h-9 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className={navLinkCls}>{l.label}</Link>
            ))}

            {/* Engage dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={dropTriggerCls}>
                Engage <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border border-gray-100 rounded-xl z-50 min-w-[200px] p-1">
                {engageLinks.map((l) => (
                  <DropdownMenuItem key={l.to} className="rounded-lg hover:bg-orange-50 px-3 py-2">
                    <Link to={l.to} className={dropItemCls}>{l.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Experiences dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={dropTriggerCls}>
                Experiences <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border border-gray-100 rounded-xl z-50 min-w-[200px] p-1">
                {experienceLinks.map((l) => (
                  <DropdownMenuItem key={l.to} className="rounded-lg hover:bg-orange-50 px-3 py-2">
                    <Link to={l.to} className={dropItemCls}>{l.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Past Events dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={dropTriggerCls}>
                Past Events <ChevronDown className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border border-gray-100 rounded-xl z-50 min-w-[160px] p-1">
                {pastEventLinks.map((l) => (
                  <DropdownMenuItem key={l.to} className="rounded-lg hover:bg-orange-50 px-3 py-2">
                    <Link to={l.to} className={dropItemCls}>{l.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/tickets"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/25"
            >
              Register
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-800 hover:text-[#F97316] hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ─────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/40 md:hidden" onClick={close}>
          <div
            className="absolute top-0 left-0 right-0 max-h-[92vh] bg-white shadow-xl rounded-b-2xl flex flex-col animate-slideDown"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <Link to="/" onClick={close} className="bg-[#F97316] rounded-lg p-1.5">
                <img src="/piw_logo.png" alt="PIW Logo" className="h-8 w-auto" />
              </Link>
              <button onClick={close} className="p-2 rounded-lg text-gray-600 hover:text-[#F97316] hover:bg-gray-100">
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 mobile-menu-scroll space-y-1">
              {/* Static links */}
              <NavLink to="/" onClick={close} className={({ isActive }) => `${mobileLinkCls} flex ${isActive ? mobileActiveCls : mobileInactiveCls}`}>Home</NavLink>
              {navLinks.map((l) => (
                <NavLink key={l.to} to={l.to} onClick={close} className={({ isActive }) => `${mobileLinkCls} flex ${isActive ? mobileActiveCls : mobileInactiveCls}`}>
                  {l.label}
                </NavLink>
              ))}

              <div className="pt-2 border-t border-gray-100">
                {/* Engage accordion */}
                {[
                  { key: "engage", label: "Engage", links: engageLinks },
                  { key: "exp", label: "Experiences", links: experienceLinks },
                ].map(({ key, label, links }) => (
                  <div key={key} className="mb-1">
                    <button
                      onClick={() => toggleSection(key)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-800 hover:text-[#F97316] hover:bg-orange-50 rounded-lg transition-all duration-200"
                    >
                      <span>{label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === key ? 'rotate-180 text-[#F97316]' : ''}`} />
                    </button>
                    <div className={clsx(openSection === key ? 'block' : 'hidden', 'pl-4 space-y-1 mb-2')}>
                      {links.map((l) => (
                        <Link key={l.to} to={l.to} onClick={close} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#F97316] hover:bg-orange-50 rounded-lg transition-all duration-200">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Past Events accordion */}
                <div className="mb-1">
                  <button
                    onClick={() => toggleSection("past")}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-800 hover:text-[#F97316] hover:bg-orange-50 rounded-lg transition-all duration-200"
                  >
                    <span>Past Events</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSection === "past" ? 'rotate-180 text-[#F97316]' : ''}`} />
                  </button>
                  <div className={clsx(openSection === "past" ? 'block' : 'hidden', 'pl-4 space-y-1 mb-2')}>
                    {pastEventLinks.map((l) => (
                      <Link key={l.to} to={l.to} onClick={close} className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#F97316] hover:bg-orange-50 rounded-lg transition-all duration-200">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/tickets"
                  onClick={close}
                  className="block w-full text-center bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3.5 rounded-xl transition-colors duration-200"
                >
                  Register for PIW 2026
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown { animation: slideDown 0.25s ease; }
        .mobile-menu-scroll::-webkit-scrollbar { width: 4px; }
        .mobile-menu-scroll::-webkit-scrollbar-track { background: #f9fafb; }
        .mobile-menu-scroll::-webkit-scrollbar-thumb { background: #F97316; border-radius: 2px; }
      `}</style>
    </nav>
  );
};

export default Navbar;
