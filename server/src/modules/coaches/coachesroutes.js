import express from "express";

import { auth } from "../../middleware/auth.js";
import { upload } from "../../middleware/images.js";

import { addCoach } from "./controller/coaches.controller.js";
const coachRoutes = express.Router();

// Add Coach - Validation but no auth required
coachRoutes.post(
  "/coach/add",
  upload,
  auth,
  //  validation(signUpSchema),
  addCoach
);

export default coachRoutes;
