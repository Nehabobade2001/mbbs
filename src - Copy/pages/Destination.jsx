import React, { useRef } from 'react';
import Navbar from '../components/destinationComponent/navbar';
import StudyHero from '../components/destinationComponent/StudyHero';
import University from '../components/destinationComponent/TopUniversities';
import UKAdmissionTimeline from '../components/destinationComponent/Admission';
import UKScholarships from '../components/destinationComponent/Scholarships';
import PostAdmissionDashboard from '../components/destinationComponent/PostAdmissionExperience';
import ExpenseEstimateBanner from '../components/destinationComponent/ExpenseEstimateBanner';
import UKCareersOpportunities from '../components/destinationComponent/CareerOpportunities';
import FAQSection from '../components/destinationComponent/Faqs';
import BottomBanner from '../components/destinationComponent/BottomBanner';
import AdmissionRequirements from '../components/destinationComponent/AdmissionRequirements';
import LearnBanner from '../components/destinationComponent/LearnerBanner';
import ScholarshipsSection from '../components/destinationComponent/ScholarshipSection';

const Destination = () => {
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

export default Destination;
