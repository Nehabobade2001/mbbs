import React, { useRef } from 'react';
import Navbar from '../components/germanyComponent/navbar';
import StudyHero from '../components/germanyComponent/StudyHero';
import University from '../components/germanyComponent/TopUniversities';
import UKAdmissionTimeline from '../components/germanyComponent/Admission';
import UKScholarships from '../components/germanyComponent/Scholarships';
import PostAdmissionDashboard from '../components/germanyComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/germanyComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/germanyComponent/CareerOpportunities';
import FAQSection from '../components/germanyComponent/Faqs';
import BottomBanner from '../components/germanyComponent/BottomBanner';
import AdmissionRequirements from '../components/germanyComponent/AdmissionRequirements';
import LearnBanner from '../components/germanyComponent/LearnerBanner';
import ScholarshipsSection from '../components/germanyComponent/ScholarshipSection';

const Germany = () => {
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

export default Germany;
