import status from "http-status";

const defaultController = (req, res) => {
  res.status(status.OK).json({
    success: true,
    message: "Server is running...",
  });
};

export default defaultController;
