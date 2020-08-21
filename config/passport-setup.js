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
  new LocalStrategy(
    {
      //options for the strategy
      // default username, password
    },
    async (username, password, done) => {
      try {
        const db_user = await User.findOne({ username });

        if (!db_user)
          return done(null, false, { message: "no user with this username" });

        const passwordCheck = await bcrypt.compare(password, db_user.password);

        if (db_user.username !== username || !passwordCheck)
          return done(null, false, { message: "user or password is wrong" });

        return done(null, db_user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log(user.id);
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  return done(null, getUserById(id));
});
