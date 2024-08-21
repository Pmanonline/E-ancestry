import { createSlice } from "@reduxjs/toolkit";
import { sendInvite, fetchVisit } from "./inviteAction";

const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    loading: false,
    success: false,
    error: null,
    visits: [], // Add visits state to store fetched visits
  },
  reducers: {
    resetSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendInvite.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendInvite.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(sendInvite.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchVisit.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      // .addCase(fetchVisit.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.success = true;
      //   state.visits = action.payload; // Store the fetched visits
      //   state.error = null;
      //   console.log("visited users", action.payload);
      // })
      // Debugging the API response
      .addCase(fetchVisit.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.visits = action.payload; // Store the fetched visits
        state.error = null;
        console.log("Fetched visits in slice:", action.payload);
      })

      .addCase(fetchVisit.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { resetSuccess } = inviteSlice.actions;
export default inviteSlice.reducer;
