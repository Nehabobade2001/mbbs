import React from 'react';

const SectionTwo = () => {
  return (
    // <div className="relative bg-gradient-to-br from-blue-100 to-slate-50 w-full h-full">
    <div className="relative bg-slate-50 w-full h-full">
      {/* Background image for this section only */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 w-full h-full"
        style={{
          backgroundImage: "url('https://assets.leverageedu.com/about-us/our-team-bg-web.png')",
          opacity: 0.1,
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-16">

        {/* Split content into two portions */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Text content - Left side */}
          <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
        <h2 className="text-3xl font-semibold text-[#233871] mb-4">Our Story</h2>
            <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">This is us</h1>
            <p className="text-gray-700 mb-6">
              Leverage Edu helps students figure out what they should do and where they should be at
              - wherever that be in the world - to realise their full potential. It helps students
              navigate & assess their journey thus far, matches them to personalised mentors,
              counsels them towards their higher education dream with an employability lens, and
              makes sure that everyone punches way above their weight to make dreams come
              alive and truly be able to level up.
            </p>
            <button className="bg-[#233871] text-white px-6 py-2 rounded-full hover:bg-[#2338718a] transition-colors flex items-center">
              Know More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Video container - Right side */}
          <div className="md:w-1/2 p-4 md:p-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className=" p-4">
      {/* <ImageCloud imageUrls={profileImageUrls} /> */}
      {/* <img src="/asp_png.png" alt="Google Logo" className="w-full h-full" /> */}
      <video
        autoPlay
        muted
        loop
        src="/edu.mp4"
        alt="Leverage Edu video thumbnail"
        className="w-full h-full rounded-lg"
      />
    </div>
  </div>
          </div>
        </div>
      </div>

      {/* Components Section */}
     
    </div>
  );
};

export default SectionTwo;
