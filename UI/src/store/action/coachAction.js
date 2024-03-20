import { createAction } from "@reduxjs/toolkit";

export const fetchCoachByIdRequest = createAction("FETCH_COACH_BY_ID_REQUEST");

export const fetchCoachByIdSuccess = createAction("FETCH_COACH_BY_ID_SUCCESS");

export const fetchCoachByIdFailure = createAction("FETCH_COACH_BY_ID_FAILURE");
