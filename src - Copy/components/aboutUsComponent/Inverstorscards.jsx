import React from 'react';

const InvestorCard = ({ name, title, company, quote, image }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer p-4">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-1 text-black font-poppins">{name}</h3> {/* Updated to black color */}
      <p className="text-sm text-gray-600 mb-2 font-poppins">{title}</p>
      {quote && <p className="text-sm italic text-gray-500">"{quote}"</p>}
    </div>
  </div>
);

const OurInvestors = () => {
  const investors = [
    {
      name: "Tom Dretler",
      title: "Co-founder & CEO, Shorelight",
      company: "Shorelight",
      image: "/asp_png.png",
      quote: "",
    },
    {
      name: "Amit Sevak",
      title: "CEO, ETS",
      company: "ETS",
      image: "/asp_png.png",
      quote: "",
    },
    {
      name: "Karthik Reddy",
      title: "Co-founder & Managing Partner at Blume Ventures",
      company: "Blume",
      image: "/asp_png.png",
      quote: "Akshay and team have put in place strong...",
    },
    {
      name: "Sandeep Aneja",
      title: "Founder And Managing Partner, Kaizenvest",
      company: "Kaizenvest",
      image: "/asp_png.png",
      quote: "We have been looking at various companies in the Overseas...",
    },
    // More investors...
  ];

  return (
    <div className="bg-slate-50 py-16 relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-[#233871] mb-4 font-poppins">Our Investors</h2> {/* Updated color */}
        <h3 className="text-4xl font-semibold text-black mb-4 font-poppins">Fuelling the Rocketship</h3> {/* Black color */}
        <p className="text-xl text-[#f6c16f] mb-12 font-normal font-poppins">VCs/ Institutions & Family Offices</p> {/* Use #f6c16f for middle text */}

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
