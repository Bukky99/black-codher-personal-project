const mongoose = require("mongoose");
const { Schema } = mongoose;

//information retrived from the wishlist
const requestSchema = new Schema({
  username: String,
  description: String,
});

mongoose.model("requests", requestSchema);
