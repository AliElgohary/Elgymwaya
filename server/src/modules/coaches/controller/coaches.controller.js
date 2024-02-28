import coachModel from "../../../../Database/models/coach.model.js";
import clientModel from "../../../../Database/models/client.model.js";
import bcrypt from "bcrypt";

// Add Coach (Manager and Owner Only)
export const addCoach = async (req, res) => {
  try {
    const user = await clientModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }

    // Check if the user's role is either manager or owner
    const isAuthorized = user.role === "manager" || user.role === "owner";
    if (!isAuthorized) {
      return res
        .status(403)
        .send("Unauthorized: Only managers and owners can add coaches.");
    }
    let workingDays = [];
    if (req.body.working_days) {
      try {
        workingDays = JSON.parse(req.body.working_days);
      } catch (error) {
        return res.status(400).send("Invalid format for working_days.");
      }
    }

    const {
      full_name,
      email,
      phone_number,
      birth_date,
      salary,
      working_days,
      password,
      Cpassword,
    } = req.body;

    if (password !== Cpassword) {
      return res.status(400).send("Passwords do not match");
    }

    let foundUserEmail = await coachModel.findOne({ email: req.body.email });
    if (foundUserEmail) {
      return res.status(400).send("coach email already registered");
    }

    const profile_picture = req.file ? req.file.path : undefined;
    const hashedPassword = await bcrypt.hash(password, 10);
    const age = birth_date ? calculateAge(new Date(birth_date)) : undefined;

    const newCoach = new coachModel({
      full_name,
      email,
      password: hashedPassword,
      phone_number,
      birth_date,
      age,
      salary,
      profile_picture,
      working_days: workingDays,
    });

    await newCoach.save();
    res
      .status(201)
      .json({ message: "Coach added successfully", coach: newCoach });
  } catch (error) {
    res.status(500).send("Error in adding coach: " + error.message);
  }
};

// Helper function to calculate age from birth date
function calculateAge(birthDate) {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
