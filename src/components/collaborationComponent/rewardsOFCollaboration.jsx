import React, { useState } from 'react';
import { Building, Stethoscope } from 'lucide-react';

const RewardsOfCollaboration = () => {
  const [activeTab, setActiveTab] = useState('schools');

  const rewardsData = {
    schools: [
      {
        id: '01',
        title: 'Exclusive Seminar, Webinars & Workshops',
        description: 'Elevate your educational portfolio with tailored workshops designed to expand horizons at your institution',
      },
      {
        id: '02',
        title: 'Customized Plan and Pricing',
        description: 'Unlock exclusive benefits for your students with customized plans and pricing for your institution',
      },
      {
        id: '03',
        title: 'In house/ Personalized mentor',
        description: 'Empower your students with an easily available Mentor to guide, support and equip them with the tools they need to excel',
      },
      {
        id: '04',
        title: 'Unlimited Access to Resources',
        description: 'Ensure your students get access to a wealth of valuable tools and practical resources to pursue their dream',
      },
    ],
    colleges: [
      {
        id: '01',
        title: 'Advanced Clinical Workshops',
        description: 'Offer students the chance to attend advanced workshops focused on clinical skills to enhance medical training',
      },
      {
        id: '02',
        title: 'Research Opportunities',
        description: 'Collaborate with us for unique research opportunities tailored for your medical students and faculty',
      },
      {
        id: '03',
        title: 'Medical Conference Invitations',
        description: 'Provide your students with exclusive access to major medical conferences and symposiums',
      },
      {
        id: '04',
        title: 'Exclusive Learning Materials',
        description: 'Get access to specialized resources such as journals, case studies, and medical literature for advanced learning',
      },
    ],
  };

  const rewards = activeTab === 'schools' ? rewardsData.schools : rewardsData.colleges;

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-2 text-[#233871] font-poppins">
        Rewards of <span className="text-[#f6c16f]">Collaboration</span>
      </h2>
      <p className="text-center text-gray-600 mb-8 font-poppins">
        Experience the benefits of Medical Mentor Programs with a complimentary trial for schools and coaching institutes.
      </p>

      <div className="flex justify-center mb-8">
        <button
          className={`flex items-center px-4 py-2 rounded-l-full font-poppins ${
            activeTab === 'schools' ? 'bg-[#f6c16f] text-[#233871]' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('schools')}
        >
          <Building className="mr-2" size={20} />
          Schools and Coaching Institutes
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-r-full ${
            activeTab === 'colleges' ? 'bg-[#f6c16f] text-[#233871]' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('colleges')}
        >
          <Stethoscope className="mr-2" size={20} />
          Medical Colleges and Universities
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-[#f6c16f] p-6 rounded-lg">
            <div className="text-3xl font-light text-[#233871] mb-2 font-poppins">{reward.id}</div>
            <h3 className="text-xl font-semibold text-[#233871] mb-2 font-poppins">{reward.title}</h3>
            <p className="text-[#233871] font-poppins">{reward.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#233871] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2338718a] transition duration-300">
          Contact Us Today!
        </button>
      </div>
    </div>
  );
};

export default RewardsOfCollaboration;
