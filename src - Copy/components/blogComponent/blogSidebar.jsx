import React, { useState } from 'react';

const BlogSidebar = ({ titles, onSelectTitle }) => {
  const [activeTitle, setActiveTitle] = useState(null); // State to track the active title

  const handleSelect = (id) => {
    setActiveTitle(id); // Set the active title when clicked
    onSelectTitle(id);
  };

  return (
    <div className="w-full md:w-1/4 bg-gray-50 p-4 pb-20 pt-8 overflow-y-auto font-poppins"> {/* Apply Poppins font to the entire component */}
      <ul>
        {titles.map((title) => (
          <li
            key={title.id}
            className={`cursor-pointer mb-2 pl-2 py-2 transition-all duration-300 rounded-lg 
              ${
                activeTitle === title.id 
                  ? 'font-bold bg-[#f6c16f] text-[#233871]' // Active item background and text color
                  : 'text-black font-medium' // Slightly bolder font for non-active items
              } 
              hover:text-[#233871]`} // Hover changes color to #233871
            onClick={() => handleSelect(title.id)} // Handle click on the title
          >
            {title.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSidebar;
