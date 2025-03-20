import React from "react";
import Marquee from "../magicui/marquee"; // Adjust the import if necessary

export function TopMarquee() {
 
  return (
    <div className="fixed w-full flex-col overflow-hidden bg-[#233871] z-50 shadow-white ">
      <Marquee className="[--duration:10s]">
        <div className="flex items-center justify-center w-full h-full px-4">
          <span className="text-white text-xl font-bold ml-10">⭐️</span>
          <span className="text-white text-md font-normal tracking-wider">Web Development</span>
          <span className="text-white text-xl font-bold ml-10">⭐️</span>
          <span className="text-white text-md font-normal  tracking-wider">Custom Software Development
</span>
          <span className="text-white text-xl font-bold ml-10">⭐️</span>
          <span className="text-white text-md font-normal  tracking-wider">App Development</span>
          <span className="text-white text-xl font-bold ml-10">⭐️</span>
          <span className="text-white text-md font-normal  tracking-wider">Graphics Design</span>
          <span className="text-white text-xl font-bold ml-10">⭐️</span>
          <span className="text-white text-md font-normal  tracking-wider">Social Media Marketing</span>
          <span className="text-white text-xl font-bold ml-10">⭐️</span>
          <span className="text-white text-md font-normal  tracking-wider">SEO</span>
        </div>
      </Marquee>
    </div>
  );
}
