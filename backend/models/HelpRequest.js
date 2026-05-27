import mongoose from "mongoose";

const helpSchema = new mongoose.Schema({
  name: String,
  location: String,
  emergency: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model(
  "HelpRequest",
  helpSchema
);