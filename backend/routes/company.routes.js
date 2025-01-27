import express from "express";
import protectedRoute from "../middleware/protectedRoute.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

router.post("/register", protectedRoute, registerCompany);
router.get("/get", protectedRoute, getCompany);
router.get("/get/:id", protectedRoute, getCompanyById);
router.put("/update/:id", protectedRoute, updateCompany);

export default router;
