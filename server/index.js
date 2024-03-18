import "dotenv/config";
import express from "express";
import initConnection from "./Database/initConnection.js";
import cors from "cors";
import mainRouter from "./src/modules/mainRouter.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(mainRouter);

initConnection().then(() => {
  server.listen(6000, () => {
    console.log("Elgymaweya app listening");
  });
});
