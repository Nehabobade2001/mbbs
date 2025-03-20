import React from 'react';
import bg1 from "./managementassets/Group 48.png";
import bg2 from "./managementassets/Group 49.png";
import bg3 from "./managementassets/Group 50.png";
import bg4 from "./managementassets/Group 52.png";
import bg5 from "./managementassets/Group 53.png";

const ManagementSection = () => {
  const stats = [
    { value: '13k+', label: 'Successful Admission' },
    { value: '99.8%', label: 'Students Satisfaction' },
    { value: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="max-w-8xl mx-auto p-6 py-20 px-8 bg-white pt-[10rem]">
      <div className="relative grid lg:grid-cols-2 gap-8">
        {/* Management Overlay Text */}
        <h1 className="absolute inset-0 flex text-9xl font-bold text-gray-800 z-20 pointer-events-none text-center ">
          MANAGEMENT
        </h1>

        {/* Left Content */}
        <div className="space-y-6 relative z-30 lg:mt-32 mt-32 px-4">
          <p className="text-gray-600 leading-relaxed">
            In today's highly competitive education landscape, proper guidance plays 
            a vital role. With expert advisors, personalized guidance, and comprehensive resources, we 
            enable the journey from initial application to admissions decisions empowering future medical 
            leaders with full dedication.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            We progress working within a professional core by providing expert advisors, personalized 
            guidance, career consultation, medical admissions, interview preparation, and application 
            journey. Our dedicated team offers tailored insights from career selection to 
            application process, ensuring your success.
          </p>
          
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
            Learn More
          </button>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src={bg1}
              alt="Management"
              className="rounded-lg shadow-md w-full object-cover h-48"
            />
            <img
              src={bg2}
              alt="Management"
              className="rounded-lg shadow-md w-full object-cover h-48"
            />
             <img
              src={bg1}
              alt="Management"
              className="rounded-lg shadow-md w-full object-cover h-48"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img
              src={bg3}
              alt="Management"
              className="rounded-lg shadow-md w-full object-cover h-64"
            />
            <img
              src={bg4}
              alt="Management"
              className="rounded-lg shadow-md w-full object-cover h-48"
            />
            <img
              src={bg5}
              alt="Management"
              className="rounded-lg shadow-md w-full object-cover h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementSection;
