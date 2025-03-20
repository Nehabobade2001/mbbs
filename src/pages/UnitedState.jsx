import React, { useRef } from 'react';
import Navbar from '../components/destinationComponent/navbar';
import UniversityUs from '../components/unitedStateComponent/UniversityUs';
import PostAdmissionDashboard from '../components/unitedStateComponent/PostAdmissionExperienceUs';
import ExpenseEstimateBanner from '../components/destinationComponent/ExpenseEstimateBanner';
import FAQSection from '../components/unitedStateComponent/Faqs';
import BottomBanner from '../components/unitedStateComponent/BottomBannerUs';
import CareersOpportunities from '../components/unitedStateComponent/CareersOpportunities';
import UnitedState from '../components/unitedStateComponent/UnitedState';
import UsAdmissionTimeline from '../components/unitedStateComponent/AdmissionUs';
import UsScholarships from '../components/unitedStateComponent/ScholarshipsUs';


const UsCom = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <UnitedState />
      </div>
      <Navbar />

      <div id="topUniversities" className="py-10">
        <UniversityUs />
      </div>

      <div id='admissions' className="py-10">
        <UsAdmissionTimeline />
      </div>

      <div id='scholarships' className="py-10">
        <UsScholarships />
      </div>

      <div id='visa' className="py-10">
        <PostAdmissionDashboard />
      </div>
      <div id='costOfLiving' className="py-10">
        <ExpenseEstimateBanner />
      </div>

      <div id='opportunities' className="py-10">
        <CareersOpportunities />
      </div>

      <div id='faqs' className="py-10">
      <FAQSection />
      </div>
        


      <BottomBanner />
    </div>
  );
};

export default UsCom;
