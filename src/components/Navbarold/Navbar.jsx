import React from "react";
import img from "./788.png";
import { Link } from "react-router-dom";
import "../homeComponent/style.scss";
import "./nav.scss";
import ShimmerButton from "../magicui/shimmer-button";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-10 w-full backdrop-blur-xl bg-white z-40 shadow-md opacity-1 ">
        <div className="max-w-full m-2 px-2 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0 flex items-center">
              <Link to="/">
                <img class="" src={img} alt="Logo" style={{height: "2.5rem"}}/>
              </Link>
            </div>
            <div class="hidden md:flex space-x-4">
              <Link to="/about" class="text-gray-900 hover:text-blue-700 ">
                Home
              </Link>
              {/* <Link to="/service" class="text-gray-900 hover:text-blue-700 font-medium ">
              
                Services
              </Link> */}
              <div className="relative group ">
                <Link
                  to="/service"
                  className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                >
                  Products
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <div className="absolute left-0 hidden  group-hover:block bg-white shadow-lg mt-0 pt w-[250px]">
                  <ul className="py-2">
                    <li className="relative group">
                      <Link
                        to="/service/subservice1"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        NEO Banking
                      </Link>
                    </li>

                    <li className="relative group ">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        UPI
                      </Link>
                    </li>
                    <li className="relative grofup">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Payouts Solutions
                       
                      </Link>

                      
                    </li>
                    <li className="relative grofup">
                      <Link
                        to="/service/subservice2"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Cross Border Payments
                        
                      </Link>
                      
                    </li>
                    <li className="relative group">
                      <Link
                        to="/service/subservice3"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Collection
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative group ">
                <Link
                  to="/service"
                  className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                >
                  Services
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <div className="absolute left-0 hidden  group-hover:block bg-white shadow-lg mt-0 pt w-[250px]">
                  <ul className="py-2">
                    <li className="relative group">
                      <Link
                        to="/service/subservice1"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                         Web Development
                      </Link>
                    </li>

                    <li className="relative group">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Custom Software Development
                      </Link>
                    </li>
                    <li className="relative group">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        App Development
                      </Link>
                    </li>
                    <li className="relative grofup">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Graphics Design
                        
                      </Link>
                      
                    </li>
                    <li className="relative grofup">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        SEO
                        
                      </Link>
                      
                    </li>
                    <li className="relative grofup">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Social Media Marketing
                        
                      </Link>
                      
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <Link
                  to="/destination"
                  className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                >
                  Blog
                  
                </Link>
                
              </div>

              <div className="relative group">
                <Link
                  to="#"
                  className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                >
                  Partner with us
                  
                </Link>
                
              </div>

              
              <Link
                to="/blog"
                class="text-gray-900 hover:text-[#233871] font-medium"
              >
                Blogs
              </Link>
            </div>

            <div class="hidden md:flex items-center space-x-4">

            <div class=" md:flex items-center space-x-4">
              <ShimmerButton>Request a callback</ShimmerButton>

            </div>
            <div class="md:hidden flex items-center">
              <button class="text-gray-900 hover:text-blue-700 font-medium  focus:outline-none">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
