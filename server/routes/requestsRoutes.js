//routues to access different parts of web app

const mongoose = require("mongoose");
const Request = mongoose.model("requests");

module.exports = (app) => {
  app.post("/api/request", async (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const newRequest = new Request({
      username,
      description,
    });
    console.log(newRequest);
    newRequest.save();
  });
};
