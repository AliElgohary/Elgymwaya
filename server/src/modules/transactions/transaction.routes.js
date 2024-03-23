import express from "express";
import { addTransaction, deleteTransaction, getAllTrans, getAllTransactions, getTransactionById, updateTransaction } from "./controller/transaction.controller.js";
import { auth } from "../../middleware/auth.js";
import { addingtransSchema, updatingtransSchema } from "./transaction.validation.js";
import { validation } from "../../middleware/validation.js";

const transactionRoutes = express.Router();


transactionRoutes.post("/transaction",auth,validation(addingtransSchema), addTransaction)
transactionRoutes.get("/transaction", getAllTransactions)
transactionRoutes.get("/transactions", getAllTrans)
transactionRoutes.get("/transaction/:id", getTransactionById)
transactionRoutes.delete("/transaction/:id",auth, deleteTransaction)
transactionRoutes.patch("/transaction/:id",auth,validation(updatingtransSchema),updateTransaction)


export default transactionRoutes;


