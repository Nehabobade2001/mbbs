import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TabbedCardSlider = () => {
  const [activeTab, setActiveTab] = useState('UG');
  const [currentCard, setCurrentCard] = useState(0);

  const tabs = ['UG', 'PG'];
  const cards = [
    {
      title: 'UG Course Counseling',
      description: 'Learn all about UG counseling tips, rank analysis, competition insights, and new seat allocation rules. Secure your future!',
      date: '10-10-2024',
      time: '18:00:00',
      topImage: '/asp_png.png',
      type: 'UG',
    },
    {
      title: 'All India NEET PG Counselling',
      description: 'Join our webinar for NEET PG counseling tips, rank analysis, competition insights, and updates on new rules and seat allocation. Maximize your score!',
      date: '13-10-2024',
      time: '19:00:00',
      topImage: '/asp_png.png',
      type: 'PG',
    },
    {
      title: 'UG College Selection',
      description: 'Get insights into UG college selection based on ranks and seat availability.',
      date: '15-10-2024',
      time: '20:00:00',
      topImage: '/asp_png.png',
      type: 'UG',
    },
    {
      title: 'PG Admission Process',
      description: 'Detailed webinar on the PG admission process, including fee structure and scholarships.',
      date: '17-10-2024',
      time: '17:00:00',
      topImage: '/asp_png.png',
      type: 'PG',
    },
  ];

  // Filter cards based on the active tab (UG or PG)
  const filteredCards = cards.filter(card => card.type === activeTab);

  const handlePrevCard = () => {
    setCurrentCard((prev) => (prev > 0 ? prev - 1 : filteredCards.length - 1));
  };

  const handleNextCard = () => {
    setCurrentCard((prev) => (prev < filteredCards.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className=" mx-auto p-4 bg-slate-50 flex flex-col items-center justify-center">
      <div className="flex mb-4 w-1/3 text-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 px-4 rounded-2xl mr-3 transition duration-300 ${
              activeTab === tab
                ? 'bg-[#233871] text-white'
                : 'bg-[#f6c16f] text-gray-800'
            }`}
            onClick={() => {
              setActiveTab(tab);
              setCurrentCard(0); // Reset to the first card when switching tabs
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button onClick={handlePrevCard} className="p-2">
          <ChevronLeft size={24} />
        </button>

        {filteredCards.length > 0 ? (
          <div className="bg-white shadow-lg overflow-hidden w-full max-w-md rounded-2xl">
            <img
              src={filteredCards[currentCard].topImage}
              alt="Event Banner"
              className="w-full h-full object-cover rounded-t-lg"
            />

            <div className="p-6 relative">
              <div className="absolute top-0 right-0 bg-[#233871] text-white px-4 py-1 rounded-bl-lg">
                {activeTab}
              </div>
              <h2 className="text-xl font-bold mb-2 font-poppins">
                {filteredCards[currentCard].title}
              </h2>
              <p className="text-gray-600 mb-4 font-poppins">
                {filteredCards[currentCard].description}
              </p>

              {/* Date and Time Styling */}
              <div className="flex flex-col text-sm text-gray-500">
                <div className="flex justify-between font-poppins">
                  <span>Date</span>
                  <span>Time</span>
                </div>
                <div className="flex justify-between font-poppins">
                  <span>{filteredCards[currentCard].date}</span>
                  <span>{filteredCards[currentCard].time}</span>
                </div>
              </div>

              {/* Updated Button Styling */}
              <button className="mt-4 font-poppins bg-[#233871] text-white py-2 px-4 rounded-full text-sm w-full transition duration-300 hover:bg-[#2338718a]">
                Register Now
              </button>
            </div>
          </div>
        ) : (
          <p>No cards available</p>
        )}

        <button onClick={handleNextCard} className="p-2">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TabbedCardSlider;
