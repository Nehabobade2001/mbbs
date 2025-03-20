import React from "react";
import { cn } from "../../lib/utils";

export const TextRevealByWord = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <div className={cn("relative z-0  bg-gray-50", className)}>
      <div className="mx-auto flex flex-col md:h-[80vh] max-w-6xl items-center justify-center bg-slate-50  py-[5rem]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#3e5ba9]">
            Who We Are <span className="text-[#f6c16f]">?</span>
          </h2>
          <p className="text-sm text-gray-500">
            Guiding medical aspirants from preparation to admissions
          </p>
          <div className="mt-2 w-14 h-1 bg-[#f6c16f] mx-auto"></div>
        </div>
        <p className="flex flex-wrap p-5 text-xl font-light text-black/70 dark:text-white/70 md:p-8 md:text-2xl lg:p-10 lg:text-2xl xl:text-3xl">
          {words.join(" ")}
        </p>
      </div>
     </div>
  );
};

export default TextRevealByWord;
