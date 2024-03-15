import express from "express";
import planRoutes from "./plans/plan.routes.js";
import clientRoutes from "./clients/client.routes.js";
import coachRoutes from "./coaches/coaches.routes.js";
import transactionRoutes from "./transactions/transaction.routes.js";
import workoutPlanRoutes from "./workoutPlan/workoutPlan.routes.js";
import analyticsRoutes from "./analytics/analytics.routes.js";

const mainRouter = express.Router();

mainRouter.use(clientRoutes);
mainRouter.use(planRoutes);
mainRouter.use(coachRoutes);
mainRouter.use(transactionRoutes);
mainRouter.use(workoutPlanRoutes);
mainRouter.use(analyticsRoutes);

export default mainRouter;
