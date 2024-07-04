import { config } from "dotenv";
import express from "express";
import { databaseConnection } from "./data/data.js";
import userRoutes from "./routes/user.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/messages.routes.js";
config({ path: "./config/.env" });
databaseConnection();

const server = express();

server.use(cookieParser());
server.use(express.json());

server.use("/api/user", userRoutes);
server.use("/api/message", messageRoutes);

server.use(errorMiddleware);

server.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
