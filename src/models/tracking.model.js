import mongoose from "mongoose";

const trackingSchema = mongoose.Schema({
  trackingId: String,
  parcelId: String,
  statys: String,
  message: String,
  updatedBy: String,
  time: Date,
});

const Tracking = new mongoose.model("Tracking", trackingSchema);

export default Tracking;
