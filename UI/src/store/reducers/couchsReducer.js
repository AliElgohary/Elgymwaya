import { createReducer } from "@reduxjs/toolkit";
import { GetAllCoachesAction } from "../action/couchsActions";

const initialState = {
  list: [],
  //   activeChose:null
};

const coachesReducer = createReducer(initialState, (builder) => {
  builder.addCase(GetAllCoachesAction, (state, action) => {
    state.list = action.payload;
  });
});
export default coachesReducer;
