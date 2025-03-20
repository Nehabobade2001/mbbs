import React, { useRef } from 'react';
import Navbar from '../components/destinationComponent/navbar';
import UniversitySri from '../components/sriLankaComponent/UniversitySri';
import PostAdmissionDashboard from '../components/sriLankaComponent/PostAdmissionExperienceSri';
import ExpenseEstimateBanner from '../components/destinationComponent/ExpenseEstimateBanner';
import FAQSection from '../components/sriLankaComponent/Faqs';
import BottomBanner from '../components/sriLankaComponent/BottomBannerSri';
import SriLanka from '../components/sriLankaComponent/SriLanka';
import SriAdmissionTimeline from '../components/sriLankaComponent/AdmissionSri';
import SriScholarships from '../components/sriLankaComponent/ScholarshipsSri';
import SriCareersOpportunities from '../components/sriLankaComponent/CareerOpportunities';


const SriLankaCom = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <SriLanka />
      </div>
      <Navbar />

      <div id="topUniversities" className="py-10">
        <UniversitySri />
      </div>

      <div id='admissions' className="py-10">
        <SriAdmissionTimeline />
      </div>

      <div id='scholarships' className="py-10">
        <SriScholarships />
      </div>

      <div id='visa' className="py-10">
        <PostAdmissionDashboard />
      </div>
      <div id='costOfLiving' className="py-10">
        <ExpenseEstimateBanner />
      </div>

      <div id='opportunities' className="py-10">
        <SriCareersOpportunities />
      </div>

      <div id='faqs' className="py-10">
      <FAQSection />
      </div>
        


      <BottomBanner />
    </div>
  );
};

export default SriLankaCom;
