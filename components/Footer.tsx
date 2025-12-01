import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text inline-block">Travel Concepts By NS</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop solution for international travel, study visas, and spiritual journeys. 
              Buy Yourself The Freedom.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-secondary transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-secondary transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#/" className="hover:text-white transition">Home</a></li>
              <li><a href="#/packages" className="hover:text-white transition">Tour Packages</a></li>
              <li><a href="#/study-uk" className="hover:text-white transition">Study in UK</a></li>
              <li><a href="#/booking" className="hover:text-white transition">Get a Quote</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 text-brand-secondary" size={18} />
                <a 
                  href="https://maps.app.goo.gl/HbteAyXdy1RvwhgF7" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Koh e Noor 01 Plaza, 2nd Floor, Office No.5, Jaranwala Road, Faisalabad.
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 text-brand-secondary" size={18} />
                <div className="flex flex-col">
                    <a href="tel:03338963743" className="hover:text-white transition">0333-8963743</a>
                    <a href="tel:03075403996" className="hover:text-white transition">0307-5403996</a>
                    <a href="tel:0415477488" className="hover:text-white transition">041-5477488 (Landline)</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 text-brand-secondary" size={18} />
                <a href="mailto:travelconceptsbyns@gmail.com" className="hover:text-white transition">travelconceptsbyns@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Map Embed (Small) */}
          <div className="rounded-lg overflow-hidden h-48 bg-gray-700">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0863909772183!2d73.1098679!3d31.4117861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922687d6023348b%3A0x6a1c13636737e962!2sKoh-e-Noor%20One%20Plaza!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Office Location"
             ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Travel Concepts by NS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;