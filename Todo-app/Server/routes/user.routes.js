import express from "express";
import {
  deleteUser,
  googleAuth,
  loginUser,
  logoutUser,
  updateUser,
  userCreate,
  userProfile,
} from "../controllers/user.controllers.js";
import { IsAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

//User routes
router.post("/register", userCreate);
router.post("/login", loginUser);
router.post("/googlelogin", googleAuth);

router.get("/profile", IsAuthenticated, userProfile);
router.get("/logout", IsAuthenticated, logoutUser);

router.put("/update/:id", IsAuthenticated, updateUser);
router.delete("/delete/:id", IsAuthenticated, deleteUser);

export default router;
