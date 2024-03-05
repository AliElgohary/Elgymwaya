import mongoose from "mongoose";

let coachSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  password: String,
  Cpassword: String,
  phone_number: String,
  birth_date: Date,
  age: Number,
  role: { type: String, default: "coach" },
  salary: Number,
  profile_picture: String,
  client_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Client" }],
  working_days: [
    {
      day: {
        type: String,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      start_time: String, // Could be 'HH:mm' 24h format
      end_time: String, // Could be 'HH:mm' 24h format
    },
  ],
  feedbacks: [
    {
      client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
      rating: { type: Number, min: 1, max: 5 },
      comment: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

const coachModel = mongoose.model("Coach", coachSchema);

export default coachModel;
