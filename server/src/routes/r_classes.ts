import { Router } from "express";

const classesRouters = Router();

import ClassesController from "../controllers/c_classes";
const classesController = new ClassesController();

classesRouters
  .get("/list", classesController.index)
  .post("/create", classesController.create);

export default classesRouters;
