const express = require("express");
const User = require("../models/user.model");
const { emitToNewFriend } = require("../server");

module.exports = function (io) {
  let router = express.Router();

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
      const index = user.friends.findIndex(
        (item) => item.username == friendName
      );

      user.friends[index].unRead = false;
      user.markModified("friends");
      await user.save();

      return res.json(true);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went Wrong");
    }
  });

  router.post("/addFriend", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401);
    try {
      // friend user name
      const id = req.body.id;

      // checking if the id is valid
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res
          .status(400)
          .send(JSON.stringify({ error: "The id is not valid" }));
      }
      // checking if it is not our own id
      if (id == req.user.id) {
        return res
          .status(400)
          .send(
            JSON.stringify({ error: "You can't be friends with yourself" })
          );
      }

      const user = await User.findById(req.user.id);
      // checking if the friend exists on db
      const friend = await User.findById(id);
      if (friend) {
        // checking if the friend is already on friend list
        const alreadyFriend = user.friends.findIndex(
          (f) => f.username === friend.username
        );

        if (alreadyFriend !== -1) {
          return res
            .status(400)
            .send(JSON.stringify({ error: "Already Friends" }));
        }

        user.friends.splice(0, 0, {
          username: friend.username,
          id: friend.id,
          messages: [],
        });
        friend.friends.splice(0, 0, {
          username: user.username,
          id: user.id,
          messages: [],
        });

        console.log("new friends");
        console.log(user.friends[0]);

        // adding friend to user
        user.markModified("friends");
        user.save();
        // adding user to friends
        friend.markModified("friends");
        friend.save();

        io.sockets.emit(friend.username, {
          friend: {
            username: user.username,
            id: user.id,
            messages: [],
          },
        });

        return res.send(
          JSON.stringify({
            username: friend.username,
            id: friend.id,
            messages: [],
          })
        );
      } else {
        return res.status(400).send(
          JSON.stringify({
            error: "No User with this Id",
          })
        );
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went Wrong");
    }
  });

  return router;
};
