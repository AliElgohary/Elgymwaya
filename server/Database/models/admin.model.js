import mongoose from "mongoose";

let adminSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  password: String,
  Cpassword: String,
  phone_number: String,
  birth_date: Date,
  age: Number,
  role: { type: String, enum: ["manager", "owner"] },
  profile_picture: String,
  salary: Number,
});

const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel;
