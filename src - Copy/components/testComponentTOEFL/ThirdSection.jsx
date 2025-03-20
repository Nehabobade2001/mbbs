import ShimmerButton from "../magicui/shimmer-button";
import Card2 from "./Card/Card2";

const ThirdSection = () => {
  const cards = [
    {
      status: ["hybrid"],
      url: "https://www.jamboreeindia.com/assets/product-page/classroom-training.webp",
      tittle: "TOEFL Classroom Training",
      text: "In-person mentor attention and peer learning",
      btntext: "Book a Demo",
      btntext2: "Know More",
    },
    {
      status: ["online"],
      url: "https://www.jamboreeindia.com/assets/product-page/live-online-classes.webp",
      tittle: "TOEFL Live Online Training",
      text: "Classroom experience from the comfort of your home",
      btntext: "Book a Demo",
      btntext2: "Know More",
    },
    {
      status: ["online"],
      url: "https://www.jamboreeindia.com/assets/product-page/self-paced.webp",
      tittle: "TOEFL Self-Paced Online Training",
      text: "Exam prep at your own pace, in your own space",
      btntext: "Book a Demo",
      btntext2: "Know More",
    },
    {
      status: ["hybrid", "online"],
      url: "https://www.jamboreeindia.com/assets/product-page/private-tutoring.webp",
      tittle: "TOEFL Private Tutoring",
      text: "Personalised test prep with maximum one-on-one attention",
      btntext: "Book a Demo",
      btntext2: "Know More",
    },
  ];

  return (
    <div className="min-h-[85vh]  px-20 bg-gray-50">
      {/* Header */}
      <div className="text-center text-2xl sm:text-3xl">
        <h1 className="font-semibold text-[#3e5ba9]">
        TOEFL Prep <span className="text-[#F6C16D]">Courses</span> 
        </h1>
        <p className="opacity-80 text-base sm:text-lg mt-2 text-slate-600 font-light">
          Pick the TOEFL coaching that works best for you
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((value, index) => (
          <Card2 value={value} key={index} />
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className=" text-white px-6 py-3 rounded-lg  transition-all duration-300">
        <ShimmerButton>COMPARE MODES</ShimmerButton>
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;
