// authReducer.js

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
  error: null,
  loadingStates: {
    login: false,
  }
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase("LOGIN_SUCCESS", (state, action) => {
    state.isAuthenticated = true;
    state.token = action.payload;
    state.error = null;
    state.loadingStates.login = false;
  });

  builder.addCase("LOGIN_FAILURE", (state, action) => {
    state.error = action.payload;
    state.loadingStates.login = false;
  });

  builder.addCase("LOGOUT", (state) => {
    state.isAuthenticated = false;
    state.token = null;
    state.error = null;
  });

  builder.addCase("LOGIN_INIT", (state) => {
    state.loadingStates.login = true;
  });
});

export default authReducer;
