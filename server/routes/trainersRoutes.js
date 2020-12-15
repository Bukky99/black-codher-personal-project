const mongoose = require("mongoose");
const Trainer = mongoose.model("seasonal-releases");

module.exports = (app) => {
  app.get(`/api/trainer`, async (req, res) => {
    const shoe = await Trainer.find();
    return res.status(200).send(shoe);
  });

  app.post(`api/trainer`, async (req, res) => {
    const shoe = await Trainer.create(req.body);
    return res.status(201).send({
      error: false,
      shoe,
    });
  });
};
