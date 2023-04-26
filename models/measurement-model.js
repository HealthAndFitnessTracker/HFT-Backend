const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const measurementSchema = new Schema({
  weight: { type: String },
  chest: [{ type: Int }],
  leftArm: [{ type: Int }],
  rightArm: [{ type: Int }],
  stomach: [{ type: Int }],
  hips: [{ type: Int }],
  leftThigh: [{ type: Int }],
  rightThigh: [{ type: Int }],
  creator: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Measurement", measurementSchema);
