import React from 'react';

const logos = [
  { name: 'NB', src: 'https://images.leverageedu.com/assets/img/about-us/nb_ventures.png' },
  { name: '9unicorns', src: 'https://images.leverageedu.com/assets/img/about-us/9_unicorns.png' },
  { name: 'Bennett Coleman', src: 'https://images.leverageedu.com/assets/img/about-us/vicco.png' },
  { name: 'LODHA', src: 'https://images.leverageedu.com/assets/img/about-us/vicco.png' },
  { name: 'Mankind', src: 'https://images.leverageedu.com/assets/img/about-us/9_unicorns.png' },
  { name: 'CAPRI GLOBAL', src: 'https://images.leverageedu.com/assets/img/about-us/nb_ventures.png' },
  { name: 'Indorama', src: 'https://images.leverageedu.com/assets/img/about-us/9_unicorns.png' },
  { name: 'VICCO', src: 'https://images.leverageedu.com/assets/img/about-us/vicco.png' },
  { name: 'URMIN', src: 'https://images.leverageedu.com/assets/img/about-us/nb_ventures.png' },
  { name: 'BALDOTA', src: 'https://images.leverageedu.com/assets/img/about-us/nb_ventures.png' },
  { name: 'Infinity', src: 'https://images.leverageedu.com/assets/img/about-us/nb_ventures.png' },
  { name: 'SINGULARITY VENTURES', src: 'https://images.leverageedu.com/assets/img/about-us/nb_ventures.png' },
];

const LogoGrid = () => {
  return (
    <div className="relative p-20">
      {/* Logo Cards */}
      <div className="relative z-10 border-8 bg-[#243771] border-white shadow-md shadow-blue-300 p-16 rounded-3xl ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-12 object-contain rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
