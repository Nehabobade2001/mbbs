import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Ug = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-start gap-10 ">
        <div className="card group border-1 shadow2xl  h-full rounded-[10px] p12 border-[#0] max-w-[440px] bg-white w-[600px]  ">
          <div className="upimgae  rounded-[10px] ">
            {/* <img
                    src={img}
                    alt=""
                    className=" rounded-t-[40px] rounded-r-[40px]"
                  /> */}
          </div>

          <div className="p-6">
            {/* <div className="flex flexcol items-start justify-between py-1">
                    <div className="lef  bg-[#233871]">
                      <div className="flex items-center justify-center p-1 gap-2 rounded-[10px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.66667 3.83333C4.66667 2.94928 5.01786 2.10143 5.64298 1.47631C6.2681 0.851189 7.11594 0.5 8 0.5C8.88406 0.5 9.7319 0.851189 10.357 1.47631C10.9821 2.10143 11.3333 2.94928 11.3333 3.83333C11.3333 4.71739 10.9821 5.56523 10.357 6.19036C9.7319 6.81548 8.88406 7.16667 8 7.16667C7.11594 7.16667 6.2681 6.81548 5.64298 6.19036C5.01786 5.56523 4.66667 4.71739 4.66667 3.83333ZM4.66667 8.83333C3.5616 8.83333 2.50179 9.27232 1.72039 10.0537C0.938987 10.8351 0.5 11.8949 0.5 13C0.5 13.663 0.763392 14.2989 1.23223 14.7678C1.70107 15.2366 2.33696 15.5 3 15.5H13C13.663 15.5 14.2989 15.2366 14.7678 14.7678C15.2366 14.2989 15.5 13.663 15.5 13C15.5 11.8949 15.061 10.8351 14.2796 10.0537C13.4982 9.27232 12.4384 8.83333 11.3333 8.83333H4.66667Z"
                            fill="white"
                          />
                        </svg>

                        <span className="text-white">2.4k</span>
                      </div>
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          d="M45.7592 22.4321L36.9701 30.0161L39.6478 41.3579C39.7956 41.9736 39.7575 42.6192 39.5385 43.2133C39.3195 43.8074 38.9293 44.3232 38.4172 44.6957C37.9052 45.0681 37.2942 45.2804 36.6616 45.3058C36.0289 45.3312 35.4029 45.1686 34.8627 44.8384L24.9994 38.768L15.1303 44.8384C14.5901 45.1667 13.9648 45.3278 13.3333 45.3015C12.7017 45.2751 12.092 45.0625 11.581 44.6904C11.0701 44.3183 10.6806 43.8033 10.4617 43.2103C10.2428 42.6173 10.2043 41.9728 10.351 41.3579L13.0385 30.0161L4.24939 22.4321C3.77146 22.019 3.42581 21.4743 3.25561 20.866C3.08541 20.2576 3.0982 19.6126 3.29239 19.0115C3.48658 18.4104 3.85356 17.8798 4.34749 17.4861C4.84143 17.0923 5.44044 16.8527 6.0697 16.7973L17.5931 15.8676L22.0385 5.10984C22.2791 4.52354 22.6886 4.02204 23.215 3.66909C23.7413 3.31614 24.3608 3.12769 24.9945 3.12769C25.6283 3.12769 26.2477 3.31614 26.7741 3.66909C27.3004 4.02204 27.7099 4.52354 27.9506 5.10984L32.3939 15.8676L43.9174 16.7973C44.5479 16.8507 45.1486 17.0889 45.6444 17.4821C46.1401 17.8754 46.5088 18.4062 46.7042 19.008C46.8996 19.6098 46.913 20.2559 46.7428 20.8654C46.5726 21.4748 46.2264 22.0205 45.7474 22.4341L45.7592 22.4321Z"
                          fill="#D79442"
                        />
                      </svg>
                      <span>4.5</span>
                    </div>
                  </div> */}

            <div className="flex justify-between items-center">
              <p className="text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end px-6 py-2 font-bold rounded-md">
                <span>Free</span>
              </p>
              <div className="flex justify-center py-3 wfull">
                <button class="group relative z-0 bg-[#233871] bg rounded-full group-hover:bg-gradient-to-r group-hover:from-[#2338718a] group-hover:to-[#4e7cfb]   flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white  transition-transform duration-300 ease-in-out  ">
                  <p className="text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end">
                    {/* <span className="text[0.416667em]">₹</span> */}
                    <span className="text-md font-bold">Signup</span>
                    {/* <span>/3mo</span> */}
                  </p>
                  <span class="group-hover:rotate-45 ml-4 ">↗</span>
                </button>
              </div>
            </div>
            <hr className="text-[#ABE0F8] bg-[#ABE0F8] h-[2px]" />

            <div className="flex flex-col items-start py-1">
              <h3 className="text-3xl font-bold">Free </h3>
            </div>

            <div className="h-[500px]">
              <div className="grid gap-4 py-6 card-content">
                <div className="space-y-2">
                  {/* <h4 className="font-semibold">Perfect for individuals</h4> */}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Unlimited access to these features!
                  </p>
                </div>
                <h4 className="font-semibold">Tools</h4>
                <ul className="grid gap-4 text-[14px] text-[#3e5ba9] service-ul">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Rank Predictor</span>
                  </li>
                </ul>

                <h4 className="font-semibold">Analysis</h4>
                <ul className="flex flex-wrap gap-4 text-[14px] text-[#3e5ba9] service-ul">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>
                      {/* <span className="font-bold"> 75-Day </span> */}
                      Exam Paper
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>5 year competition</span>
                  </li>
                </ul>
                <h4 className="font-semibold">Resources</h4>
                <ul className="grid gap-4 text-[14px] text-[#3e5ba9] service-l">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Latest Webinar recording (24 Hrs)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />

                    <span>All State Counselling e-books</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="flex items-center justify-between text-blue-600 gap-4">
              <span>View Details</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="card group border2 w-[600px] max-md:w-full shadow2xl rounded-[10px] p12 border-[#0] max-w-[450px] bg-white ">
          <div className="upimgae  rounded-[10px]">
            {/* <img`
                    src={img1}
                    alt=""
                    className=" rounded-t-[40px] rounded-r-[40px]"
                  /> */}
          </div>

          <div className="p-6">
            {/* <div className="flex flexcol items-start justify-between py-1">
                    <div className="lef bg-[#233871]">
                      <div className="flex items-center justify-center p-1 rounded-[10px] gap-2 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.66667 3.83333C4.66667 2.94928 5.01786 2.10143 5.64298 1.47631C6.2681 0.851189 7.11594 0.5 8 0.5C8.88406 0.5 9.7319 0.851189 10.357 1.47631C10.9821 2.10143 11.3333 2.94928 11.3333 3.83333C11.3333 4.71739 10.9821 5.56523 10.357 6.19036C9.7319 6.81548 8.88406 7.16667 8 7.16667C7.11594 7.16667 6.2681 6.81548 5.64298 6.19036C5.01786 5.56523 4.66667 4.71739 4.66667 3.83333ZM4.66667 8.83333C3.5616 8.83333 2.50179 9.27232 1.72039 10.0537C0.938987 10.8351 0.5 11.8949 0.5 13C0.5 13.663 0.763392 14.2989 1.23223 14.7678C1.70107 15.2366 2.33696 15.5 3 15.5H13C13.663 15.5 14.2989 15.2366 14.7678 14.7678C15.2366 14.2989 15.5 13.663 15.5 13C15.5 11.8949 15.061 10.8351 14.2796 10.0537C13.4982 9.27232 12.4384 8.83333 11.3333 8.83333H4.66667Z"
                            fill="white"
                          />
                        </svg>

                        <span className="text-white">4.2k</span>
                      </div>
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          d="M45.7592 22.4321L36.9701 30.0161L39.6478 41.3579C39.7956 41.9736 39.7575 42.6192 39.5385 43.2133C39.3195 43.8074 38.9293 44.3232 38.4172 44.6957C37.9052 45.0681 37.2942 45.2804 36.6616 45.3058C36.0289 45.3312 35.4029 45.1686 34.8627 44.8384L24.9994 38.768L15.1303 44.8384C14.5901 45.1667 13.9648 45.3278 13.3333 45.3015C12.7017 45.2751 12.092 45.0625 11.581 44.6904C11.0701 44.3183 10.6806 43.8033 10.4617 43.2103C10.2428 42.6173 10.2043 41.9728 10.351 41.3579L13.0385 30.0161L4.24939 22.4321C3.77146 22.019 3.42581 21.4743 3.25561 20.866C3.08541 20.2576 3.0982 19.6126 3.29239 19.0115C3.48658 18.4104 3.85356 17.8798 4.34749 17.4861C4.84143 17.0923 5.44044 16.8527 6.0697 16.7973L17.5931 15.8676L22.0385 5.10984C22.2791 4.52354 22.6886 4.02204 23.215 3.66909C23.7413 3.31614 24.3608 3.12769 24.9945 3.12769C25.6283 3.12769 26.2477 3.31614 26.7741 3.66909C27.3004 4.02204 27.7099 4.52354 27.9506 5.10984L32.3939 15.8676L43.9174 16.7973C44.5479 16.8507 45.1486 17.0889 45.6444 17.4821C46.1401 17.8754 46.5088 18.4062 46.7042 19.008C46.8996 19.6098 46.913 20.2559 46.7428 20.8654C46.5726 21.4748 46.2264 22.0205 45.7474 22.4341L45.7592 22.4321Z"
                          fill="#D79442"
                        />
                      </svg>
                      <span>4.8</span>
                    </div>
                  </div> */}
            <div className="flex justify-between items-center">
              <p className="text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end bg[#233871] prce shadowmd p- px-2 py-2 text-hite rounded-md">
                <p className="text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end">
                  <span className="text-[13px] line-through">5999</span>
                  <span className="text-[20px]">₹</span>
                  <span className="text-[20px] font-bold">4,980</span>
                  <span className="text-sm">/+GST</span>
                </p>
              </p>
              <div className="flex justify-center py-3 wfull">
                <button class="group relative z-0 bg-[#233871] group-hover:bg-gradient-to-r group-hover:from-[#2338718a] group-hover:to-[#4e7cfb] bg rounded-full hover:shadow-xl  flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] ">
                  <p className="text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end">
                    <span className="text-md font-bold">Buy Now</span>
                  </p>
                  <span class="group-hover:rotate-45 ml-4 ">↗</span>
                </button>
              </div>
            </div>

            <hr className="text-[#ABE0F8] bg-[#ABE0F8] h-[2px]" />

            <div className="flex flex-col items-start py-1">
              <h3 className="text-3xl font-bold">Explore</h3>
            </div>
            <div className="h-[500px]">
              <div className="grid gap-4 py-6 card-content">
                <div className="space-y-2">
                  {/* <h4 className="font-semibold">Perfect for individuals</h4> */}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The perfect tool for NEET aspirants
                  </p>
                </div>
                <h4 className="font-semibold">Tools</h4>
                <ul className="flex flex-wrap gap-4 text-[14px] text-[#3e5ba9] service-ul">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Rank Predictor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>NEET Score Booster</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Cut-off & allotment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Fees & Seat Matrix</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>College Compare</span>
                  </li>
                </ul>
                <h4 className="font-semibold">Analysis</h4>
                <ul className="flex flex-wrap gap-4 text-[14px] text-[#3e5ba9] service-ul">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Merit List</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Seat Matrix</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Cut-off</span>
                  </li>
                </ul>
                <h4 className="font-semibold">Resources</h4>
                <ul className="flex flex-wrap gap-4 text-[14px] text-[#3e5ba9] service-ul">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Document Checklist</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Medical Guide Handbook</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Webinars & Workshops</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Counselling Videos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>News & Alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="flex items-center justify-between text-blue-600 gap-4">
              <span>View Details</span>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////// */}
        <div className="card group  w-[600px] max-md:w-full rounded-[10px] p12 border-[#233871] max-w-[450px] bg-white">
          <div className="upimgae  rounded-[10px]">
            {/* <img
                    src={img2}
                    alt=""
                    className=" rounded-t-[40px] rounded-r-[40px]"
                  /> */}
          </div>

          <div className="p-6">
            {/* <div className="flex flexcol items-start justify-between py-1">
                    <div className="lef bg-[#233871]">
                      <div className="flex items-center justify-center p-1 rounded-[10px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.66667 3.83333C4.66667 2.94928 5.01786 2.10143 5.64298 1.47631C6.2681 0.851189 7.11594 0.5 8 0.5C8.88406 0.5 9.7319 0.851189 10.357 1.47631C10.9821 2.10143 11.3333 2.94928 11.3333 3.83333C11.3333 4.71739 10.9821 5.56523 10.357 6.19036C9.7319 6.81548 8.88406 7.16667 8 7.16667C7.11594 7.16667 6.2681 6.81548 5.64298 6.19036C5.01786 5.56523 4.66667 4.71739 4.66667 3.83333ZM4.66667 8.83333C3.5616 8.83333 2.50179 9.27232 1.72039 10.0537C0.938987 10.8351 0.5 11.8949 0.5 13C0.5 13.663 0.763392 14.2989 1.23223 14.7678C1.70107 15.2366 2.33696 15.5 3 15.5H13C13.663 15.5 14.2989 15.2366 14.7678 14.7678C15.2366 14.2989 15.5 13.663 15.5 13C15.5 11.8949 15.061 10.8351 14.2796 10.0537C13.4982 9.27232 12.4384 8.83333 11.3333 8.83333H4.66667Z"
                            fill="white"
                          />
                        </svg>

                        <span className="text-white">1.7k</span>
                      </div>
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <path
                          d="M45.7592 22.4321L36.9701 30.0161L39.6478 41.3579C39.7956 41.9736 39.7575 42.6192 39.5385 43.2133C39.3195 43.8074 38.9293 44.3232 38.4172 44.6957C37.9052 45.0681 37.2942 45.2804 36.6616 45.3058C36.0289 45.3312 35.4029 45.1686 34.8627 44.8384L24.9994 38.768L15.1303 44.8384C14.5901 45.1667 13.9648 45.3278 13.3333 45.3015C12.7017 45.2751 12.092 45.0625 11.581 44.6904C11.0701 44.3183 10.6806 43.8033 10.4617 43.2103C10.2428 42.6173 10.2043 41.9728 10.351 41.3579L13.0385 30.0161L4.24939 22.4321C3.77146 22.019 3.42581 21.4743 3.25561 20.866C3.08541 20.2576 3.0982 19.6126 3.29239 19.0115C3.48658 18.4104 3.85356 17.8798 4.34749 17.4861C4.84143 17.0923 5.44044 16.8527 6.0697 16.7973L17.5931 15.8676L22.0385 5.10984C22.2791 4.52354 22.6886 4.02204 23.215 3.66909C23.7413 3.31614 24.3608 3.12769 24.9945 3.12769C25.6283 3.12769 26.2477 3.31614 26.7741 3.66909C27.3004 4.02204 27.7099 4.52354 27.9506 5.10984L32.3939 15.8676L43.9174 16.7973C44.5479 16.8507 45.1486 17.0889 45.6444 17.4821C46.1401 17.8754 46.5088 18.4062 46.7042 19.008C46.8996 19.6098 46.913 20.2559 46.7428 20.8654C46.5726 21.4748 46.2264 22.0205 45.7474 22.4341L45.7592 22.4321Z"
                          fill="#D79442"
                        />
                      </svg>
                      <span>4.3</span>
                    </div>
                  </div> */}

            <div className="flex justify-between items-center">
              <p className="text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end  px-6 py-2 text-hite rounded-full">
                <p className="text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end">
                  <span className="text-[13px] line-through">35999</span>

                  <span className="text[0.416667em]">₹</span>
                  <span className="text-md font-bold">24,980</span>
                  <span className="text-sm">/+GST</span>
                </p>
              </p>
              <div className="flex justify-center py-3 wfull">
                <button class="group relative z-0 bg-[#233871] group-hover:bg-gradient-to-r group-hover:from-[#2338718a] group-hover:to-[#4e7cfb] bg rounded-full hover:shadow-xl  flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] ">
                  <p className="text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end">
                    <span className="text-md font-bold">Buy Now</span>
                  </p>
                  <span class="group-hover:rotate-45 ml-4 ">↗</span>
                </button>
              </div>
            </div>

            <hr className="text-[#ABE0F8] bg-[#ABE0F8] h-[2px]" />

            <div className="flex flex-col items-start py-1">
              <h3 className="text-3xl font-bold">Explore Plus</h3>
            </div>

            <div className="h-[500px]">
              <div className="grid gap-4 py-6 card-content">
                <div className="space-y-2">
                  {/* <h4 className="font-semibold">Perfect for individuals</h4> */}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Do justice to your NEET Score
                  </p>
                </div>
                <h4 className="font-semibold">Tools</h4>
                <ul className="flex flex-wrap gap-4 text-[14px] text-[#3e5ba9] service-ul">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>College Ranking</span>
                  </li>
                </ul>
                <h4 className="font-semibold">Pre-Exam Mentorship</h4>
                <ul className="flex flex-wrap gap-4 text-[14px] text-[#3e5ba9] service-ul">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>
                      {/* <span className="font-bold"> 75-Day </span> */}
                      Academic Mentor
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Success Coach</span>
                  </li>
                </ul>
                <h4 className="font-semibold">Post-Exam Mentorship</h4>
                <ul className="flex flex-wrap gap-4 text-[14px] text-[#3e5ba9] service-ul">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Junior Mentor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />

                    <span>Senior Mentor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />

                    <span>Senior Mentor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />

                    <span>Shortlist Your Counselling & Colleges</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />

                    <span>Documentation & Verification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                    <span>Application Filling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />

                    <span>Choice Filling</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="flex items-center justify-between text-blue-600 gap-4">
              <span>View Details</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ug;
function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
