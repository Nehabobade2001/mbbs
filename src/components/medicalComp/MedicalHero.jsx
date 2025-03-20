import React from "react";
import img from "./medicalassets/c7e1f06a-38c8-4fee-ae17-46cd4b928072 1.png";
const MedicalSection = () => {
  return (
    <div className="relative bg-[#f8f9fa] py-20 px-8 flex justify-center items-center font-sans h-[1000px]">
      {/* Background overlay text */}
      <h1
        className="absolute text-[200px] text-[#000] font-semibold leading-[200px] z-0 font-oswald"
        style={{ top: "20%", left: "25%" }}
      >
        MEDICAL
      </h1>
      <h1
        className="absolute text-[100px] text-[#31313117] font-bold z-0"
        style={{ bottom: "-0%", right: "10%" }}
      >
        Aspirant’s Ally
      </h1>

      {/* Main container */}
      <div className="relative z-[999] flex max-w-7xl mx-auto items-center gap[10rem]">
        {/* Left Section - Services */}
        <div className="flex flex-col gap-10 mt-20 w-[20%]">
          <h2 className="text-gray-600 font-semibold text-lg">Our Services</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-gray-800 text-2xl">&#128100;</div>
              <div>
                <h3 className="font-bold text-xl">Personalized Counseling</h3>
                <p className="text-gray-500 text-sm">
                  Get personalized advice from experts on course selection,
                  career paths, and admission strategies to achieve your goals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-gray-800 text-2xl">&#128195;</div>
              <div>
                <h3 className="font-bold text-xl">Application Assistance</h3>
                <p className="text-gray-500 text-sm">
                  Streamline your application with step-by-step support for
                  accurate and timely submissions to top medical programs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-gray-800 text-2xl">&#128209;</div>
              <div>
                <h3 className="font-bold text-xl">Exam Preparation</h3>
                <p className="text-gray-500 text-sm">
                  Access curated resources and mock tests to strengthen your
                  readiness for entrance exams and interviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative w-[700px] h-[720px]">
          <img
            src={img}
            alt="Doctor"
            className="relative z-10 w-full h-full object-contain rounded-lg shadowg"
          />
          {/* <div
            className="absolute bg-gray-100 w-[320px] h-[420px] rounded-lg z-0"
            style={{ top: "20px", left: "20px" }}
          ></div> */}
        </div>

        {/* Right Section - About Us */}
        <div className="flex flex-col gap-6 w-[20%] mt-[18rem] ml-4">
          <h2 className="text-gray-600 font-semibold text-lg">About Us</h2>
          <p className="text-gray-500 text-sm">
            At Aspirant’s Ally, we support aspiring medical professionals
            through every admissions step. With expert advisors, personalized
            guidance, and comprehensive resources, we simplify the journey from
            course selection to enrollment, empowering future medical leaders
            with confidence and clarity.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-orange-600 transition duration-200">
            Learn more
          </button>

          {/* Stats Section */}
          <div className="flex gap-10 mt-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold">15 Years</h3>
              <p className="text-gray-500 text-sm">Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">256+</h3>
              <p className="text-gray-500 text-sm">Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">99.8%</h3>
              <p className="text-gray-500 text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalSection;
