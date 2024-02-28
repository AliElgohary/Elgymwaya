// Database connection
import mongoose from "mongoose";

const initConnection = () => {
  return mongoose
    .connect(process.env.databaseUri)
    // .connect('mongodb://127.0.0.1:27017/ELgymawya')
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("ConnectionError"));
};

export default initConnection;
