import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Facebook } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Study UK', path: '/study-uk' },
    { name: 'Book Now', path: '/booking' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full glass-effect border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-28 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group py-2">
            <img 
              src="https://file-service-alpha.vercel.app/api/file/1741518174768-travel_concept_logo.png" 
              alt="Travel Concept by NS" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:opacity-95 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-brand-primary font-bold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2">
                <a 
                  href="https://www.facebook.com/travelconceptsbyNS" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-full transition shadow-md"
                  aria-label="Facebook Page"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://wa.me/923338963743" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition shadow-md"
                >
                  <Phone size={16} />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto">
          <div className="px-4 pt-2 pb-20 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-lg font-medium border-b border-gray-50 ${
                  isActive(link.path)
                    ? 'bg-brand-primary/5 text-brand-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 mt-4 space-y-4">
                <p className="px-3 text-xs text-gray-400 uppercase font-semibold">Contact Us</p>
                <div className="flex space-x-3 px-3">
                   <a 
                      href="https://www.facebook.com/travelconceptsbyNS" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-lg"
                    >
                      <Facebook size={24} />
                    </a>
                    <a 
                      href="https://wa.me/923338963743"
                      className="flex items-center justify-center flex-1 bg-green-500 text-white rounded-lg font-medium text-lg"
                    >
                      WhatsApp
                    </a>
                </div>
                <a href="tel:03338963743" className="block px-3 py-2 text-gray-600 hover:text-brand-primary text-center mt-4">
                    Call: 0333-8963743
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;