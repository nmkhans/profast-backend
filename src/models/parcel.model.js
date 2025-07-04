import mongoose from "mongoose";

const parcelSchema = mongoose.Schema({
  trackingId: String,
  parcelType: String,
  parcelName: String,
  parcelWeight: String,
  senderName: String,
  senderWarehouse: String,
  senderAddress: String,
  senderNumber: String,
  senderRegion: String,
  pickupInstruction: String,
  reciverName: String,
  reciverWareHouse: String,
  reciverAddress: String,
  reciverNumber: String,
  reciverRegion: String,
  deliveryInstruction: String,
  totalCost: Number,
  paymentStatus: String,
  deliveryStatus: String,
  createdBy: String,
  createdAt: String,
});

const Parcel = new mongoose.model("Parcel", parcelSchema);

export default Parcel;
