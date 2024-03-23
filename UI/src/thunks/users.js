import { toast } from "react-toastify";
import { api } from "../api/http";
import {
  loginFailure,
  loginInit,
  loginSuccess,
} from "../store/action/authActions";
import { fetchCurrentUser } from "./me";
import { createRoutineSuccess } from "../store/action/userActions";

// thunk middleware ->
//   action (if type of the action is function then this is a thunk function if not it's a normal redux action (object of type and payload))

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(loginInit());
    const response = await api.post("client/signin", { email, password });
    if (typeof response.data.token !== "undefined") {
      console.log("Welcome To El Gymaweya", response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch(loginSuccess(response.data.token));
      dispatch(fetchCurrentUser());
    } else {
      dispatch(loginFailure("Invalid credentials"));
    }
  } catch (error) {
    console.error("Error login user:", error);
    const errorMessage = error.response?.data;
    if (errorMessage) {
      // show toast
      toast.error(errorMessage);
    }
    // Handle network errors or unexpected errors
    dispatch(loginFailure(error.message));
  }
};

export const crateRoutineInit = (routineData) => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  if (!token) return;
  try {
    const response = await api.post("/workout-plans", routineData, {
      headers: {
        token,
      },
    });
    const workouts = response.data.workouts;
    const clientId = routineData.client_id;
    dispatch(createRoutineSuccess(clientId, workouts));
  } catch (error) {
    console.log(error);
  }
};
