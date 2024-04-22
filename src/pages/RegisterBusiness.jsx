import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import loginImage from "../assets/images/auth2.png";

import Error from "../components/tools/Error";
import Spinner from "../components/tools/Spinner";
import { registerBusiness } from "../features/auth/authActions";

const RegisterBusiness = () => {
  const { loading, error, success, userInfo } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [selectedState, setSelectedState] = useState("");
  const [isStateOpen, setIsStateOpen] = useState(false);

  //  Redirect authenticated user to profile screen
  useEffect(() => {
    if (success) {
      navigate("/");
    }
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, success, userInfo]);

  const submitForm = (data) => {
    dispatch(registerBusiness(data));
  };

  const handleBusinessClick = (business) => {
    setSelectedBusiness(business);
    setIsOpen(false);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
    setIsStateOpen(false);
  };

  const businesses = ["Business 1", "Business 2", "Business 3"];
  const states = ["State 1", "State 2", "State 3"];

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
        <div className="hidden md:block md:w-[44%] bg-gray-200 shadow-lg ">
          <img
            className="object-cover w-full h-full"
            src={loginImage}
            alt="Login Image"
          />
        </div>
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
                easily with ReKoda.
              </p>
            </div>

            <div className="my-8 w-[22rem] mx-auto">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold"
              >
                Business Name
              </label>
              <div className="relative">
                <input
                  placeholder="Enter Your Business Name"
                  id="businessName"
                  name="businessName"
                  type="text"
                  {...register("businessName", {
                    required: "Business Name is required",
                  })}
                  autoComplete="current-businessName"
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
              </div>
              {errors.businessName && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.businessName.message}
                </p>
              )}
            </div>

            <div className="my-8 w-[22rem] mx-auto relative">
              <label
                htmlFor="businessState"
                className="block mb-2 text-sm font-semibold"
              >
                Business State
              </label>
              <div className="relative">
                <input
                  id="businessState"
                  name="businessState"
                  type="text"
                  placeholder="Select State"
                  autoComplete="current-businessState"
                  {...register("businessState", {
                    required: "businessState is required",
                  })}
                  value={selectedState}
                  readOnly
                  onClick={() => setIsStateOpen(!isStateOpen)}
                  className={`w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple ${
                    errors.businessState ? "border-red-500" : ""
                  }`}
                />
                {errors.businessState && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.businessState.message}
                  </p>
                )}
                <span
                  className="absolute right-3 top-[14px] cursor-pointer"
                  onClick={() => setIsStateOpen(!isStateOpen)}
                >
                  <IoMdArrowDropdown />
                </span>
                {isStateOpen && (
                  <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-20">
                    {states.map((state) => (
                      <div
                        key={state}
                        className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleStateClick(state)}
                      >
                        {state}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="my-8 w-[22rem] mx-auto">
              <label
                htmlFor="businessCity"
                className="block mb-2 text-sm font-semibold"
              >
                Business City
              </label>
              <div className="relative">
                <input
                  id="businessCity"
                  name="businessCity"
                  type="text"
                  placeholder="Select City"
                  autoComplete="current-businessCity"
                  {...register("businessCity", {
                    required: "Business City is required",
                  })}
                  value={selectedBusiness}
                  readOnly
                  onClick={() => setIsOpen(!isOpen)}
                  className={`w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple ${
                    errors.businessCity ? "border-red-500" : ""
                  }`}
                />
                {errors.businessCity && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.businessCity.message}
                  </p>
                )}
                <span
                  className="absolute right-3 top-[14px] cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <IoMdArrowDropdown />
                </span>
                {isOpen && (
                  <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-20">
                    {businesses.map((business) => (
                      <div
                        key={business}
                        className=" px-3 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleBusinessClick(business)}
                      >
                        {business}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="my-8 w-[22rem] mx-auto">
              <label
                htmlFor="businessTag"
                className="block mb-2 text-sm font-semibold"
              >
                Business Tag
              </label>
              <div className="relative">
                <input
                  placeholder="@"
                  id="businessTag"
                  name="businessTag"
                  type="text"
                  {...register("businessTag", {
                    required: "Business tag is required",
                  })}
                  autoComplete="current-businessTag"
                  className={`w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple ${
                    errors.businessTag ? "border-red-500" : ""
                  }`}
                />
                {errors.businessTag && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.businessTag.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mx-auto text-center">
              <button
                type="submit"
                onClick={handleSubmit(submitForm)}
                className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
              >
                {loading ? <Spinner /> : "Continue"}
              </button>
            </div>

            <div className="flex justify-center">
              {error && <Error>{error}</Error>}
            </div>

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
