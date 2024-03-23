import userModel from "../../../../Database/models/user.model.js";
import transactionModel from "../../../../Database/models/transaction.model.js";

// Add Transaction
export const addTransaction = async (req, res) => {
  try {
    const user = await userModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }
    const isAuthorized = user.role === "manager" || user.role === "owner";
    if (!isAuthorized) {
      return res
        .status(403)
        .send("Unauthorized: Only managers and owners can delete plans.");
    }
    const {
      plan_id,
      client_id,
      order_id,
      amount,
      subscriptionMonths,
      payment_status,
    } = req.body;

    const transactionDateAndTime = new Date();
    const newTransaction = new transactionModel({
      plan_id,
      client_id,
      order_id,
      subscriptionMonths,
      payment_status,
      amount,
      transactionDateAndTime,
    });
    await newTransaction.save();

    res.status(201).json({
      message: "Transaction added successfully",
      transaction: newTransaction,
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res
      .status(500)
      .json({ message: "Error adding transaction", error: error.message });
  }
};
// Get Transaction
// export const getAllTransactions = async (req, res) => {
//   try {
//     const trans = await transactionModel
//       .find()
//       .populate("client_id")
//       .populate("plan_id");
//     res.json({ message: "Get all transactions", trans });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

export const getAllTransactions = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;

    const skip = (page - 1) * limit; 

    const totalCount = await transactionModel.countDocuments();
    const totalPages = Math.ceil(totalCount / limit);
    
    const trans = await transactionModel
      .find()
      .populate("client_id")
      .populate("plan_id")
      .limit(limit)
      .skip(skip);
    res.json({ message: "Get all transactions", trans, totalPages, currentPage: page  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// Get Transaction
export const getTransactionById = async (req, res) => {
  let trans = await transactionModel.findById(req.params.id);
  if (trans) {
    res.json({ message: "transation is:", trans });
  } else {
    res.json({ message: "transaction not found" });
  }
};
// Delete Transaction
export const deleteTransaction = async (req, res) => {
  const user = await userModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized = user.role === "manager" || user.role === "owner";
  if (!isAuthorized) {
    return res
      .status(403)
      .send("Unauthorized: Only managers and owners can delete transaction.");
  }

  let trans = await transactionModel.findByIdAndDelete(req.params.id);
  if (trans) {
    res.json({ message: "Transaction Deleted", trans });
  } else {
    res.json({ message: "Transaction not found" });
  }
};
// Update Transaction
export const updateTransaction = async (req, res) => {
  const user = await userModel.findById(req.userID);
  if (!user) {
    return res.status(404).send("User not found.");
  }
  const isAuthorized = user.role === "manager" || user.role === "owner";
  if (!isAuthorized) {
    return res
      .status(403)
      .send("Unauthorized: Only managers and owners can update transactions.");
  }

  const {
    plan_id,
    client_id,
    order_id,
    amount,
    subscriptionMonths,
    payment_status,
  } = req.body;

  const transactionDateAndTime = new Date();
  const updatedTransaction = await transactionModel.findByIdAndUpdate(
    req.params.id,
    {
      plan_id,
      client_id,
      order_id,
      subscriptionMonths,
      payment_status,
      amount,
      transactionDateAndTime,
    },
    { new: true }
  );

  if (!updatedTransaction) {
    return res.json({ message: "Transaction not found." });
  }
  res.json({ message: "Transaction updated successfully", updatedTransaction });
};
