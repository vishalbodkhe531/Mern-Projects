import express from "express";
import {
  allTasks,
  createTask,
  deleteTask,
  pinTask,
  searchInput,
  selectedTaskDelete,
  // selectedTask,
  toggleTask,
  updateTask,
} from "../controllers/task.controllers.js";
import { IsAuthenticatedUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-task", IsAuthenticatedUser, createTask);
router.get("/allTasks", IsAuthenticatedUser, allTasks);
router.get("/toggle-task/:id", IsAuthenticatedUser, toggleTask);
router.get("/pin-task/:id", IsAuthenticatedUser, pinTask);

router.put("/update-task/:id", IsAuthenticatedUser, updateTask);
// router.get("/selected-task/:id", IsAuthenticatedUser, selectedTask);
// router.delete(
//   "/selected-task-delete/",
//   IsAuthenticatedUser,
//   selectedTaskDelete
// );

router.get("/search", IsAuthenticatedUser, searchInput);

router.post("/selected-task-delete", IsAuthenticatedUser, selectedTaskDelete);

router.delete("/delete-task/:id", IsAuthenticatedUser, deleteTask);

export default router;
