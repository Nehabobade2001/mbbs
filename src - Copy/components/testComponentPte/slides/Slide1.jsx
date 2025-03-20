import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const testimonials = [
  {
    name: "Khushbu Jagwani",
    university: "Columbia University",
    score: "PTE 760",
    image: "/asp_png.png"
  },
  {
    name: "John Doe",
    university: "Harvard University",
    score: "PTE 750",
    image: "/asp_png.png"
  },
  {
    name: "Jane Smith",
    university: "Stanford University",
    score: "PTE 770",
    image: "/asp_png.png"
  },
  {
    name: "Alex Johnson",
    university: "MIT",
    score: "PTE 780",
    image: "/asp_png.png"
  }
];

const TestimonialSlider = () => {
  return (
    <div className="w-full h-full mx-auto p-6">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[Autoplay, Pagination, EffectCards]}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#243671] rounded-2xl shadow-xl overflow-hidden border border-white ">
              <div className="p-8">
                <div className="flex flex-col items-center">
                  <div className=" rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white text-center mb-2">{testimonial.score}</h3>
                  <h4 className="text-xl font-semibold text-white text-center mb-1">{testimonial.name}</h4>
                  <p className="text-lg text-blue-100 text-center">{testimonial.university}</p>
                </div>
              </div>
              <div className="bg-white py-4 px-8">
                <p className="text-gray-600 text-center italic pb-5">
                  "The PTE preparation program exceeded my expectations. It was challenging but rewarding!"
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;