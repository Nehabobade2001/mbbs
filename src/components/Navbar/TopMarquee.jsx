import React from "react";
import Marquee from "../magicui/marquee"; // Adjust the import if necessary

export function TopMarquee() {
  return (
    <div className="fixed w-full flex-col overflow-hidden bg-[#243771] z-[9999999] shadow-white ">
      <Marquee className="[--duration:10s]">
        <div className="flex items-center justify-center w-full h-full px-4">
          <span className="text-white text-xl font-bold">⭐️</span>
          <span className="text-white text-md font-normal ml-10 tracking-wider">
            Register Now
          </span>
        </div>
      </Marquee>
    </div>
  );
}
