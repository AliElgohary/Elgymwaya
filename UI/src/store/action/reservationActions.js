export const makeReservationRequest = () => ({
  type: "MAKE_RESERVATION_REQUEST",
});

export const makeReservationSuccess = (data) => ({
  type: "MAKE_RESERVATION_SUCCESS",
  payload: data,
});

export const makeReservationFailure = (error) => ({
  type: "MAKE_RESERVATION_FAILURE",
  payload: error,
});
