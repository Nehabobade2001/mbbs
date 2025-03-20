import React, { useRef } from 'react';
import Navbar from '../components/spainComponent/navbar';
import StudyHero from '../components/spainComponent/StudyHero';
import University from '../components/spainComponent/TopUniversities';
import UKAdmissionTimeline from '../components/spainComponent/Admission';
import UKScholarships from '../components/spainComponent/Scholarships';
import PostAdmissionDashboard from '../components/spainComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/spainComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/spainComponent/CareerOpportunities';
import FAQSection from '../components/spainComponent/Faqs';
import BottomBanner from '../components/spainComponent/BottomBanner';
import AdmissionRequirements from '../components/spainComponent/AdmissionRequirements';
import LearnBanner from '../components/spainComponent/LearnerBanner';
import ScholarshipsSection from '../components/spainComponent/ScholarshipSection';

const Spain = () => {
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

export default Spain;
