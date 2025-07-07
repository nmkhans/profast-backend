import express from "express";
import parcelController from "../controllers/parcel.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

//~ get all parcel
router.get("/", verifyToken, parcelController.getAllParcel);

//~ get parcel detail
router.get("/detail/:id", parcelController.getParcelDetail);

//~ create new parcel
router.post("/", parcelController.createParcel);

//~ delete a parcel
router.delete("/delete/:id", parcelController.deleteParcel);

export default router;
