import React, { useState } from 'react';
import NumberTicker from '../../components/magicui/number-ticker'; // Assuming this is where the NumberTicker component is located
import { AvatarCirclesDemo } from './Avatars';

const RatingCard = ({ initialRating, initialReviews }) => {
  const [rating, setRating] = useState(initialRating);
  const [reviews, setReviews] = useState(initialReviews);

  return (
    <div className="flex flex-col items-center justify-between p-4 gap-2 shadow-lg rounded-2xl border-white border-2 bg-slate-50">
      <div className="flex gap-10 items-center">
        <div className="mr-2">
          <img src="/google-logo.png" alt="Google Logo" className="w-16 h-16" />
        </div>
        <div className="flex flex-col gap items-start">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-6 h-6 ${index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <div className="text-xl font-semibold mt-2 pb-4 flex items-baseline">
            <NumberTicker
              value={rating}
              className="text-black"
            />
            <span className="text-sm font ml-1">rating from</span>
            <NumberTicker
              value={reviews}
              className="text-black font-bold ml-1"
            />
            <span className="text-sm ml-1">reviews</span>
          </div>
        </div>
        <AvatarCirclesDemo />
      </div>
    </div>
  );
};

export default RatingCard;
