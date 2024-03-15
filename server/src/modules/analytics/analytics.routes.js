import { auth } from "../../middleware/auth.js";
import { getMonthlyAnalytics } from "./controller/analytics.controller.js";
import express from "express";

const analyticsRoutes = express.Router();

analyticsRoutes.get("/analytics", auth, getMonthlyAnalytics);
export default analyticsRoutes;
