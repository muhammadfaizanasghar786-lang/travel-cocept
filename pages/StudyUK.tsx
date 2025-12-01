import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, FileText, CheckCircle } from 'lucide-react';

const StudyUK: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study in the United Kingdom</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your gateway to world-class education. Complete visa facilitation and university admission guidance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Why UK? */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-red-100 rounded-lg text-red-600">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Why Study in the UK?</h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The UK offers a world-renowned education system with qualifications that can make a real difference to your future. It attracts over 600,000 international students each year to a variety of programmes, ranging from English language courses to PhDs.
              </p>
              <ul className="space-y-2">
                {['World-class universities', 'Shorter duration of courses (1 year Masters)', 'Work while you study (20 hours/week)', 'Post-study work visa (PSW)'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">The Admission Process</h2>
              </div>
              
              <div className="relative border-l-4 border-brand-primary/20 ml-3 space-y-8 pl-8 py-2">
                <div className="relative">
                  <div className="absolute -left-[41px] bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="font-bold text-lg mb-1">Choose Your Course</h3>
                  <p className="text-gray-500 text-sm">Select from thousands of courses at universities across England, Scotland, Wales and Northern Ireland.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <h3 className="font-bold text-lg mb-1">Prepare Documents</h3>
                  <p className="text-gray-500 text-sm">Gather academic transcripts, SOP, recommendation letters, and IELTS/PTE scores.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <h3 className="font-bold text-lg mb-1">Apply & Offer</h3>
                  <p className="text-gray-500 text-sm">We submit your application. Once accepted, you receive a CAS (Confirmation of Acceptance for Studies).</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <h3 className="font-bold text-lg mb-1">Visa Application</h3>
                  <p className="text-gray-500 text-sm">Apply for the Student Visa (Tier 4) with proof of funds and CAS.</p>
                </div>
              </div>
            </section>

            {/* Documents Checklist */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-brand-accent/20 rounded-lg text-brand-accent">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Required Documents</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Academic</h4>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                        <li>All educational transcripts</li>
                        <li>Degrees / Certificates</li>
                        <li>English proficiency (IELTS/PTE)</li>
                    </ul>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Personal & Financial</h4>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                        <li>Valid Passport</li>
                        <li>TB Test Report</li>
                        <li>Bank Statement (28 days maturity)</li>
                        <li>Statement of Purpose (SOP)</li>
                    </ul>
                 </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Need Free Consultation?</h3>
              <p className="mb-6 text-indigo-100 text-sm">
                Our education counselors are ready to help you navigate the UK admission process.
              </p>
              <Link to="/booking" state={{ type: 'study' }} className="block w-full py-3 bg-white text-brand-primary font-bold text-center rounded-lg hover:bg-gray-100 transition">
                Book Appointment
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-lg mb-4">Top Destinations</h3>
                <div className="flex flex-wrap gap-2">
                    {['London', 'Manchester', 'Birmingham', 'Glasgow', 'Edinburgh', 'Leeds'].map(city => (
                        <span key={city} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{city}</span>
                    ))}
                </div>
            </div>
            
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <img src="https://picsum.photos/id/192/400/300" alt="UK University" className="w-full h-40 object-cover rounded-lg mb-4"/>
                <p className="text-xs text-gray-400 italic">"Travel Concepts helped me get my visa for University of Hertfordshire in just 3 weeks!" - Ali H.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudyUK;