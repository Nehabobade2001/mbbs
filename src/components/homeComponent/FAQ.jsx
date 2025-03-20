import { useState } from "react";
import "./style.scss"; // Import custom CSS for blur effect
import React from "react";

const AccordionItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative border shadow-[#f6c16f] bg-white text-gray-700 rounded-[10px] shadow-sm overflow-hidden transition-shadow duration-300 ease-in-out">
      <button
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{question}</span>
        <svg
          className={`w-8 h-8 border border-[#f6c16f] rounded-[5px] ml-3 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={id}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-gray-700 font-light">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      id: "accordion-1",
      question: "What services we offer for NEET/MBBS aspirants?",
      answer:
        "Aspirant Ally provides personalized admission counseling, college selection, NEET preparation guidance, application assistance, and seat allocation support for MBBS aspirants.",
    },
    {
      id: "accordion-2",
      question: "Who can avail of your services?",
      answer:
        "Our services are available to students who have completed their higher secondary education with PCB and aim to appear for NEET, as well as repeaters and students seeking college transfers.",
    },
    {
      id: "accordion-3",
      question: "How does Aspirant Ally help in the admission process?",
      answer:
        "We assist in every step of the admission process, from guiding you through NEET preparation to helping you shortlist colleges, complete documentation, and secure your medical seat.",
    },
    {
      id: "accordion-4",
      question: "Do you assist with international MBBS admissions?",
      answer:
        "Yes, we support students looking to pursue MBBS abroad by offering guidance on eligibility, application processes, and visa requirements.",
    },
    {
      id: "accordion-5",
      question: "What are the fees for your services?",
      answer:
        "Our fees vary based on the package you choose, ranging from basic counseling to comprehensive end-to-end admission support. Contact us for detailed pricing.",
    },
    {
      id: "accordion-6",
      question: "Can you guarantee admission to a particular medical college?",
      answer:
        "While we strive to maximize your chances, admission depends on your NEET score, counseling rounds, and seat availability. We do not guarantee admission but ensure the best guidance.",
    },
    {
      id: "accordion-7",
      question: "What colleges do you work with for admissions?",
      answer:
        "We collaborate with a wide range of reputed medical colleges across India and internationally, helping students select the best-fit institutions based on their preferences and scores.",
    },
    {
      id: "accordion-8",
      question: "Do you provide post-admission support?",
      answer:
        "Yes, we provide post-admission support including scholarship guidance, financial aid assistance, and help with student accommodations to ensure a smooth transition into your MBBS program.",
    },
  ];

  return (
    <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`col-span-1 ${index % 3 === 2 ? "md:col-span-2" : ""}`}
        >
          <AccordionItem
            id={item.id}
            question={item.question}
            answer={item.answer}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
