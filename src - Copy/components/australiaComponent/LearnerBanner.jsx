import React from 'react';
import rightImage from '../../Images/Destination/Rhône.png'; // Import your right-side image here

const LearnBanner = () => {
  return (
    <div className="bg-blue-900 text-white py-10 px-4 sm:px-10 md:px-20 flex flex-col md:flex-row items-center justify-between relative rounded-lg w-[95%] mx-auto">
      {/* Text Content */}
      <div className="text-center md:text-left mb-6 md:mb-0 flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Learn from the Best Tutors</h2>
        <p className="text-sm sm:text-base text-gray-300 mb-6">
          Join our live classes for personalized guidance and effective strategies to boost your skills and confidence. 
          Enroll now to start your journey toward success!
        </p>
        <button className="bg-yellow-400 text-black px-4 sm:px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition duration-300">
          Book Your Free Demo
        </button>
      </div>

      {/* Right-Side Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <img
          src={rightImage}
          alt="Decorative pattern"
          className="w-full h-auto object-contain max-w-[250px] md:max-w-full"
        />
      </div>

    </div>
  );
};

export default LearnBanner;
