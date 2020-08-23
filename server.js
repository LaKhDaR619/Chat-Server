const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");

const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// end info

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const authRouter = require("./routes/auth");

app.use("/auth", authRouter);

// for production
/*app.use(express.static("../mern-test/build"));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "mern-test", "build", "index.html")
  );
});*/

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
