import React, { useState, useEffect } from 'react';
import { Brain, Microscope, Dna, Stethoscope } from 'lucide-react';

const images = [
  'https://media.istockphoto.com/id/828229880/photo/group-of-hikers-walking-in-the-mountain.jpg?s=1024x1024&w=is&k=20&c=Fovou0HGrvujiXWJ3mR-C-SD4qv6HhIGE2VXtji5Y8Q=',
  'https://media.istockphoto.com/id/828229880/photo/group-of-hikers-walking-in-the-mountain.jpg?s=1024x1024&w=is&k=20&c=Fovou0HGrvujiXWJ3mR-C-SD4qv6HhIGE2VXtji5Y8Q=',
  'https://media.istockphoto.com/id/828229880/photo/group-of-hikers-walking-in-the-mountain.jpg?s=1024x1024&w=is&k=20&c=Fovou0HGrvujiXWJ3mR-C-SD4qv6HhIGE2VXtji5Y8Q=',
  'https://media.istockphoto.com/id/828229880/photo/group-of-hikers-walking-in-the-mountain.jpg?s=1024x1024&w=is&k=20&c=Fovou0HGrvujiXWJ3mR-C-SD4qv6HhIGE2VXtji5Y8Q=',
  'https://media.istockphoto.com/id/828229880/photo/group-of-hikers-walking-in-the-mountain.jpg?s=1024x1024&w=is&k=20&c=Fovou0HGrvujiXWJ3mR-C-SD4qv6HhIGE2VXtji5Y8Q=',
  'https://media.istockphoto.com/id/828229880/photo/group-of-hikers-walking-in-the-mountain.jpg?s=1024x1024&w=is&k=20&c=Fovou0HGrvujiXWJ3mR-C-SD4qv6HhIGE2VXtji5Y8Q=',
];

const AnimatedImageCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">

      <h1 className="text-3xl font-bold text-center mb-2 text-[#3E5BA9] font-poppins">

        Snapshots of <span className="text-yellow-500">Empowerment</span> from our recent <span className="text-yellow-500">Seminars</span>
      </h1>
      <p className="text-center text-gray-600 mb-8 font-poppins">
        They came. They saw. They left confident! Thousands of students like you have found answers to their questions at our Seminars.
      </p>
      <div className="relative h-80 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out ${
              index === centerIndex
                ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-150'
                : index === (centerIndex - 1 + images.length) % images.length
                ? 'top-0 left-0 opacity-50 scale-75'
                : index === (centerIndex + 1) % images.length
                ? 'top-0 right-0 opacity-50 scale-75'
                : index === (centerIndex - 2 + images.length) % images.length
                ? 'bottom-0 left-0 opacity-50 scale-75'
                : index === (centerIndex + 2) % images.length
                ? 'bottom-0 right-0 opacity-50 scale-75'
                : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Seminar snapshot ${index + 1}`}
              className="rounded-lg shadow-lg"
              style={{ width: '300px', height: '200px' }} // Set width and height for all images
            />
          </div>
        ))}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-around pointer-events-none">
          <Brain className="text-gray-300 w-12 h-12" />
          <Microscope className="text-gray-300 w-12 h-12" />
          <Dna className="text-gray-300 w-12 h-12" />
          <Stethoscope className="text-gray-300 w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedImageCarousel;
