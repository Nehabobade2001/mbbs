import ShimmerButton from "../magicui/shimmer-button";
import ShimmerButtonTwo from "../magicui/shimmer-button-Two";
import Slide1 from "./slides/Slide1";

const FifthSection = () => {
  return (
    <div className="min-h-[100vh] py-10 px-4 bg-gray-50 felx items-center justify-center">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#3e5ba9]">
          Want to know about the {''}
          <span className="text-[#F6C16D]">IELTS</span> 
          , its eligibility, fees, and test {''}
          <span className="text-[#F6C16D]">structure</span> 
          
          ?
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button className=" text-white px-6 py-3 rounded-full  transition-all duration-300">
          <ShimmerButton>
          Know More about IELTS
          </ShimmerButton>
        </button>
        <button className=" text-white px-6 py-3 rounded-full transition-all duration-300">
          <ShimmerButtonTwo>
          Check Batch Schedule
          </ShimmerButtonTwo>
        </button>
      </div>

      {/* Testimonials Header */}
      <div className="py-12 font-medium">
        <h1 className="text-xl sm:text-2xl lg:text-3xl text-center text-[#3e5ba9]">
          What Our {''}
          <span className="text-[#F6C16D]">IELTS </span>{''}
         Prep Achievers Say
        </h1>

        {/* Testimonial Slider */}
        <div className="flex justify-center items-center mt-12">
          <div className="w-full max-w-4xl">
            <Slide1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
