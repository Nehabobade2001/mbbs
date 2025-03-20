import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Thermometer, Cloud, Wind } from 'lucide-react';
import cloudImage from '../../Images/Destination/Group 41.png';
import cloud from '../../Images/Destination/Group 38.png';
import StandRews from '../../Images/Destination/standrewsuniversity.png.png';
import logo2 from '../../Images/Destination/logo_1681394934810.png.png';
import Ise from '../../Images/Destination/lse.png.png';
import Durham from '../../Images/Destination/durhamuniversity.png.png';
import Cambridge from '../../Images/Destination/cambridgeuniversity.png.png';

const WeatherDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const universities = [
    StandRews,
    logo2,
    Ise,
    Durham,
    Cambridge
  ];

  const weatherData = [
    {
      location: "Burdwan",
      date: "Aug 23, Tue",
      temperature: "27°C",
      humidity: "99%",
      visibility: "8km",
      airPressure: "1005hPa",
      wind: "2mph"
    },
    {
      location: "Damoh",
      date: "Aug 23, Tue",
      temperature: "27°C",
      humidity: "99%",
      visibility: "8km",
      airPressure: "1005hPa",
      wind: "2mph"
    },
    {
      location: "Sagar",
      date: "Aug 23, Tue",
      temperature: "27°C",
      humidity: "99%",
      visibility: "8km",
      airPressure: "1005hPa",
      wind: "2mph"
    },
    {
      location: "Indore",
      date: "Aug 23, Tue",
      temperature: "27°C",
      humidity: "99%",
      visibility: "8km",
      airPressure: "1005hPa",
      wind: "2mph"
    }
  ];

  const hourlyForecast = [
    { time: "19:00 pm", temp: "29°", icon: cloud },
    { time: "21:00 pm", temp: "27°", icon: cloud },
    { time: "23:00 pm", temp: "27°", icon: cloud },
    { time: "1:00 am", temp: "26°", icon: cloud },
    { time: "3:00 am", temp: "29°", icon: cloud },
    { time: "5:00 am", temp: "31°", icon: cloud },
    { time: "7:00 am", temp: "27°", icon: cloud }
  ];

  const getWeatherIcon = (type) => {
    switch (type) {
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-white" />;
      case 'rain':
        return <Cloud className="w-8 h-8 text-white" />;
      case 'storm':
        return <Cloud className="w-8 h-8 text-white" />;
      case 'partlyCloudy':
        return <Cloud className="w-8 h-8 text-white" />;
      default:
        return <Cloud className="w-8 h-8 text-white" />;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % weatherData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + weatherData.length) % weatherData.length);
  };

  const getCardIndex = (offset) => {
    return (currentIndex + offset + weatherData.length) % weatherData.length;
  };
 

  return (
    <>
    <div className="w-full px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 ">Weather</h1>
      
      {/* Main Weather Card Slider */}
      <div className="relative mb-8 overflow-hidden w-full">
        <div className="flex items-center justify-center relative w-full">

          {/* Previous Card (Partial View) */}
          <div className="absolute left-0 w-1/4 opacity-50 transform -translate-x-1/2 hidden lg:block">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-32" />
                <span className="text-xl">{weatherData[getCardIndex(-1)].location}</span>
              </div>
            </div>
          </div>

          {/* Current Card */}
          <div className="w-full max-w-full lg:max-w-4xl bg-gradient-to-br from-blue-900 to-gray-900 rounded-3xl p-8 text-white z-10">
                <div className="flex justify-between items-start">
                 
                  <div>
                    <div className="flex items-center gap-2 mb-16">
                      <MapPin className="w-5 h-5" />
                      <span className="text-xl">{weatherData[currentIndex].location}</span>
                    </div>
                    <div className="text-sm underline mb-2">
                      {weatherData[currentIndex].date}
                    </div>
                  </div>

                  {/* Centered Temperature Section */}
                  <div className="flex-grow flex items-center justify-center mt-8">
                    <div className="flex items-center justify-center text-center gap-4">
                      <Thermometer className="w-8 h-8" />
                      <span className="text-4xl font-light">
                        {weatherData[currentIndex].temperature}
                      </span>
                      {/* <Cloud className="w-12 h-12" /> */}
                      <img src={cloudImage} alt="Cloud" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>


          {/* Next Card (Partial View) */}
          <div className="absolute right-0 w-1/4 opacity-50 transform translate-x-1/2 hidden lg:block">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-32" />
                <span className="text-xl">{weatherData[getCardIndex(1)].location}</span>
              </div>
            </div>
          </div>

           {/* Chevron Buttons */}
           <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/50 transition"
              style={{ width: '40px', height: '40px' }}
            >
              <ChevronLeft className="w-6 h-6 text-[#233871]" />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/50 transition"
              style={{ width: '40px', height: '40px' }}
            >
              <ChevronRight className="w-6 h-6 text-[#233871]" />
            </button>
        </div>
      </div>

      {/* Hourly Forecast (Full-Width) */}
      <div className="flex justify-center">
        <div className="flex gap-4 overflow-x-auto pb-4 max-w-3xl">
          {hourlyForecast.map((hour, index) => (
            <div 
              key={index}
              className="relative flex-shrink-0 bg-gradient-to-b from-slate-600 to-slate-800 rounded-3xl w-24 h-32 overflow-hidden"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              {/* Time */}
              <div className="absolute top-2 left-0 right-0 text-center">
                <div className="text-white text-sm font-medium">
                  {hour.time}
                </div>
              </div>

              {/* Weather Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={hour.icon} alt="Cloud" className="w-16 h-16" />
              </div>


              {/* Temperature */}
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <div className="text-white text-xl font-semibold">
                  {hour.temp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-col ">
    <h3 className="text-xxl font-bold mb-6 text-left ml-32">Monthly Living Expenses in United States</h3>
    <div className=" justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] items-center justify-center"> 
        <div className="flex flex-wrap gap-8 justify-center">
          {universities.map((uni, index) => (
            <img
              key={index}
              src={uni}
              alt={`University`}
              className="w-20 h-20 object-contain"
            />
          ))}
        </div>
      </div>
      </div>
    </div>
</>
  );
};

export default WeatherDashboard;
