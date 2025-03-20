import { cn } from "../../lib/utils";
import GridPattern from "../magicui/grid-pattern";
import ShimmerButton from "../magicui/shimmer-button";
import ShimmerButtonTwo from "../magicui/shimmer-button-Two";
import Slide1 from "./slides/Slide1";
// import Nav from "./Nav";
// import TestimonialSlider from "./slides/Slide3";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 pt-16 lg:pt-20">
      {/* Navigation */}
      {/* <Nav /> */}
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] "
        )}
      />
      <div className="flex flex-col lg:flex-row h-full bg-slate-50">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start justify-center gap-6 px-6 lg:px-20 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] leading-tight text-[#3e5ba9] font-semibold whitespace-pre-wrap">
            Start Your {''}
            <span className="text-[#F6C16E]">IELTS</span>
             Journey With the Leaders of IELTS {''}
            <span className="text-[#F6C16E]">PREP</span>
              
          </h1>
          <p className="text-md sm:text-lg lg:text-xl leading-normal text-gray-600">
          This course offers personalized study plans, interactive workshops, and essential resources to boost your test-taking skills. Gain critical insights into the IELTS format, enhance your problem-solving abilities, and collaborate with peers in a supportive environment. Begin your journey today and take a significant step toward achieving your MBA goals!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full lg:w-auto">
            <ShimmerButton>BOOK A CALL</ShimmerButton>
           
            <ShimmerButtonTwo>ALL US</ShimmerButtonTwo>
            
          </div>
        </div>

        {/* Right Section with centered slider */}
        <div className="flex items-center justify-center w-full lg:w-1/2 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] p-6 lg:p-16">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-10">
            <Slide1 />
            {/* <TestimonialSlider /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
