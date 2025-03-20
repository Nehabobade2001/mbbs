import React from 'react';
import { User } from 'lucide-react';
import BgImage from './assets/Rectangle 1312.png';
import CardImage from './assets/Group 237606.png';
import sideImage from './assets/Rectangle 1336.png';

const BlogPost = ({ image, title, author, date, shares }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center space-x-4 text-gray-600 text-sm">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-2" />
          <span>{author}</span>
        </div>
        <span>{date}</span>
        <span>{shares} shares</span>
      </div>
      <button className="mt-4 text-blue-600 font-medium">View Post</button>
    </div>
  </div>
);

const TravelBlog = () => {
  const blogPosts = [
    {
      image: CardImage,
      title: "Integer Maecenas Eget Viverra",
      author: "Rajat Pradhan",
      date: "May 4, 2024",
      shares: "4K"
    },
    {
      image: CardImage,
      title: "Integer Maecenas Eget Viverra",
      author: "Rajat Pradhan",
      date: "May 5, 2024",
      shares: "4K"
    },
    {
      image: CardImage,
      title: "Integer Maecenas Eget Viverra",
      author: "Rajat Pradhan",
      date: "May 6, 2024",
      shares: "4K"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img 
          src={BgImage}
          alt="Mountain lake with boat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative">
            <div className="absolute top-8 left-8 text-white">
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold">01</span>
                <span className="text-4xl font-bold">BLOG</span>
              </div>
            </div>
            <div className="text-white text-center max-w-2xl z-10">
              <h1 className=" md:text-5xl font-normal mb-4">
                INSPIRATION FOR TRAVEL BY REAL PEOPLE
              </h1>
              <p className="text-xl mb-8">Book smart, travel simple</p>
              <button className="bg-white text-black px-6 py-3 rounded-md font-medium">
                Start planning your trip
              </button>
            </div>

            {/* Positioned Card in Background Image */}
            <div className="absolute bottom-4 right-4 bg-white  rounded-lg shadow-lg max-w-sm  flex mb-[4rem]">
            {/* Sidebar Label */}
            <div className="bg-blue-800 text-white py-2 px-4 flex items-center rounded-l-lg">
                <span className="text-lg font-medium transform rotate-90">Related Blog</span>
            </div>

            {/* Main Content */}
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Hey Guys Welcome, Great Exploration Blogs</h3>
                <p className="text-gray-600 text-sm mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-blue-600 text-sm font-medium">READ MORE....</button>
            </div>

            {/* Right-side Image */}
            <div className="w-1/3">
                <img 
                src = {sideImage}
                alt="Blog Thumbnail" 
                className="object-cover rounded-r-lg h-full"
                />
            </div>
            </div>

          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-16 -mt-[3rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelBlog;
