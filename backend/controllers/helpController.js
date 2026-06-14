import HelpRequest from "../models/HelpRequest.js";

export const createRequest = async (
  req,
  res
) => {
  try {
    const request =
      await HelpRequest.create(req.body);

    res.json(request);
  } catch (error) {
    res.status(500).json({
      message: error.message
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
      message: error.message
    });
  }
};