import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userBodyInfo from "./reducers/bodyInfo";
import planReducer from "./reducers/plan";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer";
import coachesReducer from "./reducers/couchsReducer";
import coachReducer from "./reducers/coachReducer";

const store = configureStore({
  reducer: {
    userBodyInfo,
    auth: authReducer,
    plans: planReducer,
    coaches: coachesReducer,
    coach: coachReducer,
    me: userReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat([thunk]),
});

export default store;
