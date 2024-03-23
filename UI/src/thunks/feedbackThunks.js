import { api } from "../api/http";
import { createAction } from "@reduxjs/toolkit";

// Action creators for the feedback process
export const feedbackRequest = createAction("feedback/request");
export const feedbackSuccess = createAction("feedback/success");
export const feedbackFailure = createAction("feedback/failure");

// Thunk action for submitting feedback
export const makeFeedback = (feedbackData) => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token not found in localStorage");
    dispatch(feedbackFailure("Authentication token not found."));
    return;
  }

  dispatch(feedbackRequest());

  try {
    // Include the Authorization header in the request
    const response = await api.post("/client/feedback", feedbackData, {
      headers: {
        token,
      },
    });

    // Dispatch success action with the response data
    dispatch(feedbackSuccess(response.data)); // Axios wraps the response so you access the data property
  } catch (error) {
    // Dispatch failure action with the error message
    // Check if the error response exists and has a data property; otherwise, use a generic message
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred while submitting feedback.";
    dispatch(feedbackFailure(errorMessage));
  }
};
