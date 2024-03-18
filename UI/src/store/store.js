import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userBodyInfo from "./reducers/bodyInfo";
import planReducer from "./reducers/plan";
import { thunk } from "redux-thunk";
import coachesReducer from "./reducers/couchsActions";

const store = configureStore({
  reducer: {
    userBodyInfo,
    auth: authReducer,
    plans: planReducer,
    coaches: coachesReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat([thunk]),
});

export default store;
