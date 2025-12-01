import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StudyUK from './pages/StudyUK';
import Booking from './pages/Booking';
import PackageCard from './components/PackageCard'; // Importing to reuse for package list view if needed
import { Package } from './types';
import AiAssistant from './components/AiAssistant';

// Wrapper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple Packages List Page reusing components
const PackagesPage = () => {
  const allPackages: Package[] = [
    { id: '1', title: 'Executive Umrah Package', location: 'Makkah & Madinah', price: 'Contact for Quote', days: 15, image: 'https://picsum.photos/id/484/800/600', tags: ['Religious'] },
    { id: '2', title: 'London & Scotland Explorer', location: 'UK', price: '$2,400', days: 10, image: 'https://picsum.photos/id/1068/800/600', tags: ['Leisure'] },
    { id: '3', title: 'Turkish Delight', location: 'Turkey', price: '$1,800', days: 7, image: 'https://picsum.photos/id/238/800/600', tags: ['Adventure'] },
    { id: '4', title: 'Dubai Extravaganza', location: 'UAE', price: '$1,200', days: 5, image: 'https://picsum.photos/id/1040/800/600', tags: ['Luxury'] },
    { id: '5', title: 'Maldives Honeymoon', location: 'Maldives', price: '$3,500', days: 6, image: 'https://picsum.photos/id/10/800/600', tags: ['Beach'] },
    { id: '6', title: 'USA East Coast', location: 'USA', price: '$3,200', days: 12, image: 'https://picsum.photos/id/292/800/600', tags: ['Leisure'] },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">All Travel Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPackages.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/study-uk" element={<StudyUK />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/packages" element={<PackagesPage />} />
          </Routes>
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </Router>
  );
};

export default App;