const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const passportSetup = require("../config/passport-setup");
const passport = require("passport");
const { addFriends } = require("../logic/extra");

router.route("/register").post(async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    // user checking
    if (!username || username.length < 3) {
      return res.status(400).json({
        index: 0,
        message: "User Name must be at least 3 characters long",
      });
    }

    // check user exists
    if (await User.findOne({ username }))
      return res.status(409).json(`User ${username} Already exists`);

    // password checking
    if (!password || password.length < 3)
      return res.status(400).json({
        index: 1,
        message: "Password must be at least 3 characters long",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return res.json(JSON.stringify("User added!"));
  } catch (err) {
    console.log(err);
    return res.status(500).json({ index: 5, message: "Something went Wrong" });
  }
});

router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, async function (
    err,
    user,
    info
  ) {
    if (err) {
      return next(err);
    }
    if (!user) {
      if (!req.body.username)
        return res
          .status(400)
          .send(
            JSON.stringify({ index: 0, message: "Please Fill in User Name" })
          );
      else if (!req.body.password)
        return res
          .status(400)
          .send(
            JSON.stringify({ index: 1, message: "Please Fill in Password" })
          );
      return res.status(400).send(JSON.stringify(info));
    }

    console.log(user.username);

    // temperoraly making everyone friends
    const updated_user = await addFriends(user.username);

    req.logIn(user, async function (err) {
      if (err) {
        return next(err);
      }

      const user = {
        username: updated_user.username,
        friends: updated_user.friends,
      };
      res.send(JSON.stringify(user));
    });
  })(req, res, next);
});

router.get("/check/loggedin", async (req, res) => {
  // loggedIn
  const data = { loggedIn: req.isAuthenticated() };

  if (req.isAuthenticated()) {
    const updated_user = await addFriends(req.user.username);

    // user and friends
    data.user = {
      username: updated_user.username,
      friends: updated_user.friends,
    };
  } else {
    data.user = {};
  }

  res.send(JSON.stringify(data));
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.send(JSON.stringify("logged out"));
});

router.post("/check/username", async (req, res) => {
  const lenght = (await User.find({ username: req.body.username })).length;

  res.send(JSON.stringify(lenght === 0));
});

module.exports = router;
