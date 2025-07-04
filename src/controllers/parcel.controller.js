import status from "http-status";
import Parcel from "../models/parcel.model.js";

const controllers = {};

//~ get all parcel
controllers.getAllParcel = async (req, res, next) => {
  try {
    const data = await Parcel.find({});

    res.status(status.OK).json({
      success: true,
      message: "All parcel data.",
      data,
    });
  } catch (error) {
    next(error);
  }
};

//~ create new parcel
controllers.createParcel = async (req, res, next) => {
  try {
    const parcelData = req.body;

    const newParcel = await Parcel.create(parcelData);

    res.status(status.CREATED).json({
      success: true,
      message: "New parcel created!",
      data: newParcel,
    });
  } catch (error) {
    next(error);
  }
};

export default controllers;
