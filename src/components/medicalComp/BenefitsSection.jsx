import React from 'react';
import BgImage from '../../Images/Placeholder.png';
import Icon1 from '../../Images/guidance_17787722 1.png';
import Icon2 from '../../Images/talking_2494315 1.png';
import Icon3 from '../../Images/network_2974604 1.png';
import Icon4 from '../../Images/workshop_10618319 1.png';
import Icon5 from '../../Images/fellowship_15175645 1.png';
import Icon6 from '../../Images/app-development_12970565 1.png';
import { Check } from 'lucide-react';

const MedicalAdmissions = () => {

  const features = [
    'Virtual Office Setup',
    'Open Workspace',
    'Space to Work',
    'CRM Doc Sync'
  ];

  const benefits = [
    {
      icon: Icon1,
      title: "Comprehensive Guidance",
      description: "Personalized support throughout your medical school journey",
    },
    {
      icon: Icon2,
      title: "Expert Counseling",
      description: "One-on-one mentoring from experienced advisors",
    },
    {
      icon: Icon3,
      title: "Networking Opportunities",
      description: "Connect with medical professionals and peers",
    },
    {
      icon: Icon4,
      title: "Tailored Admission Preparation",
      description: "Customized resources for your unique goals",
    },
    {
      icon: Icon5,
      title: "Scholarship Opportunities",
      description: "Guidance on finding and applying for scholarships",
    },
    {
      icon: Icon6,
      title: "Seamless Application Process",
      description: "Streamlined assistance with clear timelines",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <div className="lg:w-1/2">
          <img 
            src={BgImage}
            alt="Medical Consultation"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
        <div className="backdrop-blur-lg bg-white/50 p-6 rounded-lg shadow-lg -ml-[7rem] mb-[1rem]">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Benefits of Our Medical Admissions Support
          </h1>
          <div className="h-1 w-16 bg-yellow-500 mb-2"></div>
          <p className="text-gray-600">
            Empowering Your Path to Medical School with Comprehensive Resources
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              {/* Circle with checkmark */}
              <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <img src={benefit.icon} alt={benefit.title} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalAdmissions;