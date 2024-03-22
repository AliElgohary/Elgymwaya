import { api } from "../api/http";
import {
  makeReservationRequest,
  makeReservationSuccess,
  makeReservationFailure,
} from "../store/action/reservationActions";

export const makeReservation = (reservationData) => async (dispatch) => {
  dispatch(makeReservationRequest());

  const token = localStorage.getItem("token");

  if (!token) {
    dispatch(makeReservationFailure("Token not found"));
    return;
  }

  try {
    const response = await api.post("/reservations", reservationData, {
      headers: {
        token,
      },
    });
    dispatch(makeReservationSuccess(response.data));
  } catch (error) {
    dispatch(makeReservationFailure(error.message));
  }
};
