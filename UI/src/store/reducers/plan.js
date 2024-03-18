import { createReducer } from "@reduxjs/toolkit";
import { GetAllPlansAction } from "./../action/planActions";

const initialState = {
  list: [],
  //   activeChose:null
};

const planReducer = createReducer(initialState, (builder) => {
  builder.addCase(GetAllPlansAction, (state, action) => {
    state.list = action.payload;
  });
});
export default planReducer;
