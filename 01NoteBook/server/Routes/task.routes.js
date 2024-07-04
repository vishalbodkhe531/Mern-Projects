import express from "express";
import {
  allTasks,
  createTask,
  deleteTask,
  pinTask,
  recycleBin,
  searchInput,
  selectedTaskDelete,
  // selectesTaskSendRecycle,
  toggleTask,
  updateTask,
} from "../controllers/task.controllers.js";
import { IsAuthenticatedUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/allTasks", IsAuthenticatedUser, allTasks);
router.get("/toggle-task/:id", IsAuthenticatedUser, toggleTask);
router.get("/pin-task/:id", IsAuthenticatedUser, pinTask);
router.get("/search", IsAuthenticatedUser, searchInput);
router.get("/recycle-bin-check/:id", IsAuthenticatedUser, recycleBin);

router.post("/create-task", IsAuthenticatedUser, createTask);
router.post("/selected-task-delete", IsAuthenticatedUser, selectedTaskDelete);

router.put("/update-task/:id", IsAuthenticatedUser, updateTask);

router.delete("/delete-task/:id", IsAuthenticatedUser, deleteTask);

// router.post(
//   "/recycle-bin-checkMany",
//   IsAuthenticatedUser,
//   selectesTaskSendRecycle
// );

export default router;
