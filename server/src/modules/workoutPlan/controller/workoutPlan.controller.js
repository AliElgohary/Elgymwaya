import coachModel from "../../../../Database/models/coach.model.js";
import userModel from "../../../../Database/models/user.model.js";
import workoutPlanModel from "../../../../Database/models/workoutPlan.model.js";

// Create Workout Plan - By Coaches Only
export const createWorkoutPlan = async (req, res) => {
  try {
    const coach = await coachModel.findById(req.userID);
    if (!coach) {
      return res.status(404).send("Coach not found.");
    }

    if (coach.role !== "coach") {
      return res
        .status(403)
        .send("Unauthorized: Only coaches can create workout plans.");
    }

    const { client_id, start_date } = req.body;

    const isClientOfCoach = coach.client_ids.some(
      (clientId) => clientId.toString() === client_id
    );
    if (!isClientOfCoach) {
      return res
        .status(403)
        .send("Unauthorized: This client is not assigned to the coach.");
    }

    const existingPlan = await workoutPlanModel
      .findOne({
        client_id: client_id,
      })
      .sort({ end_date: -1 });

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

    const newWorkoutPlan = new workoutPlanModel({
      ...req.body,
      coach_id: req.userID,
    });
    await newWorkoutPlan.save();
    res.status(201).send(newWorkoutPlan.toJSON());
  } catch (error) {
    console.error("Error in adding workout plan:", error);
    res.status(400).send(error.message);
  }
};

// Get All Plans - Admins Only
export const getAllWorkoutPlans = async (req, res) => {
  try {
    const admin = await userModel.findById(req.userID);
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

    const workoutPlans = await workoutPlanModel.find({});
    res.send(workoutPlans);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Curent Client Plans
export const getClientWorkoutPlans = async (req, res) => {
  try {
    const workoutPlans = await workoutPlanModel
      .find({ client_id: req.userID })
      .sort("-start_date");

    // if (workoutPlans.length === 0) {
    //   return res.status(400).send("No workout plans found for this client.");
    // }

    res.send(workoutPlans);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateWorkoutPlan = async (req, res) => {
  try {
    const workoutPlanDocument = await workoutPlanModel.findById(req.params.id);
    if (!workoutPlanDocument) {
      return res.status(404).send("Workout plan not found.");
    }

    let user = await userModel.findById(req.userID);
    if (!user) {
      user = await coachModel.findById(req.userID);
      if (!user) {
        return res.status(404).send("User not found.");
      }
    }

    const isManagerOrOwner = ["manager", "owner"].includes(user.role);
    const isCoachOwner =
      user.role === "coach" && workoutPlanDocument.coach_id.equals(user._id);
    const isClientOwner =
      user.role === "client" && workoutPlanDocument.client_id.equals(user._id);

    if (isManagerOrOwner) {
      Object.assign(workoutPlanDocument, req.body);
    } else if (isCoachOwner) {
      Object.assign(workoutPlanDocument, req.body);
    } else if (isClientOwner) {
      if (Object.keys(req.body).length === 1 && "status" in req.body) {
        workoutPlanDocument.status = req.body.status;
      } else {
        return res
          .status(400)
          .send("Clients can only update the status of their workout plan.");
      }
    } else {
      return res.status(403).send("Unauthorized to update this workout plan.");
    }

    await workoutPlanDocument.save();
    res.send(workoutPlanDocument);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
};

// Delete Workout Plan
export const deleteWorkoutPlan = async (req, res) => {
  try {
    const workoutPlanDocument = await workoutPlanModel.findById(req.params.id);
    if (!workoutPlanDocument) {
      return res.status(404).send("Workout plan not found.");
    }

    let user = await userModel.findById(req.userID);
    if (!user) {
      // If not found in userModel, try fetching from coachModel
      user = await coachModel.findById(req.userID);
      if (!user) {
        return res.status(404).send("User not found.");
      }
    }

    const isManagerOrOwner = ["manager", "owner"].includes(user.role);
    const isCoachOwner =
      user.role === "coach" && workoutPlanDocument.coach_id.equals(user._id);

    if (!isManagerOrOwner && !isCoachOwner) {
      return res
        .status(403)
        .send(
          "Unauthorized: Only managers, owners, or the creating coach can delete this workout plan."
        );
    }

    await workoutPlanModel.deleteOne({ _id: req.params.id });
    res.send({ message: "Workout plan deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
