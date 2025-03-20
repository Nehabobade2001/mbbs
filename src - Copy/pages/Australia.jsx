import React, { useRef } from 'react';
import Navbar from '../components/australiaComponent/navbar';
import StudyHero from '../components/australiaComponent/StudyHero';
import University from '../components/australiaComponent/TopUniversities';
import UKAdmissionTimeline from '../components/australiaComponent/Admission';
import UKScholarships from '../components/australiaComponent/Scholarships';
import PostAdmissionDashboard from '../components/australiaComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/australiaComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/australiaComponent/CareerOpportunities';
import FAQSection from '../components/australiaComponent/Faqs';
import BottomBanner from '../components/australiaComponent/BottomBanner';
import AdmissionRequirements from '../components/australiaComponent/AdmissionRequirements';
import LearnBanner from '../components/australiaComponent/LearnerBanner';
import ScholarshipsSection from '../components/australiaComponent/ScholarshipSection';

const Australia = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <StudyHero />
      </div>
        <Navbar />

      <div id="topUniversities" className="py-10 overflow-hidden ">
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

export default Australia;
