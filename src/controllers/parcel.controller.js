import status from "http-status";
import Parcel from "../models/parcel.model.js";

const controllers = {};

//~ get all parcel
controllers.getAllParcel = async (req, res, next) => {
  try {
    const { email } = req.query;

    let query = {};

    if (email) {
      query = { createdBy: email };
    }

    const data = await Parcel.find(query).sort({
      createdAt: -1,
    });

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

//~ delete a parcel
controllers.deleteParcel = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Parcel.deleteOne({ _id: id });

    if (data.deletedCount > 0) {
      res.status(status.OK).json({
        success: true,
        message: "Parcel deleted.",
      });
    } else {
      res.status(status.NOT_FOUND).json({
        success: false,
        message: `No parcel found with id - ${id}`,
      });
    }
  } catch (error) {
    next(error);
  }
};

export default controllers;
