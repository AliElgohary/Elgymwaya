import userModel from "../../../../Database/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendPasswordResetMail } from "../../../services/sendEmail.js";
import planModel from "../../../../Database/models/plan.model.js";
import axios from "axios";
import transactionModel from "../../../../Database/models/transaction.model.js";
import crypto from "crypto";
import coachModel from "../../../../Database/models/coach.model.js";

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
    let foundUserEmail = await userModel.findOne({ email: req.body.email });
    if (foundUserEmail) {
      res.json({ message: "client email already registered" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      // Calculate age
      const age = calculateAge(new Date(birth_date));

      const newClient = new userModel({
        full_name,
        email,
        phone_number,
        password: hashedPassword,
        birth_date,
        age,
        // profile_picture: req.file.path, just for now xD
        height,
        weight,
      });
      const token = jwt.sign({ id: newClient._id }, "ITI");

      await newClient.save();
      res
        .status(201)
        .json({ message: "Client created successfully", newClient, token });
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
    const client = await userModel.findOne({ email });

    if (!client) {
      return res.status(404).send("You need to register first");
    }

    const isPasswordValid = await bcrypt.compare(password, client.password);

    if (!isPasswordValid) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: client._id }, "ITI");
    res
      .status(200)
      .json({ message: "Welcome To El Gymaweya", role: client.role, token });
  } catch (error) {
    res.status(500).send("Error in signin");
  }
};

// Change Password
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, CNewPassword } = req.body;

    // Find the current client
    const client = await userModel.findById(req.userID);
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

// Update Client Data (Self Only)
export const updateUser = async (req, res) => {
  try {
    const clientToUpdate = await userModel.findById(req.userID);

    if (!clientToUpdate) {
      return res.status(404).send("User not found.");
    }

    // Check if the email is being updated and if it's already used by another user
    if (req.body.email && req.body.email !== clientToUpdate.email) {
      const emailExists = await userModel.findOne({
        email: req.body.email,
        _id: { $ne: req.userID }, // Exclude the current user from the search
      });

      if (emailExists) {
        return res.status(400).send("Email is already in use.");
      }
    }

    if (req.body.birth_date) {
      const newBirthDate = new Date(req.body.birth_date);

      req.body.age = calculateAge(newBirthDate);
    }

    // Update user data with the provided request body
    Object.assign(clientToUpdate, req.body);
    await clientToUpdate.save();

    res
      .status(200)
      .json({ message: "User updated successfully", client: clientToUpdate });
  } catch (error) {
    console.error("Error in updating user:", error);
    res.status(500).send("Error in updating user");
  }
};

// Update Client Picture (Self Only)
export const updateUserPicture = async (req, res) => {
  try {
    const clientToUpdate = await userModel.findById(req.userID);

    if (!clientToUpdate) {
      return res.status(404).send("User not found.");
    }
    if (req.file) {
      clientToUpdate.profile_picture = req.file.path;
    } else {
      return res.status(400).send("No profile picture provided.");
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
  const client = await userModel.findOne({ email });
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
      await userModel.findByIdAndUpdate(decoded.id, {
        password: hashedPassword,
      });

      res.send("Password reset successfully");
    } catch (error) {
      res.status(500).send("Error in resetting password");
    }
  });
};

// Set Coach
export const setCoach = async (req, res) => {
  try {
    // Use req.userID to ensure a user is updating their own profile
    const clientToUpdate = await userModel
      .findById(req.userID)
      .populate("plan_id");

    if (!clientToUpdate) {
      return res.status(404).send("User not found.");
    }

    // Check if the client has an active subscription
    const today = new Date();
    const hasActiveSubscription = clientToUpdate.subscription_end_date > today;

    if (!hasActiveSubscription) {
      return res.status(403).send("You do not have an active subscription.");
    }

    // Check if the client's plan is "basic"
    if (
      clientToUpdate.plan_id &&
      clientToUpdate.plan_id.title.toLowerCase() === "basic"
    ) {
      return res
        .status(403)
        .send("Clients with 'basic' plan cannot set a coach.");
    }

    // Extract the coachId from the request body
    const { coachId } = req.body;
    if (!coachId) {
      return res.status(400).send("No coach ID provided.");
    }

    // Verify that the provided coachId belongs to an actual coach
    const coachExists = await coachModel.findById(coachId);
    if (!coachExists) {
      return res.status(404).send("Coach not found.");
    }

    // Update the client's coach_id field with the provided coachId
    clientToUpdate.coach_id = coachId;
    await clientToUpdate.save();

    // Add client's ID to the coach's client_ids array if not already present
    const isClientAlreadyAssigned = coachExists.client_ids.some((clientId) =>
      clientId.equals(clientToUpdate._id)
    );
    if (!isClientAlreadyAssigned) {
      coachExists.client_ids.push(clientToUpdate._id);
      await coachExists.save();
    }

    res.status(200).json({
      message: "Coach set successfully",
      client: clientToUpdate,
    });
  } catch (error) {
    console.error("Error in setting coach:", error);
    res.status(500).send("Error in setting coach");
  }
};

// Change Coach
export const changeCoach = async (req, res) => {
  try {
    const clientToUpdate = await userModel.findById(req.userID);

    if (!clientToUpdate) {
      return res.status(404).send("Client not found.");
    }

    // Extract the new coachId from the request body (can be null if removing coach)
    const { coachId } = req.body;

    // If the client already has a coach, remove the client from the old coach's client_ids
    if (clientToUpdate.coach_id) {
      const oldCoach = await coachModel.findById(clientToUpdate.coach_id);
      if (oldCoach) {
        oldCoach.client_ids.pull(clientToUpdate._id); // Removes the client's ID from the old coach's array
        await oldCoach.save();
      }
    }

    // If a new coachId is provided, assign the new coach and add the client's ID to the new coach's client_ids
    if (coachId) {
      const newCoach = await coachModel.findById(coachId);
      if (!newCoach) {
        return res.status(404).send("New coach not found.");
      }

      // Add client's ID to the new coach's client_ids array if not already present
      if (!newCoach.client_ids.includes(clientToUpdate._id)) {
        newCoach.client_ids.push(clientToUpdate._id);
        await newCoach.save();
      }

      // Update the client's coach_id field with the new coachId
      clientToUpdate.coach_id = coachId;
    } else {
      // If no new coachId is provided, remove the coach_id field from the client
      clientToUpdate.coach_id = null;
    }

    await clientToUpdate.save();

    res.status(200).json({
      message: "Coach changed successfully",
      client: clientToUpdate,
    });
  } catch (error) {
    console.error("Error in changing coach:", error);
    res.status(500).send("Error in changing coach");
  }
};

// give  Coach feedback
export const giveCoachFeedback = async (req, res) => {
  try {
    const clientID = req.userID;
    const { rating, comment } = req.body;

    const client = await userModel.findById(clientID).select("coach_id");
    if (!client || !client.coach_id) {
      return res
        .status(404)
        .send({ message: "Client or client's coach not found." });
    }

    const coach = await coachModel.findById(client.coach_id);
    if (!coach) {
      return res.status(404).send({ message: "Coach not found." });
    }

    coach.feedbacks.push({
      client_id: clientID,
      rating,
      comment,
      date: new Date(),
    });

    await coach.save();

    res
      .status(201)
      .send({ message: "Feedback successfully added to your coach." });
  } catch (error) {
    res.status(500).send({
      message: "An error occurred while submitting feedback.",
      error: error.toString(),
    });
  }
};

export const getAllClients = async (req, res) => {
  try {
    // Fetch the user based on req.userID set by your authentication middleware
    const user = await userModel.findById(req.userID);

    if (!user) {
      return res.status(404).send("User not found.");
    }

    // Check if the user's role is either manager or owner
    const isAuthorized = user.role === "manager" || user.role === "owner";
    if (!isAuthorized) {
      return res
        .status(403)
        .send("Unauthorized: Only managers and owners can access all clients.");
    }

    // Fetch all clients. Exclude passwords
    const clients = await userModel
      .find({}, "-password -Cpassword")
      .populate("coach_id", "full_name");

    res.json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).send("Error fetching clients");
  }
};

// Get Client By ID
export const getClientById = async (req, res) => {
  try {
    const client = await userModel
      .findById(req.params.id, "-password -Cpassword")
      .populate({
        path: "coach_id",
        select: "-hiredDate -salary -client_ids",
      })
      .populate("plan_id");

    if (!client) {
      return res.status(404).send("User not found.");
    }

    res.json(client);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Error fetching user");
  }
};

// Get Client By Token
export const getClientByToken = async (req, res) => {
  try {
    const clientID = req.userID;

    const client = await userModel
      .findById(clientID, "-password -Cpassword")
      .populate({
        path: "coach_id",
        select: "-hiredDate -salary -client_ids",
      })
      .populate("plan_id");

    if (!client) {
      return res.status(404).send("User not found.");
    }

    res.json(client);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Error fetching user");
  }
};
////////////////////////////////////////
// payment and subscribion functions
// step 1
async function authenticateWithPaymob() {
  try {
    const response = await axios.post(
      "https://accept.paymob.com/api/auth/tokens",
      {
        "api_key": process.env.paymob_api_key,
      }
    );
    return response.data.token;
  } catch (error) {
    console.error("Authentication with Paymob failed:", error);
    throw error;
  }
}

// step 2
async function createPaymentOrder(authToken, orderAmount, currency = "EGP") {
  try {
    const response = await axios.post(
      "https://accept.paymob.com/api/ecommerce/orders",
      {
        auth_token: authToken,
        delivery_needed: "false",
        amount_cents: orderAmount,
        currency,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Creating payment order failed:", error);
    throw error;
  }
}

// step 3
async function generatePaymentKey(
  authToken,
  orderId,
  clientId,
  planId,
  subscriptionMonths,
  subscriptionFees
) {
  try {
    const requestPayload = {
      auth_token: authToken,
      amount_cents: subscriptionFees,
      expiration: 3600, // 1 hour
      order_id: orderId,
      metadata: {
        clientId: clientId.toString(),
        planId: planId.toString(),
        subscriptionMonths: subscriptionMonths.toString(),
      },
      billing_data: {
        apartment: "NA",
        email: "sononamexx@gmail.com",
        floor: "NA",
        first_name: "Ahmed",
        street: "NA",
        building: "NA",
        phone_number: "+201028910997",
        shipping_method: "NA",
        postal_code: "NA",
        city: "NA",
        country: "NA",
        last_name: "Samy",
        state: "NA",
      },
      currency: "EGP",
      integration_id: 4524399,
    };

    console.log("Sending request to Paymob with payload:", requestPayload);

    // Send the request with the payload
    const response = await axios.post(
      "https://accept.paymob.com/api/acceptance/payment_keys",
      requestPayload
    );

    // Extract the payment key from the response
    const paymentKey = response.data.token;

    console.log("Received payment key:", paymentKey);

    const newTransaction = new transactionModel({
      plan_id: planId,
      client_id: clientId,
      order_id: orderId,
      subscriptionMonths: subscriptionMonths,
      amount: subscriptionFees / 100,
    });

    await newTransaction.save();

    return paymentKey;
  } catch (error) {
    console.error("Generating payment key failed:", error);
    throw error;
  }
}

// step 4
export const subscriptionint = async (req, res) => {
  try {
    const { planId, subscriptionMonths } = req.body;

    const plan = await planModel.findById(planId);
    const subscriptionFees = plan.fee * subscriptionMonths;
    const authToken = await authenticateWithPaymob();
    const orderAmount = subscriptionFees * 100; // Convert to cents
    const order = await createPaymentOrder(authToken, orderAmount);
    const paymentKey = await generatePaymentKey(
      authToken,
      order.id,
      req.userID,
      planId,
      subscriptionMonths,
      orderAmount
    );
    const paymentPageUrl = `https://accept.paymob.com/api/acceptance/iframes/828226?payment_token=${paymentKey}`;
    res.json({ url: paymentPageUrl });
  } catch (error) {
    console.error("Error during subscription process:", error);
    res.status(500).send("Error processing subscription");
  }
};

// step 5
export const subscriptionfin = async (req, res) => {
  try {
    console.log(req.body);
    const hmacReceived = req.query.hmac;
    const data = req.body.obj;
    const hmacSecret = process.env.HMAC;

    const concatenatedValues = [
      data.amount_cents.toString(),
      data.created_at,
      data.currency,
      data.error_occured.toString(),
      data.has_parent_transaction.toString(),
      data.id.toString(),
      data.integration_id.toString(),
      data.is_3d_secure.toString(),
      data.is_auth.toString(),
      data.is_capture.toString(),
      data.is_refunded.toString(),
      data.is_standalone_payment.toString(),
      data.is_voided.toString(),
      data.order.id.toString(),
      data.owner.toString(),
      data.pending.toString(),
      data.source_data.pan,
      data.source_data.sub_type,
      data.source_data.type,
      data.success.toString(),
    ].join("");

    const calculatedHmac = crypto
      .createHmac("sha512", hmacSecret)
      .update(concatenatedValues)
      .digest("hex");

    console.log("Concatenated String:", concatenatedValues);
    console.log("Calculated HMAC:", calculatedHmac);
    console.log("Received HMAC:", hmacReceived);

    // Verify the HMAC
    if (calculatedHmac !== hmacReceived) {
      return res.status(401).send("Invalid HMAC authentication");
    }
    const {
      obj: {
        success,
        order: { id: orderId },
      },
      type,
    } = req.body;

    // Find the transaction by the order ID regardless of the payment success
    const transaction = await transactionModel.findOne({
      order_id: orderId,
    });

    if (!transaction) {
      return res.status(404).send("Transaction not found");
    }

    if (!success) {
      const { client_id, plan_id, subscriptionMonths } = transaction;

      // Update payment status to successful
      transaction.payment_status = "Successful";
      await transaction.save(); // Make sure to save the updated transaction

      const client = await userModel.findById(client_id);
      const plan = await planModel.findById(plan_id);

      if (client && plan) {
        const subscriptionStartDate = new Date();
        const subscriptionEndDate = calculateSubscriptionEndDate(
          subscriptionStartDate,
          subscriptionMonths
        );

        client.plan_id = plan_id;
        client.subscription_date = subscriptionStartDate;
        client.subscription_months = subscriptionMonths;
        client.subscription_end_date = subscriptionEndDate;

        await client.save();

        // console.log("Client details after subscription update:", client);
        res.status(200).json({ message: "Subscription successful", client });
      } else {
        res.status(404).send("Client or Plan not found");
      }
    } else {
      // Update payment status to rejected
      transaction.payment_status = "Rejected";
      await transaction.save();

      res.status(400).send("Payment failed");
    }
  } catch (error) {
    // console.error("Error processing Paymob callback:", error);
    res.status(500).send("Server error processing payment");
  }
};

////////////////////////////////////////

// Helper functions for calculatations
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function calculateSubscriptionEndDate(startDate, months) {
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + months);
  return endDate;
}

//////////////////////////////////////////
export const deleteClient = async (req, res) => {
  const user = await userModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized = user.role === "manager" || user.role === "owner";
  if (!isAuthorized) {
    return res
      .status(403)
      .send("Unauthorized: Only managers and owners can delete users.");
  }

  let userTodelete = await userModel.findByIdAndDelete(req.params.id);
  if (userTodelete) {
    res.json({ message: "user Deleted", userTodelete });
  } else {
    res.json({ message: "user not found" });
  }
};
