// import React, { useState, useEffect } from "react";
// import { generateOTP } from "../features/auth/authActions";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Error from "../components/tools/Error";
// import Spinner from "../components/tools/Spinner";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, FPsuccess } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Dispatch action to generate OTP and send to email
//       await dispatch(generateOTP(email));
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     if (FPsuccess) {
//       // Navigate to the Verify OTP page only if OTP generation was successful
//       navigate("/VerifyOtpPage");
//     }
//   }, [navigate, FPsuccess]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Forgot Password
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Reset Password
//             </button>
//           </div>
//         </form>
//         <div className="mt-2 text-center">
//           <div className="flex justify-center">
//             {error && <Error>{error}</Error>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

// import React, { useEffect, useState } from "react";
// import { generateOTP, setEmail } from "../features/auth/authActions";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Error from "../components/tools/Error";
// import Spinner from "../components/tools/Spinner";

// const ForgotPassword = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, FPsuccess } = useSelector((state) => state.auth);
//   const email = useSelector((state) => state.auth.email); // Access email from Redux store

//   const handleChange = (e) => {
//     dispatch(setEmail(e.target.value)); // Dispatch setEmail action to update email in Redux store
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Dispatch action to generate OTP and send to email
//       await dispatch(generateOTP(email)); // Pass email as payload
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     if (FPsuccess) {
//       // Navigate to the Verify OTP page only if OTP generation was successful
//       navigate("/VerifyOtpPage");
//     }
//   }, [navigate, FPsuccess]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Forgot Password
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={email} // Bind email from Redux store to input value
//                 onChange={handleChange}
//                 // onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Reset Password
//             </button>
//           </div>
//         </form>
//         <div className="mt-2 text-center">
//           <div className="flex justify-center">
//             {error && <Error>{error}</Error>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useEffect, useState } from "react";
import { generateOTP } from "../features/auth/authActions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/tools/Error";
import Spinner from "../components/tools/Spinner";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, FPsuccess } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");

  // Load email from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
      console.log("Stored Email:", storedEmail); // Log the stored email to the console
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch action to generate OTP and send to email
      await dispatch(generateOTP(email));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Redirect to VerifyOtpPage if FPsuccess is true
  useEffect(() => {
    if (FPsuccess) {
      navigate("/VerifyOtpPage");
    }
  }, [navigate, FPsuccess]);

  // Update email state and localStorage on input change
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    localStorage.setItem("email", value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Forgot Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
        </form>
        <div className="mt-2 text-center">
          <div className="flex justify-center">
            {error && <Error>{error}</Error>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
