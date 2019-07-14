const { Router } = require("express");
const Shipyard = require("./model");
const Song = require("../songs/model");
const auth = require("../auth/auth");

const router = new Router();

router.post("/shipyards", auth, (req, res, next) => {
  Shipyard.create({
    name: req.body.name,
    userId: req.user.id
  })
    .then(shipyard => {
      if (!shipyard) {
        return res.status(404).send({
          message: `Shipyard couln't be created`
        });
      }
      return res.status(200).send(shipyard);
    })
    .catch(error => next(error));
});

router.get("/shipyards", auth, (req, res, next) => {
  Shipyard.findAll({
    where: { userId: req.user.id }
  })
    .then(shipyards => {
      return res.status(200).send({ shipyards });
    })
    .catch(error => next(error));
});

router.get("/shipyards/:id", auth, (req, res, next) => {
  Shipyard.findOne({
    where: {
      id: req.params.id,
      userId: req.user.id
    }
  })
    .then(shipyard => {
      if (!shipyard) {
        return res.status(404).send({
          message: `Please provide a valid shipyard`
        });
      }
      return res.status(200).send(shipyard);
    })
    .catch(error => next(error));
});

router.delete("/shipyards/:id", auth, (req, res, next) => {
  Shipyard.findById({
    where: {
      id: req.params.id
    }
  }).then(shipyard => {
    if (!shipyard) {
      return res.status(404).send({
        message: `Please provide a valid shipyard`
      });
    }

    Ship.destroy({
      where: {
        shipyardId: req.params.id
      }
    })
      .then(() => {
        shipyard
          .destroy()
          .then(() => {
            return res.status(200).send({
              message: `Shipyard and ships were deleted`
            });
          })
          .catch(error => next(error));
      })
      .catch(error => next(error));
  });
});

module.exports = router;
