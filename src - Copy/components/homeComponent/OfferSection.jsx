import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import ShimmerButton from "../magicui/shimmer-button";
import rc from "../homeComponent/assets/rocket2.svg";
import rc2 from "../homeComponent/assets/consult.svg";
import rc3 from "../homeComponent/assets/selfPace.svg";
import ShimmerButton from "../magicui/shimmer-button";

const Offerings = ({ OpenForm }) => {
  const [topPosition, setTopPosition] = useState(0);
  const [strokeOffset, setStrokeOffset] = useState(3588);
  const [triggeredDots, setTriggeredDots] = useState({});
  const sectionRef = useRef(null);
  const dotsRefs = useRef([]);

  const controls = useAnimation();

  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: thirdRef, inView: thirdInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: fourthRef, inView: fourthInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: fifthRef, inView: fifthInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: sixthRef, inView: sixthInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: seventhRef, inView: seventhInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: eightRef, inView: eightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ninethRef, inView: ninethInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: tenthRef, inView: tenthInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.innerHeight;
        const newTopPosition = (scrollPosition - rect.top) * 0.80;
        setTopPosition(newTopPosition);
        const newStrokeOffset = Math.max(
          0,
          3588 - (scrollPosition - rect.top) * 0.80
        );
        setStrokeOffset(newStrokeOffset);
        // Check if rocket passes each dot
        dotsRefs.current.forEach((dot, index) => {
          if (dot) {
            const dotRect = dot.getBoundingClientRect();
            if (
              newTopPosition >=
              dotRect.top - sectionRef.current.getBoundingClientRect().top
            ) {
              setTriggeredDots((prev) => ({ ...prev, [index]: true }));
            } else {
              setTriggeredDots((prev) => ({ ...prev, [index]: false }));
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggeredDots]);

  useEffect(() => {
    if (firstInView) {
      controls.start("visible");
    }
  }, [firstInView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const renderDotAnimation = (index, position) => (
    <div
      ref={(el) => (dotsRefs.current[index] = el)}
      className={`absolute ${position} hidden md:block `}
      style={{
        top: `${395 + index * 335}px`,
        transform: index % 2 === 1 ? "scaleX(-1)" : "none",
      }}
    >
      <svg
        width="220"
        height="20"
        viewBox="0 0 220 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          triggeredDots[index]
            ? " animate-dash transition-transform duration-1000 ease-in-out"
            : "hidden"
        }
      >
        <circle cx="10" cy="10" r="8" fill="#0287F2" />
        <line
          x1="20"
          y1="10"
          x2="120"
          y2="10"
          stroke="#0287F2"
          strokeWidth="2"
          strokeDasharray="5, 5"
        />
        <text
          x="120"
          y="15"
          fill="#0287F2"
          style={{ fontSize: "16px", fontWeight: "bold" }}
          className={triggeredDots[index] ? " animate-blink" : "hidden"}
        >
          →
        </text>
      </svg>
    </div>
  );

  return (
    <div id="offerings" className="bg-gray-50 py-10 relative">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-12 relative px-3"
      >
        <h2 className="text-3xl font-bold text-[#3e5ba9]">
          How Aspirant’s Ally Helps You{" "}
          <span className="text-[#f6c16f]">Succeed </span>!
        </h2>
        <p className="text-sm text-gray-500">
          Follow our structured process to achieve your medical career goals.
        </p>
        <div className="mt-2 w-14 h-1 bg-[#f6c16f] mx-auto"></div>
      </motion.div>

      {/* Rocket Animation */}
      <div ref={sectionRef} className="absolute left-[48.8%] w-8 hidden md:block ">
        <img
          src={rc}
          alt="rocket"
          id="rocket"
          className="absolute left-[-45%] w-10 rotate-180 "
          style={{ top: `${topPosition}px` }}
        />
        <svg width="5" height="5000" className="block">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="5000"
            stroke="#0287F2"
            strokeWidth="4.8484"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            id="triangle"
            style={{
              strokeDasharray: 3588,
              strokeDashoffset: strokeOffset,
            }}
          />
        </svg>
      </div>
      {renderDotAnimation(0, 'left-[48.3%]')}
{renderDotAnimation(1, 'right-[50.4%]')}
      {renderDotAnimation(2, 'left-[48.3%]')}
      {renderDotAnimation(3, 'right-[50.4%]')}
      {renderDotAnimation(4, 'left-[48.3%]')}
      {renderDotAnimation(5, 'right-[50.4%]')}
      {renderDotAnimation(6, 'left-[48.3%]')}
      {renderDotAnimation(7, 'right-[50.4%]')}
      {renderDotAnimation(8, 'left-[48.3%]')}
      {renderDotAnimation(9, 'right-[50.4%]')}
      {renderDotAnimation(10, 'left-[48.3%]')}
      {/* Rest of the code */}
      <motion.div
        id="offeringsAnimation"
        className="relative z-10 md:pr-24 flex flex-col"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* First Component */}
        <motion.div
          ref={firstRef}
          className="flex flex-col md:flex-row items-center mb-16 px-4 "
          variants={fadeInLeft}
          animate={firstInView ? "visible" : "hidden"}
        >
          <div className="md:w-[100%] flex flex-col items-center md:items-start">
            <img className="w-[200px] md:w-5/12" alt="rightImage" src={rc2} />
          </div>
          <div className=" md:w-[68%] shadow-lg p-4 rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2 ">
              Initial Consultation 🧐
            </p>
            <h2 className="text-lg font-semibold">
              Understand the student’s aspirations, academic background, and
              goals
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Schedule an initial consultation to discuss potential career paths
              in medicine, clarify doubts, and set clear objectives for the
              journey ahead.
            </p>
            <div className="mt-5 ">
              <ShimmerButton onClick={OpenForm}>Know More ↗</ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Know More
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Second Component */}
        <motion.div
          ref={secondRef}
          className="flex flex-col-reverse md:flex-row items-center gap-8 mb-20 mx-4 md:pr-24"
          variants={fadeInRight}
          animate={secondInView ? "visible" : "hidden"}
        >
          <div className="md:w-1/2 shadow-lg p-4 rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              Personalized Career Assessment ✅
            </p>
            <h2 className="text-lg font-semibold">
              Identify strengths and interests to guide decision-making
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Administer our psychometric assessment to evaluate the student’s
              personality traits, strengths, and preferences. This helps tailor
              guidance to their unique profile.{" "}
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Get Career Assessment ↗
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Get Career Assessment
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
          <div className="w-[68%] flex flex-col items-center md:items-end">
            <img
              className="w-[200px] md:w-6/12"
              alt="leftImage"
              src="https://publicassets.leverageedu.com/landing-pages-new/Frame985.png"
            />
          </div>
        </motion.div>

        {/* Third Component */}
        <motion.div
          ref={thirdRef}
          className="flex flex-col md:flex-row items-center gap-8 mb-20 px-4"
          variants={fadeInLeft}
          animate={thirdInView ? "visible" : "hidden"}
        >
          <div className="md:w-[100%] flex flex-col items-center md:items-start">
            <img
              className="w-[230px] md:w-7/12"
              alt="rightImage"
              src="https://publicassets.leverageedu.com/landing-pages-new/Frame987.png"
            />
          </div>
          <div className="md:w-[68%] shadow-lg p-4 rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              Entrance Exam Strategy Planning 🗣️
            </p>
            <h2 className="text-lg font-semibold">
              Create a customized study plan for entrance exams like NEET and
              AIIMS
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Develop a step-by-step strategy for entrance exam preparation,
              including recommendations for resources, study schedules, and
              coaching if necessary.
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Get Free Consultation
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Get Free Consultation
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Fourth Component */}
        <motion.div
          ref={fourthRef}
          className="flex flex-col-reverse md:flex-row items-center gap-8 mb-20 md:pr-24 m-4"
          variants={fadeInRight}
          animate={fourthInView ? "visible" : "hidden"}
        >
          <div className="md:w-1/2 shadow-lg p-4  rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              Exam Preparation Support 📝
            </p>
            <h2 className="text-lg font-semibold">
              Ensure students are fully prepared for the exams
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Provide ongoing support with tips, tricks, and resources for
              maximizing scores. Offer practice tests and analysis to track
              progress and improve weak areas.
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Start Your Preparation
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Start Your Preparation
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
          <div className="w-[68%] flex flex-col items-center md:items-end">
            <img
              className="w-3/4 md:w-7/12"
              alt="leftImage"
              src="https://publicassets.leverageedu.com/landing-pages-new/Frame988.png"
            />
          </div>
        </motion.div>

        {/* Fifth Component */}
        <motion.div
          ref={fifthRef}
          className="flex flex-col md:flex-row items-center gap-8 mb-20 m-4 md:pr-24"
          variants={fadeInLeft}
          animate={fifthInView ? "visible" : "hidden"}
        >
          <div className="md:w-[68%] flex flex-col items-center md:items-start">
            <img className="w-[200px] md:w-5/12" alt="rightImage" src={rc3} />
          </div>
          <div className="md:w-1/2 shadow-lg p-4 rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              NEET Predictor Tool Usage 🗣️
            </p>
            <h2 className="text-lg font-semibold">
              Help students make informed decisions about college applications
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Use our advanced NEET Predictor tool to predict rank and admission
              chances based on scores, budget, and preferences. Guide students
              on selecting the right colleges accordingly.
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Get Free Consultation
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Get Free Consultation
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Sixth Component */}
        <motion.div
          ref={sixthRef}
          className="flex flex-col-reverse md:flex-row items-center gap-8 mb-20 m-4 md:pr-24"
          variants={fadeInRight}
          animate={sixthInView ? "visible" : "hidden"}
        >
          <div className="md:w-1/2 shadow-lg p-4 pr rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              College Shortlisting 📝
            </p>
            <h2 className="text-lg font-semibold">
              {" "}
              Identify the best-fit colleges for each student
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Based on NEET Predictor results and career assessment, shortlist
              colleges that align with the student’s profile and goals. Consider
              factors like location, budget, and specialization.
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Start Your Application Journey
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Start Your Application Journey
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
          <div className="w-[68%] flex flex-col items-center md:items-end">
            <img
              className="w-[200px] md:w-7/12"
              alt="leftImage"
              src="https://publicassets.leverageedu.com/landing-pages-new/Frame984.png"
            />
          </div>
        </motion.div>

        {/* Seventh Component */}
        <motion.div
          ref={seventhRef}
          className="flex flex-col md:flex-row items-center gap-8 mb-20 m-4 md:pr-24"
          variants={fadeInLeft}
          animate={seventhInView ? "visible" : "hidden"}
        >
          <div className="w-[68%] flex flex-col items-center md:items-start">
            <img
              className="w-[200px] md:w-6/12"
              alt="rightImage"
              src="https://publicassets.leverageedu.com/landing-pages-new/Frame3370new.png"
            />
          </div>
          <div className="md:w-1/2 shadow-lg p-4 rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              Application Assistance 📝
            </p>
            <h2 className="text-lg font-semibold">
              Ensure error-free and timely applications to multiple colleges
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Guide students through the entire application process, including
              document preparation, filling out forms, and meeting deadlines.
              Double-check everything to ensure accuracy.
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Get Free Consultation
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Get Free Consultation
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Eight Component */}
        <motion.div
          ref={eightRef}
          className="flex flex-col-reverse md:flex-row items-center gap-8 mb-20 m-4 md:pr-24"
          variants={fadeInRight}
          animate={eightInView ? "visible" : "hidden"}
        >
          <div className="md:w-1/2 shadow-lg p-4 pr rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              Admission Process Guidance 📇
            </p>
            <h2 className="text-lg font-semibold">
              {" "}
              Navigate the complex admission process smoothly
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Provide detailed guidance on seat allocation, counseling rounds,
              and interviews (if applicable). Ensure the student stays on track
              with all requirements.{" "}
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Get started with Admission Process
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Get started with Admission Process
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
          <div className="w-[68%] flex flex-col items-center md:items-end">
            <img
              className="w-3/4 md:w-6/12"
              alt="leftImage"
              src="https://publicassets.leverageedu.com/landing-pages-new/Frame988.png"
            />
          </div>
        </motion.div>

        {/* Nineth Component */}
        <motion.div
          ref={ninethRef}
          className="flex flex-col md:flex-row items-center gap-8 mb-20 m-4 md:pr-24"
          variants={fadeInLeft}
          animate={ninethInView ? "visible" : "hidden"}
        >
          <div className="w-[68%] flex flex-col items-center md:items-start">
            <img
              className="w-3/4 md:w-6/12"
              alt="rightImage"
              src="https://publicassets.leverageedu.com/landing-pages-new/Frame982.png"
            />
          </div>
          <div className="md:w-1/2 shadow-lg p-4 rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              Post-Admission Support 👍
            </p>
            <h2 className="text-lg font-semibold">
              Help students transition smoothly into college life
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Offer guidance on the next steps after admission, such as college
              preparation, course selection, and tips for succeeding in medical
              school.
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Get Free Consultation
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Get Free Consultation
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
        </motion.div>

        {/* Tenth Component */}
        <motion.div
          ref={tenthRef}
          className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16 m-4 md:pr-24"
          variants={fadeInRight}
          animate={tenthInView ? "visible" : "hidden"}
        >
          <div className="md:w-1/2 shadow-lg p-4 pr rounded-2xl bg-white">
            <p className="text-sm text-[#3e5ba9] font-bold mb-2">
              Ongoing Mentorship 🙋‍♂️
            </p>
            <h2 className="text-lg font-semibold">
              {" "}
              Support students throughout their medical education journey
            </h2>
            <p className="text-gray-500 mt-4 text-sm">
              Provide ongoing mentorship and guidance throughout their academic
              career, helping them make important decisions and overcome
              challenges as they arise.{" "}
            </p>
            <div className="mt-5">
              <ShimmerButton onClick={OpenForm}>
                Get 1:1 Mentorship
              </ShimmerButton>
              {/* <button
                onClick={OpenForm}
                class="group relative z-0 bg-[#233871] bg rounded-full hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]"
              >
                Get 1:1 Mentorship
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button> */}
            </div>
          </div>
          <div className="w-[68%] flex flex-col items-center md:items-end">
            <img
              className="w-3/4 md:w-6/12"
              alt="leftImage"
              src="https://publicassets.leverageedu.com/landing-pages-new/Frame37372.png"
            />
          </div>
        </motion.div>
      </motion.div>
      {/* Add more components similarly as shown in the initial TypeScript code */}
    </div>
  );
};

export default Offerings;
