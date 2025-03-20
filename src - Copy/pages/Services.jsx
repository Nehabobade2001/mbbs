import React from "react";
import ServiceHero from "../components/ServiceComp/ServiceHero";
import Hero from "../components/ServiceComp/Hero";
import EnrollSection from "../components/ServiceComp/EnrollSection";
import Accordion from "../components/homeComponent/FAQ";
import TestimonialSection from "../components/ServiceComp/TestimonialSection";
import SocialSection from "../components/ServiceComp/SocialSection";

const Services = () => {
  return (
    <>
        <Hero />
      
      <ServiceHero />
      <EnrollSection />
      <TestimonialSection />
      <SocialSection />

      <div className="flex flex-col py-20 h-[80%] w-full items-center gap-y-16 justify-self-start overflow-hidden bg-slate-50 ">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#3e5ba9]">
            Freaquently Asked <span className="text-[#f6c16f]">Questions</span>
          </h2>
          <div className="mt-2 w-14 h-1 bg-[#f6c16f] mx-auto"></div>
        </div>
        <Accordion />
      </div>
    </>
  );
};

export default Services;
