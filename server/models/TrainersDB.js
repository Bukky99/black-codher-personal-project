const mongoose = require("mongoose");
const { Schema } = mongoose;

const seasonalShoeSchema = new Schema({
  shoeName: {
    type: String,
  },
  shoeBrand: {
    type: String,
  },
  releaseDate: {
    type: String,
  },

  tag: {
    type: [String],
  },
  price: {
    type: Number,
  },
});

mongoose.model("seasonal-releases", seasonalShoeSchema);
