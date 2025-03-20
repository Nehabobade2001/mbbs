import React from 'react';

const IndCareersOpportunities = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4 text-left text-[#233871]">
        Part time Careers and Work Opportunities in India
      </h1>
      <p className="text-[#233871] mb-6 text-left">
        Studying in the UK offers a variety of experiences. The cultural and traditional values of the India attract several international students every year. The popular areas of employment in India are as follows:
      </p>
      <div className="bg-[#f6c16f] p-6 rounded-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#233871] rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold mb-4">Part-time Work Opportunities</h2>
            <p>
              Maximum of 20 hours per week for regular students, Maximum of 10 hours per week for language center students
            </p>
          </div>
          <div className="bg-[#233871] rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold mb-4">Post Study Work VISA</h2>
            <p>
              Students completing a Bachelors or Masters program get a work VISA of 2 years. PhD graduates get a work VISA of 3 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndCareersOpportunities;
