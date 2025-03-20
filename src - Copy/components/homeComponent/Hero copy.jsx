import React from "react";
import GridPattern from "../magicui/grid-pattern";
import { cn } from "../../lib/utils";
import BoxReveal from "../magicui/box-reveal";
import ShimmerButton from "../magicui/shimmer-button";
import ShimmerButtonTwo from "../magicui/shimmer-button-Two";
import RatingCard from "./RatingCard";
import ImageCloud from "../magicui/icon-cloud";

const profileImageUrls = [
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
];

const Hero = () => {
  return (
    <>
     <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] "
        )}
      />
      <div
        className="flex h-screen w-full px-20 flex-grow-0 items-center justify-between overflow-hidden pt-10 bg-slate-50"
        style={
          {
              backgroundImage: `radial-gradient( circle at top center, #8395C8, transparent 35%)`,
            // backgroundImage: `radial-gradient( circle at top center, #3E5BA9, transparent 35%), radial-gradient(circle at top right, #F6C16F, transparent 30%)`,
          }
        }
      >
       
       <div className=" h-full w-auto max-w-[46rem] items-center justify-center bg-background overflow-hidden pt-48 ">
      <BoxReveal boxColor={"transparent"} duration={0.5}>
        <p className="text-[3.5rem] leading-tight text-[#3e5ba9] whitespace-pre-wrap font-semibold">
        Your Trusted Ally in Medical Education<span className="text-[#f6c16f]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"transparent"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        Comprehensive Guidance for Aspiring Medical Professionals From {" "}
          <span className="text-[#f6c16f]">Entrance Exams </span>
          {" "}  to  {" "}
          <span className="text-[#f6c16f]">Admissions. </span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"transparent"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
          At 
            <span className="font-semibold text-[#f6c16f]"> Aspirants Ally</span>,
          
          
            We provide professional counseling and a proven track record, Aspirant’s Ally (MBBSWALA) offers expert guidance for both UG and PG medical aspirants. Plan your future with confidence."
           
          </p>
        </div>
      </BoxReveal>
              <div className="flex items-end gap-4">
      <BoxReveal boxColor={"transparent"} duration={0.5}>
        <ShimmerButton className="mt-[1.6rem]">Start Your Journey Today ↗</ShimmerButton>
      </BoxReveal>
      <BoxReveal boxColor={"transparent"} duration={0.5}>
        <ShimmerButtonTwo>Take Pshycometric Assement ↗</ShimmerButtonTwo>
      </BoxReveal>
              </div>
              <div className="mt-40 backdrop-blur-3xl">
        <RatingCard initialRating={4.9} initialReviews={984} />
      </div>
    </div>
    <div className="right max-w-[50rem] w-full">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="mr-2 p-4">
      {/* <ImageCloud imageUrls={profileImageUrls} /> */}
      {/* <img src="/asp_png.png" alt="Google Logo" className="w-full h-full" /> */}
      <video
        autoPlay
        muted
        loop
        src="/edu2.mp4"
        alt="Leverage Edu video thumbnail"
        className="w-full h-full rounded-lg"
      />
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default Hero;
