import express from "express";
import { updateSalesData } from "./controller/sales.controller.js";
import { auth } from "../../middleware/auth.js";


const salesRouter = express.Router();

salesRouter.get("/sales", auth ,updateSalesData);

export default salesRouter;
