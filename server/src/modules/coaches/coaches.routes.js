import express from "express";

import { auth } from "../../middleware/auth.js";
import { upload } from "../../middleware/images.js";
import { validation } from "../../middleware/validation.js";
import {
  addCoach,
  deleteCoach,
  getAllcoaches,
  getcoachById,
  getCoaches,
  getcoachFeedbackById,
  getcoachRatingById,
  updateCoach,
  updateCoachWithId,
} from "./controller/coaches.controller.js";
import {
  UpdatingCoachSchema,
  addingCoachSchema,
} from "./coaches.validation.js";

const coachRoutes = express.Router();

// Add Coach - Validation - auth required
coachRoutes.post(
  "/coach/add",
  upload,
  auth,
  validation(addingCoachSchema),
  addCoach
);

// Update Coach - Validation - auth required
coachRoutes.patch(
  "/coach/update",
  upload,
  auth,
  // validation(UpdatingCoachSchema),
  updateCoach
);

//get all coaches
coachRoutes.get("/coach", auth, getAllcoaches);

coachRoutes.get("/coaches", auth, getCoaches);

// get coach by id
coachRoutes.get("/coach/:id", auth, getcoachById);

// get coach average rating
coachRoutes.get("/coach/:id/average-rating", auth, getcoachRatingById);

// get coaches feadback
coachRoutes.get("/coach/:id/feedbacks", auth, getcoachFeedbackById);
// delete coaches
coachRoutes.delete("/coach/:id", auth, deleteCoach);
//update coach to admin
coachRoutes.put("/coach/update/:coachId", updateCoachWithId);

export default coachRoutes;
