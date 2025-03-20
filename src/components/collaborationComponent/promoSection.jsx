import React from 'react';

const PromoSection = () => {
  return (
    <div className="bg-[#fff5e9] py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 px-4 md:px-8">
        
        {/* Left side: Text content */}
        <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-lg font-poppins">
          <h2 className="text-3xl font-bold mb-4 text-[#233871]"> {/* Updated text color */}
            Learn More!
          </h2>
          <p className="text-xl text-black mb-6">
            Attend a <span className="text-[#f6c16f] font-semibold">FREE 1-to-1 Counselling Session</span>. {/* Updated text color */}
          </p>
          <button className="px-6 py-3 bg-[#233871] text-white rounded-full font-semibold hover:bg-[#2338718a] transition-all">
            Book Now
          </button>
        </div>

        {/* Right side: Video/Image */}
        <div className="md:w-1/2">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="Counselling Session Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PromoSection;
