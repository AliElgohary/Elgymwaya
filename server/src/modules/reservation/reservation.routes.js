import express from "express";
import { auth } from "../../middleware/auth.js";
import {
  cancelReservation,
  clientReservations,
  coachReservations,
  confirmReservation,
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
reservationRoutes.patch("/reservations/:id/confirm", auth, confirmReservation);
reservationRoutes.patch("/reservations/:id/cancel", auth, cancelReservation);
reservationRoutes.get("/clientt/reservations", auth, clientReservations);
reservationRoutes.get("/coachh/reservations", auth, coachReservations);

export default reservationRoutes;
