const passport = require("passport");
const LocalStrategy = require("passport-local");

let User = require("../models/user.model");
const bcrypt = require("bcrypt");

const getUserById = async (id) => {
  const user = await User.findById(id);

  return user;
};

// local
passport.use(
  new LocalStrategy({}, async (username, password, done) => {
    try {
      const db_user = await User.findOne({ username });

      if (!db_user)
        return done(null, false, {
          index: 0,
          message: "No User with this User Name",
        });

      const passwordCheck = await bcrypt.compare(password, db_user.password);

      if (!passwordCheck)
        return done(null, false, {
          index: 1,
          message: "Password is Wrong",
        });

      return done(null, db_user);
    } catch (err) {
      console.log(err);
      return done("Something Went Wrong");
    }
  })
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await getUserById(id);
  return done(null, user);
});
