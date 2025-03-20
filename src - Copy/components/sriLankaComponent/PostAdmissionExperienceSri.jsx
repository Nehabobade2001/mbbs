import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Bus, Utensils, DollarSign } from 'lucide-react';

const visaOptions = [
  {
    title: "General Student - Tier 4",
    cost: "Rs 339",
    type: "Study",
    description: "This category is for students coming to the Sri Lanka for post-16 education. A Tier 4 (General) Student must be at least 16 years old.",
    color: "bg-purple-100"
  },
  {
    title: "Child Student - Tier 4",
    cost: "Rs 339",
    type: "Study",
    description: "You can apply for this Tier 4 (Child) student visa if you're aged between 4 and 17 and you want to study at an independent school in the Sri Lanka.",
    color: "bg-blue-100"
  },
  // Add more visa options here
];

const weatherData = [
  { city: "Colombo", min: 10, max: 16 },
  { city: "Kandy", min: 6, max: 13 },
  { city: "Galle", min: 9, max: 15 },
  { city: "Vavuniya", min: 8, max: 12 },
  { city: "Haputale", min: 8, max: 14 },
  { city: "Matara", min: 6, max: 14 },
  { city: "Ratnapura", min: 7, max: 14 },
  { city: "Batticaloa", min: 8, max: 20 },
  { city: "Honolulu", min: 6, max: 15 },
  { city: "Trincomalee", min: 10, max: 14 },
];

const livingExpenses = [
  { category: "Rent", icon: Home, range: "Rs 470 - Rs 739" },
  { category: "Food", icon: Utensils, range: "Rs 107 - Rs 336" },
  { category: "Transport", icon: Bus, range: "Rs 54 - Rs 107" },
  { category: "Miscellaneous", icon: DollarSign, range: "Rs 337 - Rs 672" },
];

const PostAdmissionDashboard = () => {
  const [currentVisaIndex, setCurrentVisaIndex] = useState(0);

  const nextVisa = () => {
    setCurrentVisaIndex((prevIndex) => (prevIndex + 1) % visaOptions.length);
  };

  const prevVisa = () => {
    setCurrentVisaIndex((prevIndex) => (prevIndex - 1 + visaOptions.length) % visaOptions.length);
  };

  // Determine the current and next indices for the visa options
  const firstVisaIndex = currentVisaIndex;
  const secondVisaIndex = (currentVisaIndex + 1) % visaOptions.length;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6 text-[#233871]">Post Admission Experience</h1>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Visa Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-[#233871]">Visa for Sri Lanka</h2>
          <div className="relative">
            <button onClick={prevVisa} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <ChevronLeft className="w-6 h-6 text-[#233871]" /> {/* Updated color */}
            </button>
            <div className="flex space-x-4">
              {/* First Visa Card */}
              <div className={`flex-1 px-8 py-8 rounded-lg ${visaOptions[firstVisaIndex].color}`}>
                <h3 className="text-lg font-medium text-[#233871]">{visaOptions[firstVisaIndex].title}</h3>
                <p className="text-sm text-gray-600">Cost - {visaOptions[firstVisaIndex].cost}</p>
                <p className="text-sm text-gray-600">Type: {visaOptions[firstVisaIndex].type}</p>
                <p className="text-sm mt-2 text-black">{visaOptions[firstVisaIndex].description}</p>
              </div>

              {/* Second Visa Card */}
              <div className={`flex-1 px-8 py-8 rounded-lg ${visaOptions[secondVisaIndex].color}`}>
                <h3 className="text-lg font-medium text-[#233871]">{visaOptions[secondVisaIndex].title}</h3>
                <p className="text-sm text-gray-600">Cost - {visaOptions[secondVisaIndex].cost}</p>
                <p className="text-sm text-gray-600">Type: {visaOptions[secondVisaIndex].type}</p>
                <p className="text-sm mt-2 text-black">{visaOptions[secondVisaIndex].description}</p>
              </div>
            </div>
            <button onClick={nextVisa} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <ChevronRight className="w-6 h-6 text-[#233871]" /> {/* Updated color */}
            </button>
          </div>
          <button className="mt-4 px-4 py-2 bg-[#233871] text-white rounded-md hover:bg-[#2338718a] transition">
            Explore More
          </button>
        </div>

        {/* Weather Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-[#233871]">Weather</h2>
          <div className="grid grid-cols-2 gap-4">
            {weatherData.map((city, index) => (
              <div key={index} className="flex justify-between text-sm text-black">
                <p className="font-medium">{city.city}</p>
                <p>{city.min}° / {city.max}°</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cost of Living */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-[#233871]">Cost Of Living in Sri Lanka</h2>
          <div className="relative h-16 mb-2"> {/* Adjust container height if needed */}
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-r from-green-300 via-yellow-300 to-red-300 rounded-full" /> {/* Circular gradient bar */}
            <div className="absolute bottom-0 left-1/2 h-16 w-0.5 bg-black transform -translate-x-1/2 origin-bottom rotate-45" />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-black">Low</span>
            <span className="text-black">High</span>
          </div>
        </div>

        {/* Monthly Living Expenses */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-[#233871]">Monthly Living Expenses in Sri Lanka</h2>
          <div className="grid grid-cols-2 gap-4">
            {livingExpenses.map((expense, index) => (
              <div key={index} className="flex items-center">
                <expense.icon className="w-8 h-8 mr-2 text-[#233871]" /> {/* Updated icon color */}
                <div>
                  <p className="font-medium text-black">{expense.category}</p>
                  <p className="text-sm text-gray-600">{expense.range}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdmissionDashboard;
