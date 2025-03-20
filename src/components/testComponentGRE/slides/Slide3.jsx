import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { 
    name: 'Pete Vejanuru', 
    score: 720, 
    university: 'CORNELL UNIVERSITY', 
    imageUrl: 'https://www.jamboreeindia.com/assets/data-student/GMAT/5.webp' 
  },
  { 
    name: 'Jaideep Chaudhary', 
    score: 655, 
    university: 'Translates to 720 on the classic GMAT', 
    imageUrl: 'https://www.jamboreeindia.com/assets/data-student/GMAT/5.webp' 
  },
  { 
    name: 'Akshay Prakash', 
    score: 740, 
    university: 'UCLA', 
    imageUrl: 'https://www.jamboreeindia.com/assets/data-student/GMAT/5.webp' 
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white rounded-lg shadow-lg p-6 m-2">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">GMAT {testimonial.score}</div>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-500">
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/100/100'; // Fallback to placeholder if image fails to load
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;