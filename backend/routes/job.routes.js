import express from "express";
import protectedRoute from "../middleware/protectedRoute.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.post("/post", protectedRoute, postJob);
router.get("/get", protectedRoute, getAllJobs);
router.get("/getadminjobs/", protectedRoute, getAdminJobs);
router.get("/get/:id", protectedRoute, getJobById);

export default router;
