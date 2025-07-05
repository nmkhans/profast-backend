import express from "express";
import paymentController from "../controllers/payment.controller.js";

const router = express.Router();

//~ create payment intent
router.post(
  "/create-payment-intent",
  paymentController.createPaymentIntent
);

//~ create payment history
router.post(
  "/create-payment-history/:id",
  paymentController.createPaymentHistory
);

export default router;
