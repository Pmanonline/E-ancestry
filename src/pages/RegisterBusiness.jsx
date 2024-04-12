import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/auth2.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";

import Error from "../components/tools/Error";
import Spinner from "../components/tools/Spinner";
import { registerUser } from "../features/auth/authActions";

const RegisterBusiness = () => {
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
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="hidden md:block md:w-[44%] bg-gray-200 shadow-lg ">
          <img
            className="object-cover w-full h-full"
            src={loginImage}
            alt="Login Image"
          />
        </div>

        {/* Login Form Section */}

        <div className="md:w-[56%] flex sm:p-8 shadow-lg">
          <form onSubmit={handleSubmit(submitForm)} className="w-full">
            <div className="flex flex-col items-center">
              <div className="flex justify-center mb-4 text-center">
                <h1 className="text-black text-3xl font-black mod:mt-5">
                  Lets Know About Your <br></br>
                  <div className="flex justify-center gap-2">
                    Business <IoBagHandle className=" text-amber-500" />
                  </div>
                </h1>
              </div>

              <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
                Please fill in your business information to start transacting
                easily with ReKoda
              </p>
            </div>

            {/* BusinessName */}
            <div className="my-8 w-[22rem] mx-auto">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold"
              >
                Bussiness Name
              </label>
              <div className="relative">
                <input
                  placeholder="Enter Your Bussiness Name"
                  id="bussinessName"
                  name="bussinessName"
                  type="text"
                  {...register("bussinessName")}
                  autoComplete="current-bussinessName"
                  required
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
              </div>
            </div>
            {/* BusinessName */}

            {/* BusinesState */}
            <div className="my-8 w-[22rem] mx-auto">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-semibold"
              >
                Bussiness State
              </label>
              <div className="relative">
                <input
                  placeholder="Select State"
                  id="bussinessState"
                  name="bussinessState"
                  type="text"
                  {...register("bussinessState")}
                  autoComplete="current-bussinessState"
                  required
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
                <span className="absolute right-3 top-[14px]">
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
            {/* BusinesState */}

            {/* BusinesCity*/}
            <div className="my-8 w-[22rem] mx-auto">
              <label className="block mb-2 text-sm font-semibold">
                Bussiness State
              </label>
              <div className="relative">
                <input
                  placeholder="Select City"
                  id="BussinessCity"
                  name="BussinessCity"
                  type="text"
                  {...register("BussinessCity")}
                  autoComplete="current-BussinessCity"
                  required
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
                <span className="absolute right-3 top-[14px]">
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
            {/* BusinessCity */}

            {/* BusinesSTag */}
            <div className="my-8 w-[22rem] mx-auto">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-semibold"
              >
                Bussiness Tag
              </label>
              <div className="relative">
                <input
                  placeholder="@"
                  id="BussinessTag"
                  name="BussinessTag"
                  type="text"
                  {...register("BussinessTag")}
                  autoComplete="current-BussinessTag"
                  required
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
                <span className="absolute right-3 top-[14px]">
                  <IoMdArrowDropdown />
                </span>
              </div>
            </div>
            {/* BusinesTag */}

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

export default RegisterBusiness;
