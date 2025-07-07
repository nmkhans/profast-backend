import Tracking from "../models/tracking.model.js";

const controllers = {};

controllers.createTracking = async (req, res, next) => {
  try {
    const trackingData = req.body;
    
  } catch(error) {
    next(error)
  }
}

export default controllers;