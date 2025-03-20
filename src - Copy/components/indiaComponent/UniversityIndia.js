import React from 'react';
import IndTrendingArticles from './IndTrendingArticles';
import UniversityComparisonInd from './UniversityComparisonInd';
import BannerInd from './BannerInd';

// Updated FactCard component to use images instead of icons
const FactCard = ({ imageSrc, title, value }) => (
  <div className="bg-white p-4 flex items-center space-x-4 rounded-lg shadow-lg">
    <div className="flex-shrink-0 ">
      <img src={imageSrc} alt={title} className="w-10 h-10" /> {/* Image instead of icon */}
    </div>
    <div>
      <p className="text-sm text-[#233871] font-semibold">{title}</p>
      <p className=" text-[#233871] font-bold">{value}</p> {/* Updated text color */}
    </div>
  </div>
);

const FactsGrid = () => {
  // Facts data array
  const factsData = [
    { imageSrc: 'https://images.leverageedu.com/assets/img/washington-monument.png', title: "Capital", value: "London" },
    { imageSrc: 'https://images.leverageedu.com/assets/img/teamwork.png', title: "Population", value: "68 Mn" },
    { imageSrc: 'https://images.leverageedu.com/assets/img/translate.png', title: "Language", value: "English" },
    { imageSrc: 'https://images.leverageedu.com/assets/img/global.png', title: "International Students", value: "485,645" },
    { imageSrc: 'https://images.leverageedu.com/assets/img/economic.png', title: "GDP", value: "$ 3.12 Trillion" },
    { imageSrc: 'https://images.leverageedu.com/assets/img/keypad.png', title: "Dialing Code", value: "+44" },
    { imageSrc: 'https://images.leverageedu.com/assets/img/money.png', title: "Currency", value: "Pound sterling" },
    { imageSrc: 'https://images.leverageedu.com/assets/img/graduation-hat.png', title: "Universities and Colleges", value: "359" },
  ];

  // Data for the "Why Study in the UK?" section
  const whyStudyData = {
    title: "Why Study in India?",
    description: `The India is home to the world's most esteemed universities and is among the popular destinations 
                  for studying abroad. Ranked as the best education systems in the world, the Indian Education System provides 
                  a plethora of courses in various subjects, including Business, Engineering, Medicine, Arts, and Design, 
                  delivered through exceptional teaching styles.`,
    buttonText: "Read More",
  };

  // Handler for the "Read More" button
  const handleReadMore = () => {
    console.log("Read more button clicked");
  };

  return (
    <>
      <div className="container mx-auto px-20 py-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {/* Map over the dynamic factsData */}
          {factsData.map((fact, index) => (
            <FactCard key={index} {...fact} />
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: 'rgb(166 246 255)' }} className=" p-8 rounded-lg"> {/* Updated background color */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#233871] mb-4">{whyStudyData.title}</h2> {/* Updated text color */}
          <p className="text-black font-semibold mb-6">{whyStudyData.description}</p> {/* Updated text color */}
          <div className="flex justify-center">
            <button
              className="bg-[#233871] hover:bg-[#2338718a] text-white font-semibold py-3 px-8 rounded-full transition duration-300"
              onClick={handleReadMore}
            >
              {whyStudyData.buttonText}
            </button>
          </div>
        </div>
      </div>
      <IndTrendingArticles />
      <BannerInd />
      <UniversityComparisonInd />
    </>
  );
};

export default FactsGrid;
