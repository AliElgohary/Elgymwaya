import userModel from "../../../../Database/models/user.model.js";
import planModel from "../../../../Database/models/plan.model.js";

// Add Plan (Manager and Owner Only)
export const addPlan = async (req, res) => {
  try {
    const user = await userModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }

    // Check if the user's role is either manager or owner
    const isAuthorized = user.role === "manager" || user.role === "owner";
    if (!isAuthorized) {
      return res
        .status(403)
        .send("Unauthorized: Only managers and owners can add plans.");
    }

    const { title, description, fee } = req.body;
    const newPlan = new planModel({
      title,
      description,
      fee,
      profile_picture: req.file.path,
    });
    await newPlan.save();
    res.status(201).json({ message: "Plan added successfully", plan: newPlan });
  } catch (error) {
    res.status(500).send("Error in adding plan: " + error.message);
  }
};

export const getAllPlans = async (req, res) => {
  try {
    
    const plans = await planModel.find();
    res.json({ message: "Get all Plans", plans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPlanById = async (req, res) => {
  let plan = await planModel.findById(req.params.id);
  if (plan) {
    res.json({ message: "Plan is:", plan });
  } else {
    res.json({ message: "plan not found" });
  }
};
// Delete Plan
export const deleteplan = async (req, res) => {
  const user = await userModelModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized = user.role === "manager" || user.role === "owner";
  if (!isAuthorized) {
    return res
      .status(403)
      .send("Unauthorized: Only managers and owners can delete plans.");
  }

  let plan = await planModel.findByIdAndDelete(req.params.id);
  if (plan) {
    res.json({ message: "plan Deleted", plan });
  } else {
    res.json({ message: "plan not found" });
  }
};
// Update Plan (Manager and Owner Only)
export const updatePlan = async (req, res) => {
  try {
    const user = await userModelModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }

    const isAuthorized = user.role === "manager" || user.role === "owner";
    if (!isAuthorized) {
      return res
        .status(403)
        .send("Unauthorized: Only managers and owners can update plans.");
    }

    let plan = await planModel.findById(req.params.id);
    if (!plan) {
      return res.status(404).send("Plan not found.");
    }

    let updates = {};

    if (req.body.title) updates.title = req.body.title;
    if (req.body.description) updates.description = req.body.description;
    if (req.body.fee) updates.fee = req.body.fee;
    if (req.file) updates.profile_picture = req.file.path;

    if (Object.keys(updates).length > 0) {
      let updatedPlan = await planModel.findByIdAndUpdate(plan._id, updates, {
        new: true,
      });
      res.json({ message: "Plan updated successfully", updatedPlan });
    } else {
      res.status(400).send("No update fields provided");
    }
  } catch (error) {
    console.error("Error in updating plan:", error);
    res.status(500).send("Error in updating plan");
  }
};
