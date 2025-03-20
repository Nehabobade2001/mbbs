import React from "react";

const EnrollSection = () => {
  return (
    <div className="bg-[#23387184] p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          On your marks, get set, <span className="text-[#f39c12]">Enrol!</span>
        </h2>
        <p className="text-gray-700 mb-8">
          Once you have enrolled, the excitement begins! We focus on helping you
          win the race and are beside you right up to the finish line.
        </p>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 max-w-[600px]">
            <img
              src="path/to/image.jpg"
              alt="Team"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-[600px]">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start flex-col">
              <div className="text-[#f39c12] text-2xl mr-4">
                {/* <i className="fas fa-tools"></i> */}
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.6563 1.08972C5.19766 0.541743 6.98488 0.884605 8.2186 2.11832C9.61975 3.51946 9.87187 5.6345 8.9749 7.29255L22.3607 20.6799L20.593 22.4476L7.20678 9.06118C5.54858 9.95887 3.43287 9.70699 2.03141 8.30551C0.797345 7.07144 0.454633 5.28356 1.00327 3.74189L3.79918 6.53774C4.53141 7.26997 5.7186 7.26997 6.45083 6.53774C7.18306 5.80551 7.18306 4.61832 6.45083 3.88609L3.6563 1.08972ZM16.6155 3.44414L20.593 1.23444L22.3607 3.00221L20.151 6.97968L17.9414 7.42162L15.2896 10.0732L13.5219 8.30551L16.1735 5.65386L16.6155 3.44414ZM8.2186 13.6087L9.98637 15.3766L3.35723 22.0057C2.86908 22.4939 2.07762 22.4939 1.58947 22.0057C1.13618 21.5524 1.10381 20.8376 1.49233 20.347L1.58947 20.238L8.2186 13.6087Z"
                    fill="#233871"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">
                  Say Hello to the MM Team
                </h3>
                <p className="text-gray-600">
                  Our team will guide you on the next steps
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start flex-col">
              <div className="text-[#f39c12] text-2xl mr-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.9226 10H26.25C27.6307 10 28.75 11.1193 28.75 12.5V17.5C28.75 18.8807 27.6307 20 26.25 20H24.9226C24.3075 24.9329 20.0995 28.75 15 28.75V26.25C19.1421 26.25 22.5 22.8921 22.5 18.75V11.25C22.5 7.10786 19.1421 3.75 15 3.75C10.8579 3.75 7.5 7.10786 7.5 11.25V20H3.75C2.36929 20 1.25 18.8807 1.25 17.5V12.5C1.25 11.1193 2.36929 10 3.75 10H5.07736C5.69249 5.06711 9.90047 1.25 15 1.25C20.0995 1.25 24.3075 5.06711 24.9226 10ZM3.75 12.5V17.5H5V12.5H3.75ZM25 12.5V17.5H26.25V12.5H25ZM9.6993 19.7311L11.0245 17.6109C12.177 18.3327 13.5397 18.75 15 18.75C16.4602 18.75 17.823 18.3327 18.9755 17.6109L20.3007 19.7311C18.764 20.6936 16.947 21.25 15 21.25C13.053 21.25 11.236 20.6936 9.6993 19.7311Z"
                    fill="#233871"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">
                  Get a dedicated Mentor, instantly!
                </h3>
                <p className="text-gray-600">
                  Receive personalized support from your Mentor
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start flex-col">
              <div className="text-[#f39c12] text-2xl mr-4">
                {/* <i className="fas fa-user"></i> */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 27.5H22.5V25C22.5 22.9289 20.8211 21.25 18.75 21.25H11.25C9.17894 21.25 7.5 22.9289 7.5 25V27.5H5V25C5 21.5483 7.79822 18.75 11.25 18.75H18.75C22.2017 18.75 25 21.5483 25 25V27.5ZM15 16.25C10.8579 16.25 7.5 12.8921 7.5 8.75C7.5 4.60786 10.8579 1.25 15 1.25C19.1421 1.25 22.5 4.60786 22.5 8.75C22.5 12.8921 19.1421 16.25 15 16.25ZM15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98857 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98857 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z"
                    fill="#233871"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">
                  Unlock Resources & Tools
                </h3>
                <p className="text-gray-600">
                  Get access to success-critical resources
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start flex-col">
              <div className="text-[#f39c12] text-2xl mr-4">
                {/* <i className="fas fa-phone"></i> */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7069 13.3526C12.8775 15.411 14.589 17.1225 16.6474 18.293L17.753 16.7451C18.1206 16.2306 18.8145 16.0716 19.3695 16.3748C21.128 17.3354 23.0714 17.9191 25.0986 18.0796C25.7487 18.1311 26.25 18.6736 26.25 19.3258V24.9043C26.25 25.5451 25.7652 26.0821 25.1278 26.1476C24.4654 26.2157 23.7971 26.25 23.125 26.25C12.4245 26.25 3.75 17.5755 3.75 6.875C3.75 6.20284 3.78428 5.53464 3.85236 4.8722C3.91788 4.23469 4.45493 3.75 5.09581 3.75H10.6743C11.3264 3.75 11.8689 4.2513 11.9204 4.90136C12.0808 6.9286 12.6646 8.87205 13.6252 10.6306C13.9284 11.1855 13.7694 11.8794 13.2549 12.247L11.7069 13.3526ZM8.55531 12.5315L10.9302 10.8351C10.2568 9.38142 9.79535 7.83979 9.55909 6.25H6.26134C6.25379 6.4579 6.25 6.66625 6.25 6.875C6.25 16.1947 13.8053 23.75 23.125 23.75C23.3337 23.75 23.5421 23.7463 23.75 23.7386V20.4409C22.1602 20.2046 20.6186 19.7431 19.1649 19.0697L17.4685 21.4447C16.7823 21.1781 16.1195 20.8644 15.4842 20.5076L15.4116 20.4662C12.9621 19.0734 10.9267 17.0379 9.53375 14.5884L9.49242 14.5158C9.13561 13.8805 8.82193 13.2177 8.55531 12.5315Z"
                    fill="#233871"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">
                  Start your Mentoring Sessions
                </h3>
                <p className="text-gray-600">
                  Unleash your potential with the proper guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollSection;
