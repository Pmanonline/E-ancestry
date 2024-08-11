import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import formReducer from "./features/UserFeature/UserSlice";
import userReducer from "./features/UserFeature/getUserSlice";
import editReducer from "./features/UserFeature/EditSlice";
import deleteReducer from "./features/UserFeature/deleteUserSlice";
import stateReducer from "./features/Statefeature/stateSlice";
import nameReducer from "./features/nameFeature/nameSlice";
import userSearchReducer from "./features/UserFeature/SearchSlice";
import { authApi } from "./features/auth/authServive";

const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    person: userReducer,
    edit: editReducer,
    delete: deleteReducer,
    state: stateReducer,
    name: nameReducer,
    userSearch: userSearchReducer,
    [authApi.reducerPath]: authApi.reducer, // Ensure this path is used correctly
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), // Ensure API middleware is added after default middleware
});

export default store;
