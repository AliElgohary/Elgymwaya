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

export const fetchReservationsRequest = () => ({
  type: "FETCH_RESERVATIONS_REQUEST",
});

export const fetchReservationsSuccess = (reservations) => ({
  type: "FETCH_RESERVATIONS_SUCCESS",
  payload: reservations,
});

export const fetchReservationsFailure = (error) => ({
  type: "FETCH_RESERVATIONS_FAILURE",
  payload: error,
});
