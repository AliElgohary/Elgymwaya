import clientModel from "../../../../Database/models/client.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendPasswordResetMail } from "../../../services/sendEmail.js";
import planModel from "../../../../Database/models/plan.model.js";
import axios from "axios";
import transactionModel from "../../../../Database/models/transaction.model.js";
import crypto from "crypto";

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
    const { clientId, planId, subscriptionMonths } = req.body;

    const client = await clientModel.findById(clientId);
    const plan = await planModel.findById(planId);
    const subscriptionFees = plan.fee * subscriptionMonths;
    const authToken = await authenticateWithPaymob();
    const orderAmount = subscriptionFees * 100; // Convert to cents
    const order = await createPaymentOrder(authToken, orderAmount);
    const paymentKey = await generatePaymentKey(
      authToken,
      order.id,
      clientId,
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

      const client = await clientModel.findById(client_id);
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
