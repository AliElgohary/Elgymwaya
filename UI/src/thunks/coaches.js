// import { api } from "./../api/http";
// import { GetAllCoachesAction } from "./../store/action/couchsActions";

// export const getCurrentUser = () => (dispatch, getState) => {
//     const token = localStorage.getItem("token");
//     if (!token) return;
//     // TODO: check token expiration
//     dispatch(loginSuccess(token));
//   };

// export const getAllcoaches = () => async (dispatch, getState) => {
//   const response = await api.get("/coach");
//   if (typeof response.data.token !== "undefined") {
//     console.log("Welcome To El Gymaweya", response.data);
//     const token = response.data.token;
//     localStorage.getItem("token", token);
//     dispatch(loginSuccess(response.data.token));
//   } else {
//     dispatch(loginFailure("Invalid credentials"));
//   }
//   const coaches = response.data.coaches;
//   dispatch({
//     type: GetAllCoachesAction.type,
//     payload: coaches,
//   });
// };
import { loginFailure } from "../store/action/authActions";
import { api } from "./../api/http";
import { GetAllCoachesAction } from "./../store/action/couchsActions";

export const getCurrentUser = () => (dispatch, getState) => {
  const token = localStorage.getItem("token");
  if (!token) return;
  // TODO: check token expiration
  dispatch(loginSuccess(token)); // Assuming loginSuccess action is defined
};

export const getAllcoaches = () => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    console.log("Request Headers:", api.defaults.headers.common);
    if (!token) {
      console.error("Token not found in localStorage");
      // Handle the absence of token, such as redirecting to the login page
      return;
    }
    const response = await api.get("/coach", {
      headers: {
        token,
      },
    });
    const coaches = response.data.coaches;
    dispatch({
      type: GetAllCoachesAction.type,
      payload: coaches,
    });
    // Assuming loginSuccess and loginFailure actions are defined
    if (typeof response.data.token !== "undefined") {
      console.log("Welcome To El Gymaweya", response.data);
      dispatch(loginSuccess(response.data.token));
    } else {
      dispatch(loginFailure("Invalid credentials"));
    }
  } catch (error) {
    // Handle errors here, e.g., dispatch an action to store the error in Redux state
    console.error("Error fetching coaches:", error);
    dispatch(fetchCoachesFailure("Failed to fetch coaches"));
  }
};
