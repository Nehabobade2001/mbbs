import React, { useState, useEffect } from 'react';

const ProductsAndServices = () => {
  const services = [
    {
      name: 'Personalized Mentorship',
      description: 'Get personalized guidance from experienced mentors.',
      image: '/api/placeholder/600/400'
    },
    {
      name: 'Cut-Off & Allotment',
      description: 'Access accurate cut-off predictions and allotment information.',
      image: '/api/placeholder/600/400'
    },
    {
      name: 'Seat Matrix',
      description: 'Comprehensive seat matrix data for informed decision-making.',
      image: '/api/placeholder/600/400'
    },
    {
      name: 'College Compare',
      description: 'Explore and compare colleges based on their medical courses, latest fee structures, closing ranks, approved intakes, beds, and much more!',
      image: '/api/placeholder/600/400'
    },
    {
      name: 'Application & Choice Filling',
      description: 'Streamlined application process and expert choice filling assistance.',
      image: '/api/placeholder/600/400'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(3); // Start with College Compare

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 font-poppins" style={{ color: '#233871' }}>
          Products and Services
        </h2>
        <p className="text-center text-gray-600 mb-12 font-poppins" style={{ color: '#f6c16f' }}>
          Get the deepest counselling insights at your fingertips! Student-oriented tools and services you cannot find anywhere else.
        </p>

        <div className="relative">
          <div className="flex justify-between items-center mb-8 font-poppins">
            {services.map((service, index) => (
              <div
                key={index}
                className={`text-sm ${index === currentIndex ? 'text-blue-500 font-semibold' : 'text-gray-500' }`}
                style={{ color: index === currentIndex ? '#233871' : '#000' }} // Color change for active service
              >
                {service.name}
              </div>
            ))}
          </div>

          <div className="h-1 bg-gray-300 mb-12 relative">
            <div
              className="absolute h-1 bg-blue-500 transition-all duration-300 ease-in-out"
              style={{
                width: `${100 / services.length}%`,
                left: `${(currentIndex * 100) / services.length}%`,
              }}
            ></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <img
                src={services[currentIndex].image}
                alt={services[currentIndex].name}
                className="w-full h-auto rounded-lg"
                onError={(e) => e.target.src = '/path/to/fallback-image.jpg'}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4 font-poppins" style={{ color: '#233871' }}>
                {services[currentIndex].name}
              </h3>
              <p className="text-gray-600 mb-6 font-poppins" style={{ color: '#000' }}>
                {services[currentIndex].description}
              </p>
              <button
                className="bg-[#233871] font-poppins text-white px-6 py-2 rounded-md hover:bg-[#2338718a] transition duration-300"
              >
                Learn more
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)}
              className="bg-gray-300 font-poppins text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)}
              className="bg-gray-300 font-poppins text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
