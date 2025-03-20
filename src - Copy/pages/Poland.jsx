import React, { useRef } from 'react';
import Navbar from '../components/polandComponent/navbar';
import StudyHero from '../components/polandComponent/StudyHero';
import University from '../components/polandComponent/TopUniversities';
import UKAdmissionTimeline from '../components/polandComponent/Admission';
import UKScholarships from '../components/polandComponent/Scholarships';
import PostAdmissionDashboard from '../components/polandComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/polandComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/polandComponent/CareerOpportunities';
import FAQSection from '../components/polandComponent/Faqs';
import BottomBanner from '../components/polandComponent/BottomBanner';
import AdmissionRequirements from '../components/polandComponent/AdmissionRequirements';
import LearnBanner from '../components/polandComponent/LearnerBanner';
import ScholarshipsSection from '../components/polandComponent/ScholarshipSection';

const Poland = () => {
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

export default Poland;
