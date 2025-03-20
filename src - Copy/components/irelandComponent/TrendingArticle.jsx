import React from 'react';
// <<<<<<< main
// import Banner46 from '../../Images/Ireland/Rectangle1.jpg';
// import Banner43 from '../../Images/Ireland/Rectangle2.jpg';
// import Banner45 from '../../Images/Ireland/Rectangle3.jpg';
// =======
import Banner46 from '../../Images/Destination/Rectangle 46.png';
import Banner43 from '../../Images/Destination/Rectangle 43.png';
import Banner45 from '../../Images/Destination/Rectangle 45.png';
// >>>>>>> ambress

const UKTrendingArticles = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-auto md:h-[55vh]" style={{ backgroundColor: '#F4F6FF' }}>
      {/* Moving Background Text */}
      <div className="absolute text-4xl md:text-7xl font-bold text-muted uppercase tracking-widest overflow-hidden w-full">
        <div className="animate-marquee whitespace-nowrap text-[#F4F6FF]">
          <span className="mx-4 text-shadow-lg font-bold text-[80px] md:text-[180px]" style={{ textShadow: '8px 8px 6px black', WebkitTextStroke: '1px black' }}>Explore the World</span>
          <span className="mx-4 text-shadow-lg font-bold text-[80px] md:text-[180px]" style={{ textShadow: '8px 8px 6px black', WebkitTextStroke: '1px black' }}>Study Abroad</span>
          <span className="mx-4 text-shadow-lg font-bold text-[80px] md:text-[180px]" style={{ textShadow: '8px 8px 6px black', WebkitTextStroke: '1px black' }}>Discover History</span>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 gap-4 md:gap-20 mt-10">
        <div className="w-4/5 md:w-1/3">
          <img
            src={Banner46}
// <<<<<<< main
//             alt="Image1"
// =======
            alt="Image 1"
// >>>>>>> ambress
            className="rounded-lg w-full h-64 md:h-80 mt-4 md:mt-[44px]"
          />
        </div>

        <div className="w-4/5 md:w-1/3">
          <img
            src={Banner43}
// <<<<<<< main
//             alt="Image2"
// =======
            alt="Image 2"
// >>>>>>> ambress
            className="rounded-lg w-full h-64 md:h-80 mb-4 md:mb-[44px]"
          />
        </div>

        <div className="w-4/5 md:w-1/3">
          <img
            src={Banner45}
// <<<<<<< main
//             alt="Image3"
// =======
            alt="Image 3"
// >>>>>>> ambress
            className="rounded-lg w-full h-64 md:h-80 mt-4 md:mt-[44px]"
          />
        </div>
      </div>

      {/* Learn More Button */}
      <div className="absolute bottom-10 md:bottom-10 mt-4 md:mt-0">
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary-hover">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default UKTrendingArticles;
