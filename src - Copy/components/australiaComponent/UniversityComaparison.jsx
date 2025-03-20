import React from 'react';
import Instructor from '../../Images/Destination/Instructor.png';

// Update BlogCard to accept props for title, description, author, and imageUrl
const BlogCard = ({ color = 'turquoise', title, description, author, imageUrl }) => {
  const colorStyles = {
    turquoise: 'bg-emerald-400',
    purple: 'bg-purple-500',
    coral: 'bg-red-400'
  };

  const buttonStyles = {
    turquoise: 'border-emerald-100 hover:bg-emerald-300',
    purple: 'border-purple-100 hover:bg-purple-400',
    coral: 'border-red-100 hover:bg-red-300'
  };

  return (
    <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row h-full"> {/* Changed to flex-col on mobile */}
        {/* Left Section */}
        <div className={`${colorStyles[color]} p-8 text-white flex flex-col justify-between w-full md:w-1/2`}>
          <div>
            <span className="text-sm uppercase tracking-wide">BLOG</span>
            <p className="text-xs mt-1">5 min read</p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold leading-tight">{title}</h2>
            <p className="mt-4 text-sm">{description}</p>
          </div>
          
          <button 
            className={`mt-6 px-6 py-2 border rounded-full text-sm 
              transition-colors duration-200 w-fit
              ${buttonStyles[color]}`}
          >
            Read Now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={imageUrl}
            alt="Blog related"
            className="h-48 w-full object-cover md:h-full" // Adjusted height for mobile
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-medium">{author}</h3>
            <p className="text-sm opacity-90">Film Maker & Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component to display all three variants with dynamic data
const BlogCardShowcase = () => {
  // Define the data for each blog card
  const blogData = [
    {
      color: "turquoise",
      title: "How to get AUSTRALIA Business Visa",
      description: "Europe's leading investment destination filled with opportunities.",
      author: "Kitani Sarasvati",
      imageUrl: Instructor,
    },
    {
      color: "purple",
      title: "Exploring London: A Guide for Tourists",
      description: "Discover the hidden gems of London and experience the culture.",
      author: "John Doe",
      imageUrl: Instructor,
    },
    {
      color: "coral",
      title: "The Future of Technology in Education",
      description: "How technology is transforming the way we learn and teach.",
      author: "Jane Smith",
      imageUrl: Instructor,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      {blogData.map((blog, index) => (
        <BlogCard 
          key={index}
          color={blog.color}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          imageUrl={blog.imageUrl}
        />
      ))}
    </div>
  );
};

export default BlogCardShowcase;
