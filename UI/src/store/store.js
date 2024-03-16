import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userBodyInfo from "./reducers/bodyInfo";
import { thunk } from "redux-thunk";

//TODO:where should i store the auth token in localstorage
const store = configureStore({
  reducer: {
    userBodyInfo,
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat([thunk]),
});

export default store;
