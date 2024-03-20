import { api } from "../api/http";
import { loginFailure, loginSuccess } from "../store/action/authActions";

export const setCurrentUser = () => (dispatch, getState) => {
  const token = localStorage.getItem("token");
  if (!token) return;
  // TODO: check token expiration
  dispatch(loginSuccess(token));
};

export const register =
  (
    full_name,
    email,
    weight,
    height,
    birth_date,
    phone_number,
    password,
    Cpassword
  ) =>
  async (dispatch, getState) => {
    try {
      const response = await api.post("client/signup", {
        full_name,
        email,
        weight,
        height,
        birth_date,
        phone_number,
        password,
        Cpassword,
      });
      //   if (response.status === 201)
      if (typeof response.data.token !== "undefined") {
        console.log("Registration successful:", response.data);
        const token = response.data.token;
        localStorage.setItem("token", token); // Store token in local storage
        dispatch(loginSuccess(token)); // Dispatch loginSuccess action with token
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle network errors or unexpected errors
      dispatch(loginFailure(error.message));
    }
  };
// import { api } from "../api/http";
// import { loginFailure, loginSuccess } from "../store/action/authActions";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const setCurrentUser = () => (dispatch, getState) => {
//   const token = localStorage.getItem("token");
//   if (!token) return;
//   // TODO: check token expiration
//   dispatch(loginSuccess(token));
// };

// export const register =
//   (
//     full_name,
//     email,
//     weight,
//     height,
//     birth_date,
//     phone_number,
//     password,
//     Cpassword
//   ) =>
//   async (dispatch, getState) => {
//     try {
//       const response = await api.post("client/signup", {
//         full_name,
//         email,
//         weight,
//         height,
//         birth_date,
//         phone_number,
//         password,
//         Cpassword,
//       });

//       if (response.status === 200) {
//         console.log("Registration successful:", response.data);
//         const token = response.data.token;
//         localStorage.setItem("token", token); // Store token in local storage
//         dispatch(loginSuccess(token)); // Dispatch loginSuccess action with token
//       } else {
//         toast.error("Registration failed. Please try again later.");
//         dispatch(loginFailure("Invalid credentials"));
//       }
//     } catch (error) {
//       console.error("Error registering user:", error);
//       // Handle network errors or unexpected errors
//       if (error.response && error.response.data && error.response.data.errors) {
//         const validationErrors = error.response.data.errors;
//         Object.keys(validationErrors).forEach((field) => {
//           toast.error(`${field}: ${validationErrors[field].join(", ")}`);
//         });
//       } else {
//         toast.error("Registration failed. Please try again later.");
//       }
//       dispatch(loginFailure(error.message));
//     }
//   };
