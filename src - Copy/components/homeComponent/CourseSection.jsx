import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import ShimmerButton from "../magicui/shimmer-button";

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.update(); // Update the Swiper navigation
    }
  }, [activeTab]);

  const courses = {
    all: [
      {
        id: 1,
        title: "MBBS Course 1",
        imgSrc: "/one.jpeg",
        description: "Description for NEET Course 1",
      },
      {
        id: 2,
        title: "Engineering Course 1",
        imgSrc: "/two.jpeg",
        description: "Description for Engineering Course 1",
      },
      {
        id: 3,
        title: "Management Course 1",
        imgSrc: "/three.jpeg",
        description: "Description for Management Course 1",
      },
      {
        id: 4,
        title: "MBBS Course 2",
        imgSrc: "/four.jpeg",
        description: "Description for NEET Course 2",
      },
      {
        id: 5,
        title: "Engineering Course 2",
        imgSrc: "/one.jpeg",
        description: "Description for Engineering Course 2",
      },
      {
        id: 6,
        title: "Management Course 2",
        imgSrc: "/two.jpeg",
        description: "Description for Management Course 2",
      },
      {
        id: 7,
        title: "MBBS Course 3",
        imgSrc: "/three.jpeg",
        description: "Description for NEET Course 3",
      },
      {
        id: 8,
        title: "Engineering Course 3",
        imgSrc: "/four.jpeg",
        description: "Description for Engineering Course 3",
      },
      {
        id: 9,
        title: "Management Course 3",
        imgSrc: "/one.jpeg",
        description: "Description for Management Course 3",
      },
      {
        id: 10,
        title: "MBBS Course 4",
        imgSrc: "/two.jpeg",
        description: "Description for NEET Course 4",
      },
      {
        id: 11,
        title: "Engineering Course 4",
        imgSrc: "/three.jpeg",
        description: "Description for Engineering Course 4",
      },
      {
        id: 12,
        title: "Management Course 4",
        imgSrc: "/four.jpeg",
        description: "Description for Management Course 4",
      },
     
    ],
    neet: [
      {
        id: 1,
        title: "MBBS Course 1",
        imgSrc: "/one.jpeg",
        description: "Description for NEET Course 1",
      },
      {
        id: 2,
        title: "MBBS Course 2",
        imgSrc: "/two.jpeg",
        description: "Description for NEET Course 2",
      },
      {
        id: 3,
        title: "MBBS Course 3",
        imgSrc: "/three.jpeg",
        description: "Description for NEET Course 2",
      },
      {
        id: 4,
        title: "MBBS Course 4",
        imgSrc: "/four.jpeg",
        description: "Description for NEET Course 2",
      },
      {
        id: 5,
        title: "MBBS Course 5",
        imgSrc: "/three.jpeg",
        description: "Description for NEET Course 5",
      },
      {
        id: 6,
        title: "MBBS Course 6",
        imgSrc: "/four.jpeg",
        description: "Description for NEET Course 6",
      },
    ],
    engineering: [
      {
        id: 1,
        title: "Engineering Course 1",
        imgSrc: "/one.jpeg",
        description: "Description for Engineering Course 1",
      },
      {
        id: 2,
        title: "Engineering Course 2",
        imgSrc: "/two.jpeg",
        description: "Description for Engineering Course 2",
      },
      {
        id: 3,
        title: "Engineering Course 2",
        imgSrc: "/three.jpeg",
        description: "Description for Engineering Course 2",
      },
      {
        id: 4,
        title: "Engineering Course 4",
        imgSrc: "/four.jpeg",
        description: "Description for Engineering Course 2",
      },
      {
        id: 5,
        title: "Engineering Course 5",
        imgSrc: "/three.jpeg",
        description: "Description for Engineering Course 5",
      },
      {
        id: 6,
        title: "Engineering Course 6",
        imgSrc: "/four.jpeg",
        description: "Description for Engineering Course 6",
      },
    ],
    management: [
      {
        id: 1,
        title: "Management Course 1",
        imgSrc: "/three.jpeg",
        description: "Description for Management Course 1",
      },
      {
        id: 2,
        title: "Management Course 2",
        imgSrc: "/one.jpeg",
        description: "Description for Management Course 2",
      },
      {
        id: 3,
        title: "Management Course 2",
        imgSrc: "/two.jpeg",
        description: "Description for Management Course 2",
      },
      {
        id: 4,
        title: "Management Course 2",
        imgSrc: "/four.jpeg",
        description: "Description for Management Course 4",
      },
      {
        id: 5,
        title: "Management Course 5",
        imgSrc: "/two.jpeg",
        description: "Description for Management Course 5",
      },
      {
        id: 6,
        title: "Management Course 6",
        imgSrc: "/four.jpeg",
        description: "Description for Management Course 6",
      },
    ],
  };

  return (
    <div className="mx-auto h-screen md:p-20 relative bg-gray-50 w-full py-12">
      <div className=" h-20 top-32 text-center z-40 shadow-2xl bg-gray-50 shadow-gray-50">
        <h2 className="text-3xl font-bold text-[#3e5ba9]">
         Explore Our World's Best <span className="text-[#f6c16f]">Services</span>
        </h2>
        <p className="text-sm text-gray-500">
          Read testimonials from our esteemed students and alumni about studying
          with us.
        </p>
        <div className="mt-2 w-14 h-1 bg-[#f6c16f] mx-auto"></div>
      </div>
      {/* Custom Tabs */}
      <div className="flex flex-wrap justify-center mb-8 space-x-0 sm:space-x-2 mt-10 px-8">
  <button
    className={`w-full sm:w-auto px-10 sm:px-20 py-2 mb-4 sm:mb-0 border-b-4 ${
      activeTab === "all"
        ? "border-blue-800 active text-blue-800"
        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-blue-800"
    }`}
    onClick={() => setActiveTab("all")}
  >
    All
  </button>

  <button
    className={`w-full sm:w-auto px-10 sm:px-20 py-2 mb-4 sm:mb-0 border-b-4 ${
      activeTab === "neet"
        ? "border-blue-800 active text-blue-800"
        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-blue-800"
    }`}
    onClick={() => setActiveTab("neet")}
  >
    MBBS Courses
  </button>

  <button
    className={`w-full sm:w-auto px-10 sm:px-20 py-2 mb-4 sm:mb-0 border-b-4 ${
      activeTab === "engineering"
        ? "border-blue-800 active text-blue-800"
        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-blue-800"
    }`}
    onClick={() => setActiveTab("engineering")}
  >
    Engineering Courses
  </button>

  <button
    className={`w-full sm:w-auto px-10 sm:px-20 py-2 border-b-4 ${
      activeTab === "management"
        ? "border-blue-800 active text-blue-800"
        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:text-blue-800"
    }`}
    onClick={() => setActiveTab("management")}
  >
    Management Courses
  </button>
</div>



      {/* Swiper Animation for Course List */}
      <Swiper
        spaceBetween={10}
        //   spaceBetween={30}
        //   centeredSlides={true}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          310: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        //   navigation={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[90%] mx-auto "
      >
        {courses[activeTab].map((course) => (
          <SwiperSlide key={course.id}>
            <div className="shadow-lg rounded-2xl bg-white overflow-hidden p-4 m-6 ">
              <img
                src={course.imgSrc}
                alt={course.title}
                className="w-full h-44 object-cover rounded-[12px]"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-[#F6C16E] outline hover:bg-[#e2ad5d] text-black text-sm px-6 py-2 rounded-full">
                    View Details →
                  </button>
                  <span className="flex items-center gap-1 text-sm font-extralight">
                    ⭐️ . (4.8 Ratings)
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
          ref={prevRef}
          className="absolute  md:top-1/2 md:op-1/2 left-2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer"
        >
          <FaArrowLeft size={24} className="text-gray-700" />
        </div>
        <div
          ref={nextRef}
          className="absolute md:top-1/2 right-2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer"
        >
          <FaArrowRight size={24} className="text-gray-700" />
        </div>
    </div>
  );
};

export default CourseSection;
