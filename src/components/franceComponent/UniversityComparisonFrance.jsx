import React from 'react';
import { ChevronLeft, ChevronRight, PlusCircle, GraduationCap, Award } from 'lucide-react';

const UniversityCard = ({ name, location, ielts, ranking, imageSrc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-80"> {/* Set a fixed width here for larger screens */}
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 mr-4">
        <img 
          src={imageSrc} 
          alt={`${name} logo`} 
          className="w-full h-full object-contain rounded-md" 
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#233871]">{name}</h3>
        <p className="text-sm text-[#233871]">{location}</p>
      </div>
      <PlusCircle className="ml-auto text-gray-400" size={24} />
    </div>
    <div className="flex items-center mb-2">
      <GraduationCap className="mr-2 text-[#233871]" size={20} />
      <span className="text-lg font-semibold text-[#233871]">{ielts}</span>
      <span className="text-sm text-[#233871] ml-2">Minimum IELTS Required</span>
    </div>
    <div className="flex items-center mb-4">
      <Award className="mr-2 text-[#233871]" size={20} />
      <span className="text-lg font-semibold text-[#233871]">{ranking}</span>
      <span className="text-sm text-[#233871] ml-2">Ranking</span>
    </div>
    <button className="w-full py-2 bg-white text-[#233871] border border-[#233871] rounded-md hover:bg-[#2338718a] transition-colors">
      Apply Now
    </button>
  </div>
);

const UniversityComparison = () => {
  const universities = [
    { 
      name: 'The University of Lille', 
      location: 'Lille, France', 
      ielts: 6, 
      ranking: 32,
      imageSrc: 'https://assets.leverageedu.com/school-logo/logo_1643635379279.jpeg' // Example logo
    },
    { 
      name: 'University of Paris', 
      location: 'Paris, France', 
      ielts: 6, 
      ranking: 64,
      imageSrc: 'https://assets.leverageedu.com/school-logo/uk/warwickuniversity.png' // Example logo
    },
    { 
      name: 'University of St Medicaps', 
      location: 'Marseille, France', 
      ielts: 6.5, 
      ranking: 95,
      imageSrc: 'https://assets.leverageedu.com/school-logo/uk/standrewsuniversity.png' // Example logo
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6"> {/* Increased max width of container */}
      <h1 className="text-2xl font-bold text-center mb-8 text-[#233871]">Top Universities to Study in France</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {universities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-2">
          <ChevronLeft className="text-[#233871]" size={24} />
          <ChevronRight className="text-[#233871]" size={24} />
        </div>
        <button className="px-4 py-2 bg-[#233871] text-white rounded-md hover:bg-[#2338718a] transition-colors">
          Find Your Dream University
        </button>
      </div>
    </div>
  );
};

export default UniversityComparison;
