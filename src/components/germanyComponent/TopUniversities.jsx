import React, { useRef } from 'react';
import UKTrendingArticles from './TrendingArticle';
import UniversityComparison from './UniversityComaparison';
import Banner from './Banner';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Capital from '../../Images/Germany/Capital.png';
import Population from '../../Images/Destination/World Solidarity (HD) 1.png';
import Language from '../../Images/Destination/Translation 3D Icon Model With Black Connector 1.png';
import Students from '../../Images/Destination/Teacher 1.png';
import GDP from '../../Images/Destination/economic_9147861 1.png';
import Dialing from '../../Images/Destination/Encrypted Binary Code 1.png';
import Currency from '../../Images/Destination/Currency Exchange 1.png';
import University from '../../Images/Destination/Untitled_design__2_-removebg-preview 1.png';

const FactCard = ({ imageSrc, title, value }) => (
  <div className="bg-white p-4 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 rounded shadow-lg mb-6 gap-6 transform transition-transform duration-300 hover:scale-110">
    <div className="flex-shrink-0 sm:-mt-16 ">
      <img src={imageSrc} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </div>
    <div className=" text-center sm:text-left">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold text-[#233871]">{value}</p>
    </div>
  </div>
);

const FactsGrid = () => {
  const factsData = [
    { imageSrc: Capital, title: "Capital", value: "Berlin" },
    { imageSrc: Population, title: "Population", value: "83 Million" },
    { imageSrc: Language, title: "Language", value: "German" },
    { imageSrc: Students, title: "International Students", value: "458,210" },
    { imageSrc: GDP, title: "GDP", value: "$ 4.5 Trillion" },
    { imageSrc: Dialing, title: "Dialing Code", value: "49" },
    { imageSrc: Currency, title: "Currency", value: "Euro" },
    { imageSrc: University, title: "Universities and Colleges", value: "400+" },
  ];

  // Create a ref to track the scrollable container
  const scrollRef = useRef(null);

  // Scroll handler function
  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Scrollable Section with chevron buttons */}
      <div className="sm:hidden relative p-4">
        {/* Left Chevron Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
          onClick={() => scroll(-150)}
        >
          <FaChevronLeft size={24} className="text-[#233871]" />
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto flex p-4 scrollbar-hide"
          style={{ width: '100%', scrollSnapType: 'x mandatory' }}
        >
          {factsData.map((fact, index) => (
            <div key={index} className="flex-shrink-0 w-full snap-start">
              <FactCard {...fact} />
            </div>
          ))}
        </div>

        {/* Right Chevron Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 z-10"
          onClick={() => scroll(150)}
        >
          <FaChevronRight size={24} className="text-[#233871]" />
        </button>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-[2rem]">
        {factsData.map((fact, index) => (
          <FactCard key={index} {...fact} />
        ))}
      </div>

      {/* Other sections */}
      <UKTrendingArticles />
      <Banner />
      <UniversityComparison />
    </>
  );
};

export default FactsGrid;
