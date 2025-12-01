import React, { useState } from 'react';
import { submitStudyAssessment } from '../services/sheetDb';
import { StudyAssessmentFormData } from '../types';
import { CheckCircle, AlertCircle, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyAssessment: React.FC = () => {
  const [formData, setFormData] = useState<StudyAssessmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    currentEducationLevel: '',
    desiredQualification: '',
    fieldOfStudy: '',
    relevantExperience: '',
    destinationCountry1: 'United Kingdom',
    destinationCountry2: '',
    languageTestStatus: '',
    languageTestType: '',
    targetIntakeYear: '',
    inquirySubject: '',
    messageDetails: '',
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
    
    const success = await submitStudyAssessment(formData);
    
    if (success) {
      setStatus('success');
      window.scrollTo(0, 0);
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
      return (
          <div className="min-h-screen flex items-center justify-center bg-[#f7f9fb] px-4 py-12 font-sans">
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl text-center max-w-lg w-full border border-gray-100">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-blue-600" size={40} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00247D] mb-4">Assessment Submitted!</h2>
                  <p className="text-gray-600 mb-8 text-base sm:text-lg">
                    Thank you for your interest in studying in the UK. Our education consultants will review your profile and contact you shortly.
                  </p>
                  <Link to="/" className="inline-block w-full bg-[#D32F2F] text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition shadow-md">
                    Return Home
                  </Link>
              </div>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex justify-center font-sans">
      <div className="w-full max-w-4xl bg-white sm:shadow-xl sm:rounded-2xl p-4 sm:p-10 sm:border border-gray-100 sm:my-8 h-full sm:h-auto">
        <header className="mb-8 text-center">
            <div className="flex justify-center mb-6">
                 <img 
                    src="https://file-service-alpha.vercel.app/api/file/1741518174768-travel_concept_logo.png" 
                    alt="Travel Concepts Logo" 
                    className="h-20 md:h-24 w-auto object-contain"
                />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00247D] mb-2 flex items-center justify-center gap-2">
                <GraduationCap className="text-[#D32F2F]" size={28} />
                Free Expert Consultation
            </h1>
            <p className="text-sm sm:text-base text-gray-500">Complete this assessment form for a tailored study abroad plan.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8 pb-8 sm:pb-0">
            
            {/* Personal & Contact Information */}
            <fieldset className="border-t-4 border-[#00247D] rounded-lg p-4 sm:p-6 bg-blue-50/30 shadow-sm">
                <legend className="text-lg sm:text-xl font-bold text-[#00247D] px-2 bg-white rounded shadow-sm border border-gray-100">Personal & Contact</legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                        <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">City</label>
                        <input required type="text" name="city" value={formData.city} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" />
                    </div>
                </div>
            </fieldset>

            {/* Educational Details */}
            <fieldset className="border-t-4 border-[#D32F2F] rounded-lg p-4 sm:p-6 bg-red-50/30 shadow-sm">
                <legend className="text-lg sm:text-xl font-bold text-[#D32F2F] px-2 bg-white rounded shadow-sm border border-gray-100">Educational Details</legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Current Education Level</label>
                        <select required name="currentEducationLevel" value={formData.currentEducationLevel} onChange={handleChange} 
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150">
                            <option value="">-- Select --</option>
                            <option value="SSC">SSC</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Bachelor 2 Years">Bachelor (2 Years)</option>
                            <option value="BS">BS/4-Year Bachelor</option>
                            <option value="Master">Master</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Desired Qualification</label>
                        <input required type="text" name="desiredQualification" value={formData.desiredQualification} onChange={handleChange} placeholder="e.g. Master's in CS"
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Field of Study Interest</label>
                        <input required type="text" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Relevant Experience (Optional)</label>
                        <textarea name="relevantExperience" rows={2} value={formData.relevantExperience} onChange={handleChange} 
                                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"></textarea>
                    </div>
                </div>
            </fieldset>

            {/* Destination & Intake */}
            <fieldset className="border-t-4 border-gray-800 rounded-lg p-4 sm:p-6 bg-gray-50 shadow-sm">
                <legend className="text-lg sm:text-xl font-bold text-gray-800 px-2 bg-white rounded shadow-sm border border-gray-100">Destination & Intake</legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Top Destination Country</label>
                        <input required type="text" name="destinationCountry1" value={formData.destinationCountry1} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Second Destination Country (Optional)</label>
                        <input type="text" name="destinationCountry2" value={formData.destinationCountry2} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Have you taken/booked a Language Test?</label>
                        <select required name="languageTestStatus" value={formData.languageTestStatus} onChange={handleChange} 
                                className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150">
                            <option value="">-- Select --</option>
                            <option value="Planning To Take">Planning To Take</option>
                            <option value="Booked">Booked</option>
                            <option value="Taken">Taken</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Test Type (e.g., IELTS, Duolingo)</label>
                        <input type="text" name="languageTestType" value={formData.languageTestType} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Target Intake Year</label>
                        <input required type="text" name="targetIntakeYear" value={formData.targetIntakeYear} onChange={handleChange} placeholder="e.g., 2026"
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150" />
                    </div>
                </div>
            </fieldset>

            {/* Your Inquiry */}
            <fieldset className="border-t-4 border-indigo-600 rounded-lg p-4 sm:p-6 bg-indigo-50/30 shadow-sm">
                <legend className="text-lg sm:text-xl font-bold text-indigo-700 px-2 bg-white rounded shadow-sm border border-gray-100">Your Inquiry</legend>

                <div className="grid grid-cols-1 gap-5 mt-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Inquiry Subject (Brief)</label>
                        <input required type="text" name="inquirySubject" value={formData.inquirySubject} onChange={handleChange} 
                               className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Detailed Message</label>
                        <textarea required name="messageDetails" rows={4} value={formData.messageDetails} onChange={handleChange} 
                                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"></textarea>
                    </div>
                </div>
            </fieldset>

            {/* Error Message */}
            {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center border border-red-100 text-sm">
                    <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                    Connection failed. Please check your internet or try again later.
                </div>
            )}

            {/* Submit */}
            <div className="pt-2">
                <button type="submit" disabled={status === 'submitting'}
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-md text-base sm:text-lg font-bold text-white bg-[#00247D] hover:bg-[#001a5c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide">
                    {status === 'submitting' ? 'Submitting Assessment...' : 'Submit Inquiry'}
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

export default StudyAssessment;