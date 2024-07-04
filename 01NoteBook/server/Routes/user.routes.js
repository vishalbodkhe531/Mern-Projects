import express from "express";
import {
  createUser,
  deleteUser,
  googleAuth,
  loginUser,
  updateUser,
  userLogout,
  userProfile,
} from "../controllers/user.controllers.js";
import { IsAuthenticatedUser } from "../middleware/auth.middleware.js";

const userRoutes = express.Router();

userRoutes.post("/register", createUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/google-auth", googleAuth);

userRoutes.get("/logout", userLogout);
userRoutes.get("/profile", IsAuthenticatedUser, userProfile);

userRoutes.put("/update/:id", IsAuthenticatedUser, updateUser);
userRoutes.delete("/delete-user/:id", IsAuthenticatedUser, deleteUser);

export default userRoutes;
