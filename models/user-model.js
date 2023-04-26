const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  //id
  age: { type: String },
  gender: { type: String },
  imageUrl: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  password: { type: String },
  Measurements: [{ type: mongoose.Types.ObjectId, ref: "Measurements" }],
  Goals: { type: mongoose.Types.ObjectId, ref: "Goals" },
  Log: { type: mongoose.Types.ObjectId, ref: "Log" },
});

module.exports = mongoose.model("User", userSchema);
