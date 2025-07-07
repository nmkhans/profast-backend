import express from "express";
import trackingController from "../controllers/tracking.controller.js";

const router = express.Router();

//~ create new tracking
router.post("/", trackingController.createTracking);

export default router;
