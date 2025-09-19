import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F97316] text-white"> {/* Changed from bg-gray-900 to orange */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <img src='/piw_logo.png' height={30} width={200} alt="Pwani Innovation Week Logo" />
            </div>
            <p className="text-gray-300 mb-6">
              Pwani Innovation Week 2025 <br />
              Pwani Re-imagined: Youth Agency, Innovation and Sustainability of Coastal Economies.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/pwaniinnovation" className="text-white hover:text-ocean transition-colors" title="Follow us on X (Twitter)">
                <FaXTwitter size='25'/>
              </a>
              <a href="https://www.instagram.com/swahilipothub/" className="text-white hover:text-ocean transition-colors" title="Follow us on Instagram">
                <FaInstagram size='25'/>
              </a>
              <a href="https://www.linkedin.com/company/piwkenya/" className="text-white hover:text-ocean transition-colors" title="Follow us on LinkedIn">
                <FaLinkedin size='25'/>
              </a>
              <a href="https://www.facebook.com/pwaniinnovationweek" className="text-white hover:text-ocean transition-colors" title="Follow us on Facebook">
                <FaFacebook size='25'/>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#F97316] transition-colors">Home</Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#F97316] transition-colors">About</a>
              </li>
              <li>
                <a href="#objectives" className="text-gray-300 hover:text-[#F97316] transition-colors">Objectives</a>
              </li>
              <li>
                <a href="#themes" className="text-gray-300 hover:text-[#F97316] transition-colors">Thematic Areas</a>
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
                <Link to="/hackathon" className="text-gray-300 hover:text-[#F97316] transition-colors">Hackathons</Link>
              </li>
              <li>
                <Link to="/plenary-sessions" className="text-gray-300 hover:text-[#F97316] transition-colors">Plenary Sessions</Link>
              </li>
              <li>
                <Link to="/workshops" className="text-gray-300 hover:text-[#F97316] transition-colors">Workshops</Link>
              </li>
              <li>
                <Link to="/panel-discussions" className="text-gray-300 hover:text-[#F97316] transition-colors">Panel Discussions</Link>
              </li>
              <li>
                <Link to="/networking-events" className="text-gray-300 hover:text-[#F97316] transition-colors">Networking Events</Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-gray-300 hover:text-[#F97316] transition-colors">Exhibitions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-ocean mr-2 flex-shrink-0" />
                <span className="text-gray-300">Mombasa, Kenya</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-6 w-6 text-ocean mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@swahilipothub.co.ke</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-6 w-6 text-ocean mr-2 flex-shrink-0" />
                <span className="text-gray-300">+254 715 752 908</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#ea580c] py-6"> {/* Changed from bg-gray-950 to a darker orange */}
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:justify-between text-sm">
            <div className="text-center md:text-left text-gray-200">
              <p>&copy; {new Date().getFullYear()} Pwani Innovation Week. All rights reserved.</p>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-right">
              <p className="text-gray-200">Organized by <a className='underline' href='https://swahilipothub.co.ke'>Swahilipot Hub Foundation</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
