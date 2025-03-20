import React, { useState } from 'react';

const PersonalizedSessionsBanner = () => {
  const [isBooking, setIsBooking] = useState(false);

  const handleBookNow = () => {
    setIsBooking(true);
    // Simulate booking logic (replace with actual API call)
    console.log('Book Now clicked');
    
    // Simulate a delay for booking
    setTimeout(() => {
      setIsBooking(false);
      alert('Booking Successful!'); // Simulated success message
    }, 2000);
  };

  return (
    <div className=" text-white rounded-lg overflow-hidden" style={{ backgroundColor: '#233871' }}>
      <div className="flex flex-col md:flex-row items-center justify-between p-8">
        <div className="max-w-lg mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 font-poppins">
            Personalized 1-to-1 Sessions
          </h2>
          <p className="mb-6 font-poppins" style={{ color: '#f6c16f' }}>
            Sessions tailored to guide you. Master 35 counselling types. Learn
            the latest MBBS cut-offs and fee structures & Hello Mentor's
            exclusive insights into the medical competitive landscape.
          </p>
          <button
            onClick={handleBookNow}
            className={`bg-white text-[#233871] px-6 py-2 rounded-full font-semibold hover:bg-[#2338718a] transition duration-300 ${
              isBooking ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={isBooking}
          >
            {isBooking ? 'Booking...' : 'Book Now'}
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="https://hellomentor.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection4_image.201e45b8.png&w=384&q=75"
            alt="Doctor"
            className="w-64 h-auto object-cover"
          />
        </div>
      </div>
      {/* Mobile version of the image (optional) */}
      <div className="md:hidden text-center mt-4">
        <img
          src="https://via.placeholder.com/200" // Placeholder for mobile
          alt="Doctor"
          className="w-48 h-auto object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default PersonalizedSessionsBanner;
