import React from 'react';

const GlobalCitizens = () => {
  return (
    <div 
      className="relative overflow-auto pb-16" 
      style={{ 
        backgroundImage: 'url(/abtbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
      }}
    >
      <div className="flex items-center justify-center h-full px-6 md:px-16 "> 
        <div className="text-black max-w-lg text-center"> 
          
          {/* Mission Statement */}
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-[#233871] font-poppins"> {/* Poppins font for headings */}
            Our Mission
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#233871] font-poppins"> {/* Poppins font for headings */}
            We are building the <span className="text-[#f6c16f]">global citizens</span> <br /> of tomorrow
          </h2>
          
          {/* Flags */}
          <div className="flex space-x-4 mt-4 justify-center"> {/* Added justify-center for center alignment */}
            <img src="https://assets.leverageedu.com/about-us/UK.png" alt="UK Flag" className="w-12 h-auto md:w-16" />
            <img src="https://assets.leverageedu.com/about-us/Canada.png" alt="Canada Flag" className="w-12 h-auto md:w-16" />
            <img src="https://assets.leverageedu.com/about-us/US.png" alt="US Flag" className="w-12 h-auto md:w-16" />
            <img src="https://assets.leverageedu.com/about-us/Australia.png" alt="Australia Flag" className="w-12 h-auto md:w-16" />
          </div>
          <p className="mt-2 text-gray-500">and more</p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-[#233871] text-white font-semibold rounded-full hover:bg-[#2338718a] transition duration-300">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlobalCitizens;
