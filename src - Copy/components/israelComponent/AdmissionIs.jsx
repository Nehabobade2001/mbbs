import React, { useState } from 'react';
import { Users, Globe, Cog, Scale, Atom, Stethoscope } from 'lucide-react';
import IsStudyRequirements from './StudyRequirementsIs';

const TimelineTab = ({ label, isActive, onClick }) => (
  <div 
    className={`flex-1 text-center py-2 cursor-pointer ${isActive ? 'bg-[#233871] text-white' : 'bg-gray-200 text-[#233871]'} hover:bg-[#2338718a]`} 
    onClick={onClick}
  >
    {label}
  </div>
);

const InfoCard = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="font-bold mb-2 text-[#233871]">{title}</h3>
    {children}
  </div>
);

const ProgramItem = ({ Icon, text }) => (
  <div className="flex items-center mb-2 text-[#233871]">
    <Icon className="w-5 h-5 mr-2 text-[#233871]" />
    <span>{text}</span>
  </div>
);

const UniversityLogo = ({ src, alt }) => (
  <img src={src} alt={alt} className="h-12 object-contain mb-2" />
);

const IsAdmissionTimeline = () => {
  const [activeTab, setActiveTab] = useState('UG');

  // Mock data for UG, Masters, and MBA
  const data = {
    UG: {
      howToApply: "All UG Applications are submitted through UCAS.",
      costEstimate: "£9,000 - £30,000 (₹9,00,000 - ₹30,00,000) per year",
      popularPrograms: [
        { Icon: Users, text: "Business" },
        { Icon: Globe, text: "Natural Sciences" },
        { Icon: Cog, text: "Engineering and Technology" },
        { Icon: Stethoscope, text: "Medicine" },
        { Icon: Scale, text: "Law" },
        { Icon: Atom, text: "Social Sciences" },
      ],
      popularUniversities: [
        { src: "/api/placeholder/100/50", alt: "University of Petah" },
        { src: "/api/placeholder/100/50", alt: "University of Rishon" },
        { src: "/api/placeholder/100/50", alt: "Imperial College Holon" },
        { src: "/api/placeholder/100/50", alt: "Herzliya" },
        { src: "/api/placeholder/100/50", alt: "Medicaps University" },
        { src: "/api/placeholder/100/50", alt: "University College IPS" },
      ],
    },
    Masters: {
      howToApply: "PG applications are directly sent to the universities via online or offline modes.",
      costEstimate: "£15,000 - £35,000 (₹15,00,000 - ₹35,00,000) per year",
      popularPrograms: [
        { Icon: Users, text: "Business" },
        { Icon: Cog, text: "Engineering" },
        { Icon: Stethoscope, text: "Physiotherapy" },
        { Icon: Globe, text: "Medicine" },
        { Icon: Atom, text: "Maths" },
        { Icon: Users, text: "Computer Science" },
        { Icon: Scale, text: "Law" },
        { Icon: Cog, text: "Architecture" },
      ],
      popularUniversities: [
        { src: "/api/placeholder/100/50", alt: "University of Petah" },
        { src: "/api/placeholder/100/50", alt: "University of Rishon" },
        { src: "/api/placeholder/100/50", alt: "Imperial College Holon" },
        { src: "/api/placeholder/100/50", alt: "Herzliya" },
        { src: "/api/placeholder/100/50", alt: "Medicaps University" },
        { src: "/api/placeholder/100/50", alt: "University College IPS" },
      ],
    },
    MBA: {
      howToApply: "MBA applications are submitted directly to the universities.",
      costEstimate: "£12,000 - £80,000 (₹12,00,000 - ₹80,00,000) per year",
      popularPrograms: [
        { Icon: Users, text: "Finance" },
        { Icon: Cog, text: "Marketing" },
        { Icon: Scale, text: "International Business" },
        { Icon: Atom, text: "Investment Banking" },
        { Icon: Stethoscope, text: "Project Management" },
      ],
      popularUniversities: [
        { src: "/api/placeholder/100/50", alt: "University of Petah" },
        { src: "/api/placeholder/100/50", alt: "University of Rishon" },
        { src: "/api/placeholder/100/50", alt: "Imperial College Holon" },
        { src: "/api/placeholder/100/50", alt: "Herzliya" },
        { src: "/api/placeholder/100/50", alt: "Medicaps University" },
        { src: "/api/placeholder/100/50", alt: "University College IPS" },
      ],
    },
  };

  const renderContent = () => {
    const { howToApply, costEstimate, popularPrograms, popularUniversities } = data[activeTab];

    return (
      <>
        <InfoCard title="How to Apply">
          <p className="text-[#233871]">{howToApply}</p>
        </InfoCard>
        <InfoCard title="Cost Estimate">
          <p className="text-[#233871]">{costEstimate}</p>
        </InfoCard>
        <InfoCard title="Popular Programs">
          {popularPrograms.map((program, index) => (
            <ProgramItem key={index} Icon={program.Icon} text={program.text} />
          ))}
        </InfoCard>
        <InfoCard title="Popular Universities">
          <div className="grid grid-cols-2 gap-4">
            {popularUniversities.map((uni, index) => (
              <UniversityLogo key={index} src={uni.src} alt={uni.alt} />
            ))}
          </div>
        </InfoCard>
      </>
    );
  };

  return (
    <>
      <IsStudyRequirements />
      <div className="max-w-4xl mx-auto p-6 bg-[#f6f6f6] rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#233871]">Admission Timeline</h2>
        
        <div className="flex rounded-full overflow-hidden mb-6">
          <TimelineTab label="AFTER 12TH / UG" isActive={activeTab === 'UG'} onClick={() => setActiveTab('UG')} />
          <TimelineTab label="MASTERS" isActive={activeTab === 'Masters'} onClick={() => setActiveTab('Masters')} />
          <TimelineTab label="MBA" isActive={activeTab === 'MBA'} onClick={() => setActiveTab('MBA')} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default IsAdmissionTimeline;
