import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/auth/authActions";
import { resetSuccess } from "../features/auth/authSlice";
import Error from "../components/tools/Error";
import Spinner from "../components/tools/Spinner";
import familytree from "../assets/images/familytree.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import GoogleSignInButton from "../components/tools/GoogleSignIn";
import { DirectionButton2 } from "../components/d-button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, success } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  console.log("User:", user);
  console.log("User id:", user?.id);
  console.log("User Email:", user?.email);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitForm = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    dispatch(resetSuccess());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      console.log("Logged in");
      navigate("/");
      dispatch(resetSuccess());
    }
    if (error) {
      console.error("Login error:", error);
    }
  }, [navigate, success, error, dispatch]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen m-[1px]">
      {/* Image Section */}
      <div className="hidden md:block md:w-[50%] bg-gray-200 shadow-lg">
        <img
          className="object-cover w-full h-full"
          src={familytree}
          alt="Login Image"
        />
      </div>

      {/* Login Form Section */}
      <div className="md:w-[50%] flex sm:p-8">
        <form onSubmit={handleSubmit(submitForm)} className="w-full">
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-8">Sign in</h3>
          </div>
          <div className="my-8 w-[22rem] mx-auto">
            <label htmlFor="email" className="block mb-2 text-sm font-semibold">
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
              className="p-2 mt-1 block w-full border-b-2 border-gray-500 focus:ring-green focus:border-green bg-opacity-90 text-black placeholder-black sm:text-md focus:outline-none bg-transparent"
            />
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
                className="p-2 mt-1 block w-full border-b-2 border-gray-500 focus:ring-green focus:border-green bg-opacity-90 text-black placeholder-black sm:text-md focus:outline-none bg-transparent"
              />
              <span
                className="absolute right-3 top-[14px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <MdOutlineRemoveRedEye />
              </span>
            </div>
          </div>

          <div className="text-center ml-[12rem] mb-6">
            <Link
              to="/forgotpassword"
              className="text-sm text-black hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="mx-auto text-center">
            <button
              type="submit"
              className="border flex justify-center mx-auto bg-green text-white py-2 px-[8rem] rounded-2xl hover:scale-105 focus:outline-none focus:bg-green"
              disabled={loading}
            >
              {loading ? <Spinner /> : <>Login</>}
            </button>
          </div>

          <div className="flex justify-center">
            {error && <Error>{error}</Error>}
          </div>

          <p className="mt-5 text-sm text-gray-400 text-center">
            Don't have an account?
            <Link
              to="/register"
              className="text-black font-bold hover:underline ml-2"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, registerUser } from "../features/auth/authActions";
// import { logoutUser } from "../features/auth/authSlice";

// const Login = () => {
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.auth.token);
//   const user = useSelector((state) => state.auth.user);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);

//   console.log("Token:", token);
// console.log("User:", user);
// console.log("User id:", user?._id);
// console.log("User Email:", user?.email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(
//       `Form submitted. Registering: ${isRegistering}. Email: ${email}`
//     );

//     if (isRegistering) {
//       dispatch(registerUser({ email, password }));
//       console.log("Dispatching registerUser with:", { email, password });
//     } else {
//       dispatch(loginUser({ email, password }));
//       console.log("Dispatching loginUser with:", { email, password });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-6">
//       <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-900">My App</h1>
//         <div>
//           <button
//             onClick={() => {
//               setIsRegistering(!isRegistering);
//               console.log(
//                 `Switched to ${isRegistering ? "Login" : "Register"}`
//               );
//             }}
//             className="bg-blue-500 text-black px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
//           >
//             {isRegistering ? "Go to Login" : "Go to Register"}
//           </button>
//           {token && (
//             <button
//               onClick={() => {
//                 dispatch(logoutUser());
//                 console.log("Logout button clicked.");
//               }}
//               className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 ml-4"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </nav>
//       <main className="flex flex-col items-center justify-center w-full max-w-md mt-10 p-6 bg-white shadow-lg rounded-md">
//         <h2 className="text-2xl font-bold mb-4">
//           {isRegistering ? "Register" : "Login"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4 w-full">
//           <div>
//             <label className="block text-gray-700">Email:</label>
//             <input
//               autoComplete="email"
//               type="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 console.log("Email updated:", e.target.value);
//               }}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 console.log("Password updated:", e.target.value);
//               }}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-black py-2 rounded-md shadow-md hover:bg-blue-600"
//           >
//             {isRegistering ? "Register" : "Login"}
//           </button>
//         </form>
//         {token && user && (
//           <div className="mt-6">
//             <h3 className="text-xl font-semibold">
//               Welcome, {user.name || "User"}!
//             </h3>
//             <p className="text-gray-700">
//               Your email: {user.email || "No email provided"}
//               Your id``: {user.id || "No email provided"}
//             </p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Login;
