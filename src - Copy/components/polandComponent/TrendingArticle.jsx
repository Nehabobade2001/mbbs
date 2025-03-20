import React from 'react';
import Banner46 from '../../Images/Poland/Rectangle 46.png';
import Banner43 from '../../Images/Poland/Rectangle 43.png';
import Banner45 from '../../Images/Poland/Rectangle 47.png';

// Define the scrolling text animation styles
const scrollingTextStyles = {
  position: 'absolute',
  width: '100%',
  whiteSpace: 'nowrap',
  animation: 'scroll-left-right 10s linear infinite',
  overflow: 'hidden',  
};

// Add the keyframes for scrolling left to right and then right to left
const styles = `
@keyframes scroll-left-right {
  0% {
    transform: translateX(100%); /* Start from the right */
  }
  50% {
    transform: translateX(-100%); /* Move to the left */
  }
  100% {
    transform: translateX(100%); /* Go back to the right */
  }
}
`;

const UKTrendingArticles = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-auto md:h-[55vh]" style={{ backgroundColor: '#F4F6FF', overflow: 'hidden' }}>
      {/* Inject the keyframe styles into the document */}
      <style>{styles}</style>

      {/* Moving Background Text - Scrolling Left and Right */}
      <div style={scrollingTextStyles} className="overflow-hidden"> {/* Ensure this container doesn't cause overflow */}
        <span className="mx-4 text-shadow-lg font-bold text-[80px] md:text-[180px]" style={{ color: '#F4F6FF', textShadow: '8px 8px 6px black', WebkitTextStroke: '1px black' }}>
          Explore the World
        </span>
        <span className="mx-4 text-shadow-lg font-bold text-[80px] md:text-[180px]" style={{ color: '#F4F6FF', textShadow: '8px 8px 6px black', WebkitTextStroke: '1px black' }}>
          Study Abroad
        </span>
        <span className="mx-4 text-shadow-lg font-bold text-[80px] md:text-[180px]" style={{ color: '#F4F6FF', textShadow: '8px 8px 6px black', WebkitTextStroke: '1px black' }}>
          Discover History
        </span>
      </div>

      {/* Image Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 gap-4 md:gap-20">
        <div className="w-4/5 md:w-1/3">
          <img
            src={Banner46}
            alt="Image1"
            className="rounded-lg w-full h-64 md:h-80 mt-4 md:mt-[44px]"
          />
        </div>

        <div className="w-4/5 md:w-1/3">
          <img
            src={Banner43}
            alt="Image2"
            className="rounded-lg w-full h-64 md:h-80 mb-4 md:mb-[44px]"
          />
        </div>

        <div className="w-4/5 md:w-1/3">
          <img
            src={Banner45}
            alt="Image3"
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
