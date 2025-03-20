import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Example videos
const videoData = [
  {
    id: 1,
    title: 'MVJ Medical College',
    duration: '01:27',
    videoSrc: '/gradu.mp4',
  },
  {
    id: 2,
    title: 'Subbaiah Institute of Medical Sciences',
    duration: '01:30',
    videoSrc: '/edu.mp4',
  },
  {
    id: 3,
    title: 'Skandha - M.V.J Medical College',
    duration: '01:45',
    videoSrc: '/edu.mp4',
  },
  {
    id: 4,
    title: 'Sample Video 4',
    duration: '02:00',
    videoSrc: '/edu.mp4',
  },
  {
    id: 5,
    title: 'Sample Video 5',
    duration: '01:55',
    videoSrc: '/edu.mp4',
  },
];

const VideoCard = ({ videoSrc, isActive, onPlay }) => (
  <div
    className={`relative transition-transform duration-500 ease-in-out ${isActive ? 'scale-110 opacity-100' : 'scale-0 opacity-0'} flex justify-center items-center`}
    style={{ width: isActive ? '600px' : '0', height: isActive ? '350px' : '0' }} // Decreased width and height
  >
    {isActive && (
      <video
        src={videoSrc}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        controls={isActive}
        muted={!isActive}
        autoPlay={isActive}
      />
    )}
    {!isActive && (
      <button
        onClick={onPlay}
        className="absolute inset-0 bg-white bg-opacity-50 rounded-full p-2 flex justify-center items-center"
      >
        <Play size={48} className="text-blue-500" />
      </button>
    )}
  </div>
);

const VideoScroller = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? videoData.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setActiveIndex((prevIndex) => (prevIndex === videoData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePlay = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-full mx-auto my-8 relative px-4">
      <h1 className="text-3xl font-bold text-center mb-6 font-poppins" style={{ color: '#3e5ba9' }}>
        From Parents, with <span className="text-[#f6c16f]">Love and Trust</span>
      </h1>

      <div className="relative h-96 flex justify-center items-center">
        {/* Scroll Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-[#233871] text-white p-2 rounded-full hover:bg-[#2338718a] transition-all duration-300"
        >
          <ChevronLeft size={32} className="text-white" />
        </button>

        <div className="relative w-full flex justify-center items-center">
          {videoData.map((video, index) => (
            <VideoCard
              key={video.id}
              {...video}
              isActive={index === activeIndex}
              onPlay={() => handlePlay(index)}
            />
          ))}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-[#233871] text-white p-2 rounded-full hover:bg-[#2338718a] transition-all duration-300"
        >
          <ChevronRight size={32} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoScroller;
