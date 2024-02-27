import "dotenv/config";
import express from "express";
import initConnection from "./Database/initConnection.js";

import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
initConnection();

server.listen(3000);
