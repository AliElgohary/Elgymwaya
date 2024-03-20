import {
  SET_COACH_FAILURE,
  SET_COACH_REQUEST,
  SET_COACH_SUCCESS,
} from "../store/action/setCoachActions";
import { api } from "./../api/http";

export const setCoach = (coachId) => async (dispatch) => {
  dispatch({ type: SET_COACH_REQUEST });

  try {
    const token = localStorage.getItem("token");

    const response = await api.patch(
      "/client/setcoach",
      { coachId },
      {
        headers: {
          token,
        },
      }
    );

    dispatch({
      type: SET_COACH_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SET_COACH_FAILURE,
      payload: error.message,
    });
  }
};
