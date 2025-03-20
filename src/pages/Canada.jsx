import React, { useRef } from 'react';
import Navbar from '../components/destinationComponent/navbar';
import UniversityCanada from '../components/canadaComponent/UniversityCanada';
import PostAdmissionDashboard from '../components/canadaComponent/PostAdmissionExperienceCanada';
import ExpenseEstimateBanner from '../components/destinationComponent/ExpenseEstimateBanner';
import FAQSection from '../components/canadaComponent/Faqs';
import BottomBanner from '../components/canadaComponent/BottomBannerCanada';
import CanadaAdmissionTimeline from '../components/canadaComponent/AdmissionCanada';
import CanadaScholarships from '../components/canadaComponent/ScholarshipsCanada';
import CanadaCareersOpportunities from '../components/canadaComponent/CareersOpportunities';
import Canada from '../components/canadaComponent/Canada';


const IndiaCom = () => {
  return (
    <div className='w-screen max-w-full overflow-x-hidden'>
    <div id="studyHero" >
        <Canada />
      </div>
      <Navbar />

      <div id="topUniversities" className="py-10">
        <UniversityCanada />
      </div>

      <div id='admissions' className="py-10">
        <CanadaAdmissionTimeline />
      </div>

      <div id='scholarships' className="py-10">
        <CanadaScholarships />
      </div>

      <div id='visa' className="py-10">
        <PostAdmissionDashboard />
      </div>
      <div id='costOfLiving' className="py-10">
        <ExpenseEstimateBanner />
      </div>

      <div id='opportunities' className="py-10">
        <CanadaCareersOpportunities />
      </div>

      <div id='faqs' className="py-10">
      <FAQSection />
      </div>
        


      <BottomBanner />
    </div>
  );
};

export default IndiaCom;
