import clientModel from "../../../../Database/models/client.model.js";
import planModel from "../../../../Database/models/plan.model.js";

// Add Plan (Manager and Owner Only)
export const addPlan = async (req, res) => {
  try {
    // Fetch the user based on req.userID set by your authentication middleware
    const user = await clientModel.findById(req.userID);
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
