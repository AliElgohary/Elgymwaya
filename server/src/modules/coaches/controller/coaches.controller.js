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

// Update Coach Data (Manager and Owner Only)
export const updateCoach = async (req, res) => {
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
        .send("Unauthorized: Only managers and owners can update coach data.");
    }

    const coachToUpdate = await coachModel.findById(req.params.coachId);
    if (!coachToUpdate) {
      return res.status(404).send("Coach not found.");
    }

    let workingDays = coachToUpdate.working_days;
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
      password,
      Cpassword,
    } = req.body;

    if (password && Cpassword) {
      if (password !== Cpassword) {
        return res.status(400).send("Passwords do not match");
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      coachToUpdate.password = hashedPassword;
    }

    // Check if the new email is already registered
    if (email && email !== coachToUpdate.email) {
      const foundUserEmail = await coachModel.findOne({ email: email });
      if (foundUserEmail) {
        return res
          .status(400)
          .send("Email already registered to another coach");
      }
      coachToUpdate.email = email;
    }

    // Update other fields
    if (full_name) coachToUpdate.full_name = full_name;
    if (phone_number) coachToUpdate.phone_number = phone_number;
    if (birth_date) {
      coachToUpdate.birth_date = birth_date;
      coachToUpdate.age = calculateAge(new Date(birth_date));
    }
    if (salary) coachToUpdate.salary = salary;
    if (req.file) coachToUpdate.profile_picture = req.file.path;
    coachToUpdate.working_days = workingDays;

    await coachToUpdate.save();
    res
      .status(200)
      .json({ message: "Coach updated successfully", coach: coachToUpdate });
  } catch (error) {
    console.error("Error in updating coach:", error);
    res.status(500).send("Error in updating coach: " + error.message);
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

export const getAllcoaches = async (req, res) => {
  try {
    const user = await clientModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }
    const isAuthorized = user.role === "manager" || user.role === "owner" ||user.role === "owner";
    if (!isAuthorized) {
      return res
        .status(403)
        .send("Unauthorized: Only managers, owners and clients can get all Coaches.");
    }
    const coaches = await coachModel.find();
    res.json({ message: "Get all coaches", coaches });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getcoachById = async (req, res) => {
  const user = await clientModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized = user.role === "manager" || user.role === "owner" ||user.role === "client";
  if (!isAuthorized) {
    return res
      .status(403)
      .send("Unauthorized: Only managers , owners and clients can get specific Coach.");
  }

  let coach  = await coachModel.findById(req.params.id);
  if (coach) {
    res.json({ message: "coach is:", coach });
  } else {
    res.json({ message: "coach not found" });
  }
};

export const deleteCoach = async (req, res) => {
  const user = await clientModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized = user.role === "manager" || user.role === "owner";
  if (!isAuthorized) {
    return res
      .status(403)
      .send("Unauthorized: Only managers and owners can delete Coach.");
  }

  let coach  = await coachModel.findByIdAndDelete(req.params.id);
  if (coach) {
    res.json({ message: "Coach Deleted", coach });
  } else {
    res.json({ message: "Coach not found" });
  }
};
