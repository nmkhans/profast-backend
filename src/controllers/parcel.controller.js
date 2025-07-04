import Parcel from "../models/parcel.model.js";

const controllers = {};

controllers.createParcel = async (req, res, next) => {
  try {
    const parcelData = req.body;

    const newParcel = await Parcel.create(parcelData);

    res.status(201).json({
      success: true,
      message: "New parcel created!",
      data: newParcel,
    });
  } catch (error) {
    next(error);
  }
};

export default controllers;
