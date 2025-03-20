import ShimmerButton from "../magicui/shimmer-button";
import Card3 from "./Card/Card3";

const SeventhSection = () => {
  return (
    <div className="min-h-[100vh] bg-gray-50 py-10">
      {/* First Section: Left and Right side */}
      <div className="flex flex-col lg:flex-row items-center h-[80vh] px-4">
        {/* Left Column: Text and Button */}
        <div className="flex flex-col justify-center items-center lg:w-1/2 w-full text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold lg:w-[30vw]">
            Aspirant's Ally Offers Everything You Need For A Smart TOEFL Exam Preparation
          </h1>
          <button className=" text-white py-2 px-6 mt-6 ">
            <ShimmerButton>
            Download TOEFL Test Prep App
            </ShimmerButton>
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <img
            className="w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px] object-contain"
            src="https://www.jamboreeindia.com/assets/product-page/img/product-icons/laptop.webp"
            alt="TOEFL Test Prep App"
          />
        </div>
      </div>

      {/* Second Section: Free TOEFL Prep Resources */}
      <div className="text-center mt-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#243771]">
          Free {''}
          <span className="text-[#F6C16D]">TOEFL </span> 
            Prep Resources
        </h1>
      </div>

      {/* Cards Section: TOEFL Quiz and Syllabus Download */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 mt-12 px-6 sm:px-12 lg:px-24">
        <Card3
          value={{
            url: "https://www.jamboreeindia.com/assets/product-page/img/product-icons/37d0e8c2062a8c42a5168ab5d0216195.webp",
            title: "TOEFL Quiz",
            text: "Take the TOEFL preparation test and begin your TOEFL preparation online now",
            button: "Take TOEFL Quiz",
          }}
        />

        <Card3
          value={{
            url: "https://www.jamboreeindia.com/assets/product-page/img/product-icons/02bfe32d5e496c2ccad0ffdd3f1b458a.webp",
            title: "Syllabus Download",
            text: "Download the TOEFL syllabus now and get a head start on your TOEFL preparation",
            button: "Download TOEFL Syllabus",
          }}
        />
      </div>
    </div>
  );
};

export default SeventhSection;
