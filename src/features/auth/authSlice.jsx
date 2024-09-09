// import { createSlice } from "@reduxjs/toolkit";
// import {
//   loginUser,
//   registerUser,
//   refreshToken,
//   generateOTP,
//   verifyOTP,
//   resetPassword,
// } from "../auth/authActions";

// const initialState = {
//   token: localStorage.getItem("userToken") || null,
//   refreshToken: localStorage.getItem("refreshToken") || null,
//   user: (() => {
//     const userInfo = localStorage.getItem("userInfo");
//     if (!userInfo) {
//       return null;
//     }
//     try {
//       return JSON.parse(userInfo);
//     } catch (error) {
//       console.error("Failed to parse userInfo JSON:", error);
//       return null;
//     }
//   })(),
//   loading: false,
//   error: null,
//   success: false,
//   FPsuccess: false,
//   OTPsuccess: false,
//   RSTsuccess: false,
//   RGSsuccess: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     logoutUser(state) {
//       state.token = null;
//       state.refreshToken = null;
//       state.user = null;
//       localStorage.removeItem("userToken");
//       localStorage.removeItem("refreshToken");
//       localStorage.removeItem("userInfo");
//       localStorage.removeItem("User");
//     },
//     setCredentials(state, action) {
//       const { token, refreshToken, user } = action.payload;
//       state.token = token;
//       state.refreshToken = refreshToken;
//       state.user = user;
//       localStorage.setItem("userToken", token);
//       localStorage.setItem("refreshToken", refreshToken);
//       localStorage.setItem("userInfo", JSON.stringify(user));
//     },
//     resetSuccess: (state) => {
//       state.success = false;
//       state.FPsuccess = false;
//       state.OTPsuccess = false;
//       state.RSTsuccess = false;
//       state.RGSsuccess = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         const { token, refreshToken, user } = action.payload;
//         state.token = token;
//         state.refreshToken = refreshToken;
//         state.user = user;
//         localStorage.setItem("userToken", token);
//         localStorage.setItem("refreshToken", refreshToken);
//         localStorage.setItem("userInfo", JSON.stringify(user));
//         state.success = true;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.success = false;
//       })
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         const { token, refreshToken, user } = action.payload;
//         state.token = token;
//         state.refreshToken = refreshToken;
//         state.user = user;
//         localStorage.setItem("userToken", token);
//         localStorage.setItem("refreshToken", refreshToken);
//         localStorage.setItem("userInfo", JSON.stringify(user));
//         state.RGSsuccess = true;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.RGSsuccess = false;
//       })
//       .addCase(generateOTP.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(generateOTP.fulfilled, (state) => {
//         state.loading = false;
//         state.FPsuccess = true;
//       })
//       .addCase(generateOTP.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.FPsuccess = false;
//       })
//       .addCase(verifyOTP.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(verifyOTP.fulfilled, (state) => {
//         state.loading = false;
//         state.OTPsuccess = true;
//       })
//       .addCase(verifyOTP.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.OTPsuccess = false;
//       })
//       .addCase(resetPassword.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(resetPassword.fulfilled, (state) => {
//         state.loading = false;
//         state.RSTsuccess = true;
//       })
//       .addCase(resetPassword.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.RSTsuccess = false;
//       })
//       .addCase(refreshToken.fulfilled, (state, action) => {
//         const { token, refreshToken } = action.payload;
//         state.token = token;
//         state.refreshToken = refreshToken;
//         localStorage.setItem("userToken", token);
//         localStorage.setItem("refreshToken", refreshToken);
//       })
//       .addCase(refreshToken.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// export const { logoutUser, setCredentials, resetSuccess } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  generateOTP,
  verifyOTP,
  resetPassword,
} from "./authActions";

const storedToken = localStorage.getItem("userToken");
const storedUserInfo = storedToken
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  email: "",
  loading: false,
  userInfo: storedUserInfo || null,
  error: null,
  success: false,
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
      state.userInfo = payload;
      localStorage.setItem("userToken", payload.userToken);
      localStorage.setItem("userInfo", JSON.stringify(payload));
    },
    resetSuccess: (state) => {
      state.success = false;
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
        state.userInfo = action.payload; // Ensure _id and other details are included
        state.success = true;
        localStorage.setItem("userToken", action.payload.userToken);
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
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
        state.success = true;
        localStorage.setItem("userToken", action.payload.userToken);
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(generateOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(generateOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { logoutUser, setCredentials, resetSuccess } = authSlice.actions;

export default authSlice.reducer;
