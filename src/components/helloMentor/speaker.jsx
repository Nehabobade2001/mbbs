import React from 'react';
import Marquee from 'react-marquee-slider';

const SpeakersProfiles = () => {
  const speakers = [
    {
      name: "Dr. Abhijeet Jha",
      title: "Medical Mentor",
      image: "/asp_png.png"
    },
    {
      name: "Dr. S. Sachidanand",
      title: "MD (DVL), Ex Vice Chancellor - RGUHS, Ex Director - DME Karnataka, Ex Dean & Director - BMCRI",
      image: "/asp_png.png"
    },
    {
      name: "Dr. H B Rajshekar",
      title: "Director - USM-KLE IMS, Former Principal - JNMC, KLE University",
      image: "/asp_png.png"
    },
    {
      name: "Dr. Amit Jain",
      title: "Founder Of Modern Diabetic Foot Surgery Bengaluru",
      image: "/asp_png.png"
    },
    {
      name: "Dr. Manjunath",
      title: "MD Cardiology, WBUHS Kolkata",
      image: "/asp_png.png"
    },
    {
      name: "Dr. Abhijeet Jha",
      title: "Medical Mentor",
      image: "/asp_png.png"
    },
    {
      name: "Dr. S. Sachidanand",
      title: "MD (DVL), Ex Vice Chancellor - RGUHS, Ex Director - DME Karnataka, Ex Dean & Director - BMCRI",
      image: "/asp_png.png"
    },
    {
      name: "Dr. H B Rajshekar",
      title: "Director - USM-KLE IMS, Former Principal - JNMC, KLE University",
      image: "/asp_png.png"
    },
    {
      name: "Dr. Amit Jain",
      title: "Founder Of Modern Diabetic Foot Surgery Bengaluru",
      image: "/asp_png.png"
    },
    {
      name: "Dr. Manjunath",
      title: "MD Cardiology, WBUHS Kolkata",
      image: "/asp_png.png"
    }
  ];

  return (
    <div className="w-full mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#3E5BA9]">
        Eminent {''}
         <span className="text-[#f6c16f]">Speakers</span>
      </h2>

      {/* Marquee Slider */}
      <Marquee velocity={20} minScale={0.7} resetAfterTries={100} loop={0}>
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-6"
            style={{ width: '200px' }}  
          >
            <div
            className={`w-32 h-32 rounded-full overflow-hidden mb-4 border-4 ${
              index % 2 === 0 ? 'border-[#233871]' : 'border-[#f6c16f]'
            }`}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center font-poppins" style={{ color: '#3e5ba9' }}>
              {speaker.name}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2 font-poppins">
              {speaker.title}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SpeakersProfiles;
