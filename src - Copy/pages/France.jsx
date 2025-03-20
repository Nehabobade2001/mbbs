import React, { useRef } from 'react';
import Navbar from '../components/destinationComponent/navbar';
import UniversityFrance from '../components/franceComponent/UniversityFrance';
import PostAdmissionDashboard from '../components/indiaComponent/PostAdmissionExperienceInd';
import ExpenseEstimateBanner from '../components/destinationComponent/ExpenseEstimateBanner';
import FAQSection from '../components/franceComponent/Faqs';
import BottomBanner from '../components/franceComponent/BottomBannerFrance';
import France from '../components/franceComponent/France';
import FranceAdmissionTimeline from '../components/franceComponent/AdmissionFrance';
import FranceScholarships from '../components/franceComponent/ScholarshipsFrance';
import FranceCareersOpportunities from '../components/franceComponent/CareersOpportunities';


const FranceCom = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <France />
      </div>
      <Navbar />

      <div id="topUniversities" className="py-10">
        <UniversityFrance />
      </div>

      <div id='admissions' className="py-10">
        <FranceAdmissionTimeline />
      </div>

      <div id='scholarships' className="py-10">
        <FranceScholarships />
      </div>

      <div id='visa' className="py-10">
        <PostAdmissionDashboard />
      </div>
      <div id='costOfLiving' className="py-10">
        <ExpenseEstimateBanner />
      </div>

      <div id='opportunities' className="py-10">
        <FranceCareersOpportunities />
      </div>

      <div id='faqs' className="py-10">
      <FAQSection />
      </div>
        


      <BottomBanner />
    </div>
  );
};

export default FranceCom;
