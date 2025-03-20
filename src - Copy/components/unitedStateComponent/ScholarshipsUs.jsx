import React from 'react';
import { Coins } from 'lucide-react';

const ScholarshipItem = ({ name }) => (
  <div className="flex items-center mb-3 p-2 rounded-md transition duration-200">
    <Coins className="w-5 h-5 mr-2 text-yellow-500" />
    <span className="text-gray-700 hover:text-blue-600 cursor-pointer">{name}</span>
  </div>
);

const UsScholarships = () => {
  const scholarships = [
    "United State Chevening Scholarships for International Scholarships",
    "A.S Hornby Educational Trust Scholarship",
    "Rhodes Scholarship",
    "Charles Wallace United State Trust Scholarships (CWIT)",
    "Inlaks Scholarships",
    "Erasmus Mundus Joint Masters Degree Scholarship",
    "Felix Scholarships",
    "Commonwealth Scholarship and Fellowship Plan",
    "Dr. Manmohan Singh Scholarships"
  ];

  return (
    <div style={{ backgroundColor: 'rgb(166 246 255)' }} className="p-8  rounded-xl">
      <div className='max-w-6xl mx-auto'>
        <h2 className="text-3xl font-bold mb-4 text-center text-[#233871]">Scholarships to Study in United State</h2>
        
        <p className="text-gray-600 mb-6 text-center">
          There are various scholarships offered by the United State government, universities, and private organizations to support the education of
          international students. Here is a list of the most popular scholarships to study in United State:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 py-8 px-8">
          {scholarships.map((scholarship, index) => (
            <ScholarshipItem key={index} name={scholarship} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsScholarships;
