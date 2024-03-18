import mongoose from "mongoose";

let planSchema = new mongoose.Schema({
  title: String,
  description: String,
  fee: Number,
  profile_picture: String,
  features: [String],
});

const planModel = mongoose.model("Plan", planSchema);

export default planModel;
