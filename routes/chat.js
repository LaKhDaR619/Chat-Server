const router = require("express").Router();
const User = require("../models/user.model");

const sockets = {};

// routes
router.get("/friends", async (req, res) => {
  let result = [];

  if (!req.isAuthenticated()) return res.status(401);

  await User.findById(req.user.id)
    .then((user) => {
      result = user.friends;
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));

  res.json(result);
});

router.get("/messages", async (req, res) => {
  let result = [];

  if (!req.isAuthenticated()) return res.status(401);

  await User.find()
    .then((users) => {
      result = users.map((user) => {
        const temp = { username: user.username };
        return temp;
      });
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));

  res.json(result);
});

router.get("/addfriends", async (req, res) => {
  let result = [];
  if (!req.isAuthenticated()) return res.status(401);

  await User.find()
    .then((users) => {
      result = users.map((user) => {
        const temp = { id: user.id, username: user.username };
        return temp;
      });
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));

  res.json(result);
});

exports.router = router;
