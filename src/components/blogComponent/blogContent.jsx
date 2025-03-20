import React from 'react';

const BlogContent = ({ content, title }) => {
  return (
    <div className="w-full md:w-3/4 p-4 pt-4"> {/* Responsiveness for smaller screens */}
      <h2 className="font-semibold text-2xl md:text-3xl mb-4 pt-4 font-poppins text-[#233871]"> {/* Updated color and responsive font size */}
        {title}
      </h2>
      <p className="text-black mb-4"> {/* Black color for general text */}
        {content}
      </p>

      {/* Sample button */}
      <button className="bg-[#233871] text-white py-2 px-4 rounded hover:bg-[#2338718a] transition duration-300">
        Click Me
      </button>

      {/* Example of special text with the color #f6c16f */}
      <p className="mt-4">
        Here is some <span className="text-[#f6c16f]">important text</span> that stands out from the rest.
      </p>
    </div>
  );
};

export default BlogContent;
