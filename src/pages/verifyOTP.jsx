// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
// import Spinner from "../components/tools/Spinner";
// import Error from "../components/tools/Error";
// import { Link } from "react-router-dom";
// import { MdOutlineMarkEmailUnread } from "react-icons/md";
// import { verifyOTP } from "../features/auth/authActions";

// const VerifyOTPPage = () => {
//   const [otp, setOTP] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // Get dispatch function from useDispatch
//   const { loading, error, OTPsuccess } = useSelector((state) => state.auth);

//   const handleOpenEmailApp = () => {
//     window.location.href = "mailto:ayotilewaf@gmail.com";
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();

//     try {
//       await dispatch(verifyOTP(otp)); // Use dispatch function
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     if (OTPsuccess) {
//       navigate("/ResetPassword");
//     }
//   }, [navigate, OTPsuccess]);

//   return (
//     <>
//       {/* MESSAGE */}
//       <h1 className="text-black text-3xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
//         We have sent you an email
//       </h1>
//       <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
//         Click on the email verification link sent to you on
//         ayotilewaf@gmail.com.
//       </p>
//       <p className="text-center w-[22rem] mx-auto text-black font-normal mb-12">
//         Didn't Receive the email yet?{" "}
//         <span className=" font-medium">Send Again</span>
//       </p>
//       {/* Button */}
//       <div className="mx-auto text-center flex items-center justify-center">
//         <button
//           onClick={handleOpenEmailApp}
//           className="border border-purple rounded-lg p-2 focus:bg-blue-600 mr-2"
//         >
//           {loading ? "Opening..." : "Open Email App"}
//         </button>
//         <button
//           onClick={handleOpenEmailApp}
//           className="hover:text-purple w-10 h-10 focus:outline-none"
//         >
//           <MdOutlineMarkEmailUnread className="w-6 h-6" />
//         </button>
//       </div>
//       {/* Button */}
//       {/* Link */}
//       <p className="mt-5 text-sm text-gray-400 text-center">
//         Having issues or questions?
//         <Link
//           to="/register"
//           className="text-purple font-bold hover:underline ml-2"
//         >
//           Contact Support
//         </Link>
//       </p>
//       {/* MESSAGE */}
//       <div className="container mx-auto">
//         <form onSubmit={handleVerifyOTP}>
//           <h1 className="text-black text-2xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
//             Verify OTP
//           </h1>
//           <div className="flex flex-col items-center">
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOTP(e.target.value)}
//               placeholder="Enter OTP"
//               className="border border-gray-400 rounded-md p-2 mb-4"
//             />
//             <div className="mx-auto text-center">
//               <button
//                 type="submit"
//                 className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
//               >
//                 {loading ? <Spinner /> : "Verify"}
//               </button>
//             </div>
//             {/* Display error message */}
//             <div className="flex justify-center">
//               {error && <p className="text-red-500 mb-4">{error}</p>}
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default VerifyOTPPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../components/tools/Spinner";
// import Error from "../components/tools/Error";
// import { Link } from "react-router-dom";
// import { MdOutlineMarkEmailUnread } from "react-icons/md";
// import {
//   verifyOTP,
//   generateOTP,
//   resendEmail,
// } from "../features/auth/authActions";

// const VerifyOTPPage = () => {
//   const [otp, setOTP] = useState("");
//   const [email, setEmail] = useState(""); // State for storing user's email
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading, error, OTPsuccess } = useSelector((state) => state.auth);

//   const handleOpenEmailApp = () => {
//     window.location.href = "mailto:ayotilewaf@gmail.com";
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();

//     try {
//       await dispatch(verifyOTP(otp));
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleResendOTP = async () => {
//     try {
//       // Dispatch the resendEmail action with the email state
//       await dispatch(resendEmail(email));
//     } catch (error) {
//       console.error("Error resending email:", error);
//     }
//   };

//   useEffect(() => {
//     if (OTPsuccess) {
//       navigate("/ResetPassword");
//     }
//   }, [navigate, OTPsuccess]);

//   return (
//     <>
//       <h1 className="text-black text-3xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
//         We have sent you an email
//       </h1>
//       <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
//         Click on the email verification link sent to you on
//         ayotilewaf@gmail.com.
//       </p>
//       <p className="text-center w-[22rem] mx-auto text-black font-normal mb-12">
//         Didn't Receive the email yet?{" "}
//         <button className=" font-medium" onClick={handleResendOTP}>
//           Send Again
//         </button>{" "}
//       </p>
//       <div className="mx-auto text-center flex items-center justify-center">
//         <button
//           onClick={handleOpenEmailApp}
//           className="border border-purple rounded-lg p-2 focus:bg-blue-600 mr-2"
//         >
//           {loading ? "Opening..." : "Open Email App"}
//         </button>
//         <button
//           onClick={handleOpenEmailApp}
//           className="hover:text-purple w-10 h-10 focus:outline-none"
//         >
//           <MdOutlineMarkEmailUnread className="w-6 h-6" />
//         </button>
//       </div>
//       <p className="mt-5 text-sm text-gray-400 text-center">
//         Having issues or questions?
//         <Link
//           to="/register"
//           className="text-purple font-bold hover:underline ml-2"
//         >
//           Contact Support
//         </Link>
//       </p>
//       <div className="container mx-auto">
//         <form onSubmit={handleVerifyOTP}>
//           <h1 className="text-black text-2xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
//             Verify OTP
//           </h1>
//           <div className="flex flex-col items-center">
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOTP(e.target.value)}
//               placeholder="Enter OTP"
//               className="border border-gray-400 rounded-md p-2 mb-4"
//             />
//             <div className="mx-auto text-center">
//               <button
//                 type="submit"
//                 className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
//               >
//                 {loading ? <Spinner /> : "Verify"}
//               </button>
//             </div>
//             <div className="flex justify-center">
//               {error && <p className="text-red-500 mb-4">{error}</p>}
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default VerifyOTPPage;

// const VerifyOTPPage = () => {
//   const [otp, setOTP] = useState("");
//   const [email, setEmail] = useState(""); // State for storing user's email
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading, error, OTPsuccess } = useSelector((state) => state.auth);

//   const handleOpenEmailApp = () => {
//     window.location.href = "mailto:ayotilewaf@gmail.com";
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();

//     try {
//       await dispatch(verifyOTP(otp));
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleResendOTP = async () => {
//     try {
//       // Dispatch the resendEmail action with the email state
//       await dispatch(resendEmail(email));
//     } catch (error) {
//       console.error("Error resending email:", error);
//     }
//   };

//   useEffect(() => {
//     if (OTPsuccess) {
//       navigate("/ResetPassword");
//     }
//   }, [navigate, OTPsuccess]);

//   // Function to update email state when user inputs their email address
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   return (
//     <>
//       <h1 className="text-black text-3xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
//         We have sent you an email
//       </h1>
//       <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
//         Click on the email verification link sent to you on
//         ayotilewaf@gmail.com.
//       </p>
//       <p className="text-center w-[22rem] mx-auto text-black font-normal mb-12">
//         Didn't Receive the email yet?{" "}
//         <button className=" font-medium" onClick={handleResendOTP}>
//           Send Again
//         </button>{" "}
//       </p>
//       <div className="mx-auto text-center flex items-center justify-center">
//         <button
//           onClick={handleOpenEmailApp}
//           className="border border-purple rounded-lg p-2 focus:bg-blue-600 mr-2"
//         >
//           {loading ? "Opening..." : "Open Email App"}
//         </button>
//         <button
//           onClick={handleOpenEmailApp}
//           className="hover:text-purple w-10 h-10 focus:outline-none"
//         >
//           <MdOutlineMarkEmailUnread className="w-6 h-6" />
//         </button>
//       </div>
//       <p className="mt-5 text-sm text-gray-400 text-center">
//         Having issues or questions?
//         <Link
//           to="/register"
//           className="text-purple font-bold hover:underline ml-2"
//         >
//           Contact Support
//         </Link>
//       </p>
//       <div className="container mx-auto">
//         <form onSubmit={handleVerifyOTP}>
//           <h1 className="text-black text-2xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
//             Verify OTP
//           </h1>
//           <div className="flex flex-col items-center">
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOTP(e.target.value)}
//               placeholder="Enter OTP"
//               className="border border-gray-400 rounded-md p-2 mb-4"
//             />

//             <div className="mx-auto text-center">
//               <button
//                 type="submit"
//                 className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
//               >
//                 {loading ? <Spinner /> : "Verify"}
//               </button>
//             </div>
//             <div className="flex justify-center">
//               {error && <p className="text-red-500 mb-4">{error}</p>}
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default VerifyOTPPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../components/tools/Spinner";
// import Error from "../components/tools/Error";
// import { Link } from "react-router-dom";
// import { MdOutlineMarkEmailUnread } from "react-icons/md";
// import {
//   verifyOTP,
//   generateOTP,
//   resendEmail,
// } from "../features/auth/authActions";

// const VerifyOTPPage = () => {
//   const [otp, setOTP] = useState("");
//   const [email, setEmail] = useState(""); /
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading, error, OTPsuccess } = useSelector((state) => state.auth);

//   const handleOpenEmailApp = () => {
//     window.location.href = `mailto:${email}`;
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();

//     try {
//       await dispatch(verifyOTP(otp));
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleResendOTP = async () => {
//     try {
//       await dispatch(resendEmail(email));
//     } catch (error) {
//       console.error("Error resending email:", error);
//     }
//   };

//   useEffect(() => {
//     if (OTPsuccess) {
//       navigate("/ResetPassword");
//     }
//   }, [navigate, OTPsuccess]);

//   return (
//     <>
//       <h1 className="text-black text-3xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
//         We have sent you an email
//       </h1>
//       <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
//         Click on the email verification link sent to you on {email}
//       </p>
//       <p className="text-center w-[22rem] mx-auto text-black font-normal mb-12">
//         Didn't Receive the email yet?
//         <button className=" font-medium" onClick={handleResendOTP}>
//           Send Again
//         </button>
//       </p>
//       <div className="mx-auto text-center flex items-center justify-center">
//         <button
//           onClick={handleOpenEmailApp}
//           className="border border-purple rounded-lg p-2 focus:bg-blue-600 mr-2"
//         >
//           {loading ? "Opening..." : "Open Email App"}
//         </button>
//         <button
//           onClick={handleOpenEmailApp}
//           className="hover:text-purple w-10 h-10 focus:outline-none"
//         >
//           <MdOutlineMarkEmailUnread className="w-6 h-6" />
//         </button>
//       </div>
//       <p className="mt-5 text-sm text-gray-400 text-center">
//         Having issues or questions?
//         <Link
//           to="/register"
//           className="text-purple font-bold hover:underline ml-2"
//         >
//           Contact Support
//         </Link>
//       </p>
//       <div className="container mx-auto">
//         <form onSubmit={handleVerifyOTP}>
//           <h1 className="text-black text-2xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
//             Verify OTP
//           </h1>
//           <div className="flex flex-col items-center">
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOTP(e.target.value)}
//               placeholder="Enter OTP"
//               className="border border-gray-400 rounded-md p-2 mb-4"
//             />

//             <div className="mx-auto text-center">
//               <button
//                 type="submit"
//                 className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
//               >
//                 {loading ? <Spinner /> : "Verify"}
//               </button>
//             </div>
//             <div className="flex justify-center">
//               {error && <p className="text-red-500 mb-4">{error}</p>}
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default VerifyOTPPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/tools/Spinner";
import Error from "../components/tools/Error";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import {
  verifyOTP,
  generateOTP,
  resendEmail,
} from "../features/auth/authActions";

const VerifyOTPPage = () => {
  const [otp, setOTP] = useState("");
  const [storedEmail, setStoredEmail] = useState(""); // Store the email generated on the forgot password page
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, OTPsuccess } = useSelector((state) => state.auth);

  const handleOpenEmailApp = () => {
    window.location.href = `mailto:${storedEmail}`; // Open email app with stored email
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    try {
      await dispatch(verifyOTP(otp));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleResendOTP = async () => {
    try {
      await dispatch(resendEmail(storedEmail)); // Resend OTP to stored email
    } catch (error) {
      console.error("Error resending email:", error);
    }
  };

  useEffect(() => {
    if (OTPsuccess) {
      navigate("/ResetPassword");
    }
  }, [navigate, OTPsuccess]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email"); // Load stored email from localStorage
    if (storedEmail) {
      setStoredEmail(storedEmail);
    }
  }, []);

  return (
    <>
      <h1 className="text-black text-3xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
        We have sent you an email
      </h1>
      <p className="text-center w-[22rem] mx-auto text-gray-500 mb-12">
        Click on the email verification link sent to you on {storedEmail}{" "}
        {/* Display stored email */}
      </p>
      <p className="text-center w-[22rem] mx-auto text-black font-normal mb-12">
        Didn't Receive the email yet?{" "}
        <button className=" font-medium" onClick={handleResendOTP}>
          Send Again
        </button>{" "}
      </p>
      <div className="mx-auto text-center flex items-center justify-center">
        <button
          onClick={handleOpenEmailApp}
          className="border border-purple rounded-lg p-2 focus:bg-blue-600 mr-2"
        >
          {loading ? "Opening..." : "Open Email App"}
        </button>
        <button
          onClick={handleOpenEmailApp}
          className="hover:text-purple w-10 h-10 focus:outline-none"
        >
          <MdOutlineMarkEmailUnread className="w-6 h-6" />
        </button>
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
      <div className="container mx-auto">
        <form onSubmit={handleVerifyOTP}>
          <h1 className="text-black text-2xl font-black w-[27rem] mx-auto text-center my-4 mod:mt-5">
            Verify OTP
          </h1>
          <div className="flex flex-col items-center">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter OTP"
              className="border border-gray-400 rounded-md p-2 mb-4"
            />

            <div className="mx-auto text-center">
              <button
                type="submit"
                className="border bg-purple text-white py-2 px-36 rounded-2xl hover:scale-105 focus:outline-none focus:bg-blue-600"
              >
                {loading ? <Spinner /> : "Verify"}
              </button>
            </div>
            <div className="flex justify-center">
              {error && <p className="text-red-500 mb-4">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default VerifyOTPPage;
