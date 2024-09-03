// import { createSlice } from "@reduxjs/toolkit";
// import { sendInvite, recordVisit, fetchVisits } from "./inviteAction";

// const inviteSlice = createSlice({
//   name: "invite",
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     visits: [],
//     visitDetails: null, // Add this field to store the visit details
//   },
//   reducers: {
//     resetSuccess: (state) => {
//       state.success = false;
//     },
//     resetVisitState: (state) => {
//       state.visits = [];
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(sendInvite.pending, (state) => {
//         state.loading = true;
//         state.success = false;
//         state.error = null;
//       })
//       .addCase(sendInvite.fulfilled, (state) => {
//         state.loading = false;
//         state.success = true;
//         state.error = null;
//       })
//       .addCase(sendInvite.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload.message || action.error.message;
//       })
//       .addCase(fetchVisits.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchVisits.fulfilled, (state, action) => {
//         state.loading = false;
//         state.visits = action.payload;
//       })
//       .addCase(fetchVisits.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(recordVisit.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(recordVisit.fulfilled, (state, action) => {
//         state.loading = false;
//         state.visitDetails = action.payload; // Store the visit details
//         state.error = null;
//         console.log("Visit recorded successfully:", action.payload);
//       })
//       .addCase(recordVisit.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message || action.error.message;
//         console.log(
//           "Error recording visit:",
//           action.payload.message || action.error.message
//         );
//       });
//   },
// });

// export const { resetSuccess, resetVisitState } = inviteSlice.actions;
// export default inviteSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { sendInvite, recordVisit, fetchVisits } from "./inviteAction";

const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    loading: false,
    success: false,
    error: null,
    visits: [],
    visitDetails: null,
  },
  reducers: {
    resetSuccess: (state) => {
      state.success = false;
    },
    resetVisitState: (state) => {
      state.visits = [];
      state.loading = false;
      state.error = null;
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
        state.error = action.payload.message || action.error.message;
      })
      .addCase(fetchVisits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVisits.fulfilled, (state, action) => {
        state.loading = false;
        state.visits = action.payload;
        console.log("Fetched successfully:", action.payload);
      })
      .addCase(fetchVisits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(recordVisit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(recordVisit.fulfilled, (state, action) => {
        state.loading = false;
        state.visitDetails = action.payload; // Store the visit details
        state.error = null;
        console.log("Visit recorded successfully:", action.payload);
      })
      .addCase(recordVisit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || action.error.message;
        console.log(
          "Error recording visit:",
          action.payload.message || action.error.message
        );
      });
  },
});

export const { resetSuccess, resetVisitState } = inviteSlice.actions;
export default inviteSlice.reducer;
