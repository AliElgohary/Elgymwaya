import getClientByToken from "./../api/meApi";
import {
  fetchCurrentUserFailure,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
} from "./../store/action/userActions";

export const fetchCurrentUser = () => async (dispatch) => {
  dispatch(fetchCurrentUserRequest());
  try {
    const userData = await getClientByToken();
    dispatch(fetchCurrentUserSuccess(userData));
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error.message));
  }
};
