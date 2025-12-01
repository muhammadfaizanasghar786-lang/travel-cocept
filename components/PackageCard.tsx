import React from 'react';
import { Clock, MapPin, CheckCircle } from 'lucide-react';
import { Package } from '../types';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary shadow-sm">
          {pkg.tags[0]}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-gray-500 text-xs font-medium mb-2 space-x-2">
          <MapPin size={14} className="text-brand-secondary" />
          <span>{pkg.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock size={16} className="mr-1 text-gray-400" />
            {pkg.days} Days
          </div>
          <div className="flex items-center font-semibold text-brand-accent">
            {pkg.price}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
             <Link 
                to="/booking" 
                state={{ packageInterested: pkg.title }}
                className="text-brand-primary font-semibold text-sm hover:text-brand-dark transition-colors"
             >
                View Details
             </Link>
             <Link 
                to="/booking" 
                state={{ packageInterested: pkg.title }}
                className="bg-brand-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
             >
                Book Now
             </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;