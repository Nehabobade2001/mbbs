import React, { useState } from 'react';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating an API request (replace with actual subscription logic)
    console.log('Subscribing email:', email);

    // Reset the email input after submission
    setTimeout(() => {
      setEmail('');
      setIsSubmitting(false);
      alert('Subscribed successfully!'); // Placeholder for subscription success
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"style={{ backgroundColor: '#233871' }}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white bg-opacity-10 rounded-lg p-8 relative z-10">
          <h2 className="text-2xl font-bold text-white mb-2 font-poppins">
            Stay Updated with Hello Mentor Blog
          </h2>
          <p className="text-white mb-4 font-poppins">
            Latest News and Insights. Personalized for you. Delivered to your inbox.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['NEET UG', 'NEET PG', 'AYUSH', 'Engineering'].map((tag) => (
              <span
                key={tag}
                className="text-white text-sm py-1 px-3 rounded-full cursor-pointer transition duration-300 hover:bg-blue-500" style={{color:"#f6c16f"}}
              >
                {tag}
              </span>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`bg-white text-blue-500 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition duration-300 ${
                isSubmitting ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loader">Submitting...</span> // Add a spinner or text while submitting
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 border-4 border-white border-opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 border-4 border-white border-opacity-30 rounded-full"></div>
    </div>
  );
};

export default NewsletterBanner;
