import clientModel from "../../../../Database/models/client.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendPasswordResetMail } from "../../../services/sendEmail.js";

// Sign Up a New Client
export const signUp = async (req, res) => {
  try {
    const {
      full_name,
      email,
      password,
      Cpassword,
      phone_number,
      birth_date,
      height,
      weight,
    } = req.body;

    if (password !== Cpassword) {
      return res.status(400).send("Passwords do not match");
    }
    let foundUserEmail = await clientModel.findOne({ email: req.body.email });
    if (foundUserEmail) {
      res.json({ message: "client email already registered" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      // Calculate age
      const age = calculateAge(new Date(birth_date));

      const newClient = new clientModel({
        full_name,
        email,
        phone_number,
        password: hashedPassword,
        birth_date,
        age,
        profile_picture: req.file.path,
        height,
        weight,
      });

      await newClient.save();
      res
        .status(201)
        .json({ message: "Client created successfully", newClient });
    }
  } catch (error) {
    res.status(500).send("Error in signup");
    console.error(error);
  }
};

// Sign in
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Missing email or password");
    }
    const client = await clientModel.findOne({ email });

    if (!client) {
      return res.status(404).send("You need to register first");
    }

    const isPasswordValid = await bcrypt.compare(password, client.password);

    if (!isPasswordValid) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: client._id }, "ITI", { expiresIn: "1h" });
    res.status(200).json({ message: "Welcome To El Gymaweya", token });
  } catch (error) {
    res.status(500).send("Error in signin");
  }
};

// Change Password
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, CNewPassword } = req.body;

    // Find the current client
    const client = await clientModel.findById(req.userID);
    if (!client) {
      return res.status(404).send("Client not found");
    }

    // Verify old password
    const isOldPasswordValid = await bcrypt.compare(
      oldPassword,
      client.password
    );
    if (!isOldPasswordValid) {
      return res.status(400).send("Invalid old password");
    }

    // Check if new password and confirm new password match
    if (newPassword !== CNewPassword) {
      return res.status(400).send("New passwords do not match");
    }

    // Hash and set new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    client.password = hashedPassword;
    await client.save();

    res.status(200).send("Password reset successfully");
  } catch (error) {
    res.status(500).send("Error in resetting password");
  }
};

// Update Client Data (Manager, Owner, or Self Only)
export const updateUser = async (req, res) => {
  try {
    const clientToUpdate = await clientModel.findById(req.params.id);
    const requestingUser = await clientModel.findById(req.userID);

    // Check if requestingUser exists and if they are a manager, owner, or the same client
    const isAuthorized =
      requestingUser &&
      (requestingUser.role === "manager" ||
        requestingUser.role === "owner" ||
        requestingUser._id.toString() === req.params.id);

    if (!isAuthorized) {
      return res.status(403).send("Unauthorized");
    }

    // Check if the email is being updated and if it's already used by another user
    if (req.body.email && req.body.email !== clientToUpdate.email) {
      const emailExists = await clientModel.findOne({
        email: req.body.email,
        _id: { $ne: clientToUpdate._id }, // Exclude the current user from the search
      });

      if (emailExists) {
        return res.status(400).send("Email is already in use.");
      }
    }

    if (req.body.birth_date) {
      const newBirthDate = new Date(req.body.birth_date);
      req.body.age = calculateAge(newBirthDate);
    }

    Object.assign(clientToUpdate, req.body);
    await clientToUpdate.save();
    res
      .status(200)
      .json({ message: "Client updated successfully", clientToUpdate });
  } catch (error) {
    res.status(500).send("Error in updating client");
  }
};

// Update Client Picture (Manager, Owner, or Self Only)
export const updateUserPicture = async (req, res) => {
  try {
    const clientToUpdate = await clientModel.findById(req.params.id);
    const requestingUser = await clientModel.findById(req.userID);

    // Check authorization logic here (manager, owner, or self)
    const isAuthorized =
      requestingUser &&
      (requestingUser.role === "manager" ||
        requestingUser.role === "owner" ||
        requestingUser._id.toString() === req.params.id);

    if (!isAuthorized) {
      return res.status(403).send("Unauthorized");
    }

    // Assuming the file's new path is required
    if (req.file) {
      clientToUpdate.profile_picture = req.file.path; // Or any transformation if needed
    }

    await clientToUpdate.save();

    res.status(200).json({
      message: "Profile picture updated successfully",
      clientToUpdate,
    });
  } catch (error) {
    res.status(500).send("Error in updating profile picture");
    console.error(error);
  }
};

// Forget Password
export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const client = await clientModel.findOne({ email });
  if (!client) {
    return res.status(404).send("Client not found");
  }

  let token = jwt.sign({ id: client._id }, "ResetPassword", {
    expiresIn: "1h",
  });
  let url = `http://localhost:6000/client/resetpassword/${token}`;
  sendPasswordResetMail(email, url);
  res.send("Password reset email sent");
};

// Reset Password
export const resetPassword = async (req, res) => {
  let { token } = req.params;
  jwt.verify(token, "ResetPassword", async (err, decoded) => {
    if (err) {
      return res.status(400).send("Invalid or expired token");
    }

    const { newPassword, CNewPassword } = req.body;

    // Check if passwords match
    if (newPassword !== CNewPassword) {
      return res.status(400).send("Passwords do not match");
    }

    try {
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 12);

      // Update the client's password in the database
      await clientModel.findByIdAndUpdate(decoded.id, {
        password: hashedPassword,
      });

      res.send("Password reset successfully");
    } catch (error) {
      res.status(500).send("Error in resetting password");
    }
  });
};
////////////////////////////////////////////////////////////////////////////////////
// Helper function to calculate age
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
