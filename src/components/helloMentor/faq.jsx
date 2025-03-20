import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is NEET Counselling, and why is it important?",
    answer: "NEET Counselling is the process of allocating medical seats to candidates based on their NEET scores. It's important because it determines which college and course a student can pursue for their medical education."
  },
  {
    question: "How can Medical Mentor assist me in the NEET counselling process?",
    answer: "Medical Mentor provides guidance on college selection, document preparation, and the overall counselling process to help you make informed decisions about your medical education."
  },
  {
    question: "Who are the counselling experts at Medical Mentor?",
    answer: "Our counselling experts are experienced professionals with in-depth knowledge of the medical education system and NEET counselling procedures."
  },
  {
    question: "Can Medical Mentor help with both NEET UG and NEET PG counselling?",
    answer: "Yes, Medical Mentor offers assistance for both NEET UG (Undergraduate) and NEET PG (Postgraduate) counselling processes."
  },
  {
    question: "How do I get started with Medical Mentor?",
    answer: "You can get started by visiting our website and registering for a consultation. Our team will then guide you through the next steps."
  }
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none "
      onClick={toggleOpen}
      aria-expanded={isOpen}
      aria-controls={`answer-${question}`} // Added for accessibility
    >
      <span>{question}</span>
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && (
      <p id={`answer-${question}`} className="mt-2 text-gray-600">
        {answer}
      </p>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto"> {/* Container for the FAQ section */}

        <h2 className="text-3xl font-bold mb-8 text-center font-poppins">
          Got a question? <span className="text-orange-500">We have the answers!</span>
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6 font-poppins">

        <h2 className="text-3xl font-bold mb-8 text-center text-[#3E5BA9]">
          Got a question? <span className="text-[#f6c16f]">We have the answers!</span>
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-6">

          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleQuestion(index)}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQSection;
