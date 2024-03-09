import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  password: String,
  Cpassword: String,
  phone_number: String,
  birth_date: Date,
  age: Number,
  role: {
    type: String,
    default: "client",
    enum: ["client", "manager", "owner"],
  },
  profile_picture: String,
  height: Number,
  weight: Number,
  plan_id: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
  subscription_date: Date,
  subscription_months: Number,
  subscription_end_date: Date,
  coach_id: { type: mongoose.Schema.Types.ObjectId, ref: "Coach" },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
