import { createSlice } from "@reduxjs/toolkit";
import { fetchStateDetails } from "./stateAction"; // Adjust the import path

const stateSlice = createSlice({
  name: "state",
  initialState: {
    allStates: null,
    specificState: null,
    religions: null,
    tribes: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStateDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStateDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.allStates = action.payload.allStates;
        state.specificState = action.payload.specificState;
        state.religions = action.payload.religions;
        state.tribes = action.payload.tribes;
      })
      .addCase(fetchStateDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      });
  },
});

export default stateSlice.reducer;
