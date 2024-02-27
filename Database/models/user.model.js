import mongoose from "mongoose";

let usersSchema = new mongoose.Schema({
  email: String,
  password: String,
  Cpassword: String,
  phone_number: String,
  role: { type: String, enum: ["client", "coach", "manager", "owner"] },
  height: Number,
  weight: Number,
  plan_id: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
  subscription_date: Date,
  subscription_months: Number,
  subscription_end_date: Date,
  coach_id: { type: mongoose.Schema.Types.ObjectId, ref: "Coach" },
});

const userModel = mongoose.model("User", usersSchema);

export default userModel;
