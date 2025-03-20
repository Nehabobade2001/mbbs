import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('Counselling');
  const [openQuestions, setOpenQuestions] = useState([]);

  const tabs = ['Counselling', 'NEET UG', 'NEET PG', 'Colleges', 'AYUSH'];

  const faqData = {
    Counselling: [
      {
        question: 'What is NEET Counselling, and why is it important?',
        answer: 'NEET Counselling is the process of allocating medical seats to candidates based on their NEET scores. It\'s important because it determines which college and course a student can join for their medical education.',
      },
      {
        question: 'How can Medical Mentor assist me in the NEET counselling process?',
        answer: 'Medical Mentor provides personalized guidance, up-to-date information on cut-offs and seat availability, and expert advice on college selection to help you make informed decisions during the counselling process.',
      },
      {
        question: 'Who are the counselling experts at Medical Mentor?',
        answer: 'Our counselling experts are experienced medical professionals and education consultants with in-depth knowledge of the NEET counselling process and medical education landscape in India.',
      },
      {
        question: 'Can Medical Mentor help with both NEET UG and NEET PG counselling?',
        answer: 'Yes, Medical Mentor provides comprehensive support for both NEET UG and NEET PG counselling, catering to the specific needs of undergraduate and postgraduate medical aspirants.',
      },
      {
        question: 'How do I get started with Medical Mentor?',
        answer: 'You can get started by signing up on our website, after which you\'ll have access to our resources and can schedule a consultation with our experts to discuss your specific needs and goals.',
      },
    ],
    // Add similar arrays for other tabs (NEET UG, NEET PG, Colleges, AYUSH)
  };

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-2 text-[#233871] font-poppins">FAQ's</h2>
      <p className="text-center text-gray-600 mb-8 font-poppins">Have questions? We're here to help.</p>

      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${
              activeTab === tab
                ? 'text-[#233871] border-b-2 border-[#233871]'
                : 'text-black hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {faqData[activeTab]?.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 font-poppins" >
            <button
              className="flex justify-between items-center w-full text-left font-poppins"
              onClick={() => toggleQuestion(index)}
            >
              <span className="font-medium text-[#233871]">
                <span className="text-[#233871] mr-2">{index + 1}</span>
                {item.question}
              </span>
              {openQuestions.includes(index) ? (
                <ChevronUp className="text-[#233871]" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </button>
            {openQuestions.includes(index) && (
              <p className="mt-2 text-[#f6c16f]">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
        <div className="flex justify-center -mt-16 mb-4">
          <img
            src="https://hellomentor.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAvatar.8c015404.png&w=64&q=75"
            alt="Expert 1"
            className="w-12 h-12 rounded-full border-2 border-white -mr-4"
          />
          <img
            src="https://hellomentor.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAvatar.8c015404.png&w=64&q=75"
            alt="Expert 2"
            className="w-12 h-12 rounded-full border-2 border-white -mr-4"
          />
          <img
            src="https://hellomentor.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAvatar.8c015404.png&w=64&q=75"
            alt="Expert 3"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#233871] font-poppins">Still have questions?</h3>
        <p className="text-gray-600 mb-6 font-poppins">
          Write to us with your counselling and college-related concerns. Our team of experts will help you solve them.
        </p>
        <button className="bg-[#233871] text-white px-6 py-2 rounded-md hover:bg-[#2338718a] transition duration-300">
          Ask question
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
