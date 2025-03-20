import React from "react";
import img from "./icon/icons8-medical.gif";
import img2 from "./icon/icons8-test.gif";
import img3 from "./icon/icons8-developer.gif";
import img4 from "./icon/icons8-info.gif";
import img5 from "./icon/icons8-company.gif";
import img6 from "./icon/icons8-test-passed.gif";
import img7 from "./icon/icons8-earth-globe.gif";
import img8 from "./icon/icons8-goal.gif";
import img10 from "./icon/icons8-literature.gif";
import img9 from "./icon/icons8-earth-globe.gif";
import { motion, useAnimation } from "framer-motion";
import ShimmerButton from "../magicui/shimmer-button";

const Specialised = () => {
  return (
    <>
      <div class="adupt bg-slate-50">
        <div class="w-full h-[1147px]  max-xl:h-full relative    max-lg:pb-[80px]">
<div className="text-center relative">
<motion.div
        initial="hidden"
        animate="visible"
        className="text-center mb-12 relative"
      >
        <h2 className="text-3xl font-bold text-[#3e5ba9]">
        We are {" "}
          <span className="text-[#f6c16f]">Specialised </span>
         in{" "}!
        </h2>
        <p className="text-sm text-gray-500">
          Follow our structured process to achieve your medical career goals.
        </p>
        <div className="mt-2 w-14 h-1 bg-[#f6c16f] mx-auto"></div>
      </motion.div>
</div>
          <div class="flex w-full justify-between max-lg:mb-0 max-lg:flex-wrap mb-[72px] max-sm:mb-[0px] max-xl:pr-[80px] max-md:py-10  max-lg:pr-[30px]">
            {/* <div class="w-[503.60px] ml-[80px] max-lg:ml-[40px] max-md:m-[40px] max-sm:ml-[20px] mt-[113.71px]  text-grey-700 text-[32px] font-normal   leading-[120%] letter-spacing-3  max-md:w-full"> */}
            {/* </div> */}
            {/* <a href="/industries">
              <div class="px-8 py-4  top-[113.71px] right-[80px] absolute  rounded-[31px] border border-zinc-400  text-zinc-400 justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all     max-md:hidden hover:border-yellow-400 hover:text-black max-xl:relative  max-xl:left-0   max-xl:p-4  max-xl:h-16">
                <div class="Industries text-base font-normal   capitalize leading-normal">
                  Industries
                </div>
              </div>
            </a> */}
          </div>
          <div class="flex flex-wrap gap-6 justify-center mt-10 max-sm:mt-0 max-sm:w-full max-xl:pb-20 max-xl:px-10 max-md:px-0">
         <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-[auto] 
            max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
             hover:border-[#243771] hover:border-2 transition 
            duration-300 ease-in-out group border border-transparent">

  <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
    <img className="w-full h-auto object-contain" src={img} alt="icon" />
  </div>

  <div class="Industries text-center text-zinc-600 text-xl font-semibold 
              group-hover:text-black transition duration-200 ease-in-out mb-2">
    Medical
  </div>

  <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
    Providing quality healthcare solutions with advanced technologies and services.
  </p>

  <div class="text-center">
    <ShimmerButton>View More</ShimmerButton>
  </div>
</div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="w-full h-auto object-contain" src={img2} alt="CBT Test Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      CBT Test
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Comprehensive testing to enhance cognitive skills and readiness.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="w-full h-auto object-contain" src={img3} alt="Engineering Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      Engineering
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Explore engineering principles and innovative solutions.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="w-full h-auto object-contain" src={img4} alt="Mentorship Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      Mentorship
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Guidance and support to foster personal and professional growth.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="w-full h-auto object-contain" src={img5} alt="College Selection Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      College Selection
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Expert advice on selecting the right college for your future.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="w-full h-auto object-contain" src={img6} alt="Exam Prep Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      Exam Prep
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Intensive preparation strategies to excel in exams.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="w-full h-auto object-contain" src={img7} alt="Abroad & Business Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      Abroad & Business
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Opportunities for studying abroad and business development.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="w-full h-auto object-contain" src={img8} alt="Career Consult Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      Career Consult
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Professional guidance to shape your career path.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="w-full h-auto object-contain" src={img9} alt="Guidance Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      Guidance
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Insights and resources for informed decision-making.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>
      

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="mix-blend-darken" src={img9} alt="Psychometric Assessment Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      Psychometric Assessment
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Comprehensive evaluations to enhance personal and professional growth.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

  <div class="shadow-lg rounded-2xl bg-white adupt-cards w-[21.5%] h-auto 
              max-sm:w-[90%] p-6 flex flex-col justify-between items-center 
              hover:border-[#243771] hover:border-2 transition 
              duration-300 ease-in-out group border border-transparent">

    <div class="adupt-svg w-16 h-[70px] flex justify-center items-start mb-4">
      <img className="mix-blend-darken" src={img10} alt="Courses Icon" />
    </div>

    <div class="Industries text-center text-zinc-600 text-xl font-semibold 
                group-hover:text-black transition duration-200 ease-in-out mb-2">
      Courses
    </div>

    <p class="text-center text-gray-500 text-base max-sm:text-sm mb-4 px-2">
      Explore a range of courses designed for professional development.
    </p>

    <div class="text-center">
      <ShimmerButton>View More</ShimmerButton>
    </div>
  </div>

          </div>
          <a class="flex justify-center px-[20px]" href="/industries">
            <div class="w-[100%] flex  rounded-[31px] border border-zinc-400  text-zinc-400 justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all hidden max-md:block hover:border-yellow-400 hover:text-black max-xl:relative  max-xl:left-0   max-xl:p-4  max-xl:h-16">
              <div class="Industries w-auto h-auto text-base font-normal text-center   capitalize leading-[190%]">
                Industries
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Specialised;
