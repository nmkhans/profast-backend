import httpStatus from "http-status";
import Rider from "../models/rider.model.js";

const controllers = {};

controllers.createRider = async (req, res, next) => {
  try {
    const riderData = req.body;

    const data = await Rider.create(riderData);

    res.status(httpStatus.CREATED).json({
      success: true,
      status: httpStatus.CREATED,
      message: httpStatus[httpStatus.CREATED],
      data,
    });
  } catch (error) {
    next(error);
  }
};

controllers.getPendingRiders = async (req, res, next) => {
  try {
    const data = await Rider.find({
      status: "pending",
    });

    res.status(httpStatus.OK).json({
      success: true,
      status: httpStatus.OK,
      message: httpStatus[httpStatus.OK],
      data,
    });
  } catch (error) {
    next(error);
  }
};

controllers.updateRiderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const data = await Rider.updateOne(
      { _id: id },
      {
        $set: {
          status,
        },
      }
    );

    if (data.modifiedCount > 0) {
      res.status(httpStatus.OK).json({
        success: true,
        status: httpStatus.OK,
        message: httpStatus[httpStatus.OK],
        data,
      });
    } else {
      res.status(httpStatus.NOT_MODIFIED).json({
        success: false,
        status: httpStatus.NOT_MODIFIED,
        message: httpStatus[httpStatus.NOT_MODIFIED],
      });
    }
  } catch (error) {
    next(error);
  }
};

export default controllers;
