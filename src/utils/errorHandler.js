const errorHandler = async (error, req, res) => {
  console.log(error.stack);

  const statusCode = error.statusCode || 5000;
  const errorMessage =
    error.message || "An unexpected error occurred";

  res.status(statusCode).json({
    success: false,
    status: "error",
    message: errorMessage,
  });
};

export default errorHandler;
