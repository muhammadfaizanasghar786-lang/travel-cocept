import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Globe, Shield, Home as HomeIcon, CheckCircle, ArrowRight } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import { Package } from '../types';

const Home: React.FC = () => {
  const services = [
    { icon: <Plane className="text-brand-primary" size={28} />, title: "Cheap Flights", desc: "Domestic & International flights at unbeatable prices." },
    { icon: <Globe className="text-brand-secondary" size={28} />, title: "Tours", desc: "Customized domestic and international tour packages." },
    { icon: <HomeIcon className="text-brand-accent" size={28} />, title: "Umrah Packages", desc: "Executive solo and family Umrah packages tailored for spiritual serenity." },
    { icon: <CheckCircle className="text-green-500" size={28} />, title: "Visa Consultancy", desc: "Expert guidance for UK, USA, Canada, Australia & more." },
    { icon: <HomeIcon className="text-purple-500" size={28} />, title: "Hotel Reservation", desc: "Luxury to budget accommodation worldwide." },
    { icon: <Shield className="text-red-500" size={28} />, title: "Travel Insurance", desc: "Secure your journey with comprehensive travel coverage." },
  ];

  const featuredPackages: Package[] = [
    {
      id: '1',
      title: 'Executive Umrah Package',
      location: 'Makkah & Madinah',
      price: 'Contact for Quote',
      days: 15,
      image: 'https://picsum.photos/id/484/800/600',
      tags: ['Religious', 'All Inclusive']
    },
    {
      id: '2',
      title: 'London & Scotland Explorer',
      location: 'United Kingdom',
      price: '$2,400',
      days: 10,
      image: 'https://picsum.photos/id/1068/800/600',
      tags: ['Leisure', 'History']
    },
    {
      id: '3',
      title: 'Turkish Delight',
      location: 'Istanbul & Cappadocia',
      price: '$1,800',
      days: 7,
      image: 'https://picsum.photos/id/238/800/600',
      tags: ['Culture', 'Adventure']
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/433/1920/1080" 
            alt="Travel Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-primary/40"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-white">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-brand-accent/90 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                One Stop Solution
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Your Journey, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">
                Simplified.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
              Experience the world with Travel Concepts by NS. From spiritual Umrah journeys to exciting international adventures and study visas. Buy yourself the freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking" 
                className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white rounded-full font-bold text-lg transition duration-300 shadow-lg text-center"
              >
                Plan My Trip
              </Link>
              <Link 
                to="/study-uk" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition duration-300 text-center"
              >
                Study in UK
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services We Offer</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-brand-primary/30 transition duration-300 group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{index + 1}. {service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
            {/* 7th item manually added as per flyer text */}
            <div className="p-8 rounded-2xl bg-brand-primary text-white hover:shadow-lg transition duration-300 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold mb-2">24/7 Services</h3>
                <p className="text-indigo-100">We are always here to assist you, anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
              <p className="text-gray-500">Curated packages for your next adventure.</p>
            </div>
            <Link to="/packages" className="hidden md:flex items-center text-brand-primary font-semibold hover:text-brand-secondary transition">
              View All <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/packages" className="inline-flex items-center text-brand-primary font-semibold">
              View All Packages <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Strip */}
      <section className="py-16 bg-gradient-to-r from-brand-secondary to-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Discover the Spiritual Serenity of Umrah</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-indigo-100">
                Join our executive solo or family packages. We handle the visa, hotels, and transport so you can focus on worship.
            </p>
            <Link to="/booking" className="px-8 py-3 bg-white text-brand-primary rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Book Your Umrah
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;