import mongoose from "mongoose";

let salesSchema = new mongoose.Schema({
  totalCoachesSalary: Number,
  totalTransactions: Number,
});

salesSchema.statics.calculateSales = async function () {
  try {
    // Calculate total coaches' salary
    const totalCoachesSalary = await this.model("Coach").aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$salary" },
        },
      },
    ]);

    // Calculate total amount in transactions
    const totalTransactions = await this.model("Transaction").aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" }, // Assuming the amount field contains the transaction amount
        },
      },
    ]);

    // Update or create sales data
    const sales = await this.findOneAndUpdate(
      {},
      {
        $set: {
          totalCoachesSalary: totalCoachesSalary.length > 0 ? totalCoachesSalary[0].total : 0,
          totalTransactions: totalTransactions.length > 0 ? totalTransactions[0].total : 0,
        },
      },
      { upsert: true, new: true }
    );

    return sales;
  } catch (error) {
    console.error("Error calculating sales:", error);
    throw error;
  }
};

const Sales = mongoose.model("Sales", salesSchema);

export default Sales;
