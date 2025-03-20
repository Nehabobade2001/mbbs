import React from 'react';
import Marquee from '../magicui/marquee';  // Assuming Marquee.js is in the same folder

const partners = [
  { id: 1, name: 'Deeksha', image: 'https://hellomentor.in/_next/image?url=%2Fpartnership%2FDeeksha.png&w=256&q=75' },
  { id: 2, name: 'Base', image: 'https://hellomentor.in/_next/image?url=%2Fpartnership%2Fbase.png&w=256&q=75' },
  { id: 3, name: 'Narayana', image: 'https://hellomentor.in/_next/image?url=%2Fpartnership%2Fvit.png&w=256&q=75' },
  { id: 4, name: 'VIT', image: 'https://hellomentor.in/_next/image?url=%2Fpartnership%2Fvit.png&w=256&q=75' },
];

const PartnersCarousel = () => {
  return (
    <div className="container mx-auto py-12 bg-white"> {/* Added white background */}
      <h2 className="text-center text-2xl font-bold mb-8 text-[#233871]">
        Our <span className="text-[#f6c16f] font-poppins">Proud Partners</span> {/* Updated colors */}
      </h2>

      <div className="relative w-full flex-col overflow-hidden bg-white z-10">
        {/* Single-line marquee */}
        {/* <Marquee className="[--duration:20s]">
          <div className="flex space-x-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee> */}
      </div>
    </div>
  );
};

export default PartnersCarousel;
