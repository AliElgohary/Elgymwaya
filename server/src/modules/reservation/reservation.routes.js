import express from "express";
import { auth } from "../../middleware/auth.js";
import {
  clientReservations,
  coachReservations,
  createReservation,
} from "./controller/reservation.controller.js";
import { creatSchema } from "./reservation.validation.js";
import { validation } from "../../middleware/validation.js";

const reservationRoutes = express.Router();

reservationRoutes.post(
  "/reservations",
  auth,
  validation(creatSchema),
  createReservation
);

reservationRoutes.get("/clientt/reservations", auth, clientReservations);
reservationRoutes.get("/coachh/reservations", auth, coachReservations);

export default reservationRoutes;
