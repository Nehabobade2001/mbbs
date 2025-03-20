import React from 'react'
import second from './careerasserts/v875-katie-35 1.png'

const Getintouch = () => {
  return (
   <div
  className="h-[700px] flex justify-center items-center bg-cover bg-center"
  style={{
    backgroundImage: "url('./careerasserts/v875-katie-35 1.png')",
  }}
>
 <div className="mb-12 text-center">
          <h3 className="text-gray-400 text-sm">CLIENT FEEDBACK</h3>
          <h1 className="text-3xl font-bold mt-2">Get in Touch</h1>
          <p className="text-gray-400 mt-2 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
           <button className="px-6  mt-10 py-3 font-medium text-white bg-[#233871] rounded-[10px] hover:bg-blue-800">
            Contact Us
          </button>
        </div>
    </div>
  )
}

export default Getintouch