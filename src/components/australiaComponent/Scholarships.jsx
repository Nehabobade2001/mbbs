import React from 'react';
import R1 from '../../Images/Destination/R1.png';
import R2 from '../../Images/Destination/R2.png';
import R3 from '../../Images/Destination/R3.png';

const UniversityCard = ({ 
  name, 
  shortName, 
  location, 
  ielts, 
  ranking, 
  imageUrl, 
  accentColor 
}) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden h-[400px] transition-transform hover:scale-[1.02]">
      {/* Background Image */}
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
      
      {/* Content */}
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col">
        {/* Top Section */}
        <div>
          <span className="inline-block px-3 py-1 bg-emerald-400 text-white text-xs md:text-sm rounded-full">
            University
          </span>
          <p className="text-white mt-1 text-xs md:text-sm">{location}</p>
        </div>

        {/* University Name */}
        <div className="mt-2 md:mt-4">
          <h2 className="text-white text-xl md:text-2xl font-bold">The University of</h2>
          <h3 className={`text-2xl md:text-3xl font-bold ${accentColor}`}>{shortName}</h3>
        </div>

        {/* Stats */}
        <div className=" space-y-2 md:space-y-3">
          <div className="flex items-center text-white gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-8-6h16" />
            </svg>
            <span className="text-xs md:text-sm">{ielts} Minimum IELTS Required</span>
          </div>
          
          <div className="flex items-center text-white gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-4 9 4v12l-9 4-9-4V6z" />
            </svg>
            <span className="text-xs md:text-sm">{ranking} Ranking</span>
          </div>
          
          {/* Apply Button */}
          <button className="w-full bg-white text-blue-900 py-1 rounded-lg mt-3 md:mt-4 hover:bg-gray-100 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

const UniversityShowcase = () => {
  const universities = [
    {
      name: "The University of Manchester",
      shortName: "MANCHESTER",
      location: "Manchester, United Kingdom",
      ielts: 6,
      ranking: 32,
      imageUrl: R1,
      accentColor: "text-pink-500"
    },
    {
      name: "University of Warwick",
      shortName: "WARWICK",
      location: "Coventry, United Kingdom",
      ielts: 6,
      ranking: 32,
      imageUrl: R2,
      accentColor: "text-emerald-400"
    },
    {
      name: "University of St Andrews",
      shortName: "ANDREWS",
      location: "St. Andrews, United Kingdom",
      ielts: 6,
      ranking: 32,
      imageUrl: R3,
      accentColor: "text-red-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </div>
      
      {/* Find Your Dream University Button */}
      <div className="text-center mt-8 md:mt-12">
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
          Find Your Dream University
        </button>
      </div>
    </div>
  );
};

export default UniversityShowcase;
