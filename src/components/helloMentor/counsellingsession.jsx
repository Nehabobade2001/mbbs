import React from 'react';
import ShimmerButton from '../magicui/shimmer-button';

const CounsellingSection = () => {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Text Section */}
        <div className="flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-[#3e5ba9] mb-4 font-poppins">
            Learn More!
          </h2>
          <p className="text-lg text-black mb-6 font-poppins">
            Attend a <span className="text-[#f6c16f] font-semibold">FREE 1-to-1 Counselling Session.</span>
          </p>


          <a href="#book-now" className="inline-block text-white py-2 px-6 rounded-full text-lg font-semibold  transition duration-300">
            <ShimmerButton>

            Book Now
            </ShimmerButton>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
          src='/asp_png.png'
            alt="Counselling session"
            className="rounded-2xl shadow-lg object-cover w-full h-72 md:h-full bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CounsellingSection;
