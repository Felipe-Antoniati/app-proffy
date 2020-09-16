import { Router } from 'express';
const routes = Router();

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes
  .get('/users', classesController.index)
  .post('/users', classesController.create);

routes
  .post('/connections', connectionsController.create)
  .get('/connections', connectionsController.index)

export default routes;

