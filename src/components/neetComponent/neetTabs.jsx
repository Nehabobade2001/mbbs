import React, { useState, useEffect } from 'react';

const tabs = ['NEET UG', 'NEET PG', 'AYUSH', 'ENGINEERING'];

const contentData = [
  [
    {
      title: 'KNRUHS Telangana NEET Counselling 2024 Round 2 Vacant MBBS Seats List (OUT)',
      author: 'Sowmya Lakhna',
      date: '08 October, 24',
      readTime: '1 min read',
      description: 'KNRUHS Telangana NEET Counselling 2024 Round 2 Vacant MBBS Seats List for management quota released ...',
      image: 'https://hellomentor.in/_next/image?url=https%3A%2F%2Fs3-example-hello-mentor.s3.ap-south-1.amazonaws.com%2Fblog%2F6ab62344-3dde-4081-80bb-9220ffb8298a.jpeg&w=640&q=75',
    },
    {
      title: 'NEET UG 2024: Application Form, Exam Date, Syllabus, Pattern, Preparation Tips',
      author: 'Ravi Kumar',
      date: '10 October, 24',
      readTime: '2 min read',
      description: 'Get all the latest information about NEET UG 2024 including application process, important dates, and preparation strategies...',
      image: 'https://hellomentor.in/_next/image?url=https%3A%2F%2Fs3-example-hello-mentor.s3.ap-south-1.amazonaws.com%2Fblog%2F298cee23-da12-4e99-81be-0fafbbc78b5a.png&w=640&q=75',
    },
    {
      title: 'Top Medical Colleges in India: NEET UG Cut-offs and Admission Process',
      author: 'Priya Sharma',
      date: '12 October, 24',
      readTime: '3 min read',
      description: 'Explore the top medical colleges in India, their NEET UG cut-offs for the previous year, and the admission process for 2024...',
      image: 'https://hellomentor.in/_next/image?url=https%3A%2F%2Fs3-example-hello-mentor.s3.ap-south-1.amazonaws.com%2Fblog%2Fec810c39-6edd-436b-8845-575e5b73d409.png&w=384&q=75',
    },
  ],
  [
    {
      title: 'NEET PG 2024: Exam Date Announced, Registration to Begin Soon',
      author: 'Dr. Anand Rao',
      date: '15 October, 24',
      readTime: '2 min read',
      description: 'The National Board of Examinations has announced the NEET PG 2024 exam date. Registration process to start next month...',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'How to Prepare for NEET PG 2024: Top Study Tips',
      author: 'Dr. Seema Kapoor',
      date: '20 October, 24',
      readTime: '3 min read',
      description: 'Discover the best study strategies for NEET PG 2024 and maximize your preparation with expert advice...',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'NEET PG vs INI CET: Which Exam to Choose?',
      author: 'Dr. Rohan Mehra',
      date: '25 October, 24',
      readTime: '4 min read',
      description: 'Understand the key differences between NEET PG and INI CET, and decide which exam is better for your career...',
      image: '/api/placeholder/400/300',
    },
  ],
  [
    {
      title: 'AYUSH NEET 2024: Eligibility Criteria and Exam Pattern Updated',
      author: 'Meera Desai',
      date: '18 October, 24',
      readTime: '2 min read',
      description: 'Important updates on AYUSH NEET 2024 eligibility criteria and exam pattern. Check the revised guidelines here...',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'AYUSH NEET Counselling 2024: Process, Dates, and Seat Matrix',
      author: 'Dr. Vishal Pandey',
      date: '22 October, 24',
      readTime: '3 min read',
      description: 'Learn about the AYUSH NEET Counselling 2024 process, important dates, and seat matrix for various AYUSH programs...',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Top AYUSH Colleges in India: Admission Process and NEET Scores',
      author: 'Anita Gupta',
      date: '26 October, 24',
      readTime: '3 min read',
      description: 'Explore the top AYUSH colleges in India, their admission process, and the NEET scores required for admission...',
      image: '/api/placeholder/400/300',
    },
  ],
  [
    {
      title: 'JEE Main 2024: Registration Process, Exam Dates, and Preparation Tips',
      author: 'Rahul Verma',
      date: '20 October, 24',
      readTime: '3 min read',
      description: 'Everything you need to know about JEE Main 2024: registration dates, exam schedule, and expert tips for preparation...',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Top Engineering Colleges in India: Cut-off, Fees, and Admission Process',
      author: 'Shivani Mehta',
      date: '24 October, 24',
      readTime: '4 min read',
      description: 'Discover the top engineering colleges in India, their cut-offs, fee structures, and the admission process for 2024...',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'How to Crack JEE Advanced 2024: Expert Strategies',
      author: 'Arjun Patel',
      date: '28 October, 24',
      readTime: '5 min read',
      description: 'Get expert tips and strategies to crack JEE Advanced 2024 and secure a seat in one of the top IITs...',
      image: '/api/placeholder/400/300',
    },
  ],
];

const TabContent = ({ content }) => (
  <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-md overflow-hidden h-[250px]">
    <div className="w-full md:w-7/10 p-4">
      <img
        src={content?.image}
        alt={content?.title}
        className="w-full h-full object-fill rounded"
        style={{ padding: '10px' }}
      />
    </div>
    <div className="w-full md:w-3/10 p-6 flex flex-col justify-between text-sm">
      <div className="h-1/2">
        <h2 className="text-lg font-bold text-[#233871] mb-2">{content?.title}</h2>
        <p className="text-xs text-black mb-2">
          {content?.author} | {content?.date} | {content?.readTime}
        </p>
        <p className="text-xs text-[#f6c16f] mb-4">{content?.description}</p>
      </div>
      <div className="flex-grow" />
      <button className="bg-[#233871] text-white text-xs px-2 py-1 rounded hover:bg-[#2338718a] transition-colors mt-2 self-end">
        Read more
      </button>
    </div>
  </div>
);

const NEETTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (contentData[activeTab] && contentData[activeTab].length > 0) {
        setCurrentContentIndex((prevIndex) =>
          (prevIndex + 1) % contentData[activeTab].length
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTab]);

  const currentContent = contentData[activeTab]?.[currentContentIndex] || null;

  return (
    <div className="w-full pt-20">
      <div className="w-full bg-gray-100 mb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between flex-wrap font-poppins">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`px-6 py-3 font-semibold flex-grow ${
                  index === activeTab
                    ? 'text-[#233871] border-b-2 border-[#233871] bg-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => {
                  setActiveTab(index);
                  setCurrentContentIndex(0);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 w-full">
        {currentContent ? (
          <>
            <div className="mb-6">
              <TabContent content={currentContent} />
            </div>
            <div className="flex justify-center space-x-2">
              {contentData[activeTab]?.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentContentIndex ? 'bg-[#233871]' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentContentIndex(index)}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600 font-poppins">No content available for this tab.</p>
        )}
      </div>
    </div>
  );
};

export default NEETTabs;
