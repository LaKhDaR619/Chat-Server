const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongo")(session);
const sessionStore = new mongoStore({
  mongooseConnection: mongoose.connection,
});
const passport = require("passport");
const passportSocketIo = require("passport.socketio");
const cookieParser = require("cookie-parser");

const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
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
const User = require("./models/user.model");
const nodemon = require("nodemon");

const chatRouter = require("./routes/chat").router;

app.use("/auth", authRouter);
app.use("/chat", chatRouter);

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.use(
  passportSocketIo.authorize({
    cookieParser: cookieParser, // the same middleware you registrer in express
    key: "connect.sid", // the name of the cookie where express/connect stores its session_id
    secret: process.env.COOKIE_SECRET, // the session_secret to parse the cookie
    store: sessionStore, // we NEED to use a sessionstore. no memorystore please
  })
);

io.on("connection", mainChat);

server.listen(port, function () {
  console.log(`Server is running on port: ${port}`);
});

const saveMessage = require("./logic/extra").saveMessage;

function mainChat(socket) {
  console.log("connected");
  socket.on("message", async (msg) => {
    const username = socket.request.user.username;
    console.log("====================================");
    console.log(username);
    console.log("====================================");
    // if the user isn't authenticated
    if (!socket.request.user) return;

    // send message to receiver
    io.sockets.emit(msg.receiver, {
      sender: username,
      message: msg.message,
    });

    // send message to sender (as a confirmation)
    io.sockets.emit(username, {
      sender: username,
      receiver: msg.receiver,
      message: msg.message,
    });

    saveMessage(username, msg);
  });
}

// for production
if (process.env.NODE_ENV == "production") {
  console.log("working on production");
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "client", "build", "index.html"));
  });
}
