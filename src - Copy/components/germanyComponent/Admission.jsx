import React, { useState, useEffect } from 'react';
import UkAgent1 from '../../Images/Destination/Frame 512678.png';
import UkAgent2 from '../../Images/Destination/Rectangle 32.png';
import TrendingBanner from './TopUniversitiesBanner';

const CommitmentSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scrolling images for the large image section
  const scrollImages = [UkAgent1, UkAgent2];

  // Auto-scroll images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % scrollImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-blue-900 text-lg font-medium">
              Our Commitment to Germany's Agent Quality Framework
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We are dedicated to upholding the Germany's Agent Quality Framework, ensuring
              the highest standards of professionalism, ethics, and service. Our commitment
              guarantees reliable, transparent, and trusted guidance, putting clients' best
              interests first.
            </p>

            <button className="bg-blue-900 text-white px-6 py-2 rounded flex items-center group hover:bg-blue-800 transition-colors">
              Know More
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex gap-6">
            {/* Small Static Image */}
            <div className="flex flex-col -ml-[5rem] lg:ml-0"> {/* Hide left margin on smaller screens */}
              <div className="w-38 h-38 rounded-lg overflow-hidden self-end">
                <img
                  src={UkAgent1}
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Statistics Card */}
              <div className="sm:w-[25rem] bg-orange-50 rounded-lg p-8 flex-1 m-2"> 
                <div className="flex justify-between">
                  <div className="text-center">
                    <p className="text-4xl font-serif mb-2">7</p>
                    <p className="text-sm">Total State</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-serif mb-2">5</p>
                    <p className="text-sm">Total City</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-serif mb-2">45</p>
                    <p className="text-sm">Total Agent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Scrolling Image - Only for Desktop */}
            <div className="relative h-[350px] rounded-lg overflow-hidden hidden lg:block"> {/* This div will now be completely hidden on mobile and tablet screens */}
              <div 
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {scrollImages.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-full h-full"
                  >
                    <img
                      src={image}
                      alt={`Professional ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {scrollImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors
                      ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Static Image - Display when slider is hidden */}
            <div className="lg:hidden w-full h-[350px] rounded-lg overflow-hidden"> {/* This div will show on mobile and tablet screens */}
              <img
                src={scrollImages[currentImageIndex]} // Show the current image based on the index
                alt={`Professional`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <TrendingBanner />
    </>
  );
};

export default CommitmentSection;
