import express from "express";
import { config } from "dotenv";
import { databaseConnection } from "./data/data.js";
import taskRoutes from "./Routes/task.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import userRoutes from "./Routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config({ path: "./config/.env" });

databaseConnection();

const server = express();

server.use(
  cors({
    origin: true,
    credentials: true,
  })
);

server.use(express.json());

server.use(cookieParser());

server.use("/api/task", taskRoutes);
server.use("/api/user", userRoutes);

server.use(errorMiddleware);

server.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
