import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Jane Doe",
    designation: "CEO, Company A",
    stars: 5,
    description:
      "The services provided were outstanding. I am beyond satisfied with the results and professionalism shown.",
  },
  {
    id: 2,
    profileImg: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "John Smith",
    designation: "Manager, Company B",
    stars: 4,
    description:
      "Great experience overall. Highly recommend their services for any business looking to improve.",
  },
  {
    id: 3,
    profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Mary Johnson",
    designation: "Product Designer, Company C",
    stars: 5,
    description:
      "Absolutely amazing! The attention to detail and customer care is unmatched.",
  },
  {
    id: 4,
    profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Mary Johnson",
    designation: "Product Designer, Company C",
    stars: 5,
    description:
      "Absolutely amazing! The attention to detail and customer care is unmatched.",
  },
  {
    id: 5,
    profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Mary Johnson",
    designation: "Product Designer, Company C",
    stars: 5,
    description:
      "Absolutely amazing! The attention to detail and customer care is unmatched.",
  },
  {
    id: 6,
    profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Mary Johnson",
    designation: "Product Designer, Company C",
    stars: 5,
    description:
      "Absolutely amazing! The attention to detail and customer care is unmatched.",
  },
  // Add more testimonials here as needed
];

const TestimonialSection = () => {
  return (
    <div className="bg-[#f5f5f5] p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Real Experiences, <span class="text-[#f6c16f]">Real Results </span>{" "}
        </h2>
        <Swiper
          //   slidesPerView={1}
          spaceBetween={30}
          //   spaceBetween={30}
          //   centeredSlides={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          //   navigation={true}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="p-6  ">
              <div className="bg-white rounded-lg shadow-lg p-8 h-[400px] w-[300px]">
                <div className="flex items-center mb-6 flex-col">
                  <img
                    src={testimonial.profileImg}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2 border-[#f39c12] mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.designation}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.stars }, (_, index) => (
                    <FaStar key={index} className="text-yellow-500 mr-1" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
