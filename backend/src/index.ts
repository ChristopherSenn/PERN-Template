import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import http from "http";
import dotenv from "dotenv";

import { RegisterRoutes } from "./routes";
import * as swaggerJson from "./swagger.json";
import * as swaggerUI from "swagger-ui-express";

import { errorHandler } from "./middleware/errorHandler";
import { seedUsers } from "./db/seeder/seed-users";
// import { socketServer } from "./socket/socket.server";

export const app = express();

dotenv.config();

const allowedOrigins = ["http://localhost:3000"]; // Define allowed origins

// Setup cors with allowed origins
const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};


const port = process.env.PORT || 4500;

app.use(cors(corsOptions)); // Use cors settings
app.use(morgan("tiny"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

// Autoregister routes from controller, setup Swagger UI
RegisterRoutes(app);
app.use(["/docs"], swaggerUI.serve, swaggerUI.setup(swaggerJson));


// Add if http support is needed
const httpServer = http.createServer(app);
httpServer.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(`API Documentation at http://localhost:${port}/docs`);

  await seedUsers();
});

app.use(errorHandler);
