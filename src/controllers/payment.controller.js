import Payment from "../models/payment.model.js";
import Parcel from "../models/parcel.model.js";
import stripe from "stripe";
import status from "http-status";
import "dotenv/config";

const stripeApp = stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-06-30.basil",
});

const myDomain =
  process.env.NODE_ENV === "development"
    ? process.env.FRONTEND_DEVELOPMENT_DOMAIN
    : process.env.FRONTEND_PRODUCTION_DOMAIN;

const controllers = {};

controllers.createPaymentIntent = async (req, res, next) => {
  try {
    const parcelData = req.body;

    const paymentIntent = await stripeApp.paymentIntents.create({
      amount: parseInt(parcelData.totalCost) * 100,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(status.OK).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error);
  }
};

controllers.createPaymentHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const parcelData = req.body;

    const query = {
      _id: id,
    };

    const updatedDoc = {
      $set: {
        paymentStatus: "paid",
      },
    };

    await Parcel.updateOne(query, updatedDoc);

    const paymentHistoryData = {
      parcelId: id,
      email: parcelData.createdBy,
      amount: parcelData.totalCost,
      paymentMethod: parcelData.paymentMethod,
      transactionId: parcelData.transactionId,
      paidAt: new Date().toISOString(),
    };

    const responseData = await Payment.create(paymentHistoryData);

    res.status(status.CREATED).json({
      success: true,
      message: "Payment successfull.",
      data: responseData,
    });
  } catch (error) {
    next(error);
  }
};

export default controllers;
