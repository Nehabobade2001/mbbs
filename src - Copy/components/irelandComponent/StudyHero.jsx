import React from 'react';
// <<<<<<< main
import BgImage from '../../Images/Ireland/irelandbg.jpg';
// =======
// import BgImage from '../../Images/Ireland/irelandBg.png';
// >>>>>>> ambress

const HeroSection = () => {
  return (
    <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src={BgImage} 
// <<<<<<< main
//         alt="Ireland Skyline" 
// =======
        alt="New Zealand Skyline" 
// >>>>>>> ambress
        className="absolute inset-0 h-full w-full object-cover" 
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4 px-4 pt-10 md:pt-20">
        
        {/* Main Title and Overlay */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Main Title */}
          <h1 
// <<<<<<< main
//             className="text-[28px] md:text-[60px] font-light uppercase tracking-widest z-10 relative"
//             style={{
//               fontFamily: 'Poppins',
//               color: '#FFC300', 
//               letterSpacing: '0.2em',
// =======
            className="text-[28px] md:text-[60px] font-light uppercase tracking-wider z-10 relative"
            style={{
              fontFamily: 'Poppins',
              color: '#FFC300', 
              letterSpacing: '0.02em',
// >>>>>>> ambress
            }}
          >
            STUDY IN IRELAND 
          </h1>

          {/* Subtitle with Blurred Background */}
          <div className="relative z-20 backdrop-blur-sm p-4 rounded-md w-[100%] md:w-[60%] bg-black bg-opacity-50">
            <p 
              className="text-sm md:text-lg text-white opacity-80"
              style={{
                fontFamily: 'Poppins',
                color: '#FFFFFF', 
                letterSpacing: '0.02em',
              }}>
              Connect With A Professional Counselor For Free
            </p>
            <p className="text-white text-sm md:text-lg mt-2"
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
