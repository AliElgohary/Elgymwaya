import { auth } from "../../middleware/auth.js";
import {
  getAnalyticsCounts,
  getMonthlyAnalytics,
  getTopThreeCoaches,
} from "./controller/analytics.controller.js";
import express from "express";

const analyticsRoutes = express.Router();

analyticsRoutes.get("/analytics", auth, getMonthlyAnalytics);
analyticsRoutes.get("/analytics/count", auth, getAnalyticsCounts);
analyticsRoutes.get("/analytics/coaches", auth, getTopThreeCoaches);
export default analyticsRoutes;
