import React, { useState } from 'react';

const WebinarExplorer = () => {
  const [activeTab, setActiveTab] = useState('UG');

  // Sample data structure for UG and PG webinars
  const webinars = {
    UG: [
      {
        title: "UG Webinar 1: Introduction to Medical Studies",
        description: "A comprehensive webinar on medical studies for UG students.",
        date: "20-10-2024",
        time: "14:00",
      },
      {
        title: "UG Webinar 2: NEET UG Preparation Tips",
        description: "Expert tips for acing the NEET UG examination.",
        date: "25-10-2024",
        time: "16:00",
      }
    ],
    PG: [
      {
        title: "PG Webinar 1: NEET PG Counselling Insights",
        description: "In-depth analysis of NEET PG counseling procedures.",
        date: "18-10-2024",
        time: "12:00",
      },
      {
        title: "PG Webinar 2: Advanced Medical Research",
        description: "Exploring the latest trends and breakthroughs in medical research for PG students.",
        date: "30-10-2024",
        time: "18:00",
      }
    ]
  };

  const currentWebinars = webinars[activeTab];

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center mx-auto p-6 bg-slate-50">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#3e5ba9] mb-2 font-poppins">
          Experts <span className="text-[#f6c16f]">Speak</span>
        </h2>
        <p className="text-black text-lg font-poppins">
          Listen to the Gurus! Our experts simplify complex topics in our Knowledge Series Webinars for easy understanding.
        </p>
      </div>

      {/* Centered UG and PG tabs with enhanced styling */}
      <div className="flex justify-center items-center mb-8">
        {['UG', 'PG'].map((tab) => (
          <button
            key={tab}
            className={`px-10 py-3 font-semibold mx-2 rounded-full transition-colors duration-300 ${
              activeTab === tab
                ? 'bg-[#243771] text-white shadow-lg'
                : 'bg-white text-[#3e5ba9] border border-[#3e5ba9] hover:bg-[#3e5ba9] hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab} // Accessibility
          >
            {tab}
          </button>
        ))}
      </div>

      <h2 className="text-2xl text-black font-bold mb-8 text-center font-poppins">
        Explore our wide range of knowledge series webinars
      </h2>

      {currentWebinars.length === 0 ? (
        <div className="text-center">
          <img
            src="/api/placeholder/200/200"
            alt="No Data"
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 font-poppins">No Data Found</h3>
          <p className="text-gray-600 font-poppins">
            We're sorry, no data available at the moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-20">
          {currentWebinars.map((webinar, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#243771]">
                {webinar.title}
              </h3>
              <p className="text-black mb-4">{webinar.description}</p>
              <div className="flex justify-between text-gray-500 text-sm font-poppins">
                <span>Date: {webinar.date}</span>
                <span>Time: {webinar.time}</span>
              </div>
              <button className="mt-4 font-poppins bg-[#233871] text-white py-2 px-4 rounded-full w-full hover:bg-[#2338718a] focus:outline-none focus:ring-2 focus:ring-[#3e5ba9]">
                Register Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WebinarExplorer;
