import React from 'react';

const ProgressItem = ({ icon, number, label, description }) => (
  <div className="flex flex-col items-start text-left shadow-lg p-4  rounded-2xl bg-white"> {/* Add bg-white to stand out */}
    <img src={icon} alt={label} className="w-16 h-16 mb-4 md:w-20 md:h-20" /> {/* Responsive image size */}
    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">{number}</h3> {/* Use black text */}
    <p className="text-lg md:text-xl font-semibold mb-2 text-[#233871] font-poppins">{label}</p> {/* Use #233871 color */}
    <p className="text-sm md:text-base text-gray-600 max-w-xs font-poppins">{description}</p>
  </div>
);

const OurProgress = () => {
  const progressData = [
    {
      icon: "https://images.leverageedu.com/assets/img/about-us/mirage-downloading.svg",
      number: "45,000+",
      label: "Students",
      description: "received offers from top universities in UK, US, Australia, Canada & more",
    },
    {
      icon: "https://images.leverageedu.com/assets/img/about-us/mirage-travel.svg",
      number: "850+",
      label: "University Partners",
      description: "abroad for seamless application submission and student experience",
    },
    {
      icon: "https://images.leverageedu.com/assets/img/about-us/counselling_sessions.png",
      number: "2 Million+",
      label: "Counsellings",
      description: "in the last 7 years of our existence, growing at a 150,000+ every month today",
    },
    {
      icon: "https://images.leverageedu.com/assets/img/about-us/users.png",
      number: "120 Million+",
      label: "Users",
      description: "who browsed the platform last year across our wide range of products",
    },
  ];

  return (
    <div className="relative bg-slate-50  py-16 overflow-hidden"> {/* Adjust theme colors */}
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://assets.leverageedu.com/about-us/our-team-bg-web.png')",
          opacity: 0.05, // Make the background more subtle
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#233871] mb-4 text-left">Our Progress</h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-black mb-12 text-left">So far</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {progressData.map((item, index) => (
            <ProgressItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProgress;
