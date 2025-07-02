import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import errorHandler from "./src/utils/errorHandler.js";
import defaultRoute from "./src/routes/default.route.js";

//? define app
const app = express();

//? use middlewares
app.use(express.json());
app.use(cors());

//? define routes
app.use("/api/v1", defaultRoute);

//? database config
const uri = process.env.DB_URI;

const options = {
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
};

//? database connection
mongoose
  .connect(uri, options)
  .then(() => console.log("database connected!"))
  .catch((error) => console.log(`DB error: ${error}`));

//? handle undefined routes
app.all(/(.*)/, (req, res) => {
  res.status(404).json({
    success: false,
    message: "route was not found!",
  });
});

//? handle global errors
app.use(errorHandler);

export default app;
