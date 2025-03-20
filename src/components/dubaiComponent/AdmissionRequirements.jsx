import React from 'react';
import bgImage from '../../Images/Destination/monochrome-view-big-ben-clock-world-heritage-day (1) copy 1.png';

const AdmissionRequirements = () => {
  const requirements = [
    {
      step: 1,
      title: "Copy of a valid passport",
      description: "A clear, legible copy of your valid passport is required for identification purposes. Ensure the copy includes the full photo page with your details, including your name, passport number, and expiration date."
    },
    {
      step: 2,
      title: "TOEFL/IELTS/C1 Advanced scores",
      description: "TOEFL, IELTS, or C1 Advanced scores as proof of English proficiency. These are important for admission and visa applications, ensuring you meet the language requirements of the institution or program."
    },
    {
      step: 3,
      title: "GMAT/GRE scores for PG programs",
      description: "Submit your GMAT or GRE scores for postgraduate applications. These scores are key for evaluating your readiness for advanced studies and must meet program requirements."
    },
    {
      step: 4,
      title: "Academic Transcripts",
      description: "Provide official Academic transcripts showing your academic level performance and qualifications. Ensure they are certified and up-to-date."
    },
    {
      step: 5,
      title: "Letter of Recommendations (LORs)",
      description: "Submit LORs from professors or employers that highlight your skills, achievements, and suitability for the program. These letters provide valuable insights into your qualifications and character."
    },
    {
      step: 6,
      title: "Portfolio (for specific courses)",
      description: "Submit a portfolio showcasing your best work relevant to the course. It should highlight your skills, creativity, and experience, demonstrating your suitability for the program."
    },
    {
      step: 7,
      title: "A CV (if applicable)",
      description: "Provide an up-to-date CV detailing your education, work experience, and relevant skills. This helps demonstrate your qualifications and suitability for the program."
    },
    {
      step: 8,
      title: "Statement of Purpose (SOP)",
      description: "SOP outlining your academic background, career goals, and reasons for choosing the program. This document should reflect your motivations and how the program aligns with your aspirations."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Full screen background image */}
      <img 
        src={bgImage} 
        alt="Background Big Ben" 
        className="absolute right-0 h-full object-cover opacity-100" 
        style={{ width: '40%', zIndex: 1, opacity: 1 }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Admission Requirements for United Kingdom Study Abroad
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Here are the major requirements to study in the Dubai that you need to ensure while applying to a Dubai university:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 relative">
          {requirements.map((req) => (
            <div key={req.step} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                {req.step}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">{req.title}</h3>
                <p className="text-gray-600 text-sm">{req.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionRequirements;
