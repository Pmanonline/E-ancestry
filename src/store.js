import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { authApi } from "./features/auth/authServive";
import errorReducer from "./features/reducers/errorReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    [authApi.reducerPath]: authApi.reducer, // Ensure this path is used correctly
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), // Ensure API middleware is added after default middleware
});

export default store;
