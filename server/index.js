import "dotenv/config";
import express from "express";
import initConnection from "./Database/initConnection.js";
import cors from "cors";
import clientRoutes from "./src/modules/clients/client.routes.js";
import planRoutes from "./src/modules/plans/plan.routes.js";
import coachRoutes from "./src/modules/coaches/coachesroutes.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use(clientRoutes);
server.use(planRoutes);
server.use(coachRoutes);

initConnection().then(() => {
  server.listen(6000, () => {
    console.log("Elgymaweya app listening");
  });
});
