const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const goalsSchema = new Schema({
  name: { type: String },
  date: { type: Date, default: Date.now },
  notes: { type: String },
  Measurement: { type: mongoose.Types.ObjectId, ref: "Measurement" },
  creator: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Goals", goalsSchema);
