import React from "react";
import img from "./asp_png.png";
import { Link, NavLink } from "react-router-dom";
import "../homeComponent/style.scss";
import "./nav.scss";
import ShimmerButton from "../magicui/shimmer-button";

const Navbar = () => {
  return (
    <>
      <nav class="fixed top-10 w-full backdrop-blur-xl bg-white shadow-md opacity-1 z-[9999999999999]">
        <div class="max-w-full m-2 px-2 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0 flex items-center">
              <Link to="/">
                <img class="md:h-40 h-32 w-auto" src={img} alt="Logo" />
              </Link>
            </div>
            <div class="hidden md:flex space-x-4">
              <Link to="/about" class="text-gray-900 hover:text-blue-700 ">
                About
              </Link>
              {/* <Link to="/service" class="text-gray-900 hover:text-blue-700 font-medium ">
              
                Services
              </Link> */}
              <div className="relative group ">
                <Link
                  to="/service"
                  className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                >
                  Medical Consultancy
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
                        NEET Guidance
                      </Link>
                    </li>

                    <li className="relative group ">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Course of MBBS
                      </Link>
                    </li>
                    <li className="relative grofup">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        CBT Tests
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>

                      <div className="absolute left-full top-0 hidden grock bg-white shadow-lg w-[200px] ml-0">
                        <ul className="py-2">
                          <li>
                            <Link
                              to="/service/subservice2/sub1"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              Assement1
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/subservice2/sub1"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              Assement2
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/subservice2/sub1"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              Assement3
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="relative grofup">
                      <Link
                        to="/service/subservice2"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        College Selection
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                      <div className="absolute left-full top-0 hidden grock bg-white shadow-lg w-[200px] ml-0">
                        <ul className="py-2">
                          <li>
                            <Link
                              to="/service/subservice2/sub1"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              NEET Predictor
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="relative group">
                      <Link
                        to="/service/subservice3"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Mentorship
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
                  Engineering Consultancy
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
                        JEE Guidance
                      </Link>
                    </li>

                    <li className="relative group">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Entrance Exam Prep
                      </Link>
                    </li>
                    <li className="relative group">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        Engineering Course
                      </Link>
                    </li>
                    <li className="relative grofup">
                      <Link
                        to="/service/subservice2"
                        className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        College Selection
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                      <div className="absolute left-full top-0 hidden grock bg-white shadow-lg w-[200px] ml-0">
                        <ul className="py-2">
                          <li>
                            <Link
                              to="/service/subservice2/sub1"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              JEE Predictor
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3">
                  Destinations
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
                </div>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-0 pt-2 w-[600px] h-[200px] overflow-y-auto">
                  <ul className="py-2 flex flex-wrap country-list">
                    {/* <Link to="/us">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/us.png" // Replace with actual flag image URL
                          alt="United States Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">United States</span>
                      </li>
                    </Link> */}

                    <Link to="/destination">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/gb.png" // Replace with actual flag image URL
                          alt="United Kingdom Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">United Kingdom</span>
                      </li>
                    </Link>

                    {/* <Link to="/france">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/fr.png" // Replace with actual flag image URL
                          alt="France Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">France</span>
                      </li>
                    </Link> */}

                    {/* <Link to="/india">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/in.png" // Replace with actual flag image URL
                          alt="France Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">India</span>
                      </li>
                    </Link> */}

                    {/* <Link to="/srilanka">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/lk.png" // Replace with actual flag image URL
                          alt="France Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Sri Lanka</span>
                      </li>
                    </Link> */}

                    {/* <Link to="/canada">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/ca.png" // Replace with actual flag image URL
                          alt="France Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Canada</span>
                      </li>
                    </Link> */}

                    {/* <Link to="/japan">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/jp.png" // Replace with actual flag image URL
                          alt="France Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Japan</span>
                      </li>
                    </Link> */}

                    {/* <Link to="/is">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/il.png" 
                          alt="Israel Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Israel</span>
                      </li>
                    </Link> */}

                    <Link to="/germany">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/de.png"
                          alt="Germany Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Germany</span>
                      </li>
                    </Link>

                    <Link to="/netherland">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/nl.png"
                          alt="Netherland Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Netherland</span>
                      </li>
                    </Link>

                    <Link to="/newzealand">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/nz.png"
                          alt="New Zealand Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">New Zealand</span>
                      </li>
                    </Link>

                    <Link to="/dubai">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/ae.png"
                          alt="UAE Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Dubai</span>
                      </li>
                    </Link>

                    <Link to="/ireland">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/ie.png"
                          alt="Ireland Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Ireland</span>
                      </li>
                    </Link>

                    <Link to="/australia">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/au.png"
                          alt="Australia Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Australia</span>
                      </li>
                    </Link>

                    <Link to="/spain">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/es.png"
                          alt="Spain Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Spain</span>
                      </li>
                    </Link>

                    <Link to="/poland">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/pl.png"
                          alt="Poland Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Poland</span>
                      </li>
                    </Link>

                    <Link to="/italy">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/it.png"
                          alt="Italy Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Italy</span>
                      </li>
                    </Link>

                    <Link to="/europe">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/pt.png" // Replace with actual flag image URL
                          alt="Europe Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Europe</span>
                      </li>
                    </Link>

                    {/* Add more countries as needed */}
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <Link
                  to="#"
                  className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                >
                  Test Prep
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
                <div className="absolute left-0 hidden group-hover:block bg-[#fff] shadow-lg mt-0 pt-2 w-[300px] h-[300px] overflow-y-auto">
                  <ul className="py-2 exam-prep flex flex-wrap">
                    <Link
                      to="/test/gmat"
                      className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                    >
                      <li className="flex items-center px-4 py-2 hover:scale-95 cursor-pointer transition-all">
                        <img
                          src="https://lepublicassets.leverageedu.com/header/tests/gmat.png" // Replace with actual GMAT image URL
                          alt="GMAT"
                          className="w0 mr-3"
                        />
                        {/* <span className="text-gray-700">GMAT</span> */}
                      </li>
                    </Link>
                    <Link
                      to="/test/ielts"
                      className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                    >
                      <li className="flex items-center px-4 py-2 hoverbg-gray-100 hover:scale-95 cursor-pointer transition-all">
                        <img
                          src="https://lepublicassets.leverageedu.com/header/tests/ielts.png" // Replace with actual IELTS image URL
                          alt="IELTS"
                          className="w mr-3"
                        />
                        {/* <span className="text-gray-700">IELTS</span> */}
                      </li>
                    </Link>
                    <Link
                      to="/test/pte"
                      className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                    >
                      <li className="flex items-center px-4 py-2 hoverbg-gray-100 hover:scale-95 cursor-pointer transition-all">
                        <img
                          src="https://lepublicassets.leverageedu.com/header/tests/pte.png" // Replace with actual PTE image URL
                          alt="PTE"
                          className="w mr-3"
                        />
                        {/* <span className="text-gray-700">PTE</span> */}
                      </li>
                    </Link>
                    <Link
                      to="/test/gre"
                      className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                    >
                      <li className="flex items-center px-4 py-2 hoverbg-gray-100 hover:scale-95 cursor-pointer transition-all">
                        <img
                          src="https://lepublicassets.leverageedu.com/header/tests/gre.png" // Replace with actual GRE image URL
                          alt="GRE"
                          className="w- mr-3"
                        />
                        {/* <span className="text-gray-700">GRE</span> */}
                      </li>
                    </Link>
                    <Link
                      to="/test/toefl"
                      className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                    >
                      <li className="flex items-center px-4 py-2 hoverbg-gray-100 hover:scale-95 cursor-pointer transition-all">
                        <img
                          src="https://lepublicassets.leverageedu.com/header/tests/toefl.png" // Replace with actual GRE image URL
                          alt="GRE"
                          className="w- mr-3"
                        />
                        {/* <span className="text-gray-700">TOEFL</span> */}
                      </li>
                    </Link>

                    {/* Add more test topics as needed */}
                  </ul>
                </div>
              </div>

              <div className="relative group ">
                <Link
                  to="/career"
                  className="text-gray-900 hover:text-blue-700 font-medium  flex items-center pb-3"
                >
                  Career Consultancy
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
                    <Link
                      to="/helloMentor"
                      className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <li className="relative grofup">UG/PG Counselling</li>
                    </Link>
                    <Link
                      to="/psychometric-test"
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <li className="relative grofup">Pshycometric Assement</li>
                    </Link>
                  </ul>
                </div>
              </div>

              <Link
                to="/neet"
                class="text-gray-900 hover:text-blue-700 font-medium "
              >
                Blogs
              </Link>

              <Link
                to="/engineering"
                class="text-gray-900 hover:text-blue-700 font-medium "
              >
               Engineering
              </Link>
            </div>
            <div class="hidden md:flex items-center space-x-4">
              <ShimmerButton>Login / SignUp</ShimmerButton>
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
      </nav>
    </>
  );
};

export default Navbar;
