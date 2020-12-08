const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// IMPORT YOUR MODELS
require("./models/Users");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/black-codher-personal-project`,
  //mongodb+srv://Bukky99:<password>@bukky-cluster1.cje8w.mongodb.net/test,   my own database that i need to connect to
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());

// IMPORT YOUR ROUTES
require("./routes/usersRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
