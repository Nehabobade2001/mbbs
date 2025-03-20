import React, { useState } from 'react';
// import NEETTabs from '../components/neetComponent/neetTabs';
// import LatestArticles from '../components/neetComponent/latestArticles';
// import PersonalizedSessionsBanner from '../components/neetComponent/personalizedSessionBanner';
// import CustomDynamicSlider from '../components/neetComponent/popularDynamicSlider';
// import NewsletterBanner from '../components/neetComponent/newsLetterBanner';
// import HandPickedSlider from '../components/neetComponent/handpickedSlider';
// import ProductsAndServices from '../components/neetComponent/productsandservices';
// import FAQSection from '../components/neetComponent/faqsection';
import { topics, blogData } from '../components/blogComponent/contentData.jsx';
import Slider from '../components/blogComponent/slider.jsx';
import BlogSidebar from '../components/blogComponent/blogSidebar.jsx';
import BlogContent from '../components/blogComponent/blogContent.jsx';
import { Route, Routes, Router, Navigate } from 'react-router-dom';



const Neet = () => {
    const [selectedTopicId, setSelectedTopicId] = useState(1); // Default to first topic
    const [selectedTitleId, setSelectedTitleId] = useState('1'); // Default to first title of the first topic
  
    // Get titles based on selected topic
    const titles = blogData[selectedTopicId]?.titles || [];
  
    // Get content based on selected title
    const content = titles.find(title => title.id === selectedTitleId)?.content || "Select a title to see the content.";
    const title = titles.find(title => title.id === selectedTitleId)?.title || ""; 
    return (
    <>
        <div className="flex flex-col">
          <Slider topics={topics} onSelect={setSelectedTopicId} /> {/* Slider at the top */}
          <div className="flex w-full"> {/* Flexbox for Sidebar and Content */}
            <BlogSidebar 
              titles={titles} 
              onSelectTitle={setSelectedTitleId} /> {/* Blog Sidebar */}
            <BlogContent content={content} title={title} /> {/* Blog Content */}
          </div>
        </div>

   {/* <NEETTabs />
   <LatestArticles />
   <PersonalizedSessionsBanner />
   <CustomDynamicSlider />
   <HandPickedSlider />
   <NewsletterBanner />
   <ProductsAndServices />
   <FAQSection /> */}
    </>
 );
};

export default Neet;


