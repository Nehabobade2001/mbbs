import React from 'react';
import { Globe, FileText, Book, Users, UserCircle, Image, FileSignature } from 'lucide-react';

const RequirementItem = ({ icon, text }) => (
  <div className="flex items-center p-2 border rounded-lg">
    {icon}
    <span className="ml-2 text-sm">{text}</span>
  </div>
);

const JapanStudyRequirements = () => {
  const requirements = [
    { icon: <Globe className="w-5 h-5 text-blue-500" />, text: "Copy of a valid passport" },
    { icon: <FileText className="w-5 h-5 text-blue-500" />, text: "TOEFL/IELTS/C1 Advanced scores" },
    { icon: <Book className="w-5 h-5 text-blue-500" />, text: "GMAT/GRE scores for PG programs" },
    { icon: <FileText className="w-5 h-5 text-blue-500" />, text: "Academic Transcripts" },
    { icon: <Users className="w-5 h-5 text-blue-500" />, text: "Letter of Recommendations (LORs)" },
    { icon: <Image className="w-5 h-5 text-blue-500" />, text: "Portfolio (for specific courses)" },
    { icon: <UserCircle className="w-5 h-5 text-blue-500" />, text: "A CV (if applicable)" },
    { icon: <FileSignature className="w-5 h-5 text-blue-500" />, text: "Statement of Purpose (SOP)" },
  ];

  return (
    <>
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-left">Admission Requirements for Japan Study Abroad</h1>
      <p className="text-gray-600 mb-6 text-left">
        Here are the major requirements to study in Japan which you need to ensure while applying to a Japan university:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requirements.map((req, index) => (
          <RequirementItem key={index} icon={req.icon} text={req.text} />
        ))}
      </div>
     
    </div>
    <div className="mt-8 mb-8 bg-blue-50 p-4 rounded-lg flex items-center justify-between">
      <div className='max-w-6xl mx-auto flex items-center justify-between w-full'>
        <div className="flex items-center">
          <img 
            src="https://publicassets.leverageedu.com/leverage-live/LogoLive_new2.png" 
            alt="Leverage Live" 
            className="mr-3 h-12 object-contain" // Set height and let width adjust
          />
          <div>
            <p className="text-sm font-semibold">Get your Dream PTE or IELTS Score with Leverage Live Classes</p>
            <p className="text-blue-600 text-sm font-bold">Learn from the Best Tutors</p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition duration-300">
          Book Your Free Demo
        </button>
      </div>
    </div>
    </>
  );
};

export default JapanStudyRequirements;