import mongoose from "mongoose";

let transactionSchema = new mongoose.Schema({
  plan_id: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  order_id: Number,
  subscriptionMonths: Number,
  payment_status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Successful", "Rejected"],
  },
  amount: Number,
});

const transactionModel = mongoose.model("Transaction", transactionSchema);

export default transactionModel;
