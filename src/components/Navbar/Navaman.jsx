import React, { useState, useEffect } from "react";
import img from "./asp_png.png";
import { Link, useNavigate } from "react-router-dom";
import "../homeComponent/style.scss";
import "./nav.scss";

const Navaman = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-10 w-full bg-white z40 shadow-md z-[9999999999999]">
        <div className="max-w-full m-2 px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link onClick={scrollTotop} to="/">
                <img className="md:h-40 h-32 w-auto" src={img} alt="Logo" />
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="text-blue-700 hover:text-white-700 font-medium focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  "X"
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                isOpen ? "flex !text-black h-screen gap-[30px]" : "hidden"
              } md:flex space-x-4 md:space-x-0 md:items-center md:w-auto w-full absolute top-16 md:top-auto left-0 md:relative bg-white md:bg-transparent flex-col md:flex-row mt-4 md:mt-0 py-4 md:py-0 transition-all duration-300`}
            >
              <Link
                onClick={scrollTotop}
                to="/about"
                className="hover:text-blue-700 font-medium pr-[1rem] text-[15px]  pb-0 text-grey-900 pl-[1rem]"
              >
                About
              </Link>

              <div className="relative group">
                <Link
                  onClick={scrollTotop}
                  to="/medical"
                  className="hover:text-blue-700 font-medium flex pr-[1rem] text-[15px] items-center pb-0 text-grey-900"
                >
                  Medical
                </Link>
              </div>
              <div className="relative group">
                <Link
                  onClick={scrollTotop}
                  to="/engineering"
                  className="text-grey-900 hover:text-blue-700 font-medium flex items-center pb-0 pr-[1rem] text-[15px] "
                >
                  Engineering
                </Link>
              </div>

              <div className="relative group">
                <div className=" text-grey-900 hover:text-blue-700 font-medium flex items-center pb-0 pr-[1rem] text-[15px]">
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
                    <Link onClick={scrollTotop} to="/destination">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/gb.png"
                          alt="United Kingdom Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">United Kingdom</span>
                      </li>
                    </Link>
                    <Link onClick={scrollTotop} to="/germany">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/de.png"
                          alt="Germany Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Germany</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/netherland">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/nl.png"
                          alt="Netherland Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Netherland</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/newzealand">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/nz.png"
                          alt="New Zealand Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">New Zealand</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/dubai">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/ae.png"
                          alt="UAE Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Dubai</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/ireland">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/ie.png"
                          alt="Ireland Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Ireland</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/australia">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/au.png"
                          alt="Australia Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Australia</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/spain">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/es.png"
                          alt="Spain Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Spain</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/poland">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/pl.png"
                          alt="Poland Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Poland</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/italy">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/it.png"
                          alt="Italy Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Italy</span>
                      </li>
                    </Link>

                    <Link onClick={scrollTotop} to="/europe">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <img
                          src="https://flagcdn.com/w320/pt.png" // Replace with actual flag image URL
                          alt="Europe Flag"
                          className="w-8 h-5 mr-3"
                        />
                        <span className="text-gray-700">Europe</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>

              <Link
                onClick={scrollTotop}
                to="/management"
                className=" text-grey-900 hover:text-blue-700 font-medium flex items-center pb-0 pr-[1rem] text-[15px] "
              >
                Management
              </Link>
              <Link
                onClick={scrollTotop}
                to="/career"
                className=" text-grey-900 hover:text-blue-700 font-medium flex items-center pb-0 pr-[1rem] text-[15px] "
              >
                Career Consultancy
              </Link>
              <Link
                onClick={scrollTotop}
                to="/neet"
                className=" text-grey-900 hover:text-blue-700 font-medium  pr-[1rem] text-[15px] pb-0"
              >
                Learning
              </Link>

              <div className="flex space-x-2 mt-4 md:mt-0">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-2 rounded">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.9 14.32a7 7 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM10 14a4 4 0 100-8 4 4 0 000 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-8a3 3 0 110-6 3 3 0 010 6zm-4 4a4 4 0 118 0H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => Navigate("/otp")}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-2 rounded"
                >
                  Request a callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navaman;
