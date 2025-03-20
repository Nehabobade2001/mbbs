import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules from Swiper
import { Autoplay } from "swiper/modules"; // Removed Navigation

// Sample data for dynamic cards
const articles = [
  {
    title:
      "CENTAC Puducherry NEET Counselling 2024: Round 2 Eligible Candidates List",
    date: "Pooshan • 26 September, 24 • 5 min read",
    description:
      "The CENTAC Puducherry NEET Counselling 2024 process has reached a crucial phase with the release of...",
    image: "https://via.placeholder.com/150",
  },
  {
    title:
      "NTRUHS MBBS & BDS Course Admission Commencement for 2024-25",
    date: "Pooshan • 26 September, 24 • 4 min read",
    description:
      "Dr. NTR University of Health Sciences (NTRUHS), located in Vijayawada, Andhra Pradesh, has notified...",
    image: "https://via.placeholder.com/150",
  },
  {
    title:
      "MCC NEET Counselling 2024 Round 2 Dates, New Medical Seats & Seat Allotment",
    date: "Pooshan • 16 September, 24 • 3 min read",
    description:
      "MCC NEET Counselling 2024 Round 2 Dates have been officially extended by the competent authority to...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "AIIMS NEET Counselling 2024: New Updates and Dates Announced",
    date: "Pooshan • 15 September, 24 • 3 min read",
    description:
      "AIIMS NEET Counselling 2024 has started with the release of important dates. The process is underway...",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "AIIMS Delhi MBBS Counselling 2024 Updates",
    date: "Pooshan • 13 September, 24 • 3 min read",
    description:
      "AIIMS Delhi MBBS Counselling 2024 will start soon with the announcement of important updates. Stay tuned...",
    image: "https://via.placeholder.com/150",
  },
];

const HandPickedSlider = () => {
  return (
    <div className="container mx-auto py-6 w-full my-6">
      <h2 className="text-2xl font-bold mb-6 text-left text-[#233871] border-l-4 border-[#233871] pl-3">HandPicked</h2>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3500 }}
        loop={true}
        modules={[Autoplay]} // Removed Navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border rounded-lg shadow-lg px-4 py-6 mx-4 my-4 max-w-xs">
              {/* Card Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover mb-4 rounded transition-transform transform hover:scale-105"
              />
              {/* Card Title */}
              <h3 className="text-xl font-semibold mb-2 text-[#233871] font-poppins">{article.title}</h3>
              {/* Card Date */}
              <p className="text-sm text-gray-600 mb-4 font-poppins">{article.date}</p>
              {/* Card Description */}
              <p className="text-gray-500 text-sm font-poppins">{article.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HandPickedSlider;
