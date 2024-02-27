import "dotenv/config";
import express from "express";
import initConnection from "./Database/initConnection.js";

import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
initConnection();

server.listen(6000, () => {
  console.log(`Elgymaweya app listening at http://localhost:${6000}`);
});
