import React, { useRef } from 'react';
import Navbar from '../components/destinationComponent/navbar';
import UniversityJapan from '../components/japanComponent/UniversityJapan';
import PostAdmissionDashboard from '../components/japanComponent/PostAdmissionExperienceJapan';
import ExpenseEstimateBanner from '../components/destinationComponent/ExpenseEstimateBanner';
import FAQSection from '../components/japanComponent/Faqs';
import BottomBanner from '../components/japanComponent/BottomBannerJapan';
import JapanAdmissionTimeline from '../components/japanComponent/AdmissionJapan';
import JapanScholarships from '../components/japanComponent/Scholarships';
import JapanCareersOpportunities from '../components/japanComponent/CareersOpportunities';
import Japan from '../components/japanComponent/Japan';


const IndiaCom = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <Japan />
      </div>
      <Navbar />

      <div id="topUniversities" className="py-10">
        <UniversityJapan />
      </div>

      <div id='admissions' className="py-10">
        <JapanAdmissionTimeline />
      </div>

      <div id='scholarships' className="py-10">
        <JapanScholarships />
      </div>

      <div id='visa' className="py-10">
        <PostAdmissionDashboard />
      </div>
      <div id='costOfLiving' className="py-10">
        <ExpenseEstimateBanner />
      </div>

      <div id='opportunities' className="py-10">
        <JapanCareersOpportunities />
      </div>

      <div id='faqs' className="py-10">
      <FAQSection />
      </div>
        


      <BottomBanner />
    </div>
  );
};

export default IndiaCom;
