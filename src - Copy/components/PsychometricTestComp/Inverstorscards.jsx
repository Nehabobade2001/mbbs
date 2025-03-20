import React from 'react';
import ShimmerButton from '../magicui/shimmer-button';

const InvestorCard = ({ name, qustions, time, price, image }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer p-4 flex items-center justify-center flex-col hover:shadow-2xl">
    <img src={image} alt={name} className="w-[60%]  object-cover" />
    <div className="p-4">
      <hr className='p-2'/>
      <h3 className="text-xl text-center font-bold mb-1 text-black">{name}</h3> {/* Updated to black color */}
      <ul>
        <li>
        🔵 {qustions}
        </li>
        <li>
       🔵 {time}
        </li>
        <li>
       🔵 ₹{price}
        </li>
      </ul>
      {/* <p className="text-sm text-gray-600 mb-2">{title}</p> */}
      {/* {quote && <p className="text-sm italic text-gray-500">"{quote}"</p>} */}
    </div>
    <ShimmerButton>Explore Now →</ShimmerButton>
  </div>
);

const OurInvestors = () => {
  const investors = [
    {
      name: "Psychometric Ideal Career Test",
      qustions: "100 Questions",
      company: "Shorelight",
      image: "/psycho.png",
      time: "60 Mins",
      price: 2000
    },
    {
      name: "Psychometric Skill Based Test",
      qustions: "100 Questions",
      company: "Shorelight",
      image: "/psycho.png",
      time: "60 Mins",
      price: 2000
    },
    {
      name: "Psychometric Stream Selector",
      qustions: "100 Questions",
      company: "Shorelight",
      image: "/psycho.png",
      time: "60 Mins",
      price: 2000
    },
    {
      name: "Psychometric Educator Professional Skills",
      qustions: "100 Questions",
      company: "Shorelight",
      image: "/psycho.png",
      time: "60 Mins",
      price: 2000
    },
    {
      name: "Psychometric Professional Skills",
      qustions: "100 Questions",
      company: "Shorelight",
      image: "/psycho.png",
      time: "60 Mins",
      price: 2000
    },
    {
      name: "Psychometric Humanities Career Selector Skills",
      qustions: "100 Questions",
      company: "Shorelight",
      image: "/psycho.png",
      time: "60 Mins",
      price: 2000
    },
    {
      name: "Psychometric Ideal Career Test",
      qustions: "100 Questions",
      company: "Shorelight",
      image: "/psycho.png",
      time: "60 Mins",
      price: 2000
    },
    {
      name: "Psychometric Ideal Career Test",
      qustions: "100 Questions",
      company: "Shorelight",
      image: "/psycho.png",
      time: "60 Mins",
      price: 2000
    },
    // More investors...
  ];

  return (
    <div className="bg-slate-50 py-16 relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl font-semibold text-[#233871] mb-4">Psychometric Assessment</h1> {/* Updated color */}
        <h3 className="text-2xl font-semibold text-black mb-4">Fuelling the Rocketship</h3> {/* Black color */}
        <p className="text-lg max-w-3xl opacity-45 mb-12 text-center">Aspirant's Ally brings to you scientific and meticulously designed Psychometric Assessments
to discover your true potential and interest ,learning styles and skills to excel in new era.</p> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investors.map((investor, index) => (
            <InvestorCard key={index} {...investor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurInvestors;
