import express from "express";

import { auth } from "../../middleware/auth.js";
import { upload } from "../../middleware/images.js";
import {
  addPlan,
  deleteplan,
  getAllPlans,
  getPlanById,
  updatePlan,
} from "./controller/plan.controller.js";
import { addSchema, updateSchema } from "./plan.validation.js";
import { validation } from "../../middleware/validation.js";
const planRoutes = express.Router();

// Add Plan
planRoutes.post("/plan/add", upload, auth, validation(addSchema), addPlan);

planRoutes.get("/plans", getAllPlans);
planRoutes.get("/plan/:id", getPlanById);
planRoutes.delete("/plan/:id", auth, deleteplan);
planRoutes.patch(
  "/plan/:id",
  upload,
  auth,
  validation(updateSchema),
  updatePlan
);

export default planRoutes;
