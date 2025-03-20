import React, { useRef } from 'react';
import Navbar from '../components/destinationComponent/navbar';
import PostAdmissionDashboard from '../components/israelComponent/PostAdmissionExperienceIs';
import ExpenseEstimateBanner from '../components/destinationComponent/ExpenseEstimateBanner';
import FAQSection from '../components/israelComponent/Faqs';
import BottomBanner from '../components/israelComponent/BottomBannerIs';
import Israel from '../components/israelComponent/Israel';
import UniversityIs from '../components/israelComponent/UniversityIs';
import IsAdmissionTimeline from '../components/israelComponent/AdmissionIs';
import IsScholarships from '../components/israelComponent/ScholarshipsIs';
import IsCareersOpportunities from '../components/israelComponent/CareersOpportunities';


const IndiaCom = () => {
  return (
    <>
    <div id="studyHero" >
        <Israel />
      </div>
      <Navbar />

      <div id="topUniversities" className="py-10">
        <UniversityIs />
      </div>

      <div id='admissions' className="py-10">
        <IsAdmissionTimeline />
      </div>

      <div id='scholarships' className="py-10">
        <IsScholarships />
      </div>

      <div id='visa' className="py-10">
        <PostAdmissionDashboard />
      </div>
      <div id='costOfLiving' className="py-10">
        <ExpenseEstimateBanner />
      </div>

      <div id='opportunities' className="py-10">
        <IsCareersOpportunities />
      </div>

      <div id='faqs' className="py-10">
      <FAQSection />
      </div>
        


      <BottomBanner />
    </>
  );
};

export default IndiaCom;
