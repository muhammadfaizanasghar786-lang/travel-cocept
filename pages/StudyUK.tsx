import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, FileText, CheckCircle, Calendar, PoundSterling, Briefcase, HelpCircle, Building, Award, Home, ExternalLink, AlertTriangle } from 'lucide-react';

const StudyUK: React.FC = () => {
  // British Council Theme Colors
  const theme = {
    primary: 'bg-[#00247D]', // UK Blue
    accent: 'text-[#D32F2F]', // UK Red
    accentBg: 'bg-[#D32F2F]', // UK Red Background
    lightAccent: 'bg-red-50',
    border: 'border-[#D32F2F]',
    dark: 'text-[#1A1A1A]' // Black/Dark Grey
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A] overflow-x-hidden">
      {/* Header */}
      <div className={`${theme.primary} text-white py-16 sm:py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80" alt="London Bridge" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="bg-[#D32F2F] text-white px-4 py-1 text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 inline-block">Official Agency</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight">Study in the United Kingdom</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Your gateway to world-class education, global career opportunities, and a historic cultural experience.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            
            {/* Why UK? */}
            <section className="border-b border-gray-200 pb-10 sm:pb-12">
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className={`p-3 ${theme.lightAccent} rounded-none`}>
                  <GraduationCap size={28} className={theme.accent} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#00247D]">Why Choose UK Education?</h2>
              </div>
              <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
                The UK education system is renowned globally for its quality and standards. With four of the top 10 universities in the world, the UK offers interactive teaching methodology, high student satisfaction, and strong employability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 border-l-4 border-[#00247D]">
                    <h4 className="font-bold text-lg mb-2 text-[#00247D]">Academic Excellence</h4>
                    <p className="text-gray-600 text-sm">Home to Oxford, Cambridge, and Russell Group universities known for world-leading research.</p>
                  </div>
                  <div className="bg-gray-50 p-6 border-l-4 border-[#D32F2F]">
                    <h4 className="font-bold text-lg mb-2 text-[#D32F2F]">Shorter Courses</h4>
                    <p className="text-gray-600 text-sm">Undergraduate degrees are 3 years and Master's are just 1 year, saving you time and living costs.</p>
                  </div>
                  <div className="bg-gray-50 p-6 border-l-4 border-[#00247D]">
                    <h4 className="font-bold text-lg mb-2 text-[#00247D]">Post-Study Work (PSW)</h4>
                    <p className="text-gray-600 text-sm">The Graduate Route allows you to stay and work in the UK for 2 years (3 years for PhD) after graduating.</p>
                  </div>
                  <div className="bg-gray-50 p-6 border-l-4 border-[#D32F2F]">
                    <h4 className="font-bold text-lg mb-2 text-[#D32F2F]">Cultural Hub</h4>
                    <p className="text-gray-600 text-sm">A multicultural society where you'll meet people from all over the world and perfect your English.</p>
                  </div>
              </div>
            </section>

             {/* Popular Universities */}
             <section className="border-b border-gray-200 pb-10 sm:pb-12">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                    <div className={`p-3 bg-blue-50 rounded-none`}>
                        <Building size={28} className="text-[#00247D]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#00247D]">Popular Universities</h2>
                </div>
                <p className="text-gray-700 mb-6">We assist with admissions to over 100+ UK universities. Some popular choices for international students include:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-[#D32F2F] mr-3"></div> University of Hertfordshire</li>
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-[#D32F2F] mr-3"></div> BPP University</li>
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-[#D32F2F] mr-3"></div> University of Creative Arts (UCA)</li>
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-[#D32F2F] mr-3"></div> Coventry University</li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-[#00247D] mr-3"></div> University of Greenwich</li>
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-[#00247D] mr-3"></div> Ulster University</li>
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-[#00247D] mr-3"></div> University of East London</li>
                        <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-[#00247D] mr-3"></div> University of Law</li>
                    </ul>
                </div>
            </section>

            {/* Popular Courses */}
            <section className="border-b border-gray-200 pb-10 sm:pb-12">
                 <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                    <div className={`p-3 bg-gray-100 rounded-none`}>
                        <BookOpen size={28} className="text-[#1A1A1A]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#00247D]">Popular Courses</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    {['Business Management', 'Computer Science', 'Data Analytics', 'Project Management', 'Engineering', 'Law', 'Health & Social Care', 'Accounting & Finance', 'Digital Marketing'].map(course => (
                        <span key={course} className="px-3 py-2 bg-white border border-gray-300 text-gray-700 font-medium text-sm hover:border-[#D32F2F] hover:text-[#D32F2F] transition cursor-default">
                            {course}
                        </span>
                    ))}
                </div>
            </section>

            {/* Intake & Requirements */}
            <section className="border-b border-gray-200 pb-10 sm:pb-12">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                    <div className={`p-3 ${theme.lightAccent} rounded-none`}>
                        <Calendar size={28} className={theme.accent} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#00247D]">Intakes & Eligibility</h2>
                </div>
                
                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Major Intakes</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#00247D] text-white p-4 text-center">
                            <span className="block text-2xl font-bold">SEP/OCT</span>
                            <span className="text-sm opacity-80">Primary Intake</span>
                        </div>
                        <div className="bg-[#D32F2F] text-white p-4 text-center">
                            <span className="block text-2xl font-bold">JAN/FEB</span>
                            <span className="text-sm opacity-80">Secondary Intake</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 text-center">Note: Some universities also offer May/June intakes for specific courses.</p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">Entry Requirements</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs sm:text-sm text-left text-gray-700 border border-gray-200">
                            <thead className="bg-gray-100 text-gray-900 font-bold uppercase">
                                <tr>
                                    <th className="px-4 sm:px-6 py-3">Level</th>
                                    <th className="px-4 sm:px-6 py-3">Academic Requirement</th>
                                    <th className="px-4 sm:px-6 py-3">IELTS Requirement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-4 sm:px-6 py-4 font-semibold">Foundation</td>
                                    <td className="px-4 sm:px-6 py-4">Matric / O-Levels</td>
                                    <td className="px-4 sm:px-6 py-4">4.5 - 5.5 UKVI</td>
                                </tr>
                                <tr>
                                    <td className="px-4 sm:px-6 py-4 font-semibold">Undergraduate</td>
                                    <td className="px-4 sm:px-6 py-4">Intermediate / A-Levels (60%+)</td>
                                    <td className="px-4 sm:px-6 py-4">6.0 overall (no band less than 5.5)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 sm:px-6 py-4 font-semibold">Postgraduate</td>
                                    <td className="px-4 sm:px-6 py-4">Bachelor's Degree (2.5+ CGPA)</td>
                                    <td className="px-4 sm:px-6 py-4">6.5 overall (no band less than 6.0)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm bg-blue-50 p-3 text-[#00247D] border-l-4 border-[#00247D]">
                        <strong>No IELTS?</strong> Some universities accept Inter/DAE marks (70%+) or conduct their own internal English placement test.
                    </p>
                </div>
            </section>

             {/* Costs & Scholarships */}
            <section className="pb-10 sm:pb-12 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                    <div className={`p-3 bg-green-50 rounded-none`}>
                        <PoundSterling size={28} className="text-green-700" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#00247D]">Costs & Scholarships</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center"><Briefcase size={20} className="mr-2 text-gray-600"/> UKVI Financial Requirement</h3>
                        <p className="text-xs text-gray-500 mb-4">
                          Based on UKVI Maintenance Funds guidance (2024/2025). Used for visa applications.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600 text-sm sm:text-base">Average Tuition Fee</span>
                                <span className="font-bold text-[#1A1A1A] text-sm sm:text-base">£12,000 - £16,000 / year</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-600 text-sm sm:text-base">Initial Deposit</span>
                                <span className="font-bold text-[#1A1A1A] text-sm sm:text-base">£3,000 - £8,000</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-100 pb-2">
                                <div className="flex flex-col">
                                  <span className="text-gray-600 text-sm sm:text-base">London Living (9 Months)</span>
                                  <span className="text-xs text-gray-400">£1,334 per month</span>
                                </div>
                                <span className="font-bold text-[#1A1A1A] text-sm sm:text-base">£12,006</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-100 pb-2">
                                <div className="flex flex-col">
                                  <span className="text-gray-600 text-sm sm:text-base">Outer London (9 Months)</span>
                                  <span className="text-xs text-gray-400">£1,023 per month</span>
                                </div>
                                <span className="font-bold text-[#1A1A1A] text-sm sm:text-base">£9,207</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-none">
                         <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center text-[#D32F2F]"><Award size={20} className="mr-2"/> Scholarships</h3>
                         <p className="text-gray-600 mb-4 text-sm">Various partial scholarships are available for international students based on academic merit.</p>
                         <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0"/> <span><strong>Vice-Chancellor's Scholarship:</strong> Up to £3,000 off tuition.</span></li>
                            <li className="flex items-start"><CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0"/> <span><strong>Early Bird Discount:</strong> £500 - £1,000 discount for early deposit.</span></li>
                            <li className="flex items-start"><CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0"/> <span><strong>Chevening Scholarship:</strong> Full funding (Highly competitive).</span></li>
                            <li className="flex items-start"><CheckCircle size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0"/> <span><strong>Commonwealth Scholarship:</strong> For developing countries.</span></li>
                         </ul>
                    </div>
                </div>
            </section>

             {/* Documents Checklist */}
            <section className="pb-10 sm:pb-12 border-b border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gray-100 rounded-none">
                  <FileText size={28} className="text-[#00247D]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#00247D]">Document Checklist</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-6 border border-gray-200 hover:border-[#D32F2F] transition-colors">
                    <h4 className="font-bold text-lg mb-4 text-[#1A1A1A] border-b-2 border-[#D32F2F] inline-block pb-1">For Offer Letter</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• All Academic Transcripts & Degrees</li>
                        <li>• Passport Copy (First & Last Page)</li>
                        <li>• Two Letters of Recommendation (Academic/Professional)</li>
                        <li>• Personal Statement (SOP)</li>
                        <li>• CV / Resume (if gap exists)</li>
                        <li>• IELTS / PTE Score card</li>
                    </ul>
                 </div>
                 <div className="p-6 border border-gray-200 hover:border-[#00247D] transition-colors">
                    <h4 className="font-bold text-lg mb-4 text-[#1A1A1A] border-b-2 border-[#00247D] inline-block pb-1">For Visa Filing (CAS)</h4>
                    <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Unconditional Offer Letter</li>
                        <li>• Bank Statement (holding funds for 28 days)</li>
                        <li>• TB Test Certificate (from IOM)</li>
                        <li>• CAS Statement from University</li>
                        <li>• IHS Surcharge Payment Receipt</li>
                        <li>• Visa Application Form</li>
                    </ul>
                 </div>
              </div>
            </section>

            {/* Official Source & Disclaimer */}
            <section className="bg-blue-50 p-6 border-l-4 border-[#00247D]">
              <div className="flex items-start space-x-3">
                 <AlertTriangle size={24} className="text-[#00247D] flex-shrink-0 mt-1" />
                 <div>
                    <h3 className="font-bold text-lg text-[#00247D] mb-2">Source & Disclaimer</h3>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                       Information provided on this page, including financial requirements and eligibility, is based on general guidance for the UK Student Route Visa. Immigration rules are subject to change by UKVI.
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                       We strongly advise clarifying all details with an official source before submitting your application.
                    </p>
                    <a 
                      href="https://www.ukcisa.org.uk/student-advice/visas-and-immigration/student-route-eligibility-and-requirements/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-[#D32F2F] font-bold hover:underline text-sm sm:text-base"
                    >
                      Check UKCISA Website <ExternalLink size={16} className="ml-2"/>
                    </a>
                 </div>
              </div>
            </section>

          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Consultation CTA */}
            <div className="bg-[#00247D] p-8 text-white shadow-xl lg:sticky lg:top-24">
              <div className="w-12 h-1 bg-[#D32F2F] mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">Free Expert Consultation</h3>
              <p className="mb-6 text-gray-300 text-sm leading-relaxed">
                Navigating UK admissions can be complex. Our experienced counselors help you choose the right university and guide you through the visa process.
              </p>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center"><CheckCircle size={18} className="mr-3 text-[#D32F2F]" /> University Selection</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-3 text-[#D32F2F]" /> Scholarship Assessment</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-3 text-[#D32F2F]" /> SOP Editing Support</li>
                <li className="flex items-center"><CheckCircle size={18} className="mr-3 text-[#D32F2F]" /> Credibility Interview Prep</li>
              </ul>
              <Link 
                to="/study-assessment" 
                className="block w-full py-4 bg-[#D32F2F] text-white font-bold text-center hover:bg-red-700 transition uppercase tracking-wide text-sm"
              >
                Book Appointment
              </Link>
            </div>

            {/* Accommodation Info */}
            <div className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-xl mb-4 text-[#1A1A1A] flex items-center"><Home size={20} className="mr-2 text-[#00247D]"/> Accommodation</h3>
                <p className="text-sm text-gray-600 mb-4">
                    We assist students in finding safe and affordable housing.
                </p>
                <div className="space-y-3">
                    <div className="bg-gray-50 p-3 text-sm border-l-2 border-[#1A1A1A]">
                        <strong>University Halls:</strong> On-campus, convenient, bills included. £130-£200/week.
                    </div>
                    <div className="bg-gray-50 p-3 text-sm border-l-2 border-[#1A1A1A]">
                        <strong>Private Rentals:</strong> Shared houses, cheaper. £80-£150/week (plus bills).
                    </div>
                </div>
            </div>

            {/* Part Time Work */}
            <div className="bg-gray-50 p-6 border-t-4 border-[#00247D]">
                <h3 className="font-bold text-lg mb-4 text-[#00247D]">Working in UK</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Term Time:</strong> 20 hours per week</li>
                    <li>• <strong>Holidays:</strong> Full-time (40 hours)</li>
                    <li>• <strong>Min Wage:</strong> £8.60 - £11.44 / hour (Age dependent)</li>
                </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default StudyUK;