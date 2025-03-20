import React from 'react';
import { ChevronRight } from 'lucide-react';

const JapanCommitmentBanner = () => {
  return (
    <div className="bg-blue-50 py-4 px-6 flex justify-between items-center">
      <div className='max-w-6xl mx-auto flex items-center justify-between w-full'>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-[#233871]">
            <img
              src='https://publicassets.leverageedu.com/uk-agent-img.png'
              alt="Agent"
              className="w-16 h-16 object-contain" // Set explicit width and height
            />
          </div>
          <div>
            <p className="text-[#233871] text-sm">Our Commitment to Japan's Agent Quality Framework</p>
            <p className="text-[#233871] font-semibold">Reflects our Student-First approach</p>
          </div>
        </div>
        <button className="bg-[#233871] text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-[#2338718a] transition duration-300">
          <span>Know More</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default JapanCommitmentBanner;
