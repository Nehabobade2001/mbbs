import { useRef } from "react";
import { useScroll } from "framer-motion";
import { cn } from "../../lib/utils";
import React from "react";
import AdvantagesSection from "./AdvantagesSection";

export const CoursesSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]")}>
      <div className="sticky top-0 mx-auto flex items-center bg-gray-50">
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default CoursesSection;
