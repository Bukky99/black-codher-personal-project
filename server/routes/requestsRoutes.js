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
    //return res.status(200).send(persons);
  });

  {
    /*app.post(`/api/user`, async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).send({
      error: false,
      user,
    });
  });

  app.put(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user,
    });
  });

  app.delete(`/api/user/:id`, async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user,
    });
  });*/
  }
};
