import React, { useRef } from 'react';
import Navbar from '../components/italyComponent/navbar';
import StudyHero from '../components/italyComponent/StudyHero';
import University from '../components/italyComponent/TopUniversities';
import UKAdmissionTimeline from '../components/italyComponent/Admission';
import UKScholarships from '../components/italyComponent/Scholarships';
import PostAdmissionDashboard from '../components/italyComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/italyComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/italyComponent/CareerOpportunities';
import FAQSection from '../components/italyComponent/Faqs';
import BottomBanner from '../components/italyComponent/BottomBanner';
import AdmissionRequirements from '../components/italyComponent/AdmissionRequirements';
import LearnBanner from '../components/italyComponent/LearnerBanner';
import ScholarshipsSection from '../components/italyComponent/ScholarshipSection';

const Italy  = () => {
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

export default Italy ;
