import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import resetImage from "../assets/images/closedEmail.png"; // Import your image file

function PassReset() {
  const { loading } = useSelector((state) => state.auth);

  const handleOpenEmailApp = () => {
    window.location.href = "mailto:ayotilewaf@gmail.com"; // Replace with the email address you want to open
  };

  return (
    <>
      <div className="flex flex-col items-center my-16">
        {/* Image */}
        <img
          src={resetImage}
          alt="Reset Image"
          className="w-full md:w-[15rem] h-auto"
        />
        {/* Image */}

        <h1 className="text-black text-3xl font-black w-[27rem] text-center my-4 mod:mt-5">
          We have sent you an email
        </h1>

        <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
          Click on the email verification link sent to you on
          ayotilewaf@gmail.com.
        </p>
        <p className="text-center w-[22rem] mx-auto text-black font-normal mb-12">
          Didn't Receive the email yet?{" "}
          <span className=" font-medium">Send Again</span>
        </p>

        {/* Button */}
        <div className="mx-auto text-center">
          <button
            onClick={handleOpenEmailApp}
            className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
          >
            {loading ? "Opening..." : "Open Email App"}
          </button>
        </div>

        {/* Link */}
        <p className="mt-5 text-sm text-gray-400 text-center">
          Having issues or questions?
          <Link
            to="/register"
            className="text-purple font-bold hover:underline ml-2"
          >
            Contact Support
          </Link>
        </p>
      </div>
    </>
  );
}

export default PassReset;
