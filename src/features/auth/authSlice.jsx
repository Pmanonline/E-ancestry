// import { createSlice } from "@reduxjs/toolkit";
// import { loginUser, registerUser } from "./authActions";

// // Check for the token in local storage
// const token = localStorage.getItem("userToken");

// interface AuthState {
//   loading: boolean;
//   userInfo: any; // Update the type as per your response structure
//   error: string | null;
//   success: boolean; // Add success state
// }

// const initialState: AuthState = {
//   loading: false,
//   userInfo: token ? { token: token } : null,
//   error: null,
//   success: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       state.userInfo = null;
//       localStorage.removeItem("userToken"); // Remove token from local storage
//     },
//     setCredentials: (state, { payload }) => {
//       state.userInfo = payload;
//     },
//     resetSuccess: (state) => {
//       state.success = false; // Reset success state to false
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
//         state.userInfo = action.payload;
//         state.success = true; // Set success state to true
//         localStorage.setItem("userToken", action.payload.token);
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.success = false; // Reset success state to false
//       })
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userInfo = action.payload;
//         state.success = true; // Set success state to true
//         // localStorage.setItem("userToken", action.payload.token);
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.success = false; // Reset success state to false
//       });
//   },
// });

// export const { logoutUser, setCredentials, resetSuccess } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

// Check for the token in local storage
const token = localStorage.getItem("userToken");

/**
 * @typedef {Object} AuthState
 * @property {boolean} loading - Indicates if authentication is in progress.
 * @property {Object | null} userInfo - User information.
 * @property {string | null} error - Error message, if any.
 * @property {boolean} success - Indicates if authentication was successful.
 */

/** @type {AuthState} */
const initialState = {
  loading: false,
  userInfo: token ? { token: token } : null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userToken"); // Remove token from local storage
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
    resetSuccess: (state) => {
      state.success = false; // Reset success state to false
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
        state.userInfo = action.payload;
        state.success = true; // Set success state to true
        // localStorage.setItem("userToken", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false; // Reset success state to false
      });
  },
});

export const { logoutUser, setCredentials, resetSuccess } = authSlice.actions;

export default authSlice.reducer;
