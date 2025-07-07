import mongoose from "mongoose";

const riderSchema = mongoose.Schema({
  name: String,
  email: String,
  age: String,
  phoneNumber: String,
  nidNumber: String,
  warehouse: String,
  district: String,
  bikeRegistration: String,
  status: String,
});

const Rider = new mongoose.model("Rider", riderSchema);

export default Rider;
