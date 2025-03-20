import React from 'react'
import img from './careerasserts/woman-graduate-student-wearing-graduation-hat-gown-isolated-white 1.png'

const CareerHero = () => {
  return (
   <>
   <section className="flex items-center justify-between pl-8 pt-16 bg-[#F9F9F9]">
      {/* Left Side Content */}
      <div className="max-w-lg space-y-6">
        <h1 className="text-5xl font-bold leading-tight text-gray-900 font-playfair">
          Practical <span className="text-yellow-500">Solutions</span> to
          Complex Problems
        </h1>
        <p className="text-gray-600 font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        {/* Buttons */}
        <div className="flex space-x-6">
          <button className="px-6 py-3 font-medium text-white bg-[#233871] rounded-[10px] hover:bg-blue-800">
            Contact Us
          </button>
          <button className="flex items-center space-x-2 text-black hover:underline">
            <span>Explore Aspirent's Ally</span>
            <span className="text-lg">→</span>
          </button>
        </div>
        {/* Statistics */}
        <div className="flex space-x-10 mt-8  items-center">
          <div className="text-center bg-[#fff] rounded-[43px] p-10">
            <h2 className="text-3xl font-bold text-blue-900">12K+</h2>
            <p className="font-semibold text-gray-800">Consultancy Done</p>
            <p className="text-gray-600">Lorem ipsum dolor</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900">6,250+</h2>
            <p className="font-semibold text-gray-800">Our Student</p>
            <p className="text-gray-600">Lorem ipsum dolor</p>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative w-[60%]">
        <img
          src={img}// Replace this with the actual path to your image
          alt="Graduate"
          className="rounded-lg"
        />
      </div>
    </section></>
  )
}

export default CareerHero