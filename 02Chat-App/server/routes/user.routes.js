import express from "express";
import {
  getUserForSideBar,
  loginUser,
  logoutUser,
  updateuser,
  userDelete,
  userProfile,
  usercreate,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", usercreate);
router.post("/login", loginUser);
router.get("/user-profile", isAuthenticated, userProfile);
router.put("/update-user/:id", isAuthenticated, updateuser);
router.delete("/delete-user/:id", isAuthenticated, userDelete);
router.get("/logout-user", logoutUser);

router.get("/", isAuthenticated, getUserForSideBar);

export default router;
