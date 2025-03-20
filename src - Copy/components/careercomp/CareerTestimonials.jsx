import React from "react";
import img from './careerasserts/image 10.png'

const testimonials = [
  {
    id: 1,
    name: "Some Client",
    position: "Works as CEO",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    image:img, // Replace with the actual image path
  },
  {
    id: 2,
    name: "Some Client",
    position: "Works as CEO",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    // image: "./careerasserts/image 10.png", // Replace with the actual image path
    image:img, // Replace with the actual image path

  },
  {
    id: 3,
    name: "Some Client",
    position: "Works as CEO",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    // image: "path_to_image.jpg", // Replace with the actual image path
    image:img, // Replace with the actual image path

  },
];

const CareerTestimonials = () => {
  return (
    <section className="flex justify-center items-start p-12 bg-white">
      {/* Left Side - Heading */}
      <div className="w-1/3 pr-8 space-y-4 sticky top-28 h-[300px]">
        <div className="bg-gray-200 w-12 h-12 rounded-full"></div>
        <p className="text-[#000] uppercase text-sm">Student Feedback</p>
        <h2 className="text-[40px] font-normal text-[#000]">
          Testimonials from Delighted Clients
        </h2>
        <p className="text-[#000] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Right Side - Testimonials */}
      <div className="w-2/3 space-y-0">
        {testimonials.map((testimonial) => (
            <>
       
          <div
            key={testimonial.id}
            className="flex items-center bg-gray-50 px-6 py-20 rounded- shadow-md relative"
          >
            {/* Quote Icon */}
            <div className="absolute right-6 top-4 text-4xl text-gray-200">
          <svg width="56" height="50" viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.7613 25.3477H42.0288V18.3618C42.0288 14.5086 45.1616 11.3759 49.0148 11.3759H49.888C51.3398 11.3759 52.5077 10.2079 52.5077 8.75614V3.5167C52.5077 2.06493 51.3398 0.896973 49.888 0.896973H49.0148C39.3655 0.896973 31.55 8.71248 31.55 18.3618V44.559C31.55 47.4516 33.8968 49.7985 36.7894 49.7985H50.7613C53.6539 49.7985 56.0007 47.4516 56.0007 44.559V30.5872C56.0007 27.6946 53.6539 25.3477 50.7613 25.3477ZM19.3246 25.3477H10.5922V18.3618C10.5922 14.5086 13.7249 11.3759 17.5781 11.3759H18.4513C19.9031 11.3759 21.0711 10.2079 21.0711 8.75614V3.5167C21.0711 2.06493 19.9031 0.896973 18.4513 0.896973H17.5781C7.92879 0.896973 0.113281 8.71248 0.113281 18.3618V44.559C0.113281 47.4516 2.46012 49.7985 5.35273 49.7985H19.3246C22.2172 49.7985 24.564 47.4516 24.564 44.559V30.5872C24.564 27.6946 22.2172 25.3477 19.3246 25.3477Z" fill="#E1E1E1"/>
</svg>

            </div>
            
            {/* Testimonial Content */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-40 h-40 rounded-full mr-6"
            />
            <div>
              <p className="text-[#000] font-normal w-[75%]">{testimonial.feedback}</p>
              <p className="mt-2 text-sm text-[#FFD04A] font-semibold font-inter italic ">
                - {testimonial.name}, {testimonial.position}
              </p>
            </div>
          </div>
          <hr/>
               </>
        ))}
      </div>
    </section>
  );
};

export default CareerTestimonials;
