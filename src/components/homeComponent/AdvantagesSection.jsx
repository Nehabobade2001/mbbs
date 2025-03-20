import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
// import ShimmerButton from "../magicui/shimmer-button";
import { PlayCircleIcon } from "lucide-react";
import "./style.scss";

const AdvantagesSection = () => {
  const sections = [
    {
      id: 1,
      image:
        "https://framerusercontent.com/images/9adgbav6xXSEA3BMn3xCdRBB5M.jpg",
      title: "Flexible learning pace",
      text: "The capacity to control the pace of education, by speeding up or slowing down, allows for flexibility to meet diverse learning needs efficiently.",
    },
    {
      id: 2,
      image:
        "https://framerusercontent.com/images/ElYpDcWJ2o0LisGCBlaJnPVz7b0.jpg",
      title: "Accessible resources",
      text: "Our resources are available 24/7, ensuring students can study and prepare anytime, anywhere.",
    },
    {
      id: 3,
      image:
        "https://framerusercontent.com/images/Y0IBIrq1ncBOCX8bYHXpr58Jf7Q.jpg",
      title: "Industry experts",
      text: "Courses are taught by industry professionals with years of real-world experience.",
    },
    {
      id: 4,
      image:
        "https://framerusercontent.com/images/oyOWYvIZIT2WrNWQptXIEn9eKQ.jpg",
      title: "Affordable learning",
      text: "We provide cost-effective learning solutions without compromising on quality.",
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const rightSectionRef = useRef(null);

  const handleScroll = () => {
    const sectionElements = document.querySelectorAll(".section");
    let sectionInView = -1;

    sectionElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (
        rect.top < window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
      ) {
        sectionInView = index;
      }
    });

    if (sectionInView !== -1) {
      setCurrentSection(sectionInView);
    }
  };

  useEffect(() => {
    const rightSection = rightSectionRef.current;
    if (rightSection) {
      rightSection.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize on mount
      return () => rightSection.removeEventListener("scroll", handleScroll);
    }
  }, [rightSectionRef]);

  return (
    <div className="sticky top-0 mx-auto flex items-center bg-gray-50 p-5">
      <div className="relative min-h-screen flex items-center justify-center gap-10 scrollbar-none bg-slate-50 pt-20">
        <div className="absolute h-20 top-32 text-center z-40 shadow-2xl bg-gray-50 shadow-gray-50">
          <h2 className="text-3xl font-bold text-[#3e5ba9]">
            Our <span className="text-[#f6c16f]">advantages</span> over others:
          </h2>
          <p className="text-sm text-gray-500">
            Read testimonials from our esteemed students and alumni about
            studying with us.
          </p>
          <div className="mt-2 w-14 h-1 bg-[#f6c16f] mx-auto"></div>
        </div>

        {/* Progress Bar */}
        <div className="absolute py-52 top-24 -left-10 w-1/12 h-[90%] flex flex-col items-center justify-center">
          <div className="w-2 bg-gray-300 rounded-full h-full relative mb-4">
            <div
              className="bg-blue-600 h-full rounded-full"
              style={{
                height: `${((currentSection + 1) / sections.length) * 100}%`,
              }}
            />
          </div>
          <span className="text-gray-600">
            {currentSection + 1}/{sections.length}
          </span>
        </div>

        {/* Left Image */}
        <div className="w-[40%] h-screen flex justify-center items-center overflow-hidden">
          <motion.div
            className="w-full h-full flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            key={currentSection}
          >
            <img
              src={sections[currentSection].image}
              alt={sections[currentSection].title}
              className="w-full h-auto shadow-lg object-cover rounded-[10px]"
            />
          </motion.div>
        </div>

        {/* Right Scrolling Section */}
        <div
          ref={rightSectionRef}
          className="w-1/2 h-[70vh] overflow-y-scroll no-scrollbar z-0 over-hide"
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className={`section flex flex-col justify-center px-10 ${
                index === currentSection ? "opacity-100" : "opacity-0"
              } transition-opacity duration-600`}
              style={{ height: "100vh" }}
            >
              <motion.div
                className="flex flex-col justify-center border-t-[1px] border-blue-500 border-b-[1px] py-14"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: index === currentSection ? 1 : 0,
                  y: index === currentSection ? 0 : 50,
                }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="font-extrabold bg-blue-500 text-white mb-6 h-14 w-14 flex items-center justify-center rounded-full">
                  {section.id}
                </h1>
                <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
                <p className="text-lg text-gray-600">{section.text}</p>
                <div className="mt-5">
                  {/* <ShimmerButton>
                    Watch Video &nbsp; <PlayCircleIcon />
                  </ShimmerButton> */}
                  <button class="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-black/20 px-6 py-3 text-black dark:text-black  duration-300 ease-in-out active:translate-y-[1px] hover:bg-[#233871] bg rounded-full bg-[#fff] hover:text-white group transition-all">
                    Watch Video &nbsp; <PlayCircleIcon />
                    {/* <span class="group:hover-translate(45deg)">↗</span> */}
                    <span class="group-hover:rotate-45 ml-4 ">↗</span>
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
