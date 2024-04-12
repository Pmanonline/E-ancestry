import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authActions";
import { Link, useNavigate } from "react-router-dom";
import Error from "../components/tools/Error";
import Spinner from "../components/tools/Spinner";
import loginImage from "../assets/images/auth.png";
import { PiHandWavingFill } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // Redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate("/MyDashBoard");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <>
      <header className="border text-white flex justify-between items-center px-4 py-4">
        <h1 className="text-3xl font-bold text-purple ml-20">Rekoda</h1>
        <Link to={"/Register"}>
          <button className="bg-purple hover:bg-blue-600 text-white  py-2 px-4 rounded-md">
            Create an account
          </button>
        </Link>
      </header>
      <div className="flex flex-col md:flex-row h-screen m-[1px]">
        {/* Image Section */}
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
              <div className="flex justify-center mb-4">
                <h1 className="text-black text-3xl font-black mod:mt-5">
                  Welcome Back
                </h1>
                <PiHandWavingFill className=" text-amber-500 w-10 h-10 mod:h-7 mod:w-7 mx-3 mod:mt-5" />
              </div>

              <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
                Gain access to your account by filling in your details in the
                form
              </p>
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
            {/* <div className="mt-8 w-[22rem] mx-auto">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold"
              >
                Password
              </label>
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
            </div> */}
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
            {/* Forgot Password Link */}
            <div className="text-center ml-[12rem] mb-6">
              <Link
                to="/forgotpassword"
                className="text-sm text-purple hover:underline"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className=" mx-auto text-center">
              <button
                type="submit"
                onClick={handleSubmit(submitForm)}
                className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
              >
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>

            {/* error message */}
            {error && <Error>{error}</Error>}

            {/* Link to Register */}
            <p className="mt-5 text-sm  text-gray-400 text-center">
              Having issues or questions?
              <Link
                to="/register"
                className=" text-purple font-bold hover:underline ml-2"
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

export default LoginScreen;
