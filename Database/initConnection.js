// Database connection
import mongoose from "mongoose";

const initConnection = () => {
  return mongoose
    .connect(process.env.databaseUri)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("ConnectionError"));
};

export default initConnection;
