import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userBodyInfo from "./reducers/bodyInfo";
//TODO:where should i store the auth token in localstorage
const store = configureStore({
  reducer: {
    userBodyInfo,
    auth: authReducer,
  },
});

export default store;
