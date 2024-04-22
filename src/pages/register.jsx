import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/images/auth3.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import Error from "../components/tools/Error";
import Spinner from "../components/tools/Spinner";
import { registerUser } from "../features/auth/authActions";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { loading, userInfo, error, RGSsuccess } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  //  Redirect authenticated user to profile screen
  useEffect(() => {
    if (RGSsuccess) {
      navigate("/login");
    }
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, RGSsuccess, userInfo]);

  // const submitForm = (data) => {
  //   data.email = data.email.toLowerCase();
  //   dispatch(registerUser(data));
  //   navigate("/login");
  // };
  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data))
      .then((response) => {
        // Check if the registration request was successful
        if (response.payload.status === 200) {
          // Perform additional actions here
          // For example, you can navigate the user to the login page
          navigate("/login");
        } else {
          // Handle other cases if needed
        }
      })
      .catch((error) => {
        // Handle errors if the registration request fails
        console.error("Registration error:", error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <div className="hidden md:block md:w-[44%] bg-gray-200 shadow-lg ">
          <img
            className="object-cover w-full h-full mid:hidden"
            src={loginImage}
            alt="Login Image"
          />
        </div>

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
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 border rounded-md pl-8 focus:outline-none focus:border-purple"
                />
                <span
                  className="absolute right-3 top-[14px] cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <MdOutlineRemoveRedEye />
                </span>
              </div>
            </div>

            <div className=" mx-auto text-center">
              <button
                type="submit"
                onClick={handleSubmit(submitForm)}
                className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
              >
                {loading ? <Spinner /> : "Continue"}
              </button>
            </div>

            <div className=" flex justify-center">
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

export default Register;
