import React from 'react';
import ShimmerButton from '../magicui/shimmer-button';
import GridPattern from '../magicui/grid-pattern';
import { cn } from '../../lib/utils';

const CounsellingCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 pt-32">
       <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_center,white,transparent,transparent)] "
        )}
      />
      {/* Main Content Card with Background Video/Image */}
      <div className="relative bg-white bg-opacity-95 rounded-[40px] shadow-xl overflow-hidden w-[90%] max-w-[1000px] h-[500px] p-8 text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="/gradu.mp4"
              type="video/mp4"
            />
            <img
              className="w-full h-full object-cover"
              src="https://media.giphy.com/media/J5wvqXBmw9Fpu/giphy.gif"
              alt="background"
            />
          </video>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col items-center pt-20">
          <h1 className="text-4xl font-bold text-[#3e5ba9] mb-4 drop-shadow-md md:text-3xl sm:text-2xl font-poppins">All India NEET PG Counselling</h1>
          <p className="text-lg text-black mb-6 max-w-xl drop-shadow-md md:text-base sm:text-sm font-poppins">
            Join our webinar for NEET counseling tips, rank analysis, competition insights, and updates on new rules and seat allocation. Maximize your score!
          </p>

          {/* Event Details */}
          <div className="text-xl font-semibold text-black mb-6 md:text-lg sm:text-base font-poppins">
            <p>On Zoom Live: <span className="text-[#f6c16f]">13th Oct 2024 by 7:00 PM</span></p>
            <p>Secure your spot now!</p>
          </div>

          {/* Register Button */}

          <button className="bg-[#233871] hover:bg-[#2338718a] font-poppins text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg md:py-2 md:px-4 sm:py-2 sm:px-3"></button>

          <button className=" text-white  py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg md:py-2 md:px-4 sm:py-2 sm:px-3">
            <ShimmerButton>

            Register Now
            </ShimmerButton>
          </button>
        </div>

        {/* Attendees Card */}
        <div className="absolute bottom-6 left-6 bg-gray-800 p-6 rounded-[25px] shadow-xl transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl animate-bounce">
          <p className="text-4xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg font-poppins">3,75,897+</p>
          <p className="text-md text-white mt-2 font-semibold tracking-wide font-poppins">Attendees</p>
        </div>
      </div>
    </div>
  );
};

export default CounsellingCard;
