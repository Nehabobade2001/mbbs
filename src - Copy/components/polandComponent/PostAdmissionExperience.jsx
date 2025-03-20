import React, { useState } from 'react';
import StandRews from '../../Images/Destination/standrewsuniversity.png.png';
import logo2 from '../../Images/Destination/logo_1681394934810.png.png';
import Ise from '../../Images/Destination/lse.png.png';
import Durham from '../../Images/Destination/durhamuniversity.png.png';
import Cambridge from '../../Images/Destination/cambridgeuniversity.png.png';

const TabButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-blue-900 text-white'
        : 'bg-white text-gray-600 hover:bg-gray-100'
    } rounded-full md:rounded-none md:border-none md:flex-1 text-center`}
  >
    {children}
  </button>
);

const AdmissionInfo = () => {
  const [activeTab, setActiveTab] = useState('AFTER 12TH / UG');

  const tabs = ['AFTER 12TH / UG', 'MASTERS', 'MBA'];

  // Tab content data
  const tabContent = {
    'AFTER 12TH / UG': {
      howToApply: `Undergraduate applications to UK universities are processed through the UCAS (Universities and Colleges Admissions Service) platform. UCAS allows students to apply to multiple universities in one place, streamlining the application process. You must track your application status, submit required documents, academic records, and references, securing a smooth admission.`,
      costEstimate: `Tuition fees for studying in the UK range from £10,000 to £38,000 per year depending on the course and university. This converts to approximately ₹9,00,000 - ₹35,00,000 annually for Indian students.`,
      popularPrograms: [
        { icon: '👥', name: 'Business' },
        { icon: '🌿', name: 'Natural Sciences' },
        { icon: '⚙️', name: 'Engineering and Technology' },
        { icon: '💊', name: 'Medicine' },
        { icon: '⚖️', name: 'Law' },
        { icon: '🤝', name: 'Social Sciences' },
      ],
      universities: [
        StandRews,
        logo2,
        Ise,
        Durham,
        Cambridge
      ],
    },
    MASTERS: {
      howToApply: `Master's applications are typically made directly to each university through their respective online portals. Each university has its own requirements and deadlines.`,
      costEstimate: `Master's programs in the UK typically cost between £15,000 to £45,000 per year, varying by program and institution.`,
      popularPrograms: [
        { icon: '📊', name: 'Data Science' },
        { icon: '💻', name: 'Computer Science' },
        { icon: '🔬', name: 'Research Programs' },
        { icon: '📈', name: 'Finance' },
        { icon: '🎨', name: 'Design' },
        { icon: '🧬', name: 'Biotechnology' },
      ],
      universities: [
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
      ],
    },
    MBA: {
      howToApply: `MBA applications require GMAT/GRE scores, work experience, and often interviews. Applications are made directly to business schools.`,
      costEstimate: `MBA programs in the UK range from £20,000 to £60,000 for the full program, with additional living expenses.`,
      popularPrograms: [
        { icon: '💼', name: 'General MBA' },
        { icon: '🌐', name: 'International Business' },
        { icon: '📱', name: 'Technology Management' },
        { icon: '🏦', name: 'Finance' },
        { icon: '🎯', name: 'Marketing' },
        { icon: '⚡', name: 'Leadership' },
      ],
      universities: [
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
        '/api/placeholder/100/100',
      ],
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Admission Timeline Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Admission Timeline</h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-sm border rounded-full md:rounded-lg overflow-hidden mb-8 w-full">
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* How to Apply Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">How to Apply</h3>
          <p className="text-gray-600 leading-relaxed">
            {tabContent[activeTab].howToApply}
          </p>
        </div>

        {/* Cost Estimate Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Cost Estimate</h3>
          <p className="text-gray-600 leading-relaxed">
            {tabContent[activeTab].costEstimate}
          </p>
        </div>

       {/* Popular Programs Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Popular Programs</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tabContent[activeTab].popularPrograms.map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-50 transition-transform transform hover:scale-105 shadow hover:shadow-md"
            >
              <span className="text-4xl mb-2">{program.icon}</span>
              <span className="text-gray-700 text-center">{program.name}</span>
            </div>
          ))}
        </div>
      </div>


        {/* Popular Universities Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Popular Universities</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {tabContent[activeTab].universities.map((uni, index) => (
              <img
                key={index}
                src={uni}
                alt={`University ${index + 1}`}
                className="w-20 h-20 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionInfo;
