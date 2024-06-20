import express from "express";
import {
  allTask,
  createTask,
  deleteTask,
  toogleTask,
  updateTask,
} from "../controllers/task.controllers.js";
import { IsAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.post("/task", IsAuthenticated, createTask);
router.post("/task", IsAuthenticated, createTask);
router.get("/alltask", IsAuthenticated, allTask);

router.get("/delete/:id", IsAuthenticated, deleteTask);
router.put("/update/:id", IsAuthenticated, updateTask);

router.get("/toogle-task/:id", IsAuthenticated, toogleTask);

export default router;
