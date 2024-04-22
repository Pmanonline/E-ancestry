import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  generateOTP,
  registerBusiness,
  verifyOTP,
  resetPassword,
} from "./authActions";
import { SET_EMAIL } from "../types";

// Check for the token in local storage
const token = localStorage.getItem("userToken");

/**
 * @typedef {Object} AuthState
 * @property {boolean} loading - Indicates if authentication is in progress.
 * @property {Object | null} userInfo - User information.
 * @property {string | null} error - Error message, if any.
 * @property {boolean} success - Indicates if authentication was successful.
 * @property {boolean} FPsuccess - Indicates if authentication was successful.
 * @property {boolean} OTPsuccess - Indicates if authentication was successful.
 * @property {boolean} RSTsuccess - Indicates if authentication was successful.
 * @property {boolean} RGSsuccess - Indicates if authentication was successful.
 */

/** @type {AuthState} */
const initialState = {
  email: "",
  loading: false,
  userInfo: token ? { token: token } : null,
  error: null,
  success: false,
  FPsuccess: false,
  OTPsuccess: false,
  RSTsuccess: false,
  RGSsuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    logoutUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userToken"); // Remove token from local storage
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
    resetSuccess: (state) => {
      state.success = false; // Reset success state to false
      state.FPsuccess = false; // Reset success state to false
      state.OTPsuccess = false; // Reset success state to false
      state.RSTsuccess = false; // Reset success state to false
      state.RGSsuccess = false; // Reset success state to false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.success = true; // Set success state to true
        localStorage.setItem("userToken", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false; // Reset success state to false
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.RGSsuccess = true; // Set success state to true
        localStorage.setItem("userToken", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.RGSsuccess = false; // Reset success state to false
      })

      .addCase(registerBusiness.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerBusiness.fulfilled, (state, action) => {
        state.loading = false;
        // state.userInfo = action.payload;
        state.success = true;
      })
      .addCase(registerBusiness.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false; // Reset success state to false
      })
      .addCase(generateOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateOTP.fulfilled, (state, action) => {
        state.loading = false;
        // state.userInfo = action.payload;
        state.FPsuccess = true;
      })

      .addCase(generateOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.FPsuccess = false;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.OTPsuccess = true; // Set OTPsuccess to true
      })

      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.OTPsuccess = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.RSTsuccess = true; // Set OTPsuccess to true
      })

      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.RSTsuccess = false;
      });
  },
});

export const { logoutUser, setCredentials, resetSuccess } = authSlice.actions;

export default authSlice.reducer;
