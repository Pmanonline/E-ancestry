import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  generateOTP,
  verifyOTP,
  resetPassword,
  GoogleSignInAction,
} from "./authActions";

const token = localStorage.getItem("userToken");
let user;
try {
  user = JSON.parse(localStorage.getItem("userInfo"));
} catch (e) {
  user = null;
}

const initialState = {
  email: "",
  loading: false,
  userInfo: token && user ? { token, user } : null,
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
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
    },
    setCredentials: (state, { payload }) => {
      const { userToken, refreshToken, user } = payload;
      state.userInfo = { token: userToken, refreshToken, user };
    },
    resetSuccess: (state) => {
      state.success = false;
      state.FPsuccess = false;
      state.OTPsuccess = false;
      state.RSTsuccess = false;
      state.RGSsuccess = false;
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
        const { userToken, refreshToken, ...user } = action.payload;
        if (userToken) {
          state.userInfo = { token: userToken, refreshToken, user };
          state.success = true;
          localStorage.setItem("userToken", userToken);
          localStorage.setItem("userInfo", JSON.stringify(user));
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      .addCase(GoogleSignInAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GoogleSignInAction.fulfilled, (state, action) => {
        state.loading = false;
        const { userToken, refreshToken, user } = action.payload;
        if (userToken) {
          state.userInfo = { token: userToken, refreshToken, user };
          state.success = true;
          localStorage.setItem("userToken", userToken);
          localStorage.setItem("userInfo", JSON.stringify(user));
        }
      })
      .addCase(GoogleSignInAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        const { userToken, refreshToken, ...user } = action.payload;
        if (userToken) {
          state.RGSsuccess = true;
          localStorage.setItem("userToken", userToken);
          localStorage.setItem("userInfo", JSON.stringify(user));
        }
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.RGSsuccess = false;
      })
      .addCase(generateOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateOTP.fulfilled, (state, action) => {
        state.loading = false;
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
        state.OTPsuccess = true;
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
        state.RSTsuccess = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.RSTsuccess = false;
      });
  },
});

export const { logoutUser, setCredentials, resetSuccess, setEmail } =
  authSlice.actions;

export default authSlice.reducer;
