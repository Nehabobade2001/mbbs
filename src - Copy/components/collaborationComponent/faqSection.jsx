import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is NEET Counselling, and why is it important?',
    answer: 'NEET Counselling is the process of allotting seats to students based on their NEET scores. It is important because it helps in getting admission to medical colleges in India.',
  },
  {
    question: 'How can Medical Mentor assist me in the NEET counselling process?',
    answer: 'Medical Mentor provides guidance on the entire counselling process, helping students make informed decisions regarding college selection, seat allocation, and admission.',
  },
  {
    question: 'Who are the counselling experts at Medical Mentor?',
    answer: 'Our experts are experienced professionals with in-depth knowledge of medical counselling and admissions, providing personalized support to students.',
  },
  {
    question: 'Can Medical Mentor help with both NEET UG and NEET PG counselling?',
    answer: 'Yes, Medical Mentor assists with both NEET UG and NEET PG counselling, ensuring students receive comprehensive support for both undergraduate and postgraduate admissions.',
  },
  {
    question: 'How do I get started with Medical Mentor?',
    answer: 'You can get started with Medical Mentor by reaching out to our team through our website or contact number to schedule a counselling session.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#233871] font-poppins">
        Got a question?{' '}
        <span className="text-[#f6c16f] font-poppins">We have the answers!</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex font-poppins justify-between items-center py-4 text-lg font-medium text-[#233871]"
            >
              {faq.question}
              <span className="text-[#f6c16f]">{openIndex === index ? '-' : '+'}</span>
            </button>

            {openIndex === index && (
              <div className="py-4 text-[#233871]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
