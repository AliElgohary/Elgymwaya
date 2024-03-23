import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("FETCH_CURRENT_USER_REQUEST", (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase("FETCH_CURRENT_USER_SUCCESS", (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase("FETCH_CURRENT_USER_FAILURE", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("LOGOUT", (state) => {
      state.currentUser = null;
      state.loading = false;
    })
    .addCase("ADD_WORKOUT_FOR_CLIENT_SUCCESS", (state, action) => {
      const { clientId, workouts } = action.payload;
      state.currentUser.clientsWorkoutsMap[clientId] = workouts;
    });
});

export default userReducer;
