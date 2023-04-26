const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: { type: String },
  type: { type: String },
  time: { type: String },
  calories: { type: String },
  quality: { type: String },
  creator: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Measurement", measurementSchema);
