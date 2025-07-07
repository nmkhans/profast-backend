import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

//~ create new user
router.post("/", userController.createUser);

export default router;
