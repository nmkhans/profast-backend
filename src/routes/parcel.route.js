import express from "express";

import parcelController from "../controllers/parcel.controller.js";

const router = express.Router();

//~ get all parcel
router.get("/", parcelController.getAllParcel);

//~ create new parcel
router.post("/", parcelController.createParcel);

export default router;
