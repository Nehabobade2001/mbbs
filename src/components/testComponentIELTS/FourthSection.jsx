const FourthSection = () => {
  return (
    <div className="min-h-[85vh] px-4 bg-gray-50">
      {/* Header */}
      <div className="text-center text-2xl sm:text-3xl">
        <h1 className="font-medium text-[#3e5ba9]">
        <span className="text-[#F6C16D]">Aspirant's Ally </span> 
          IELTS Coaching</h1>
        <p className=" sm:text-2xl lg:text-base  opacity-80 mt-2 text-gray-800">
          Designed To Help Your IELTS Prep In 3 Key Areas
        </p>
      </div>

      {/* Key Areas Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        <div className="min-w-[200px] sm:min-w-[24vw] bg-[#f6c16f] flex flex-col gap-4 items-center justify-center py-4 rounded-2xl border-8 border-white shadow-lg shadow-yellow-100">
          <img
            className="h-[50px] sm:h-[60px] lg:h-[80px]"
            src="https://www.jamboreeindia.com/assets/help-you/def20285e5fd0de98b2b38200a1e67c2.webp"
            alt="Concepts"
          />
          <h1 className="text-xl sm:text-2xl text-white font-medium opacity-90">
            Concepts
          </h1>
        </div>
        <div className="min-w-[200px] sm:min-w-[24vw] bg-[#233871] flex flex-col gap-4 items-center justify-center py-4 rounded-2xl border-8 border-white shadow-lg shadow-blue-100">
          <img
            className="h-[50px] sm:h-[60px] lg:h-[80px]"
            src="https://www.jamboreeindia.com/assets/help-you/a311070dae18affb6cf5bcd0813dc68d.webp"
            alt="Accuracy & Speed"
          />
          <h1 className="text-lg sm:text-xl text-white font-medium opacity-80">
            Accuracy & Speed
          </h1>
        </div>
        <div className="min-w-[200px] sm:min-w-[24vw] bg-[#f6c16f] flex flex-col gap-4 items-center justify-center py-4 rounded-2xl border-8 border-white shadow-lg shadow-yellow-100">
          <img
            className="h-[50px] sm:h-[60px] lg:h-[80px]"
            src="https://www.jamboreeindia.com/assets/help-you/36de1e4b444d138ecf8e69628aa46be7.webp"
            alt="Stamina & Strategy"
          />
          <h1 className="text-lg sm:text-xl text-[#FFF] font-medium opacity-80">
            Stamina & Strategy
          </h1>
        </div>
      </div>

      {/* Lower Section with Image and Text List */}
      <div className="flex flex-col lg:flex-row pt-12 lg:gap-12 mt-10">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <img
            className="w-full max-w-[400px] lg:max-w-full"
            src="https://www.jamboreeindia.com/assets/help-you/15.webp"
            alt="Jamboree Coaching"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center justify-center px-4">
          {[
            {
              imgSrc:
                "https://www.jamboreeindia.com/assets/help-you/c2556d1a2281fa851b880602bdbf7ee6.webp",
              text: "Classes by Jamboree's expert faculty on the concepts tested on the IELTS",
            },
            {
              imgSrc:
                "https://www.jamboreeindia.com/assets/help-you/f525d91a4387908cfa03b0ada4a8a0cb.webp",
              text: "Jamboree teaches you exactly what you need to ace the IELTS - nothing more, nothing less",
            },
            {
              imgSrc:
                "https://www.jamboreeindia.com/assets/help-you/32558727c12dfa3b4dc05e7a7f7cc768.webp",
              text: "Topic-based exercises to help gain mastery of concepts",
            },
            {
              imgSrc:
                "https://www.jamboreeindia.com/assets/help-you/9aaab7bfebd00dc527427309a17e0e3d.webp",
              text: "Concepts taught in the class are also available as HD videos for easy reference",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="min-h-[10vh] flex items-center gap-4 border border-gray-200 py-4 px-6 bg-white rounded-xl w-full shadow-sm"
            >
              <img
                className="h-[40px] w-[40px] object-contain"
                src={item.imgSrc}
                alt=""
              />
              <h1 className="text-lg text-gray-700 font-medium opacity-80 flex-1">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
