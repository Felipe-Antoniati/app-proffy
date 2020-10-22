import { Router } from "express";
import classesRouters from "./r_classes";
import connectionsRouters from "./r_connections";

const routes = Router();

routes
  .use("/classes", classesRouters)
  .use("/", connectionsRouters);

export default routes;
