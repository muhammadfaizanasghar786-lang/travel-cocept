import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Plane } from 'lucide-react';

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
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Plane size={20} className="transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">Travel Concepts</span>
              <span className="text-xs text-brand-secondary font-medium tracking-widest uppercase">By NS</span>
            </div>
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-2">
                <p className="px-3 text-xs text-gray-400 uppercase font-semibold mb-2">Contact Us</p>
                <a href="tel:03338963743" className="block px-3 py-2 text-gray-600 hover:text-brand-primary">
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