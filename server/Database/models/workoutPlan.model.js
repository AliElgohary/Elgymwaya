import mongoose from "mongoose";

const workoutPlanSchema = new mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  coach_id: { type: mongoose.Schema.Types.ObjectId, ref: "Coach" },
  start_date: Date,
  end_date: Date,
  status: {
    type: String,
    default: "Active",
    enum: ["Active", "Completed", "Paused"],
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
        // validate: /https?:\/\/(www\.)?youtube\.com\/watch\?v=\w+(&\S*)?/,
      }, // YouTube video link
    },
  ],
  progress: [
    {
      date: Date,
      workout_completed: Boolean,
      notes: String,
      adjustments: String,
    },
  ],
  goals: String,
  notes: String,
});

const workoutPlanModel = mongoose.model("WorkoutPlan", workoutPlanSchema);

export default workoutPlanModel;
