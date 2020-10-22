import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";

import routes from "./routes";

const PORT = process.env.PORT || 5000;
const app = express();

app
  .use(cors())
  .use(helmet())
  .use(express.json())
  .use(routes)
;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server Started: http://localhost:${PORT}`);
});