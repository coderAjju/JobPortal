import express from "express";
import protectedRoute from "../middleware/protectedRoute.js";
import {
  applyJob,
  getApplicant,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

router.post("/apply/:id", protectedRoute, applyJob);
router.get("/get", protectedRoute, getAppliedJobs);
router.get("/:id/applicants", getApplicant);
router.put("/status/:id/update", protectedRoute, updateStatus);

export default router;
