import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import status from "http-status";

//~ routes import
import handleError from "./src/utils/errorHandler.js";
import defaultRoute from "./src/routes/default.route.js";
import parcelRoute from "./src/routes/parcel.route.js";
import paymentRoute from "./src/routes/payment.route.js";

//? app configuration
const app = express();
app.use(cors());
app.use(express.json());

//? database configuration
const uri = process.env.DB_URI;

const databaseConfig = {
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
};

//? database connection
mongoose
  .connect(uri, databaseConfig)
  .then(() => console.log("database connected!"))
  .catch((error) => console.log(`DB error: ${error}`));

//? handle routes
app.use("/api/v1", defaultRoute);
app.use("/api/v1/parcels", parcelRoute);
app.use("/api/v1/payment", paymentRoute);

//? handle undefined routes
app.all(/(.*)/, (req, res) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "route was not found!",
  });
});

//? handle errors
app.use(handleError);

export default app;
