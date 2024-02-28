import express from "express";
import { validation } from "../../middleware/validation.js";
import { auth } from "../../middleware/auth.js";
import {
  changePasswordSchema,
  forgetPasswordSchema,
  resetPasswordSchema,
  signInSchema,
  signUpSchema,
  updateUserSchema,
} from "./client.validation.js";
import {
  changeCoach,
  changePassword,
  forgetPassword,
  getAllClients,
  getClientById,
  resetPassword,
  setCoach,
  signIn,
  signUp,
  subscriptionfin,
  subscriptionint,
  updateUser,
  updateUserPicture,
} from "./controller/client.controller.js";
import { upload } from "../../middleware/images.js";
const clientRoutes = express.Router();

// Signup - Validation but no auth required
clientRoutes.post("/client/signup", upload, validation(signUpSchema), signUp);

// Signin - Validation but no auth required
clientRoutes.post("/client/signin", validation(signInSchema), signIn);

// Change Password - Validation and auth required
clientRoutes.patch(
  "/client/changepassword",
  auth,
  validation(changePasswordSchema),
  changePassword
);

// Forget Password Email
clientRoutes.post(
  "/client/forgetpassword",
  validation(forgetPasswordSchema),
  forgetPassword
);

// Reset Password
clientRoutes.patch(
  "/client/resetpassword/:token",
  validation(resetPasswordSchema),
  resetPassword
);

// Update User - Auth required, validation
clientRoutes.put(
  "/client/update",
  auth,
  validation(updateUserSchema),
  updateUser
);

// Update User Picture - Auth required
clientRoutes.patch("/client/updatepicture", upload, auth, updateUserPicture);
//////////////////////////////////////////////////////////////////////

//Subscribtion routes
clientRoutes.post("/client/subscribe", auth, subscriptionint);
clientRoutes.post("/client/subscribefin", subscriptionfin);
export default clientRoutes;

// Set Coach
clientRoutes.patch("/client/setcoach", auth, setCoach);

// Update Coach
clientRoutes.patch("/client/changecoach", auth, changeCoach);

// Get All Clients - auth
clientRoutes.get("/client", auth, getAllClients);

// Get All Clients
clientRoutes.get("/client/:id", getClientById);
