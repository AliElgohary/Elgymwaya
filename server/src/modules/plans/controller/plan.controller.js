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

export const getAllPlans = async (req, res) => {
  try {
    const plans = await planModel.find();
    res.json({ message: "Get all Plans", plans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


export const getPlanById = async (req, res) => {
  let plan  = await planModel.findById(req.params.id);
  if (plan) {
    res.json({ message: "Plan is:", plan });
  } else {
    res.json({ message: "plan not found" });
  }
};


export const deleteplan = async (req, res) => {
  const user = await clientModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized = user.role === "manager" || user.role === "owner";
  if (!isAuthorized) {
    return res
      .status(403)
      .send("Unauthorized: Only managers and owners can delete plans.");
  }

  let plan  = await planModel.findByIdAndDelete(req.params.id);
  if (plan) {
    res.json({ message: "plan Deleted", plan });
  } else {
    res.json({ message: "plan not found" });
  }
};


export const updatePlan = async (req, res) => {

  const user = await clientModel.findById(req.userID);
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
  if (plan) {
    let { title, description, fee , profile_picture} = req.body;

    if (req.file) {
      profile_picture = req.file.path; 
    }

    let updatedplan = await planModel.findByIdAndUpdate(
      plan._id,
      { title, description, fee, profile_picture:req.file.path },
      { new: true }
    );
    res.json({ message: "Updated", updatedplan });
  } else {
    res.json({ message: "plan not found" });
  }
};


 





