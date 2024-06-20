import express from "express";
import { config } from "dotenv";
import { databaseConnection } from "./data/data.js";
import userRoutes from "./routes/user.routes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import todoRoutes from "./routes/task.routes.js";
config({ path: "./config/.env" });

databaseConnection();

const server = express();

server.use(cors());

server.use(cookieParser());

server.use(express.json());

server.use("/api/user", userRoutes);
server.use("/api/todo", todoRoutes);

server.use(errorMiddleware);

server.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
