import React, { useRef, useState } from 'react';

const Slider = ({ topics, onSelect }) => {
  const [activeTopic, setActiveTopic] = useState(null); // State to track the active topic
  const sliderRef = useRef(null); // Reference to the slider container

  const handleSelect = (id) => {
    setActiveTopic(id); // Set the active topic when an item is clicked
    onSelect(id);
  };

  // Function to scroll the slider left or right
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: direction * (sliderRef.current.offsetWidth / 6), behavior: 'smooth' }); // Scroll by one-sixth of the container width
    }
  };

  return (
    <div className="relative sticky top-0 z-10 w-full bg-white shadow-md py-4 pt-32">
      {/* Left arrow button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#233871] text-white px-2 py-1 rounded-full hover:bg-[#2338718a] transition duration-300"
        onClick={() => scrollSlider(-1)} // Scroll left
      >
        &lt; {/* Left arrow or custom icon */}
      </button>

      {/* Slider content */}
      <div
        className="container mx-auto flex space-x-2 justify-center overflow-hidden"
        ref={sliderRef} // Reference to the slider content
      >
        <div className="flex"> {/* Additional div to wrap topics for better scrolling */}
          {topics.map((topic) => (
            <span
              key={topic.id}
              className={`inline-block text-black py-3 px-4 cursor-pointer transition duration-300 
                ${activeTopic === topic.id ? 'border-b-2 border-[#233871] font-semibold text-[#233871]' : 'text-black'} 
                hover:text-[#233871]`} // Active item underline and color, hover effect for text
              onClick={() => handleSelect(topic.id)} // Handle item selection
            >
              {topic.name}
            </span>
          ))}
        </div>
      </div>

      {/* Right arrow button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#233871] text-white px-2 py-1 rounded-full hover:bg-[#2338718a] transition duration-300"
        onClick={() => scrollSlider(1)} // Scroll right
      >
        &gt; 
      </button>
    </div>
  );
};

export default Slider;
