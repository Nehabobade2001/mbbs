import React from 'react';
import BgImage from '../../Images/franceBg.webp';
import France from '../../Images/france.png';

const FranceCom = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={BgImage}
          alt="London skyline at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-normal mb-4 flex items-center">
            <span className="mr-2">
              <img
                src={France}
                alt="UK Flag"
                className="w-10 h-10 object-contain"
              />
            </span>
            <span className="text-white"> {/* Updated text color */}
              Study in France
            </span>
          </h1>

          <button className="bg-[#233871] hover:bg-[#2338718a] text-white font-semibold py-2 px-4 rounded-full transition duration-300">
            Talk to an Expert Counsellor for FREE
          </button>
        </div>
      </div>
    </div>
  );
});

export default FranceCom;
