const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: { type: String },
  quantity {type:String},
  nutrition: {
    calories: { type: String },
    protein: { type: String },
    carbs: { type: String },
    totalFat: { type: String },
    saturatedFat: { type: String },
    transFat: { type: String },
    cholesterol: { type: String },
    sodium: { type: String },
    carbohydrate: { type: String },
    sugar: { type: String },
  },
  creator: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Food", foodSchema);
