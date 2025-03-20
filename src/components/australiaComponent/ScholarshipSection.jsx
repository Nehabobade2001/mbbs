import React from 'react';
import bgImage from '../../Images/Destination/12979 1.png'; 

const scholarships = [
  {
    step: 1,
    title: "British Chevening Scholarships for International Students",
    description:
      "The British Chevening Scholarships offer fully funded opportunities for outstanding international students to pursue a master's degree in the AUSTRALIA. Funded by the AUSTRALIA government, these prestigious scholarships cover tuition fees, travel, and living expenses, empowering future leaders to develop professionally and academically.",
  },
  {
    step: 2,
    title: "A.S Hornby Educational Trust Scholarship",
    description:
      "The A.S. Hornby Educational Trust Scholarships support individuals pursuing English language teaching qualifications. This scholarship offers funding for courses aimed at improving English proficiency and teaching skills.",
  },
  {
    step: 3,
    title: "Rhodes Scholarship",
    description:
      "The Rhodes Scholarship is a prestigious international award enabling outstanding students to study at the University of Oxford. This fully-funded scholarship supports academic excellence and leadership potential.",
  },
  {
    step: 4,
    title: "Charles Wallace India Trust Scholarships (CWIT)",
    description:
      "The Charles Wallace India Trust Scholarships provide funding for Indian professionals and artists to pursue short-term study, research, or artistic projects in the AUSTRALIA. These scholarships cover accommodation and travel costs.",
  },
  {
    step: 5,
    title: "Inlaks Scholarships",
    description:
      "The Inlaks Scholarships support Indian students pursuing postgraduate studies at top universities worldwide. These scholarships cover tuition fees, living expenses, and other costs.",
  },
];

const ScholarshipsSection = () => {
  return (
    <div className="relative overflow-hidden mt-20 px-4 sm:px-6 lg:px-10">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Graduation"
        className="absolute right-0 h-auto w-1/3 md:w-1/4 object-fill opacity-80 hidden lg:block"
        style={{ zIndex: 1 }}
      />

      {/* Title and Description */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Scholarships to Study in the AUSTRALIA
      </h1>
      <p className="text-center text-gray-600 mx-auto max-w-4xl mb-8">
        There are various scholarships offered by the AUSTRALIA government, universities, and private organizations to support the education of international students. Here's a list of the most popular scholarships to study in the AUSTRALIA.
      </p>

      {/* Scholarships List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {scholarships.map((scholarship) => (
          <div
            key={scholarship.step}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
          >
            {/* Step Number */}
            <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {scholarship.step}
            </div>

            {/* Scholarship Info */}
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">{scholarship.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{scholarship.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipsSection;
