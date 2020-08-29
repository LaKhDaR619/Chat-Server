const router = require("express").Router();
const User = require("../models/user.model");

const sockets = {};

// routes
router.post("/messageRead", async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  if (!req.isAuthenticated()) return res.status(401);
  try {
    // friend user name
    const friendName = req.body.friendName;
    console.log(friendName);
    const user = await User.findById(req.user.id);
    const index = user.friends.findIndex((item) => item.username == friendName);

    user.friends[index].unRead = false;
    user.markModified("friends");
    await user.save();

    return res.json(true);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went Wrong");
  }
});

exports.router = router;
