import React from "react";
import "./style.scss";

const Hero = () => {
  return (
    <>
      <div className="hero-service h-full">
        <div className="container min-h-[700px]  h-full flex justify-center items-center text-center flex-col">
          <div>
            <p class="text-[3.5rem] leading-tight text-[#3e5ba9] whitespace-pre-wrap font-semibold">
              Transparent Pricing. Defined Goals
              <span class="text-[#f6c16f]">.</span>
            </p>
          </div>
          <div>
            <h2 class="mt-[.5rem] text-[1rem] text-white max-w-xl mx-auto">
              Our well-defined, pocket-friendly plans reflect our commitment to
              making your
              <span class="text-[#f6c16f]"> NEET Counselling </span>
              Process a smooth, hassle-free experience. Choose the one that best
              suits
              <span class="text-[#f6c16f]"> your goal </span>
              and budget!
            </h2>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Hero;
