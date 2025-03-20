import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const TrendingArticle = ({ image, title, readTime, excerpt }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between h-full">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <div className="flex flex-col justify-between flex-grow">
      <div>
        <h3 className="font-semibold text-[#233871] text-lg mb-2">{title}</h3>
        <p className="text-[#233871] text-sm mb-2">{readTime}</p>
        <p className="text-[#233871] text-sm mb-2">{excerpt}</p>
      </div>
      <a href="#" className="text-[#233871] hover:text-[#2338718a] mt-4 transition duration-300">Read Now</a>
    </div>
  </div>
);

const JapanTrendingArticles = () => {
  const articles = [
    {
      image: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/03/12191529/Study-in-Spain.jpg',
      title: "How to get Japan Business Visa?",
      readTime: "5 mins read",
      excerpt: "Europe leading Investment destination filled with opportunities.",
    },
    {
      image: 'https://blogassets.leverageedu.com/media/uploads/2022/05/28115728/university-of-pisa.jpg',
      title: "February Intake Universities in Japan",
      readTime: "5 mins read",
      excerpt: "The Japan is one of the top study destinations providing world-class education...",
    },
    {
      image: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/03/12191529/Study-in-Spain.jpg',
      title: "Difference Between September and January Intake in Japan",
      readTime: "5 mins read",
      excerpt: "Learn the key differences between September and January intakes.",
    },
    {
      image: 'https://blogassets.leverageedu.com/media/uploads/2022/05/28115728/university-of-pisa.jpg',
      title: "Scholarships for International Students in the Japan",
      readTime: "4 mins read",
      excerpt: "Explore scholarships available for international students in the Japan.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#233871] text-2xl font-bold">What's Trending in the Japan?</h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500 }}
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop={true}
        modules={[Autoplay]} // Only use Autoplay, no navigation or pagination
        className="w-full"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <TrendingArticle {...article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JapanTrendingArticles;
