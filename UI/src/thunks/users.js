import { api } from "../api/http";
import { loginFailure, loginSuccess } from "../store/action/authActions";

// thunk middleware ->
//   action (if type of the action is function then this is a thunk function if not it's a normal redux action (object of type and payload))

// higher order function (function returns a function)
export const getCurrentUser = () => (dispatch, getState) => {
  const token = localStorage.getItem("token");
  if (!token) return;
  // TODO: check token expiration
  dispatch(loginSuccess(token));
};

export const login = (email, password) => async (dispatch, getState) => {
  try {
    const response = await api.post("client/signin", { email, password });
    if (typeof response.data.token !== "undefined") {
      console.log("Welcome To El Gymaweya", response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch(loginSuccess(response.data.token));
    } else {
      dispatch(loginFailure("Invalid credentials"));
    }
  } catch (error) {
    console.error("Error login user:", error);
    // Handle network errors or unexpected errors
    dispatch(loginFailure(error.message));
  }
};
