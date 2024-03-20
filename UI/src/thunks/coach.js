import { api } from "../api/http";
import {
  fetchCoachByIdFailure,
  fetchCoachByIdSuccess,
} from "../store/action/coachAction";

export const fetchCoachById = (coachId) => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token not found in localStorage");
    return;
  }

  try {
    const response = await api.get(`/coach/${coachId}`, {
      headers: {
        token,
      },
    });
    dispatch(fetchCoachByIdSuccess(response.data));
  } catch (error) {
    dispatch(fetchCoachByIdFailure(error.message));
  }
};
