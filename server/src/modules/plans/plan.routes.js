import express from "express";

import { auth } from "../../middleware/auth.js";
import { upload } from "../../middleware/images.js";
import { addPlan } from "./controller/plan.controller.js";
const planRoutes = express.Router();

// Add Plan - Validation but no auth required
planRoutes.post(
  "/plan/add",
  upload,
  auth,
  //  validation(signUpSchema),
  addPlan
);

export default planRoutes;
