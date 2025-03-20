import React, { useState } from 'react';
import ShimmerButton from '../magicui/shimmer-button';

const OfferingCard = ({ logo, name, isActive, onClick }) => (
  <div
    className={`shadow-lg cursor-pointer rounded-full p-4 transition-all duration-300 flex items-center justify-center ${isActive ? 'bg-[#F6C16E] shadow-lg' : 'bg-white'}`}
    onClick={onClick}
    style={{ width: '135px', height: '135px' }} // Fixed size for circular shape
  >
    <img src={logo} alt={name} className="w-3/5 h-3/5 object-contain" /> {/* Adjust image size to fit inside */}
  </div>
);

const OurOfferings = () => {
  const offerings = [
    { name: 'Leverage Edu', logo: 'https://images.leverageedu.com/assets/img/logo_blue.svg', description: 'Study abroad platform serving over 10 million+ monthly visitors' },
    { name: 'Univalley.ai', logo: 'https://publicassets.leverageedu.com/uniLogoGreenWithGrey.png', description: 'AI-powered university and course recommendation platform' },
    { name: 'Fly Finance', logo: 'https://lepublicassets.leverageedu.com/flyFinanceLogo.png', description: 'International education financing solutions' },
    { name: 'AI University Course Finder', logo: 'https://images.leverageedu.com/assets/img/course-finder/coursefinderlogo03.png', description: 'AI-driven course and university matching tool' },
    { name: 'Fly Homes', logo: 'https://lepublicassets.leverageedu.com/flyHomesLogo.png', description: 'Student accommodation services for international students' },
    { name: 'Leverage LIVE', logo: 'https://lepublicassets.leverageedu.com/leverageLiveLogo.png', description: 'Live online classes and events platform' },
  ];

  const [activeOffering, setActiveOffering] = useState(offerings[0]);

  return (
    <div className="bg-slate-50 py-16 relative overflow-hidden ">
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://assets.leverageedu.com/about-us/our-team-bg-web.png')" }}></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-[#233871] mb-4">Our Offerings</h2>
        <h3 className="text-4xl font-semibold text-black mb-12 max-w-3xl">
          We <span className="text-[#f6c16f]">simplify international admissions</span> for students, universities & our partners
        </h3>

        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
          {/* Left side - Offering cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full lg:w-2/3 ">
            {offerings.map((offering) => (
              <OfferingCard
                key={offering.name}
                logo={offering.logo}
                name={offering.name}
                isActive={activeOffering.name === offering.name}
                onClick={() => setActiveOffering(offering)}
              />
            ))}
          </div>

          {/* Right side - Active offering details */}
          <div className="w-full lg:w-1/3 bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg ">
            <img src={activeOffering.logo} alt="Rocket" className="w-32 h-32 object-contain mb-6" />
            <h4 className="text-2xl font-bold text-[#233871] mb-4">{activeOffering.name}</h4>
            <p className="text-gray-600 mb-6">{activeOffering.description}</p>
            <ShimmerButton>Know More →</ShimmerButton>
            {/* <button className="bg-[#233871] text-white px-6 py-2 rounded-full hover:bg-[#2338718a] transition-colors flex items-center">
              Know More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
