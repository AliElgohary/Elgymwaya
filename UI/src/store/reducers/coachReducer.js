import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCoachByIdFailure,
  fetchCoachByIdSuccess,
} from "../action/coachAction";

const initialState = {
  coach: null,
  error: null,
};

const coachReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCoachByIdSuccess, (state, action) => {
      state.coach = action.payload;
      state.error = null;
    })
    .addCase(fetchCoachByIdFailure, (state, action) => {
      state.coach = null;
      state.error = action.payload;
    });
});

export default coachReducer;
