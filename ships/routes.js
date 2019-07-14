const { Router } = require("express");
const Ship = require("./model");
const auth = require("../auth/auth");

const router = new Router();

router.post("/shipyards/:id/ships", auth, (req, res, next) => {
  const { uid, speed, name } = req.body;

  if (!uid) {
    return res.status(400).send({
      message: `Please provde a valid unique identifier`
    });
  } else if (!speed) {
    return res.status(400).send({
      message: `Please provide a valid speed`
    });
  } else if (!name)
    return res.status(400).send({
      message: `Please provide a valid ship`
    });

  Ship.create({
    uid: uid,
    speed: speed,
    name: name,
    shipyardId: req.params.id
  })
    .then(ship => {
      if (!ship) {
        return res.status(404).send({
          message: `Couldn't create ship`
        });
      }
      return res.status(201).send(ship);
    })
    .catch(error => next(error));
});

module.exports = router;
