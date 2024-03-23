export const fetchCurrentUserRequest = () => ({
  type: "FETCH_CURRENT_USER_REQUEST",
});

export const fetchCurrentUserSuccess = (user) => ({
  type: "FETCH_CURRENT_USER_SUCCESS",
  payload: user,
});

export const fetchCurrentUserFailure = (error) => ({
  type: "FETCH_CURRENT_USER_FAILURE",
  payload: error,
});

export const createRoutineSuccess = (clientId, workouts) => ({
  type: "ADD_WORKOUT_FOR_CLIENT_SUCCESS",
  payload: {clientId, workouts}
})
