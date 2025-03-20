import React, { useRef } from 'react';
import Navbar from '../components/dubaiComponent/navbar';
import StudyHero from '../components/dubaiComponent/StudyHero';
import University from '../components/dubaiComponent/TopUniversities';
import UKAdmissionTimeline from '../components/dubaiComponent/Admission';
import UKScholarships from '../components/dubaiComponent/Scholarships';
import PostAdmissionDashboard from '../components/dubaiComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/dubaiComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/dubaiComponent/CareerOpportunities';
import FAQSection from '../components/dubaiComponent/Faqs';
import BottomBanner from '../components/dubaiComponent/BottomBanner';
import AdmissionRequirements from '../components/dubaiComponent/AdmissionRequirements';
import LearnBanner from '../components/dubaiComponent/LearnerBanner';
import ScholarshipsSection from '../components/dubaiComponent/ScholarshipSection';

const Dubai = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <StudyHero />
      </div>
        <Navbar />

      <div id="topUniversities" className="py-10">
        <University />
      </div>

      <div id='admissions' className="py-10">
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

export default Dubai;
