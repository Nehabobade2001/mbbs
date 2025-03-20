import React from 'react';

const MedicalMentorHero = () => {
  return (
    <div className="relative h-screen mt-20">
      <div className="absolute inset-0 bg-gray-900">
        <img
          src="https://hellomentor.in/partnership/bgimg.avif"
          alt="Group photo of mentors"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
        {/* Logo and Mega Event */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#f6c16f] rounded-tl-2xl rounded-br-2xl flex items-center justify-center mr-2">
              <div className="w-8 h-8 bg-[#233871] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-[#233871] font-poppins">medical</span>
              <br />
              <span className="text-black font-poppins">mentor</span>
            </div>
          </div>
          <div className="bg-[#233871] font-poppins text-white px-4 py-2 rounded-bl-3xl rounded-tr-3xl font-bold transform rotate-3">
            EXCLUSIVE
            <br />
            MEGA EVENT
          </div>
        </div>

        {/* Main content */}
        <h1 className="text-2xl font-poppins sm:text-5xl md:text-6xl font-bold text-center mb-4">
          A Big Dream Needs A <span className="text-[#f6c16f]">Big Team!</span>
        </h1>
        <p className="text-xl text-center mb-8 font-poppins text-white">
          We can change the future together, one student at a time. Find out how.
        </p>
        <button className="bg-[#233871] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#2338718a] transition duration-300">
          Get in touch
        </button>

        {/* Bottom card */}
        <div className="absolute bottom-8 left-8 right-8 bg-white bg-opacity-90 text-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2 font-poppins">
            Transformative Partnership: An <span className="text-[#f6c16f]">invitation to collaborate</span>
          </h2>
          <p className="text-sm text-black font-poppins">
            As mentors, our role in students' lives is pivotal. Together, we can amplify our impact. Your academic excellence combined with our
            mentoring programs can pave the path to students' dream colleges — a crucial first step in their journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalMentorHero;
