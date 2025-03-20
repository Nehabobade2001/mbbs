import Slide1 from "./slides/Slide1";

const FifthSection = () => {
  return (
    <div className="min-h-[100vh] py-10 px-4 bg-gray-50">
      {/* Header */}
      <div className="text-center">

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-medium text-[#3e5ba9]">
          Want to know about the GMAT, its eligibility, fees, and test structure?
</h1>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#3e5ba9]">
          Want to know about the {''}
          <span className="text-[#F6C16D]">GMAT</span> 
          , its eligibility, fees, and test {''}
          <span className="text-[#F6C16D]">structure</span> 
          
          ?

        </h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

        <button className="bg-[#233871] text-white font-poppins px-6 py-3 rounded-md shadow-md hover:bg-[#1d2e5b] transition-all duration-300"> </button>

        <button className=" text-white px-6 py-3 rounded-full  transition-all duration-300">
          <ShimmerButton />

          Know More about GMAT
        </button>

        <button className="bg-[#233871] text-white px-6 py-3 font-poppins rounded-md shadow-md hover:bg-[#1d2e5b] transition-all duration-300"> </button>

        <button className=" text-white px-6 py-3 rounded-full transition-all duration-300">
          <ShimmerButtonTwo />

          Check Batch Schedule
        </button>
      </div>

      {/* Testimonials Header */}
      <div className="py-12 font-medium">

        <h1 className="text-xl sm:text-2xl lg:text-3xl text-center text-[#3e5ba9] font-poppins">
          What Our GMAT Prep Achievers Say
</h1>
        <h1 className="text-xl sm:text-2xl lg:text-3xl text-center text-[#3e5ba9]">
          What Our {''}
          <span className="text-[#F6C16D]">GMAT </span>{''}
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

