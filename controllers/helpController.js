import HelpRequest from "../models/HelpRequest.js";

export const createRequest = async (
  req,
  res
) => {
  try {
    const request =
      await HelpRequest.create(req.body);

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getRequests = async (
  req,
  res
) => {
  try {
    const requests =
      await HelpRequest.find();

    res.json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteRequest = async (
  req,
  res
) => {
  try {
    await HelpRequest.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Request Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};