import ShimmerButton from "../magicui/shimmer-button";
import Card3 from "./Card/Card3";

const SixthSection = () => {
  const cards = [
    {
      url: "https://www.jamboreeindia.com/assets/product-page/img/study-portal/advance-analytics.webp",
      title: "Advanced Analytics",
      text: "Track your GMAT exam preparation with advanced analytics. Understand your progress with a performance matrix, accuracy chart, progress report & test-wise analysis.",
      button: "Track Your Performance",
    },
    {
      url: "https://www.jamboreeindia.com/assets/product-page/img/study-portal/3fa25eac643ea916541da1f7aa5e1edc.webp",
      title: "Score Predictor",
      text: "For every full-length test to support your GMAT exam prep. You will get a score out of 800, so you know where you stand. The accuracy of our score predictor is +/- 20 points.",
      button: "Predict Your Score",
    },
    {
      url: "https://www.jamboreeindia.com/assets/product-page/img/study-portal/doubtsession.webp",
      title: "Doubt Clearing Sessions",
      text: "To foolproof your GMAT prep, our online portal makes it easy to schedule doubt-clearing sessions (general or 1-on-1) at your convenience.",
      button: "Get your Doubts Cleared",
    },
    {
      url: "https://www.jamboreeindia.com/assets/product-page/img/study-portal/testingportal.webp",
      title: "GMAT-Like Testing Portal",
      text: "The testing platform at Jamboree's portal simulates the actual GMAT test experience to familiarize you with the testing conditions.",
      button: "Track Your Performance",
    },
  ];

  return (
    <div className="min-h-[100vh] py-10 bg-gray-50 px-4">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#3e5ba9]">
          Want to get your profile {''}
          <span className="text-[#F6C16D]">evaluated </span> 
            for free?
        </h1>
        <button className=" text-white py-3 px-6 mt-5 rounded-md transition-all duration-300">
          <ShimmerButton>
          Talk to an expert today!
          </ShimmerButton>
        </button>
      </div>

      {/* GMAT Prep Essentials Section */}
      <div className="text-center mt-14">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#3e5ba9]">
          Your {''}
          <span className="text-[#F6C16D]">GMAT </span> 
           Prep Essentials
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 px-4 sm:px-12 lg:px-20">
          {cards.map((value, index) => (
            <Card3 key={index} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
