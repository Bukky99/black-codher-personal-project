const mongoose = required("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  shoeName: String,
  shoeBrand: String,
  releaseDate: String,
});

mongoose.model("seasonal-releases", userSchema);
