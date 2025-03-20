import React, { useRef } from 'react';
import Navbar from '../components/irelandComponent/navbar';
import StudyHero from '../components/irelandComponent/StudyHero';
import University from '../components/irelandComponent/TopUniversities';

import UKAdmissionTimeline from '../components/irelandComponent/Admission';
import UKScholarships from '../components/irelandComponent/Scholarships';
import PostAdmissionDashboard from '../components/irelandComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/irelandComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/irelandComponent/CareerOpportunities';

import FAQSection from '../components/irelandComponent/Faqs';
import BottomBanner from '../components/irelandComponent/BottomBanner';
import AdmissionRequirements from '../components/irelandComponent/AdmissionRequirements';
import LearnBanner from '../components/irelandComponent/LearnerBanner';
import ScholarshipsSection from '../components/irelandComponent/ScholarshipSection';

const Ireland = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <StudyHero />
      </div>
        <Navbar />

      <div id="topUniversities" className="py-10">
        <University />
      </div>


      <div id='scholarships' className="py-10">

        <UKAdmissionTimeline />
      </div>

      <div id='scholarships' className="py-10">
         <UKScholarships />
      </div>

     

      <div id='visa' className="py-10">
        <PostAdmissionDashboard />
      </div>
      <div id='costOfLiving' className="py-10">
        <ExpenseEstimateBanner />
      </div>

      <div id='opportunities' className="py-10">
        <UKCareersOpportunities />

      </div>

      <AdmissionRequirements />

      <LearnBanner />

      <ScholarshipsSection />

      <div id='faqs' className="py-10">
      <FAQSection />
      </div>
    </div>
  );
};

export default Ireland;
