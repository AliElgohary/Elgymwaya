import coachModel from "../../../../Database/models/coach.model.js";
import userModel from "../../../../Database/models/user.model.js";
import bcrypt from "bcrypt";

// Add Coach (Manager and Owner Only)
export const addCoach = async (req, res) => {
  try {
    const user = await userModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }

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
    const hiredDate = new Date();
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
      hiredDate,
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
    const user = await userModel.findById(req.userID);
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

// export const getAllcoaches = async (req, res) => {
//   try {
//     const user = await userModel.findById(req.userID);
//     if (!user) {
//       return res.status(404).send("User not found.");
//     }
//     const isAuthorized =
//       user.role === "manager" ||
//       user.role === "owner" ||
//       user.role === "client";
//     if (!isAuthorized) {
//       return res
//         .status(403)
//         .send(
//           "Unauthorized: Only managers, owners and clients can get all Coaches."
//         );
//     }
//     const coaches = await coachModel.find();
//     res.json({ message: "Get all coaches", coaches });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

export const getAllcoaches = async (req, res) => {
  try {
    const user = await userModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }
    const isAuthorized =
      user.role === "manager" ||
      user.role === "owner" ||
      user.role === "client";
    if (!isAuthorized) {
      return res
        .status(403)
        .send(
          "Unauthorized: Only managers, owners, and clients can get all Coaches."
        );
    }
    
    const limit = parseInt(req.query.limit) || 8; 
    const page = parseInt(req.query.page) || 1; 

    const skip = (page - 1) * limit; 

    const coaches = await coachModel.find().limit(limit).skip(skip);

    res.json({ message: "Get all coaches", coaches });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getcoachById = async (req, res) => {
  const user = await userModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized =
    user.role === "manager" || user.role === "owner" || user.role === "client";
  if (!isAuthorized) {
    return res
      .status(403)
      .send(
        "Unauthorized: Only managers , owners and clients can get specific Coach."
      );
  }

  let coach = await coachModel.findById(req.params.id);
  if (coach) {
    res.json({ message: "coach is:", coach });
  } else {
    res.json({ message: "coach not found" });
  }
};



export const getcoachFeedbackById = async (req, res) => {
  try {
    const coachId = req.params.id;
    const coach = await coachModel.findById(coachId).select("feedbacks");

    if (!coach) {
      return res.status(404).send({ message: "Coach not found." });
    }

    res.send(coach.feedbacks);
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while fetching the coach's feedbacks.",
      error: error.toString(),
    });
  }
};

export const getcoachRatingById = async (req, res) => {
  try {
    const coachId = req.params.id;
    const coach = await coachModel.findById(coachId).select("feedbacks");

    if (!coach || !coach.feedbacks || coach.feedbacks.length === 0) {
      return res.status(404).send({
        message:
          "No feedbacks found for the coach to calculate an average rating.",
      });
    }

    // Calculate the average rating
    const averageRating =
      coach.feedbacks.reduce((acc, curr) => acc + curr.rating, 0) /
      coach.feedbacks.length;

    res.send({ averageRating: averageRating.toFixed(2) });
  } catch (error) {
    res.status(500).send({
      message:
        "An error occurred while calculating the coach's average rating.",
      error: error.toString(),
    });
  }
};

export const deleteCoach = async (req, res) => {
  const user = await userModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized = user.role === "manager" || user.role === "owner";
  if (!isAuthorized) {
    return res
      .status(403)
      .send("Unauthorized: Only managers and owners can delete Coach.");
  }

  let coach = await coachModel.findByIdAndDelete(req.params.id);
  if (coach) {
    res.json({ message: "Coach Deleted", coach });
  } else {
    res.json({ message: "Coach not found" });
  }
};

// Helper function to calculate age from birth date
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// update coach to admin
export const updateCoachWithId = async (req, res) => {
  try {
    const { coachId } = req.params; 

    const coachToUpdate = await coachModel.findById(coachId);

    if (!coachToUpdate) {
      return res.status(404).send("Coach not found.");
    }

    if (req.body.email && req.body.email !== coachToUpdate.email) {
      const emailExists = await coachModel.findOne({
        email: req.body.email,
        _id: { $ne: coachId }, 
      });

      if (emailExists) {
        return res.status(400).send("Email is already in use.");
      }

    }

    if (req.body.birth_date) {
      const newBirthDate = new Date(req.body.birth_date);

      req.body.age = calculateAge(newBirthDate);
    }

    Object.assign(coachToUpdate, req.body);
    await coachToUpdate.save();

    res
      .status(200)
      .json({ message: "Coach updated successfully", coaches: coachToUpdate });
  } catch (error) {
    console.error("Error in updating Coach:", error);
    res.status(500).send("Error in updating Coach");
  }

};


