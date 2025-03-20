import React, { useRef } from 'react';
import Navbar from '../components/europeComponent/navbar';
import StudyHero from '../components/europeComponent/StudyHero';
import University from '../components/europeComponent/TopUniversities';
import UKAdmissionTimeline from '../components/europeComponent/Admission';
import UKScholarships from '../components/europeComponent/Scholarships';
import PostAdmissionDashboard from '../components/europeComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/europeComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/europeComponent/CareerOpportunities';
import FAQSection from '../components/europeComponent/Faqs';
import BottomBanner from '../components/europeComponent/BottomBanner';
import AdmissionRequirements from '../components/europeComponent/AdmissionRequirements';
import LearnBanner from '../components/europeComponent/LearnerBanner';
import ScholarshipsSection from '../components/europeComponent/ScholarshipSection';

const Europe = () => {
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

export default Europe;
