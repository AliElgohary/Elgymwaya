import express from "express";

import { auth } from "../../middleware/auth.js";
import { upload } from "../../middleware/images.js";
import { addPlan, deleteplan, getAllPlans, getPlanById, updatePlan } from "./controller/plan.controller.js";
const planRoutes = express.Router();

// Add Plan - Validation but no auth required
planRoutes.post(
  "/plan/add",
  upload,
  auth,
  //  validation(signUpSchema),
  addPlan
);


planRoutes.get("/plan",getAllPlans)
planRoutes.get("/plan/:id",getPlanById)
planRoutes.delete("/plan/:id",auth, deleteplan)
planRoutes.patch("/plan/:id",auth, updatePlan)


export default planRoutes;
