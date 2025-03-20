import React from 'react';
import BgImage from '../../Images/Italy/italyBg.png';

const HeroSection = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src={BgImage} 
        alt="New Zealand Skyline" 
        className="absolute inset-0 h-full w-full object-cover" 
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4 px-4 pt-10 md:pt-20">
        
        {/* Main Title and Overlay */}
        <div className="relative z-10 w-full flex flex-col items-center mt-[3rem]">
          {/* Main Title */}
          <h1 
            className="text-[44px] md:text-[115px]  uppercase tracking-wider z-10 relative"
            style={{
              fontFamily: 'Poppins',
              color: '#FFC300', 
              letterSpacing: '0.02em',
            }}
          >
            STUDY IN ITALY 
          </h1>

          {/* Subtitle with Blurred Background */}
          <div className="relative z-20 backdrop-blur-sm p-3 rounded-md w-full md:w-[60%] bg-black bg-opacity-50 md:-mt-[4rem]">
              <p 
                className="text-lg  text-white"
                style={{
                  fontFamily: 'Poppins',
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                }}>
                Connect With A Professional Counselor For Free
              </p>
              <p className="text-lg md:text-xl mt-1 text-white"
                style={{
                  fontFamily: 'Poppins',
                  letterSpacing: '0.02em',
                }}>
                Get Free, Confidential Support From Certified Counselors To
                <br className="hidden md:block" />
                Manage Stress And Anxiety.
              </p>
            </div>

        </div>
      </div>

      {/* Gradient Overlay for the bottom fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
    </div>
  );
};

export default HeroSection;
