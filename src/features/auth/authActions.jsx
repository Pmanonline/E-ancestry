import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// actions.js
import { SET_EMAIL } from "../types";

// Define your email sending API endpoint
const SEND_EMAIL_ENDPOINT = "http://localhost:8080/api/registerMail";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://redux-blogapp-api-1.onrender.com";

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Make a POST request to the login endpoint with the provided credentials
      const { data } = await axios.post(
        "http://localhost:8080/api/login",
        { email, password },
        config
      );

      // Store the user's token in local storage
      localStorage.setItem("userToken", data.userToken);

      // Return the data received from the server
      return data;
    } catch (error) {
      // Return a custom error message from the API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    { firstName, email, password, lastName, phoneNumber },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Make the registration request
      const response = await axios.post(
        "http://localhost:8080/api/register",
        { firstName, email, password, lastName, phoneNumber },
        config
      );

      // Check if registration is successful (status 201)
      if (response.status === 201) {
        // Send email after successful registration
        await axios.post(SEND_EMAIL_ENDPOINT, {
          firstName,
          email,
          message: "Welcome to our platform!",
        });
      }

      return response.data; // Return data from the response
    } catch (error) {
      if (error.response && error.response.data.message) {
        // If there's an error response with a message, return the message
        return rejectWithValue(error.response.data.message);
      } else {
        // If there's an unexpected error, return the error message
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerBusiness = createAsyncThunk(
  "biz/registerBusiness",
  async (
    { businessName, businessState, businessCity, businessTag },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:8080/api/registerBusiness",
        { businessName, businessState, businessCity, businessTag },
        config
      );

      return response.data; // Return data from the response
    } catch (error) {
      if (error.response && error.response.data.message) {
        // If there's an error response with a message, return the message
        return rejectWithValue(error.response.data.message);
      } else {
        // If there's an unexpected error, return the error message
        return rejectWithValue(error.message);
      }
    }
  }
);

// // Async thunk for reset password action
// export const resetPassword = createAsyncThunk(
//   "auth/resetPassword",
//   async ({ resetToken, newPassword }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       await axios.post(
//         `${backendURL}/api/user/reset-password`,
//         { resetToken, newPassword },
//         config
//       );

//       // Return a message indicating the password was reset successfully
//       return "Password reset successfully";
//     } catch (error) {
//       // Handle error and return custom error message
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue("Failed to reset password");
//       }
//     }
//   }
// );

export const generateOTP = createAsyncThunk(
  "auth/generateOTP",
  async (email, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${backendURL}/api/generateOTP`,
        { email },
        config
      );

      // Check if OTP generation was successful
      if (response.status === 201) {
        return "OTP sent successfully"; // Return success message
      } else {
        return rejectWithValue("Failed to generate OTP");
      }
    } catch (error) {
      // Handle error and return custom error message
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Failed to generate OTP");
      }
    }
  }
);

export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async (otp, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendURL}/api/verifyOTP`, {
        params: { code: otp },
      });

      // Check if OTP verification was successful
      if (response.status === 200) {
        return "OTP verified successfully"; // Return success message
      } else {
        return rejectWithValue("Invalid OTP");
      }
    } catch (error) {
      // Handle error and return custom error message
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      } else {
        return rejectWithValue("Failed to verify OTP");
      }
    }
  }
);

// Action to reset the password

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${backendURL}/api/resetPassword`,
        { email, password },
        config
      );

      if (response.status === 201) {
        return response.data; // Return data from the response
      } else {
        return rejectWithValue("Failed to reset password");
      }
    } catch (error) {
      // Handle error
      if (error.response && error.response.data.message) {
        // If there's an error response with a message, return the message
        return rejectWithValue(error.response.data.message);
      } else {
        // If there's an unexpected error, return the error message
        return rejectWithValue(error.message);
      }
    }
  }
);

// Action to create the reset session
export const createResetSession = createAsyncThunk(
  "auth/createResetSession",
  async () => {
    try {
      const response = await axios.post(`${backendURL}/api/createResetSession`);

      // Check if reset session creation was successful
      if (response.status === 201) {
        return "Reset session created successfully"; // Return success message
      } else {
        return Promise.reject("Failed to create reset session");
      }
    } catch (error) {
      // Handle error and return custom error message
      return Promise.reject(error.message || "Failed to create reset session");
    }
  }
);
export const resendEmail = (storedEmail) => {
  return async (dispatch) => {
    try {
      // Call the backend endpoint to resend the email

      const response = await fetch(`${backendURL}/api/generateOTP`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
        body: JSON.stringify({ email: storedEmail }), // Include stored email in the request body
      });

      if (response.ok) {
        // If the email is successfully resent, generate a new OTP
        dispatch(generateOTP(storedEmail));
        return; // Exit early after dispatching the generateOTP action
      }

      // Handle any errors or unsuccessful responses from the backend
      throw new Error("Failed to resend email");
    } catch (error) {
      console.error("Error resending email:", error);
      // Handle the error, possibly dispatching an action to update the state
    }
  };
};
