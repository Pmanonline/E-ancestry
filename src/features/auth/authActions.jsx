import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password, firstName }, { rejectWithValue }) => {
    try {
      // Configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Make a POST request to the login endpoint with the provided credentials
      const { data } = await axios.post(
        "https://redux-blogapp-api-1.onrender.com/api/user/login",
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
  "auth/createPost",
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        "https://redux-blogapp-api-1.onrender.com/api/user/register",
        { firstName, email, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
