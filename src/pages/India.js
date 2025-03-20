import React, { useRef } from 'react';
import Navbar from '../components/destinationComponent/navbar';
import UniversityIndia from '../components/indiaComponent/UniversityIndia';
import PostAdmissionDashboard from '../components/indiaComponent/PostAdmissionExperienceInd';
import ExpenseEstimateBanner from '../components/destinationComponent/ExpenseEstimateBanner';
import FAQSection from '../components/indiaComponent/Faqs';
import BottomBanner from '../components/indiaComponent/BottomBannerInd';
import India from '../components/indiaComponent/India';
import IndAdmissionTimeline from '../components/indiaComponent/AdmisionIndia';
import IndScholarships from '../components/indiaComponent/SchoarshipsInd';
import IndCareersOpportunities from '../components/indiaComponent/CareersOpportunities';


const IndiaCom = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <India />
      </div>
      <Navbar />

      <div id="topUniversities" className="py-10">
        <UniversityIndia />
      </div>

      <div id='admissions' className="py-10">
        <IndAdmissionTimeline />
      </div>

      <div id='scholarships' className="py-10">
        <IndScholarships />
      </div>

      <div id='visa' className="py-10">
        <PostAdmissionDashboard />
      </div>
      <div id='costOfLiving' className="py-10">
        <ExpenseEstimateBanner />
      </div>

      <div id='opportunities' className="py-10">
        <IndCareersOpportunities />
      </div>

      <div id='faqs' className="py-10">
      <FAQSection />
      </div>
        


      <BottomBanner />
    </div>
  );
};

export default IndiaCom;
