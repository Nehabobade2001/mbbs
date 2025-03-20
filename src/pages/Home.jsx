import React from "react";
import Hero from "../components/homeComponent/Hero";
import { CollegeMarquee } from "../components/homeComponent/CollegeMarquee";
import TextRevealByWord from "../components/magicui/text-reveal";
// import CoursesSection from "../components/homeComponent/Courses";
import CoursesSection2 from "../components/homeComponent/CourseSection";
import Offerings from "../components/homeComponent/OfferSection";
import { OrbitingCirclesDemo } from "../components/homeComponent/sub/OrbitingCirclesDemo";
import { ReviewMarquee } from "../components/homeComponent/sub/ReviewMarquee";
import Accordion from "../components/homeComponent/FAQ";
import GetStarted from "../components/homeComponent/GetStarted";
import InfoSectionWithSwiper from "../components/homeComponent/InfoSectionWithSwiper";
import Specialised from "../components/homeComponent/Specialised";
import BlogSection from "../components/homeComponent/BlogSection";

const Home = ({ OpenForm }) => {
  return (
    <>
      {/* <div className="pt-10"> */}
      <Hero />
      {/* </div> */}
      <div className="flex h-auto w-full items-center justify-around overflow-hidden bg-slate-50  mt">
        <CollegeMarquee />
      </div>
      <TextRevealByWord text="At Aspirant’s Ally, we are dedicated to helping medical aspirants achieve their dreams. Our comprehensive consultancy services provide personalized guidance for UG and PG admissions. We assist students every step of the way, from selecting the right courses to navigating complex entrance exams and admission processes. With a focus on professional counseling, our services have received excellent feedback from our clients." />
      <Offerings OpenForm={OpenForm} />
      {/* <CoursesSection /> */}
      {/* <Specialised /> */}
      <CoursesSection2 />
      <BlogSection />
      <InfoSectionWithSwiper />
      <div className="relative flex h-[831px] w-full items-end justify-normal overflow-hidden bg-slate-50 pt-12">
        <div className="pointer-events-none absolute inset-y-56 bottom-0 w-full bg-gradient-to-b  from-transparent to-white dark:from-background z-30"></div>
        <div className="text-center px-4  absolute top-16 md:translate-y-1 md:translate-x-1/2">
          <h2 className="text-3xl font-bold text-[#000000]">
            Hear From Our Successful{" "}
            <span className="text-[#233871]">Aspirants</span>
          </h2>
          <p className="text-sm text-gray-500">
            Discover how Aspirant’s Ally has helped students achieve their
            medical dreams with our professional counseling services.
          </p>
          <div className="mt-2 w-14 h-1 bg-[#233871] mx-auto"></div>
        </div>
        <OrbitingCirclesDemo />
        <ReviewMarquee />
      </div>

      <div className="flex flex-col h-auto w-full items-center gap-y-8 md:gap-y-12 lg:gap-y-16 justify-self-start overflow-hidden bg-slate-50 p-4 md:p-8 lg:p-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#black]">
            Frequently Asked <span className="text-[#233871]">Questions</span>
          </h2>
          <div className="mt-2 w-10 md:w-12 lg:w-14 h-1 bg-[#233871] mx-auto"></div>
        </div>
        <Accordion />
      </div>

      <GetStarted />
      {/* <FooterNew /> */}
    </>
  );
};

export default Home;
