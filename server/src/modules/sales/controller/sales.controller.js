import Sales from "../../../../Database/models/sales.model.js";

export const updateSalesData = async (req, res) => {
  try {
    const sales = await Sales.calculateSales();
    res.status(200).json({  sales });
  } catch (error) {
    res.status(500).json({ message: "Error updating sales data", error: error.message });
  }
};
