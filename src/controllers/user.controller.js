import User from "../models/user.model.js";
import { status } from "http-status";

const controllers = {};

//~ create new user
controllers.createUser = async (req, res, next) => {
  try {
    const userData = req.body;

    //?check if user exist
    const userExists = await User.findOne({ email: userData.email });

    if (userExists) {
      return res.status(status.CONFLICT).json({
        success: false,
        message: "User already exist!",
      });
    }

    const data = await User.create(userData);

    res.status(status.CREATED).json({
      success: true,
      message: "New user created.",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export default controllers;
