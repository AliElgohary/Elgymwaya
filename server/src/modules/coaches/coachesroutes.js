import express from "express";

import { auth } from "../../middleware/auth.js";
import { upload } from "../../middleware/images.js";

import { addCoach, deleteCoach, getAllcoaches, getcoachById } from "./controller/coaches.controller.js";
const coachRoutes = express.Router();

// Add Coach - Validation - auth required
coachRoutes.post(
  "/coach/add",
  upload,
  auth,
  //  validation(signUpSchema),
  addCoach
);

// Update Coach - Validation - auth required
coachRoutes.patch(
  "/coach/update",
  upload,
  auth,
  //  validation(signUpSchema),
  addCoach
);


coachRoutes.get("/coach",auth, getAllcoaches)
coachRoutes.get("/coach/:id",auth,  getcoachById)
coachRoutes.delete("/coach/:id",auth, deleteCoach)

export default coachRoutes;
