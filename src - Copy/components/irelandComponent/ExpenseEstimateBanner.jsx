import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import one from '../../Images/Destination/unsplash_-MCrF6hnojU.png';
import two from '../../Images/Destination/unsplash_-MCrF6hnojU (1).png';

const VisaScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visaData = [
    {
      title: "General Student - Tier 4",
      cost: "£339",
      type: "Study",
      description: "This category is for students coming to the UK for post-16 education. A Tier 4 (General) Student must be at least 16 years old.",
      image: one,
    },
    {
      title: "Child Student - Tier 4",
      cost: "£339",
      type: "Study",
      description: "This category is for students coming to the UK for post-16 education. A Tier 4 (General) Student must be at least 16 years old.",
      image: two,
    },
    {
      title: "Short-Term Study Visa",
      cost: "£97",
      type: "Study",
      description: "For students enrolling in a short course (up to 6 months) in the UK.",
      image: one,
    },
    {
      title: "Graduate Visa",
      cost: "£700",
      type: "Post-study work",
      description: "This visa allows you to stay and work in the UK for up to 2 years after completing your studies.",
      image: two,
    }
  ];

  // Logic for handling scrolling
  const nextSlide = () => {
    if (currentIndex < visaData.length - 2) {
      setCurrentIndex((prev) => prev + 2);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 2);
    } else {
      setCurrentIndex(visaData.length - 2); // Go to last slide set
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative">
      <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#233871' }}>Post Admission Experience</h1>
      <h2 className="text-xl font-semibold mb-6" style={{ color: '#233871' }}>Visa for United Kingdom</h2>

      {/* Scroller Container */}
      <div className="relative w-full">
        <div className="flex items-center justify-between relative">

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-[-80px] z-10 p-4 top-1/2 transform -translate-y-1/2 rounded-full bg-[#233871] text-white hover:bg-[#1a2b5f]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider Content */}
          <div className="flex transition-transform duration-500 ease-in-out overflow-hidden">
            {/* Mapping over the data to display cards */}
            <div className="flex w-full" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
              {visaData.map((visa, index) => (
                <div
                  key={index}
                  className="w-1/2 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex h-72">

                    {/* Visa Image */}
                    <div className="w-1/2 h-full">
                      <img
                        src={visa.image}
                        alt={visa.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Visa Content */}
                    <div className="w-1/2 p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#233871' }}>{visa.title}</h3>
                      <p className="text-gray-700 mb-2">Cost: {visa.cost}</p>
                      <p className="text-gray-700 mb-2">Type: {visa.type}</p>
                      <p className="text-gray-600 mb-2">{visa.description}</p>
                      <a
                        href="#"
                        className="text-[#233871] hover:text-[#1a2b5f] font-medium text-right"
                      >
                        View -&gt;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-[-80px] z-10 p-4 top-1/2 transform -translate-y-1/2 rounded-full bg-[#233871] text-white hover:bg-[#1a2b5f]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#233871] text-white px-6 py-2 rounded-md hover:bg-[#1a2b5f]">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default VisaScroller;
