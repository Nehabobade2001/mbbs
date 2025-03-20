import React from "react";
import img from "./assets/icons8-instagram-96 1.webp";
import img2 from "./assets/icons8-facebook-240 1.webp";
import img3 from "./assets/icons8-linked-in-480 1.webp";
import img4 from "./assets/icons8-google-240 1.webp";
import img5 from "./assets/icons8-youtube-480 1.webp";

import "./style.scss";

const SocialSection = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-white">
      <h2 className="text-3xl font-bold mb-2 text-gray-800">
        Let’s Get <span className="text-yellow-500">Social!</span>
      </h2>
      <p className="text-gray-600 mb-8">Connect with us on Social Media</p>
      <div className="flex justify-center gap-20 service-social">
        <div className="flex flex-col items-center">
          {/* <FaInstagram className="text-pink-600 text-5xl mb-2" /> */}

          <img src={img} alt="facebook" />
          <p className="text-gray-800 text-lg">3000+</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <FaFacebookF className="text-blue-600 text-5xl mb-2" /> */}
          <img src={img2} alt="facebook" />
          <p className="text-gray-800 text-lg">3000+</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <FaLinkedinIn className="text-blue-800 text-5xl mb-2" /> */}
          <img src={img3} alt="facebook" />

          <p className="text-gray-800 text-lg">8600+</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <FaGoogle className="text-red-600 text-5xl mb-2" /> */}
          <img src={img4} alt="facebook" />

          <p className="text-gray-800 text-lg">4500+</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <FaYoutube className="text-red-600 text-5xl mb-2" /> */}
          <img src={img5} alt="facebook" />

          <p className="text-gray-800 text-lg">5000+</p>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
