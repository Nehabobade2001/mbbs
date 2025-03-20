import React from 'react';

const articles = [
  {
    id: 1,
    category: 'NEET UG',
    title: 'MCC NEET UG Counselling 2024 Mop-up Round Extended Dates Released',
    description: 'MCC NEET UG Counselling 2024 Mop-up Round Registration and Payment of Fees window is from 3rd Octobe...',
    author: 'Poosham',
    date: '09 October, 24',
    readTime: '1 min read',
    image: 'https://hellomentor.in/_next/image?url=https%3A%2F%2Fs3-example-hello-mentor.s3.ap-south-1.amazonaws.com%2Fblog%2F6ab62344-3dde-4081-80bb-9220ffb8298a.jpeg&w=640&q=75',
    logo: '/api/placeholder/50/50',
    tags: ['MCC', 'NEET COUNSELLING 2024', 'MOP-UP ROUND'],
  },
  {
    id: 2,
    category: 'NEET UG',
    title: 'KNRUHS Telangana AYUSH Counselling 2024: BHMS All India Quota (AIQ) Seats',
    description: 'Register online for Telangana AYUSH Counselling 2024 AIQ admissions by uploading scanned certificate...',
    author: 'Sowmya Laktha',
    date: '09 October, 24',
    readTime: '4 min read',
    image: 'https://hellomentor.in/_next/image?url=https%3A%2F%2Fs3-example-hello-mentor.s3.ap-south-1.amazonaws.com%2Fblog%2F298cee23-da12-4e99-81be-0fafbbc78b5a.png&w=640&q=75',
    logo: '/api/placeholder/50/50',
    tags: ['KNRUHS', 'Telangana', 'NEET Counselling 2024'],
  },
  {
    id: 3,
    category: 'NEET UG',
    title: 'Tamil Nadu NEET UG Counselling 2024: Mop-up Round Dates, Deadlines Released',
    description: 'Registration for Tamil Nadu NEET UG Counselling 2024 Mop-up round starts on October 9, until October...',
    author: 'Poosham',
    date: '09 October, 24',
    readTime: '2 min read',
    image: 'https://hellomentor.in/_next/image?url=https%3A%2F%2Fs3-example-hello-mentor.s3.ap-south-1.amazonaws.com%2Fblog%2Fec810c39-6edd-436b-8845-575e5b73d409.png&w=384&q=75',
    logo: '/api/placeholder/50/50',
    tags: ['TAMIL NADU', 'NEET UG COUNSELLING 2024'],
  },
];

const ArticleCard = ({ article }) => (
  <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-48">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-fill" 
      />
      <div className="absolute top-2 left-2 bg-white rounded px-2 py-1 text-xs font-semibold font-poppins">
        {article.category}
      </div>
    </div>
    <div className="flex justify-between items-center text-xs text-black px-6 py-2 font-poppins">
      <span>{article.author}</span>
      <span>{article.date}</span>
      <span>{article.readTime}</span>
    </div>
    <div className="p-4 flex-grow">
      <h2 className="text-lg font-bold mb-2 text-[#233871] font-poppins">{article.title}</h2>
      <p className="text-sm text-[#f6c16f] mb-4 font-poppins">{article.description}</p>
    </div>
  </div>
);

const LatestArticles = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 border-l-4 border-[#233871] pl-3 text-[#233871] font-poppins">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
