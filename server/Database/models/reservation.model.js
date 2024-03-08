import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  coach_id: { type: mongoose.Schema.Types.ObjectId, ref: "Coach" },
  date: Date,
  start_time: String,
  end_time: String,
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "confirmed", "cancelled"],
  },
});

const reservationModel = mongoose.model("Reservation", reservationSchema);

export default reservationModel;
