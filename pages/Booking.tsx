import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { submitBookingToSheet } from '../services/sheetDb';
import { BookingFormData } from '../types';
import { CheckCircle, AlertCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const location = useLocation();
  const preFilledPackage = location.state?.packageInterested || '';
  const preFilledType = location.state?.type || '';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    destination: preFilledPackage ? preFilledPackage : '',
    tripType: preFilledType,
    startDate: '',
    duration: 7,
    travelers: 1,
    accommodation: 'mid_range',
    interests: [],
    budgetRange: '',
    comments: preFilledPackage ? `I am interested in the ${preFilledPackage} package.` : '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Handle Text/Select/Radio changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Checkbox changes for Interests
  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(i => i !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const success = await submitBookingToSheet(formData);
    
    if (success) {
      setStatus('success');
      // Reset form logic handled by the success view
      window.scrollTo(0, 0);
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
      return (
          <div className="min-h-screen flex items-center justify-center bg-[#f7f9fb] px-4 py-12 font-sans">
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl text-center max-w-lg w-full border border-gray-100">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Packet Received!</h2>
                  <p className="text-gray-600 mb-8 text-base sm:text-lg">
                    Thanks for choosing <strong>Travel Concepts by NS</strong>. We've gathered your trip details and you will be contacted with the assessment shortly.
                  </p>
                  <button onClick={() => {
                      setStatus('idle');
                      setFormData({
                          fullName: '', email: '', phone: '', destination: '', tripType: '', 
                          startDate: '', duration: 7, travelers: 1, accommodation: 'mid_range', 
                          interests: [], budgetRange: '', comments: ''
                      });
                  }} className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition shadow-md">
                    Plan Another Trip
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex justify-center font-sans">
      <div className="w-full max-w-4xl bg-white sm:shadow-xl sm:rounded-2xl p-4 sm:p-10 sm:border border-gray-100 sm:my-8 h-full sm:h-auto">
        <header className="mb-8 text-center">
            <img 
              src="https://file-service-alpha.vercel.app/api/file/1741518174768-travel_concept_logo.png" 
              alt="Travel Concepts by NS Logo" 
              className="h-20 sm:h-28 w-auto mx-auto mb-6 object-contain"
            />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Build Your Trip Packet</h1>
            <p className="text-sm sm:text-base text-gray-500">Tell us about your next adventure so we can gather the perfect data!</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 pb-8 sm:pb-0">
            
            {/* Section 1: Traveler Information */}
            <fieldset className="border border-indigo-200 rounded-xl p-4 sm:p-5 bg-indigo-50/50">
                <legend className="text-base sm:text-lg font-semibold text-indigo-700 px-2">1. Primary Traveler Details</legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers (Total)</label>
                        <input required type="number" min="1" name="travelers" value={formData.travelers} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" />
                    </div>
                </div>
            </fieldset>

            {/* Section 2: Trip Details */}
            <fieldset className="border border-green-200 rounded-xl p-4 sm:p-5 bg-green-50/50">
                <legend className="text-base sm:text-lg font-semibold text-green-700 px-2">2. Destination & Dates</legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Primary Destination / Region</label>
                        <input required type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g., Tokyo, Italian Coast, Southeast Asia"
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type of Trip</label>
                        <select required name="tripType" value={formData.tripType} onChange={handleChange} 
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150">
                            <option value="">Select a type...</option>
                            <option value="leisure">Leisure / Relaxation</option>
                            <option value="adventure">Adventure / Exploration</option>
                            <option value="business">Business / Conference</option>
                            <option value="cultural">Cultural / Historical</option>
                            <option value="religious">Religious / Umrah</option>
                            <option value="family">Family Vacation</option>
                            <option value="study">Study / Education</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Start Date</label>
                        <input required type="date" name="startDate" value={formData.startDate} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Approximate Duration (Nights)</label>
                        <input required type="number" min="1" name="duration" value={formData.duration} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition duration-150" />
                    </div>
                </div>
            </fieldset>

            {/* Section 3: Preferences & Budget */}
            <fieldset className="border border-purple-200 rounded-xl p-4 sm:p-5 bg-purple-50/50">
                <legend className="text-base sm:text-lg font-semibold text-purple-700 px-2">3. Preferences & Budget</legend>

                {/* Accommodation */}
                <div className="mb-5 mt-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Style Preference</label>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="accommodation" value="luxury" checked={formData.accommodation === 'luxury'} onChange={handleChange} className="text-purple-600 focus:ring-purple-500" />
                            <span className="text-gray-700 text-sm">Luxury Hotel / Resort</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="accommodation" value="mid_range" checked={formData.accommodation === 'mid_range'} onChange={handleChange} className="text-purple-600 focus:ring-purple-500" />
                            <span className="text-gray-700 text-sm">Mid-range Hotel</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="accommodation" value="budget" checked={formData.accommodation === 'budget'} onChange={handleChange} className="text-purple-600 focus:ring-purple-500" />
                            <span className="text-gray-700 text-sm">Budget / Hostel</span>
                        </label>
                    </div>
                </div>

                {/* Interests */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Key Activities / Interests</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                            { val: 'food_drink', label: 'Food & Drink' },
                            { val: 'history', label: 'History' },
                            { val: 'nature_hiking', label: 'Nature' },
                            { val: 'beach', label: 'Beach & Sun' },
                            { val: 'nightlife', label: 'Nightlife' },
                            { val: 'shopping', label: 'Shopping' }
                        ].map((item) => (
                            <label key={item.val} className="flex items-center space-x-2">
                                <input type="checkbox" name="interests" value={item.val} checked={formData.interests.includes(item.val)} onChange={handleInterestChange} className="rounded text-purple-600 focus:ring-purple-500" />
                                <span className="text-gray-700 text-sm">{item.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Budget */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget (Excluding Flights)</label>
                    <select required name="budgetRange" value={formData.budgetRange} onChange={handleChange} 
                            className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition duration-150">
                        <option value="">Select a range...</option>
                        <option value="economy">$500 - $1,500 (Economy)</option>
                        <option value="mid">$1,501 - $4,000 (Mid-Range)</option>
                        <option value="premium">$4,001 - $10,000 (Premium)</option>
                        <option value="luxury">$10,000+ (Luxury / Custom)</option>
                    </select>
                </div>
            </fieldset>

            {/* Comments */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Any additional notes or specific requests?</label>
                <textarea name="comments" rows={3} value={formData.comments} onChange={handleChange} 
                          className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"></textarea>
            </div>

            {/* Error Message */}
            {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center border border-red-100 text-sm">
                    <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                    Connection failed. Please check your internet.
                </div>
            )}

            {/* Submit */}
            <div className="pt-2">
                <button type="submit" disabled={status === 'submitting'}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed">
                    {status === 'submitting' ? 'Sending Packet...' : 'Submit Trip Request'}
                </button>
            </div>

        </form>

        <footer className="mt-8 text-center text-xs text-gray-400 pb-8 sm:pb-0">
            Data secured and collected by Travel Concepts by NS.
        </footer>
      </div>
    </div>
  );
};

export default Booking;