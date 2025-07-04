import express from "express";

import parcelController from "../controllers/parcel.controller.js";

const router = express.Router();

//? create new parcel
router.post("/", parcelController.createParcel);

export default router;
