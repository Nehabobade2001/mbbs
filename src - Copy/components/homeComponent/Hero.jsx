import React from "react";
import ShimmerButton from "../magicui/shimmer-button";
import ShimmerButtonTwo from "../magicui/shimmer-button-Two";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center bg-slate-50 overflow-hidden">
        <div
          className="absolute w-80 h-40 top-10 -left-4 z-10 md:bg-white sm:bg-none"
          style={{ clipPath: "ellipse(50% 80% at 28% 0)" }}
        ></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/edu2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black/50 to-black/30 z-5"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-24 py-10 md:py-24 gap-12">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start text-left w-full md:w-1/2 md:gap-36 gap-12">
            <p className="text-white text-center text-sm sm:text-base md:text-lg md:text-left lg:text-xl font-light leading-relaxed">
              Comprehensive Guidance for Aspiring Medical Professionals From{" "}
              <span className="font-medium">Entrance Exams</span> to{" "}
              <span className="font-medium">Admissions</span>.
            </p>
            <h1 className="text-white  text-center md:text-left text-3xl sm:text-3xl md:text-7xl lg:text-7xl font-semibold tracking-wider leading-snug">
              Your Trusted Ally in Medical Education.
            </h1>
            <div className="flex  flex-row items-center justify-start gap-6">
              <Link
                to="/about"
                className="text-white text-sm sm:text-base md:text-lg hover:text-gray-300 border-b font-normal"
              >
                Learn More →
              </Link>
              <Link
                to="/about"
                className="text-white text-sm sm:text-base md:text-lg hover:text-gray-300 border-b font-normal"
              >
                Enquire Now →
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:items-end text-right w-full md:w-1/2 md:gap-y-72">
            <p className="text-white  text-center md:text-left text-sm sm:text-base md:text-lg lg:text-xl font-light border-b leading-relaxed">
              At Aspirants Ally, we provide professional counseling and a proven
              track record. Aspirant’s Ally (MBBSWALA) offers expert guidance
              for both UG and PG medical aspirants. Plan your future with
              confidence.
            </p>
            <div className="flex flex-col items-center md:items-end gap-4 mt-6">
              <ShimmerButton>Start Your Journey Today ↗</ShimmerButton>
              <ShimmerButtonTwo>
                Take Psychometric Assessment ↗
              </ShimmerButtonTwo>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
