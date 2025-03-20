import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={toggleOpen}
    >
      <span className="text-lg font-medium text-[#233871]">{question}</span>
      {isOpen ? <ChevronUp size={20} className="text-[#233871]" /> : <ChevronDown size={20} className="text-[#233871]" />}
    </button>
    {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How much does it cost to study in Sri Lanka?",
      answer: "The fees for courses vary across different universities in the Sri Lanka. The average cost of UG courses in Sri Lanka range from £9,000- 30,000 (INR 9,00,000-30,00,000). The fees for PG courses is around £15,000-35,000 (INR 15,00,000-35,00,000). MBA courses in Sri Lanka cost around £12,000- 80,000 (INR 12,00,000-80,00,000)."
    },
    {
      question: "Is it possible to study in Sri Lanka without IELTS?",
      answer: "Some universities may offer alternatives to IELTS, such as other English proficiency tests or waivers for students from English-speaking countries."
    },
    {
      question: "Can one work part-time while studying in Sri Lanka?",
      answer: "Yes, most international students can work part-time up to 20 hours per week during term time and full-time during holidays."
    },
    {
      question: "What is the minimum percentage required to study in the Sri Lanka?",
      answer: "Requirements vary by university and course, but generally, a minimum of 60-65% in your highest qualification is expected."
    },
    {
      question: "Which are the best courses to study in the Sri Lanka?",
      answer: "Popular courses include Business, Engineering, Computer Science, Law, and Arts & Humanities, but the 'best' depends on individual interests and career goals."
    },
    {
      question: "Which are the top universities in the Sri Lanka?",
      answer: "Some top universities include Oxford, Cambridge, Imperial College London, UCL, and LSE, among others."
    },
    {
      question: "How long can one stay after studying in the Sri Lanka?",
      answer: "Graduates can typically stay for 2 years after completing their degree under the Graduate Route visa."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-[#233871]">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
        <div className="hidden md:flex items-center justify-center">
          <svg className="w-full h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="180" fill="#FCD34D" />
            <circle cx="150" cy="100" r="90" fill="#60A5FA" />
            <text x="45" y="100" fontSize="80" fill="white">!</text>
            <text x="135" y="120" fontSize="80" fill="white">?</text>
            <circle cx="50" cy="50" r="5" fill="#2563EB" />
            <circle cx="150" cy="50" r="5" fill="#2563EB" />
            <circle cx="100" cy="150" r="5" fill="#2563EB" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
