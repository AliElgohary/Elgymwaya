import mongoose from "mongoose";

let transactionSchema = new mongoose.Schema({
  plan_id: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  order_id: Number,
  subscriptionMonths: Number,
});

const transactionModel = mongoose.model("Transaction", transactionSchema);

export default transactionModel;
