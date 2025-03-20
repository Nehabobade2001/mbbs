import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import ShimmerButton from "../magicui/shimmer-button";

const InfoSectionWithSwiper = () => {
  return (
    <div className=" mx-auto py-28 md:py-0 px-4 flex flex-col md:flex-row items-center bg-slate-50 ">
      <div className="container py-12 px-4 border-8 bg-[#243771] border-white shadow-md shadow-blue-300 flex flex-col md:flex-row items-center rounded-3xl"
        //  style={
        //   {
        //       // backgroundImage: `radial-gradient( circle farthest-corner at 10% 20%,  #F6C16E 0%, #E3B366 100.2% )`,
        //     backgroundImage: `radial-gradient( circle at top center, #3E5BA9, transparent 50%), radial-gradient(circle at bottom right, #F6C16F, transparent 0%)`,
        //   }
        // }
      >
      {/* Left Side: Heading, Paragraph, List */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 rounded-lg text-[#FFF] mx-6">
        <h2 className="text-3xl font-bold mb-4 ">Our Courses</h2>
        <p className="text-lg  mb-6">
          Discover a variety of courses that suit your interests and career
          aspirations. We offer well-structured programs designed by experts.
        </p>
        <ul className="list-disc list-inside  space-y-2">
          <li>High-quality video lectures</li>
          <li>Expert instructors</li>
          <li>Interactive learning experience</li>
          <li>Flexible schedule</li>
          <li>Comprehensive study materials</li>
        </ul>
      </div>

      {/* Right Side: Swiper with Single Slide Card */}
      <div className="w-full md:w-1/2">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          effect={"fade"}
          autoplay={{
            delay: 1500,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          //   breakpoints={{
          //     310: {
          //       slidesPerView: 1,
          //       spaceBetween: 20,
          //     },
          //     640: {
          //       slidesPerView: 1,
          //       spaceBetween: 20,
          //     },
          //     768: {
          //       slidesPerView: 1,
          //       spaceBetween: 40,
          //     },
          //     1024: {
          //       slidesPerView: 3,
          //       spaceBetween: 50,
          //     },
          //   }}
          //   navigation={true}
          loop={true}
          modules={[Autoplay, EffectFade, Pagination]}
          className="md:w-1/2"
        >
          <SwiperSlide>
            <div className="md:max-w-xs mx-auto bg-white shadow-md rounded-xl p-4">
              {/* Top section with logo and user count */}
              <div className="flex items-center justify-between mb-4">
                <img
                  src="https://cdn.testbook.com/resources/productionimages/Railways_All_1594842136.png"
                  alt="NEET Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex items-center text-yellow-500 text-sm font-semibold">
                  <span className="mr-1">⚡</span>
                  775.7k Users
                </div>
              </div>

              {/* Main content */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  NEET 2024 Mock Test Series
                </h3>
                <p className="text-sm text-gray-600">
                  1123 Total Tests |{" "}
                  <span className="text-green-500">9 Free Tests</span>
                </p>
              </div>

              {/* Languages section */}
              <div className="text-sm text-blue-600 mb-4">
                📄 English, Hindi + 6 More
              </div>

              {/* Test list section */}
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>2 सफलता एक्सप्रेस</li>
                <li>96 Lucent General Knowledge CT</li>
                <li>269 Chapter Test (CBT 1)</li>
                <li className="text-blue-600">+756 more tests</li>
              </ul>

              {/* Button */}
              <button class="group relative z-0 bg-[#233871] bg rounded-full w-full  hover:bg-gradient-to-r hover:from-[#2338718a] hover:to-[#4e7cfb] hover:ext-black transition-all flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu duration-300 ease-in-out active:translate-y-[1px] mt-[1.6rem]">
                View Test Series
                <span class="group-hover:rotate-45 ml-4 ">↗</span>
              </button>
            </div>
          </SwiperSlide>
        
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default InfoSectionWithSwiper;
