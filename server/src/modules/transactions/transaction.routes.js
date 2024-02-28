import express from "express";
import { addTransaction, deleteTransaction, getAllTransactions, getTransactionById } from "./controller/transaction.controller.js";
import { auth } from "../../middleware/auth.js";

const transactionRoutes = express.Router();


transactionRoutes.post("/transaction",auth, addTransaction)
transactionRoutes.get("/transaction", getAllTransactions)
transactionRoutes.get("/transaction/:id", getTransactionById)
transactionRoutes.delete("/transaction/:id",auth, deleteTransaction)



export default transactionRoutes;


