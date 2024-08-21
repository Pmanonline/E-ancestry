// src/redux/inviteSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080"
    : "https://gekoda-api.onrender.com";

// Define the async thunk for sending an invite
export const sendInvite = createAsyncThunk(
  "invite/sendInvite",
  async ({ inviteType, recipient, name }, thunkAPI) => {
    try {
      const response = await axios.post(`${backendURL}/api/send-invite`, {
        inviteType,
        recipient,
        name,
      });
      return response.data; // Returning data on success
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Returning error on failure
    }
  }
);

export const fetchVisit = createAsyncThunk(
  "invite/fetchVisit",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`${backendURL}/api/visits/${userId}`);
      return response.data; // Returning data on success
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Returning error on failure
    }
  }
);
