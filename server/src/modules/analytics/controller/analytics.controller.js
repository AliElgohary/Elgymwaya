import coachModel from "../../../../Database/models/coach.model.js";
import transactionModel from "../../../../Database/models/transaction.model.js";
import userModel from "../../../../Database/models/user.model.js";
// Helper function to calculate monthly costs
const calculateMonthlyCosts = (coaches, endDate = new Date()) => {
  let monthlyCosts = {};

  coaches.forEach((coach) => {
    const start = coach.hiredDate;
    let currentDate = new Date(start.getFullYear(), start.getMonth(), 1);

    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const key = `${year}-${month}`;

      monthlyCosts[key] = monthlyCosts[key] || 0;
      monthlyCosts[key] += coach.salary;

      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  });

  return monthlyCosts;
};
// Analytics Endpoint
export const getMonthlyAnalytics = async (req, res) => {
  try {
    const user = await userModel.findById(req.userID);
    if (!user) {
      return res.status(404).send("User not found.");
    }

    const isAuthorized = user.role === "manager" || user.role === "owner";
    if (!isAuthorized) {
      return res
        .status(403)
        .send("Unauthorized: Only managers and owners can access analytics.");
    }

    // Fetch all coaches and calculate monthly costs
    const coaches = await coachModel.find();
    const monthlyCosts = calculateMonthlyCosts(coaches);

    // Aggregate total income by month (successful transactions only)
    const totalIncomeByMonth = await transactionModel.aggregate([
      { $match: { payment_status: "Successful" } },
      {
        $group: {
          _id: {
            month: { $month: "$transactionDateAndTime" },
            year: { $year: "$transactionDateAndTime" },
          },
          totalIncome: { $sum: "$amount" },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    // Merge costs and income to calculate profit
    let analyticsData = totalIncomeByMonth.map((item) => {
      const key = `${item._id.year}-${item._id.month}`;
      const totalCost = monthlyCosts[key] || 0;
      const totalIncome = item.totalIncome;
      const profit = totalIncome - totalCost;

      return {
        month: item._id.month,
        year: item._id.year,
        totalCost,
        totalIncome,
        profit,
      };
    });

    res.status(200).json({
      message: "Monthly analytics data retrieved successfully",
      data: analyticsData,
    });
  } catch (error) {
    console.error("Error retrieving monthly analytics data:", error);
    res.status(500).json({
      message: "Error retrieving monthly analytics data",
      error: error.message,
    });
  }
};
