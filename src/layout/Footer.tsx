import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F97316] text-white">
      <div className="h-1 w-full bg-[#FDBA74]" />

      <div className="section-container py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <img src='/piw_logo.png' height={30} width={200} alt="Pwani Innovation Week logo" loading="lazy" decoding="async" />
            <p className="max-w-sm text-sm leading-relaxed text-slate-200">
              Pwani Innovation Week 2026 <br />
              Coastal Futures: Youth, Innovation &amp; Sustainable Growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/pwaniinnovation" aria-label="Pwani Innovation Week on X" className="text-slate-200 transition-colors duration-200 hover:text-[#F97316]">
                <FaXTwitter size='25'/>
              </a>
              <a href="https://www.instagram.com/swahilipothub/" aria-label="Pwani Innovation Week on Instagram" className="text-slate-200 transition-colors duration-200 hover:text-[#F97316]">
                <FaInstagram size='25'/>
              </a>
              <a href="https://www.linkedin.com/company/piwkenya/" aria-label="Pwani Innovation Week on LinkedIn" className="text-slate-200 transition-colors duration-200 hover:text-[#F97316]">
                <FaLinkedin size='25'/>
              </a>
              <a href="https://www.facebook.com/pwaniinnovationweek" aria-label="Pwani Innovation Week on Facebook" className="text-slate-200 transition-colors duration-200 hover:text-[#F97316]">
                <FaFacebook size='25'/>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 border-l-2 border-[#F97316] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Home</Link>
              </li>
              <li>
                <a href="#about" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">About</a>
              </li>
              <li>
                <a href="#objectives" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Objectives</a>
              </li>
              <li>
                <a href="#themes" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Thematic Areas</a>
              </li>
              {/*<li>
                <a href="#tickets" className="text-gray-300 hover:text-[#F97316] transition-colors">Tickets</a>
              </li>*/}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 border-l-2 border-[#F97316] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">Events</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/hackathon" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Hackathons</Link>
              </li>
              <li>
                <Link to="/plenary-sessions" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Plenary Sessions</Link>
              </li>
              <li>
                <Link to="/workshops" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Workshops</Link>
              </li>
              <li>
                <Link to="/panel-discussions" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Panel Discussions</Link>
              </li>
              <li>
                <Link to="/networking-events" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Networking Events</Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-slate-200/90 transition-colors duration-200 hover:text-[#F97316]">Exhibitions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 border-l-2 border-[#F97316] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" />
                <span className="text-slate-200/90">Mombasa, Kenya</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" />
                <span className="text-slate-200/90">info@swahilipothub.co.ke</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F97316]" />
                <span className="text-slate-200/90">+254 772 785169</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#fed7aa]/40 bg-[#ea580c] py-5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-slate-300 sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
              <p>&copy; {new Date().getFullYear()} Pwani Innovation Week. All rights reserved.</p>
          </div>
          <div>
            <p>
              Organized by{' '}
              <a className='font-semibold text-white transition-colors duration-200 hover:text-[#F97316]' href='https://swahilipothub.co.ke'>
                Swahilipot Hub Foundation
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
