import React from 'react';
import UKTrendingArticles from './TrendingArticle';
import UniversityComparison from './UniversityComaparison';
import Banner from './Banner';
import Capital from '../../Images/Destination/Big Ben Clock Tower 3D Model (HD) 1.png';
import Population from '../../Images/Destination/World Solidarity (HD) 1.png';
import Language from '../../Images/Destination/Translation 3D Icon Model With Black Connector 1.png';
import Students from '../../Images/Destination/Teacher 1.png';
import GDP from '../../Images/Destination/economic_9147861 1.png';
import Dialing from '../../Images/Destination/Encrypted Binary Code 1.png';
import Currency from '../../Images/Destination/Currency Exchange 1.png';
import University from '../../Images/Destination/Untitled_design__2_-removebg-preview 1.png';

// Updated FactCard component to use images instead of icons
const FactCard = ({ imageSrc, title, value }) => (
  <div className="bg-white p-4 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 rounded shadow-lg mb-6 gap-6">
    <div className="flex-shrink-0 sm:-mt-16 transform transition-transform duration-300 hover:scale-110"> 
      <img src={imageSrc} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </div>
    <div className="transform transition-transform duration-300 hover:scale-110 text-center sm:text-left">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold text-[#233871]">{value}</p>
    </div>
  </div>
);

const FactsGrid = () => {
  const factsData = [
// <<<<<<< main
//     { imageSrc: Capital, title: "Capital", value: "Dublin" },
//     { imageSrc: Population, title: "Population", value: "50 Mn" },
//     { imageSrc: Language, title: "Language", value: "English" },
//     { imageSrc: Students, title: "International Students", value: "32,000" },
//     { imageSrc: GDP, title: "GDP", value: "$ 504.18 billion" },
//     { imageSrc: Dialing, title: "Dialing Code", value: "+353" },
//     { imageSrc: Currency, title: "Currency", value: "Euro (EUR)" },
//     { imageSrc: University, title: "Universities and Colleges", value: "22" },
// =======
    { imageSrc: Capital, title: "Capital", value: "London" },
    { imageSrc: Population, title: "Population", value: "68 Mn" },
    { imageSrc: Language, title: "Language", value: "English" },
    { imageSrc: Students, title: "International Students", value: "485,645" },
    { imageSrc: GDP, title: "GDP", value: "$ 3.12 Trillion" },
    { imageSrc: Dialing, title: "Dialing Code", value: "+44" },
    { imageSrc: Currency, title: "Currency", value: "Pound sterling" },
    { imageSrc: University, title: "Universities and Colleges", value: "359" },
// >>>>>>> ambress
  ];

  // Data for the "Why Study in the UK?" section
  const whyStudyData = {
    title: "Why Study in United Kingdom?",
    description: `The United Kingdom is home to the world's most esteemed universities and is among the popular destinations 
                  for studying abroad. Ranked as the best education systems in the world, the British Education System provides 
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map over the dynamic factsData */}
          {factsData.map((fact, index) => (
            <FactCard key={index} {...fact} />
          ))}
        </div>
      </div>
      
      {/* Why Study in the UK Section */}
      {/* 
      <div style={{ backgroundColor: 'rgb(166 246 255)' }} className="p-8 rounded-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#233871] mb-4 font-poppins">{whyStudyData.title}</h2>
          <p className="text-black font-semibold mb-6 font-poppins">{whyStudyData.description}</p>
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
      */}

      <UKTrendingArticles />
      <Banner />
      <UniversityComparison />
    </>
  );
};

export default FactsGrid;
