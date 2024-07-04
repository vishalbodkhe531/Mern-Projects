import express from "express";
import {
  getMessages,
  sendMessage,
} from "../controllers/message.controllers.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const messageRoutes = express.Router();

messageRoutes.post("/send/:id", isAuthenticated, sendMessage);
messageRoutes.get("/:id", isAuthenticated, getMessages);

export default messageRoutes;
