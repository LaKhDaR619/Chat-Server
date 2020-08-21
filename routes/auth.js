const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const passportSetup = require("../config/passport-setup");
const passport = require("passport");

// remove later
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      console.log(users);
      res.json(users);
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/register").post(async (req, res) => {
  try {
    //things to do
    const username = req.body.username;
    const password = req.body.password;

    // check user and password
    if (!(username && password))
      return res.status(400).json("Please Fill in user name and Password");

    // check user exists
    if ((await User.find({ username })).length)
      return res.status(409).json("user already exisits");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return res.json(JSON.stringify("User added!"));
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  if (!req.user)
    res.status(400).json(JSON.stringify("invalid user or password"));
  else {
    console.log(req.user);
    res.send(JSON.stringify(req.user));
  }
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.send(JSON.stringify("logged out"));
});

router.get("/check/loggedin", async (req, res) => {
  const user = await req.user;
  const data = { user, loggedIn: req.isAuthenticated() };

  res.send(JSON.stringify(data));
});

router.post("/check/username", async (req, res) => {
  const lenght = await (await User.find({ username: req.body.username }))
    .length;

  console.log(lenght);

  res.send(JSON.stringify(lenght === 0));
});

/*router.get("/:id", (req, res) => {
  res.send(req.params.id);
});*/

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

/*router.get("/google", (req, res) => {
  console.log("here");
  res.send("working");
});*/

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

// Testing area
/*router.delete("/remove", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.body._id });

    res.status(200).send(`user deleted`);
  } catch (err) {
    res.status(400).send(`${err}`);
  }
});*/

module.exports = router;
