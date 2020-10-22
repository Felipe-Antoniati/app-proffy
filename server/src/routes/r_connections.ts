import { Router } from "express";

const connectionRouters = Router();

import ConnectionsController from "../controllers/c_connections";
const connectionsController = new ConnectionsController();

connectionRouters
  .post("/connections", connectionsController.create)
  .get("/connections", connectionsController.index);

export default connectionRouters;
