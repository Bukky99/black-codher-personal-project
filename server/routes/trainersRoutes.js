const mongoose = require("mongoose");
const Trainer = mongoose.model("seasonal-releases");
//console.log(Trainer.find());
//const querystring = require("querystring");
//const url = "http://localhost:3000/api/trainers?q=jordan";

module.exports = (app) => {
  /*app.get(`/api/trainer`, async (req, res) => {
    const shoes = await Trainer.find({ shoeName: "Singles Day" });
    return res.status(200).send(shoes);
  });*
  //map through here!

  /*app.get("/api/trainer/", function (req, res) {
    console.log(req.query);
    res.render("trainer");
  });*/

  /*app.get(`/api/trainer`, function (req, res) {
    console.log(req.query);
    res.json("trainer");
  });*/

  app.get(`/api/trainer`, async (req, res) => {
    const data = req.query.shoeInfo;

    console.log(data);

    const result = await Trainer.find({ "shoeInfo.brand": "Air Jordan" });
    console.log(result);

    res.json({
      message: "Here is your searched shoe....",
      shoes: result,
    });
  });

  app.post(`/api/trainer`, async (req, res) => {
    const shoes = await Trainer.create(req.body);
    return res.status(201).send({
      error: false,
      shoes,
    });
  });
};
