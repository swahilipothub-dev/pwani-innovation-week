import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F97316] text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div>
            <div className="mb-6">
              <img
                src='/piw_logo.png'
                height={30}
                width={200}
                alt="Pwani Innovation Week logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-white/80 mb-6">
              Pwani Innovation Week 2025 <br />
              Pwani Re-imagined: Youth Agency, Innovation and Sustainability of Coastal Economies.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/pwaniinnovation" className="text-white/90 hover:text-white transition-colors">
                <FaXTwitter size='25'/>
              </a>
              <a href="https://www.instagram.com/swahilipothub/" className="text-white/90 hover:text-white transition-colors">
                <FaInstagram size='25'/>
              </a>
              <a href="https://www.linkedin.com/company/piwkenya/" className="text-white/90 hover:text-white transition-colors">
                <FaLinkedin size='25'/>
              </a>
              <a href="https://www.facebook.com/pwaniinnovationweek" className="text-white/90 hover:text-white transition-colors">
                <FaFacebook size='25'/>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white hover:underline transition-colors">Home</Link>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white hover:underline transition-colors">About</a>
              </li>
              <li>
                <a href="#objectives" className="text-white/80 hover:text-white hover:underline transition-colors">Objectives</a>
              </li>
              <li>
                <a href="#themes" className="text-white/80 hover:text-white hover:underline transition-colors">Thematic Areas</a>
              </li>
              {/*<li>
                <a href="#tickets" className="text-gray-300 hover:text-[#F97316] transition-colors">Tickets</a>
              </li>*/}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Events</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/hackathon" className="text-white/80 hover:text-white hover:underline transition-colors">Hackathons</Link>
              </li>
              <li>
                <Link to="/plenary-sessions" className="text-white/80 hover:text-white hover:underline transition-colors">Plenary Sessions</Link>
              </li>
              <li>
                <Link to="/workshops" className="text-white/80 hover:text-white hover:underline transition-colors">Workshops</Link>
              </li>
              <li>
                <Link to="/panel-discussions" className="text-white/80 hover:text-white hover:underline transition-colors">Panel Discussions</Link>
              </li>
              <li>
                <Link to="/networking-events" className="text-white/80 hover:text-white hover:underline transition-colors">Networking Events</Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-white/80 hover:text-white hover:underline transition-colors">Exhibitions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Past Events</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/piw-2023" className="text-white/80 hover:text-white hover:underline transition-colors">PIW 2023</Link>
              </li>
              <li>
                <Link to="/piw-2024" className="text-white/80 hover:text-white hover:underline transition-colors">PIW 2024</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-white mr-2 flex-shrink-0 opacity-90" />
                <span className="text-white/80">Mombasa, Kenya</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-6 w-6 text-white mr-2 flex-shrink-0 opacity-90" />
                <span className="text-white/80">info@swahilipothub.co.ke</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-6 w-6 text-white mr-2 flex-shrink-0 opacity-90" />
                <span className="text-white/80">+254 772 785169</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#ea580c] py-6">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:justify-between text-sm">
            <div className="text-center md:text-left text-white/90">
              <p>&copy; {new Date().getFullYear()} Pwani Innovation Week. All rights reserved.</p>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <p className="text-white/90">Organized by <a className='underline hover:text-white' href='https://swahilipothub.co.ke'>Swahilipot Hub Foundation</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
