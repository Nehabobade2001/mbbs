import React from 'react';
import { Play, ChevronRight } from 'lucide-react';
import image1 from "./managementassets/placeholder (1).png";
import image2 from"./managementassets/placeholder.png";

const ManagementProgram = () => {
  const features = [
    {
      title: "Comprehensive Curriculum",
      description: "Learn essential management theories and practices that prepare you for senior leadership"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with peers, alumni, and industry professionals to build a strong professional"
    },
    {
      title: "Experienced Faculty",
      description: "Benefit from industry-lead mentorship from industry leaders with exceptional skill-sets"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-navy-800 leading-tight">
            Unlock Your Potential<br />
            with Our Management<br />
            Program
          </h1>
          
          <p className="text-gray-600">
            Gain practical tools and knowledge to thrive in today's competitive business environment.
          </p>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-navy-800 text-white px-6 py-3 rounded-lg hover:bg-navy-900 transition-colors">
              Learn More
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <button className="flex items-center gap-2 text-navy-800 px-6 py-3 hover:bg-gray-100 rounded-lg transition-colors">
              <Play className="w-4 h-4" />
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={image1}
            alt="Business meeting"
            className="rounded-lg shadow-md w-full object-cover h-[400px]"
          />
          <img
            src={image2}
            alt="Mentorship session"
            className="rounded-lg shadow-md w-full object-cover h-[400px] mt-8"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div 
            key={feature.title} 
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-navy-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add custom colors to extend Tailwind's theme
const customColors = {
  navy: {
    800: '#1a237e',
    900: '#0d1b4a',
  }
};

export default ManagementProgram;