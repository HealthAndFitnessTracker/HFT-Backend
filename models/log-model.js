const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema({
  calendar: [
    {
      date: { type: Date, default: Date.now },
      Food: [{ type: mongoose.Types.ObjectId, ref: "Food" }],
      Activity: [{ type: mongoose.Types.ObjectId, ref: "Activity" }],
      Measurement: [{ type: mongoose.Types.ObjectId, ref: "Measurement" }],
    },
  ],
  creator: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Log", logSchema);
