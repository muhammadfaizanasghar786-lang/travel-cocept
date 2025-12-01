import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { submitBookingToSheet } from '../services/sheetDb';
import { BookingFormData } from '../types';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const location = useLocation();
  const preFilledPackage = location.state?.packageInterested || '';
  const preFilledType = location.state?.type || 'leisure';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    destination: preFilledPackage ? preFilledPackage : '',
    tripType: preFilledType,
    startDate: '',
    duration: 7,
    travelers: 1,
    budget: '',
    notes: preFilledPackage ? `I am interested in: ${preFilledPackage}` : '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const success = await submitBookingToSheet(formData);
    
    if (success) {
      setStatus('success');
      setFormData({
          fullName: '', email: '', phone: '', destination: '', tripType: 'leisure', 
          startDate: '', duration: 7, travelers: 1, budget: '', notes: ''
      });
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
      return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-500" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
                  <p className="text-gray-600 mb-6">Thank you for contacting Travel Concepts by NS. Our team will review your details and get back to you via WhatsApp or Email shortly.</p>
                  <button onClick={() => setStatus('idle')} className="bg-brand-primary text-white px-6 py-2 rounded-lg font-medium">Submit Another</button>
              </div>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Plan Your Trip</h1>
          <p className="mt-2 text-gray-600">Fill out the form below and we will create a custom itinerary for you.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-accent"></div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Section 1: Contact Info */}
            <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-lg font-semibold text-brand-primary mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition" placeholder="+92 300 1234567" />
                    </div>
                </div>
            </div>

            {/* Section 2: Trip Details */}
            <div className="bg-teal-50/50 p-6 rounded-xl border border-teal-100">
                <h3 className="text-lg font-semibold text-brand-secondary mb-4">Trip Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                        <input required type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary transition" placeholder="e.g. Turkey, UK, Umrah" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Trip Type</label>
                        <select name="tripType" value={formData.tripType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary bg-white">
                            <option value="leisure">Leisure / Vacation</option>
                            <option value="religious">Umrah / Religious</option>
                            <option value="study">Study Visa / Education</option>
                            <option value="business">Business</option>
                            <option value="family">Family Trip</option>
                            <option value="adventure">Adventure</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Start Date</label>
                        <input required type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary transition" />
                    </div>
                     <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration (Days)</label>
                            <input required type="number" min="1" name="duration" value={formData.duration} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary transition" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                            <input required type="number" min="1" name="travelers" value={formData.travelers} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary transition" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Budget & Notes */}
            <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                 <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget (Per Person)</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent bg-white">
                        <option value="">Select Range</option>
                        <option value="economy">Economy ($500 - $1500)</option>
                        <option value="standard">Standard ($1500 - $3000)</option>
                        <option value="luxury">Luxury ($3000+)</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes / Special Requests</label>
                    <textarea name="notes" rows={3} value={formData.notes} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-accent focus:border-brand-accent transition" placeholder="Specific hotels, flight preferences, dietary needs..."></textarea>
                 </div>
            </div>

            {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center">
                    <AlertCircle size={20} className="mr-2" />
                    Something went wrong. Please check your connection or try again later.
                </div>
            )}

            <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {status === 'submitting' ? (
                    'Processing...'
                ) : (
                    <>
                        Submit Travel Request <Send size={20} className="ml-2" />
                    </>
                )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;