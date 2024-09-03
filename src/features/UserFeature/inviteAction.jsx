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

export const recordVisit = createAsyncThunk(
  "invite/recordVisit",
  async ({ visitorId, visitedId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendURL}/api/record-visit`, {
        visitorId,
        visitedId,
      });
      console.log("Visit Data:", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);

export const fetchVisits = createAsyncThunk(
  "visit/fetchVisits",
  async ({ visitorId, visitedId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendURL}/api/fetch-visits`, {
        params: { visitorId, visitedId },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message }
      );
    }
  }
);
