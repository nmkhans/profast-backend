import express from "express";
import defaultController from "../controllers/default.controller.js";

const router = express.Router();

router.get("/", defaultController);

export default router;
