import express from "express";
import riderController from "../controllers/rider.controller.js";

const router = express.Router();

//~ create a rider
router.post("/", riderController.createRider);

//~ get pending riders
router.get("/pending", riderController.getPendingRiders);

//~ update rider status
router.patch("/update-status/:id", riderController.updateRiderStatus);

export default router;
