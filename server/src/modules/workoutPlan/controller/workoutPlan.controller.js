import clientModel from "../../../../Database/models/client.model.js";
import workoutPlan from "../../../../Database/models/workoutPlan.model.js";

// Create Workou Plan - By Coaches Only
export const createWorkoutPlan = async (req, res) => {
  try {
    // First, verify if the user is a coach
    const coach = await coachModel.findById(req.userID);
    if (!coach) {
      return res.status(404).send("Coach not found.");
    }

    // Check if the user's role is "coach"
    if (coach.role !== "coach") {
      return res
        .status(403)
        .send("Unauthorized: Only coaches can create workout plans.");
    }

    // Extract client ID and the intended start date from request body
    const { client_id, start_date } = req.body;

    // Verify if the client ID is one of the coach's clients
    const isClientOfCoach = coach.client_ids.some(
      (clientId) => clientId.toString() === client_id
    );
    if (!isClientOfCoach) {
      return res
        .status(403)
        .send("Unauthorized: This client is not assigned to the coach.");
    }

    // Check for existing workout plans for this client that might conflict with the new plan's start date
    const existingPlan = await workoutPlan
      .findOne({
        client_id: client_id,
      })
      .sort({ end_date: -1 }); // Get the most recent plan

    if (
      existingPlan &&
      new Date(start_date) <= new Date(existingPlan.end_date)
    ) {
      return res
        .status(400)
        .send(
          "A workout plan already exists that overlaps with the intended start date."
        );
    }

    const workoutPlan = new workoutPlan({
      ...req.body,
      coach_id: req.userID,
    });
    await workoutPlan.save();
    res.status(201).send(workoutPlan);
  } catch (error) {
    console.error("Error in adding workout plan:", error);
    res.status(400).send(error.message);
  }
};

// Get All Plans - Admins Only
export const getAllWorkoutPlans = async (req, res) => {
  try {
    const admin = await clientModel.findById(req.userID);
    if (!admin) {
      return res.status(404).send("Admin user not found.");
    }

    const isAuthorized = admin.role === "manager" || admin.role === "owner";
    if (!isAuthorized) {
      return res
        .status(403)
        .send(
          "Unauthorized: Only managers and owners can access all workout plans."
        );
    }

    const workoutPlans = await workoutPlan.find({});
    res.send(workoutPlans);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Curent Client Plans
export const getClientWorkoutPlans = async (req, res) => {
  try {
    const workoutPlans = await workoutPlan.find({ client_id: req.userID });

    if (workoutPlans.length === 0) {
      return res.status(404).send("No workout plans found for this client.");
    }

    res.send(workoutPlans);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update Workout Plan
export const updateWorkoutPlan = async (req, res) => {
  try {
    // First, fetch the workout plan to check ownership and roles
    const workoutPlan = await workoutPlan.findById(req.params.id);
    if (!workoutPlan) {
      return res.status(404).send("Workout plan not found.");
    }

    // Fetch the user making the request
    const user = await clientModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }

    // Check if the user is a manager or owner
    const isManagerOrOwner = ["manager", "owner"].includes(user.role);

    // Check if the coach is the one who created the workout plan
    const isCoachOwner =
      user.role === "coach" && workoutPlan.coach_id.equals(user._id);

    // Check if the client is the one the workout plan is assigned to
    const isClientOwner =
      user.role === "client" && workoutPlan.client_id.equals(user._id);

    // Managers and Owners can update any field of any workout plan
    if (isManagerOrOwner) {
      Object.assign(workoutPlan, req.body);
    }
    // Coaches can update any field of their own workout plans
    else if (isCoachOwner) {
      Object.assign(workoutPlan, req.body);
    }
    // Clients can only update the status field of their workout plan
    else if (isClientOwner) {
      // Ensure only the 'status' field is being updated
      if (Object.keys(req.body).length === 1 && "status" in req.body) {
        workoutPlan.status = req.body.status;
      } else {
        return res
          .status(400)
          .send("Clients can only update the status of their workout plan.");
      }
    } else {
      return res.status(403).send("Unauthorized to update this workout plan.");
    }

    await workoutPlan.save();
    res.send(workoutPlan);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Workout Plan
export const deleteWorkoutPlan = async (req, res) => {
  try {
    // First, fetch the workout plan without deleting to check permissions
    const workoutPlan = await workoutPlan.findById(req.params.id);
    if (!workoutPlan) {
      return res.status(404).send("Workout plan not found.");
    }

    // Fetch the user making the request
    const user = await clientModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }

    // Check if the user is a manager, owner, or the coach who created the plan
    const isManagerOrOwner = ["manager", "owner"].includes(user.role);
    const isCoachOwner =
      user.role === "coach" && workoutPlan.coach_id.equals(user._id);

    if (!isManagerOrOwner && !isCoachOwner) {
      return res
        .status(403)
        .send(
          "Unauthorized: Only managers, owners, or the creating coach can delete this workout plan."
        );
    }

    await workoutPlan.remove();
    res.send({ message: "Workout plan deleted successfully." });
  } catch (error) {
    res.status(500).send(error);
  }
};
