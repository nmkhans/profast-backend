import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
  parcelId: String,
  email: String,
  amount: Number,
  paymentMethod: String,
  transactionId: String,
  paidAt: Date,
});

const Payment = new mongoose.model("Payment", paymentSchema);

export default Payment;
