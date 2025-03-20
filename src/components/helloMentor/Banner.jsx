import React from 'react';
import { BookOpen, BarChart2, FileText, PieChart } from 'lucide-react';

const FullScreenBanner = () => {
  const infoCards = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      title: "MCC and State Quota Counselling",
      description: "Learn all about the admission process to leading medical colleges: eligibility criteria, documentation, application procedures, and more!"
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      title: "Choice Filling and Seat Allotment",
      description: "Are you overwhelmed by the documentation and the choices you have to make? This webinar will help you move from confusion to clarity."
    },
    {
      icon: <PieChart className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      title: "Mark vs. Rank Analysis for NEET 2024",
      description: "Get strategic insights from our in-depth analysis of score-to-rank patterns over the last two years."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      title: "Importance of Document Verification",
      description: "This webinar will help you understand how critical this step is in counseling, ensuring you are well-prepared with all the necessary documents."
    }
  ];

  return (
    <div className="bg-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-left mb-12">
          <h1 className="text-4xl font-bold mb-2 font-poppins">
            Enroll. Engage. <span className="text-yellow-500">Excel.</span>
          </h1>
          <p className="text-gray-600 font-poppins">Attend our webinars and stay ahead of the curve!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-4 transition-transform transform hover:scale-95 hover:shadow-lg">
              <div className="flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 font-poppins">{card.title}</h2>
                <p className="text-gray-600 font-poppins">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullScreenBanner;
