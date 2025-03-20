import React from 'react';
import MedicalMentorHero from '../components/collaborationComponent/heroPage';
import RewardsOfCollaboration from '../components/collaborationComponent/rewardsOFCollaboration';
import PartnersCarousel from '../components/collaborationComponent/logosInfiniteScroller';
import FAQSection from '../components/collaborationComponent/faqSection';
import PromoSection from '../components/collaborationComponent/promoSection';

const Collaboration = () => {
    return (
    <>
    <MedicalMentorHero />
    <RewardsOfCollaboration />
    <PartnersCarousel />
    <FAQSection />
    <PromoSection />
    </>
 );
};

export default Collaboration;
