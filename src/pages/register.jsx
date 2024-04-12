import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/auth3.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import Error from "../components/tools/Error";
import Spinner from "../components/tools/Spinner";
import { registerUser } from "../features/auth/authActions";

const Register = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (userInfo) {
      navigate("/profile");
    }
    // redirect user to login page if registration was successful
    if (success) {
      console.log("Registration successful!"); // Add this line to log to the console
      navigate("/login");
    }
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <>
      <header className="border text-white flex justify-between items-center px-4 py-4">
        <h1 className="text-3xl font-bold text-purple ml-20">Rekoda</h1>
        <Link to={"/login"}>
          <button className="bg-purple hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Already have an Account? <span className="font-bold">Login</span>
          </button>
        </Link>
      </header>
      <div className="flex flex-col md:flex-row  m-[1px]">
        {/* Image Section */}
        {/* <div className="md:flex-1 bg-gray-200 shadow-lg "> */}
        <div className="hidden md:block md:w-[44%] bg-gray-200 shadow-lg ">
          <img
            className="object-cover w-full h-full mid:hidden"
            src={loginImage}
            alt="Login Image"
          />
        </div>

        {/* Login Form Section */}

        <div className="md:w-[56%] flex sm:p-8  shadow-lg">
          <form onSubmit={handleSubmit(submitForm)} className="w-full ">
            <div className="flex flex-col items-center">
              <h1 className="text-black text-3xl font-black w-[27rem] text-center my-4 mod:mt-5">
                Easy Keep Track Of Your Businesss Activitiesk
              </h1>

              <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
                Please fill in your business information to start transacting
                easily with ReKoda
              </p>
            </div>
            {/* Names*/}
            <div className="sm:flex gap-4 justify-between w-[22rem] mx-auto">
              <div className=" sm:w-[12rem] mod:mb-8">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  FirstName
                </label>

                <input
                  placeholder="FirstName"
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="firstName"
                  {...register("firstName")}
                  required
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
              </div>
              <div className=" sm:w-[12rem] ">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  LastName
                </label>

                <input
                  placeholder="LastName"
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  {...register("lastName")}
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
              </div>
            </div>
            {/* Names*/}

            {/* Email */}

            <div className="my-8 w-[22rem] mx-auto">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold"
              >
                Email
              </label>
              <input
                placeholder="*****"
                id="email"
                name="email"
                type="email"
                {...register("email")}
                autoComplete="current-email"
                required
                className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
              />
            </div>
            {/* Email */}

            {/* phoneNumber */}
            <div className="mt-8 w-[22rem] mx-auto">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  placeholder="+2348123456789"
                  id="phoneNumber"
                  name="password"
                  type="number"
                  {...register("phoneNumber")}
                  autoComplete="current-phoneNumber"
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
                <span className="absolute left-2 top-[14px]">
                  <svg
                    height="1em"
                    width="1em"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--twemoji"
                    preserveAspectRatio="xMidYMid meet"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#009A49"
                        d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"
                      ></path>
                      <path fill="#EEE" d="M12 5h12v26H12z"></path>
                      <path
                        fill="#009A49"
                        d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            {/* phoneNumber */}
            {/* password */}
            <div className="my-8 w-[22rem] mx-auto">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold"
              >
                Password
              </label>
              <div className="relative">
                <input
                  placeholder="*****"
                  id="password"
                  name="password"
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
                <span className="absolute right-3 top-[14px]">
                  <MdOutlineRemoveRedEye />
                </span>
              </div>
            </div>
            {/* password */}

            {/* Submit Button */}
            <div className=" mx-auto text-center">
              <button
                type="submit"
                onClick={handleSubmit(submitForm)}
                className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
              >
                {loading ? <Spinner /> : "Continue"}
              </button>
            </div>

            {/* error message */}
            {error && <Error>{error}</Error>}
            {/* Link to Register */}
            <p className="mt-5 text-sm text-gray-400 text-center">
              Having issues or questions?
              <Link
                to="/register"
                className="text-purple font-bold hover:underline ml-2"
              >
                Contact Support
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
