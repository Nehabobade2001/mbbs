import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import AnimatedGradientText from "../../components/magicui/animated-gradient-text";
import r from "../homeComponent/assets/padho-india-banner-new.png";

const GetStarted = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-around">
      <div className="text-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3e5ba9]">
          Get Started <span className="text-[#f6c16f]">Now</span>
        </h2>
        <p className="text-xs md:text-sm text-gray-500">
          Ready to Begin Your Medical Journey?
        </p>
        <div className="mt-2 w-10 md:w-14 h-1 bg-[#f6c16f] mx-auto"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around w-[90%] gap-8 lg:gap-0">
        <div className="relative h-[100vh] md:h-[60vh] lg:h-[67vh] w-full lg:w-[70%] flex border-4 border-white shadow-md shadow-blue-300 rounded-3xl p-4">
          <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
            <img
              src={r}
              alt="Company Logo"
              className="w-[120px] md:w-[150px] lg:w-[180px]"
            />
            <div className="flex flex-col w-full lg:w-[70%] items-start justify-around gap-6 md:gap-10">
              <p className="text-[1.5rem] md:text-[2rem] leading-tight text-black font-semibold">
                Start your path to becoming a{" "}
                <span className="text-[#3e5ba9]">Medical Professional</span>{" "}
                Today.
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                Get in touch with our seasoned consultants for personalized
                guidance tailored to your goals. Start your journey towards
                becoming a medical professional with expert advice every step of
                the way.
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-2">
                <AnimatedGradientText>
                  👩‍💼
                  <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Get Admission Assistance
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
                <AnimatedGradientText>
                  🧐
                  <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Explore NEET Predictor
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
                <AnimatedGradientText>
                  ✍️
                  <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Try Psychometric Assessment
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </div>
            </div>
          </div>
        </div>
        <ContactForm onClose={handleCloseContactForm} />
      </div>
    </div>
  );
};

export default GetStarted;
