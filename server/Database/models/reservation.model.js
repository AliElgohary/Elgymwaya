import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
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

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
