import React from 'react';
import NEETCounsellingUI from '../components/helloMentor/hellomentor.jsx';
import NEETCounsellingCarousel from '../components/helloMentor/neetCounselling.jsx';
import FullScreenBanner from '../components/helloMentor/Banner.jsx';
import SpeakersProfiles from '../components/helloMentor/speaker.jsx';
import WebinarExplorer from '../components/helloMentor/Expertsspeeak.jsx';
import VideoScroller from '../components/helloMentor/videoscroller.jsx';
import AnimatedImageCarousel from '../components/helloMentor/memories.jsx';
import TestimonialSection from '../components/helloMentor/Testimonials.jsx';
import FAQSection from '../components/helloMentor/faq.jsx';
import CounsellingSection from '../components/helloMentor/counsellingsession.jsx';


const HelloMentor = () => {
    return (
    <>
     <NEETCounsellingUI />
    <NEETCounsellingCarousel />
    <FullScreenBanner />
    <SpeakersProfiles />
    <WebinarExplorer />
    <VideoScroller />
    <AnimatedImageCarousel />
    <TestimonialSection />
    <FAQSection />
    <CounsellingSection />
    </>
 );
};

export default HelloMentor;
