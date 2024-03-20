import express from "express";
import { auth } from "../../middleware/auth.js";
import {
  getAllWorkoutPlans,
  getClientWorkoutPlans,
  createWorkoutPlan,
  updateWorkoutPlan,
  deleteWorkoutPlan,
} from "./controller/workoutPlan.controller.js";
// import { creatSchema, updateSchema } from "./workoutPlan.validation.js";
// import { validation } from "../../middleware/validation.js";

const workoutPlanRoutes = express.Router();

workoutPlanRoutes.post("/workout-plans", auth, createWorkoutPlan);
workoutPlanRoutes.get("/workout-plans", auth, getAllWorkoutPlans);
workoutPlanRoutes.get("/clientt/workout-plans", auth, getClientWorkoutPlans);
workoutPlanRoutes.patch(
  "/workout-plans/:id",
  auth,
  // validation(updateSchema),
  updateWorkoutPlan
);
workoutPlanRoutes.delete("/workout-plans/:id", auth, deleteWorkoutPlan);

export default workoutPlanRoutes;
