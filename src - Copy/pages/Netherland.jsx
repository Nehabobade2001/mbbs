import React, { useRef } from 'react';
import Navbar from '../components/netherlandComponent/navbar';
import StudyHero from '../components/netherlandComponent/StudyHero';
import University from '../components/netherlandComponent/TopUniversities';
import UKAdmissionTimeline from '../components/netherlandComponent/Admission';
import UKScholarships from '../components/netherlandComponent/Scholarships';
import PostAdmissionDashboard from '../components/netherlandComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/netherlandComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/netherlandComponent/CareerOpportunities';
import FAQSection from '../components/netherlandComponent/Faqs';
import BottomBanner from '../components/netherlandComponent/BottomBanner';
import AdmissionRequirements from '../components/netherlandComponent/AdmissionRequirements';
import LearnBanner from '../components/netherlandComponent/LearnerBanner';
import ScholarshipsSection from '../components/netherlandComponent/ScholarshipSection';

const Netherland = () => {
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

export default Netherland;
