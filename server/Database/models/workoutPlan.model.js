import mongoose from "mongoose";

const workoutPlanSchema = new mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  coach_id: { type: mongoose.Schema.Types.ObjectId, ref: "Coach" },
  start_date: Date,
  end_date: Date,
  status: {
    type: String,
    default: "active",
    enum: ["active", "completed", "paused"],
  },
  workouts: [
    {
      name: String,
      description: String,
      frequency: {
        type: String,
        enum: ["Daily", "Weekly", "Biweekly", "Monthly"],
      },
      duration: Number, // in minutes
      type: {
        type: String,
        enum: ["Cardio", "Strength", "Flexibility", "Balance"],
      },
      sets: Number,
      reps: Number,
      rest_period: Number, // in seconds
      equipment_needed: [String],
      video_link: {
        type: String,
        validate: /https?:\/\/(www\.)?youtube\.com\/watch\?v=\w+(&\S*)?/,
      }, // YouTube video link
    },
  ],
  progress: [
    {
      date: Date,
      workout_completed: Boolean,
      notes: String,
      adjustments: String, // Coach's notes for adjustments
    },
  ],
  goals: String,
  notes: String, // Additional notes from the coach
});

const workoutPlan = mongoose.model("WorkoutPlan", workoutPlanSchema);

export default workoutPlan;
