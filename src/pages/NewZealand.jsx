import React, { useRef } from 'react';
import Navbar from '../components/newZealandComponent/navbar';
import StudyHero from '../components/newZealandComponent/StudyHero';
import University from '../components/newZealandComponent/TopUniversities';
import UKAdmissionTimeline from '../components/newZealandComponent/Admission';
import UKScholarships from '../components/newZealandComponent/Scholarships';
import PostAdmissionDashboard from '../components/newZealandComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/newZealandComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/newZealandComponent/CareerOpportunities';
import FAQSection from '../components/newZealandComponent/Faqs';
import BottomBanner from '../components/newZealandComponent/BottomBanner';
import AdmissionRequirements from '../components/newZealandComponent/AdmissionRequirements';
import LearnBanner from '../components/newZealandComponent/LearnerBanner';
import ScholarshipsSection from '../components/newZealandComponent/ScholarshipSection';

const NewZealand = () => {
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

export default NewZealand;
