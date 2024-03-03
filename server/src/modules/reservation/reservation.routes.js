import express from "express";
import { auth } from "../../middleware/auth.js";
import {
  cancelReservation,
  clientReservations,
  coachReservations,
  confirmReservation,
  createReservation,
} from "./controller/reservation.controller.js";

const reservationRoutes = express.Router();

reservationRoutes.post("/reservations", auth, createReservation);
reservationRoutes.patch("/reservations/:id/confirm", auth, confirmReservation);
reservationRoutes.patch("/reservations/:id/cancel", auth, cancelReservation);
reservationRoutes.get("/client/reservations", auth, clientReservations);
reservationRoutes.get("/coach/reservations", auth, coachReservations);

export default reservationRoutes;
