import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  role: String,
  createdAt: Date,
});

const User = new mongoose.model("User", userSchema);

export default User;
