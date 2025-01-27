import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import protectedRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/profile/update", protectedRoute, updateProfile);
router.get("/logout", protectedRoute, logout);

export default router;
