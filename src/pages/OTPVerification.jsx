import React, { useState } from "react";
import axios from "axios";
import img from "./assets/Image.png";
function OTPVerification() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [isSuccess, setIsSuccess] = useState(null);

  const sendOtp = async () => {
    try {
      await axios.post("/send-otp", { phoneNumber });
      setShowModal(true);
      setIsSuccess(null);
      setError("");
      startTimer();
    } catch (err) {
      setError("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const code = otp.join("");
      const response = await axios.post("/verify-otp", { phoneNumber, code });
      if (response.data.message === "OTP verified successfully") {
        setIsSuccess(true);
        setShowModal(false);
      } else {
        setIsSuccess(false);
      }
    } catch (err) {
      setIsSuccess(false);
    }
  };

  const handleChange = (value, index) => {
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const startTimer = () => {
    let countdown = 30;
    const interval = setInterval(() => {
      setTimer(countdown);
      countdown -= 1;
      if (countdown < 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter Mobile Number"
        className="mb-4 p-2 border rounded-lg"
      />
      <button onClick={sendOtp} className="px-4 py-2 bg-yellow-400 rounded-lg">
        Send OTP
      </button> */}
      <div className="flex h-screen items-center w-full justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            WELCOME BACK! <span className="text-blue-600">LOGIN</span>
          </h2>
          <p className="text-gray-500 mb-6">
            You’re Data Safe With Us,{" "}
            <span className="text-yellow-500 cursor-pointer">Sign Up</span>
          </p>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="mobile"
            >
              Enter Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="7024393158"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-yellow-500"
            />
          </div>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
            Send OTP Code
          </button>
        </div>

        <div className="ml-8 hidden md:block">
          <img
            src={img} // Replace with the path to your image
            alt="Illustration"
            className="w-80 h-auto object-cover"
          />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold">OTP Verification</h2>
            <p className="text-sm">
              Please enter the code sent to {phoneNumber.slice(0, 4)}xxxxxxx.{" "}
              <span className="text-blue-500 cursor-pointer">Change</span>
            </p>

            <div className="flex justify-center space-x-2 my-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  className={`w-10 h-12 text-center border ${
                    isSuccess === false ? "border-red-500" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
            {isSuccess === false && (
              <p className="text-red-500 text-sm">Please enter valid code!</p>
            )}

            <div className="text-sm text-gray-500">
              Not received your code?{" "}
              <span className="font-semibold">{timer}s</span>
            </div>
            <button className="text-sm text-blue-500 mt-2" onClick={sendOtp}>
              Resend Code
            </button>

            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={verifyOtp}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Confirm OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OTPVerification;
