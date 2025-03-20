import React from 'react';
import { User, GraduationCap, ChevronRight } from 'lucide-react';

const BottomBanner = () => {
  return (
    <div className="bg-[#f6c16f] py-4 px-6 flex justify-between items-center">
      <div className='max-w-6xl mx-auto flex items-center justify-between w-full'>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-[#233871]">
            <User size={24} />
            <GraduationCap size={24} className="-ml-2" />
          </div>
          <div>
            <p className="text-[#233871] text-sm">Make Your Dream Study in POLAND</p>
            <p className="text-[#233871] font-semibold">A Reality With our Experts!</p>
          </div>
        </div>
        <button className="bg-[#233871] text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-[#2338718a] transition duration-300">
          <span>Book Your 30 Mins Session Now</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BottomBanner;
