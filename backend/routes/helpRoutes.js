import express from "express";

import {
  createRequest,
  getRequests
} from "../controllers/helpController.js";

const router = express.Router();

router.post("/help", createRequest);

router.get("/help", getRequests);

export default router;