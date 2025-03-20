import ShimmerButton from "../magicui/shimmer-button";
import Card from "./Card/Card";

const SecondSection = () => {
  const card = [
    {
      url: "https://www.jamboreeindia.com/assets/why-choose/cbd9539a3a305db276129af13a3e570e.webp",
      text: "Unmatched highest scores on the PTE exam since 1993",
    },
    {
      url: "https://www.jamboreeindia.com/assets/why-choose/a8e02075063905c41e020efd3bf8d9f2.webp",
      text: "Smart analytics to help track and evaluate your performance",
    },
    {
      url: "https://www.jamboreeindia.com/assets/why-choose/570565a31eda6108b8dc0f48b98c615c.webp",
      text: "PTE-like online training portal simulates real test conditions",
    },
    {
      url: "https://www.jamboreeindia.com/assets/why-choose/beee81faaff0a3f4f3e3e79021d2c626.webp",
      text: "Personalized study plan & exhaustive full-length practice tests",
    },
    {
      url: "https://www.jamboreeindia.com/assets/why-choose/efc4951618f0a99a74691c53121b3505.webp",
      text: "Mentoring and coaching by the best and most experienced faculty",
    },
    {
      url: "https://www.jamboreeindia.com/assets/why-choose/995b88d181a5dc41fb7d68755762ffa5.webp",
      text: "Concept-clarity through 1-on-1 unlimited doubt clearing sessions",
    },
  ];

  return (
    <div className="min-h-[100vh] text-center py-8 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-8 lg:mb-12 text-[#3e5ba9]">
        Why Choose {''}
        <span className="text-[#F6C16E]">Aspirant's Ally</span> {''}
         for PTE Test Prep
        <span className="text-[#F6C16E]">?</span>
        
      </h1>

      {/* Card Flex Container */}
      <div className="flex flex-wrap justify-center gap-8 px-6 sm:px-10 lg:px-16 xl:px-24">
        {card.map((value, index) => (
          <div key={index} className="flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px]">
            <Card value={value} />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-12">
        <button className="text-white px-6 py-3  transition duration-300">
          <ShimmerButton> Book a Call</ShimmerButton>
        </button>
      </div>
    </div>
  );
};

export default SecondSection;
