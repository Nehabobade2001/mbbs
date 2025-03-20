import React from 'react'
import img from './careerasserts/3590 1.png'
import { FaPhoneAlt } from 'react-icons/fa'

const Welcome = () => {
  return (
    <>
      <section className="flex items-center px-8 py-16 bg-white">
      {/* Left Side Image */}
      <div className="relative w-1/2 h]">
        <img
          src={img} // Replace with your image path
          alt="Two women discussing business"
          className="rounded-lg"
        />
        {/* Contact Bubble */}
        <div className="absolute bottom-[50%] left-[70%] p-4 bg-white rounded-lg shadow-lg flex items-center space-x-3">
          <FaPhoneAlt className="text-blue-700" />
          <div>
            <p className="font-semibold">Lets Talk Now</p>
            <p className="text-gray-500">+91 7024393158</p>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-1/2 pl-16 space-y-6">
        <div className="space-y-2  gap-3 flex items-center">
          <div className="w-32 h-1 bg-[#233871]"></div>
          <p className="text-sm text-black">Welcome to</p>
        </div>
          <h2 className="text-4xl font-bold text-gray-900">The Aspirent’s Ally</h2>
        <p className="text-gray-600">
          The Solomon Group ("SG"), established in 2008, is not a typical global business management-consulting firm. We evoke individual and organizational transformation through authentic leadership. When we say, “we develop practical solutions to complex problems”, we mean that. We pride ourselves on partnering with you to make your business life less complicated, more fulfilling and more successful. We provide consulting, coaching and strategy development, driving better results, so that you can focus on why you chose to do what you do.
        </p>

        {/* Quote Section */}
        <div className="p-6 bg-[#fff] rounded-lg shadow-lg ">
            <div className="flex">

          <p className="text-yellow-600 text-2xl font-semibold mb-4"><svg width="56" height="25" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.648 24.4507H41.9156V17.4648C41.9156 13.6116 45.0483 10.4789 48.9015 10.4789H49.7747C51.2265 10.4789 52.3945 9.31093 52.3945 7.85917V2.61972C52.3945 1.16796 51.2265 0 49.7747 0H48.9015C39.2522 0 31.4367 7.81551 31.4367 17.4648V43.662C31.4367 46.5547 33.7835 48.9015 36.6761 48.9015H50.648C53.5406 48.9015 55.8874 46.5547 55.8874 43.662V29.6902C55.8874 26.7976 53.5406 24.4507 50.648 24.4507ZM19.2113 24.4507H10.4789V17.4648C10.4789 13.6116 13.6116 10.4789 17.4648 10.4789H18.3381C19.7898 10.4789 20.9578 9.31093 20.9578 7.85917V2.61972C20.9578 1.16796 19.7898 0 18.3381 0H17.4648C7.81551 0 0 7.81551 0 17.4648V43.662C0 46.5547 2.34683 48.9015 5.23945 48.9015H19.2113C22.1039 48.9015 24.4507 46.5547 24.4507 43.662V29.6902C24.4507 26.7976 22.1039 24.4507 19.2113 24.4507Z" fill="#FFD04A"/>
</svg>
</p>
          <p className="text-gray-700">
            Infuse your business with a core set of values and principles for the greatest outcomes and success.
          </p>
            </div>
          <p className="text-sm  text-[#FFD04A] mt-2 font-inter">- Robert Johnson, Managing Partner</p>
        </div>
      </div>
    </section></>
  )
}

export default Welcome