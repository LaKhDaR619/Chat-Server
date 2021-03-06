const User = require("../models/user.model");

async function saveMessage(username, msg) {
  console.log(`sender: ${username}`);
  console.log(`receiver: ${msg.receiver}`);

  try {
    // setting senders friends array
    const user = await User.findOne({ username });

    const friendIndex = user.friends.findIndex(
      (friend) => friend.username === msg.receiver
    );

    if (friendIndex !== -1) {
      user.friends[friendIndex].messages.push({
        sender: username,
        message: msg.message,
      });

      // getting the friend from the array
      const friend = user.friends[friendIndex];
      //delteting the friend from the array
      user.friends.splice(friendIndex, 1);
      // pushing it again at the beggining
      user.friends.splice(0, 0, friend);

      user.markModified("friends");
      await user.save();
    }
    // if the friend doesn't exist
    else return;

    // setting receiver friends array
    const receiver = await User.findOne({ username: msg.receiver });

    // if the receiver exists
    if (receiver) {
      // if the sender isn't on his friend list
      if (!receiver.friends.find((friend) => friend.username === username)) {
        receiver.friends.splice(0, 0, {
          username,
          messages: [{ sender: username, message: msg.message }],
          unRead: true,
        });

        console.log("new friends");
        console.log(user.friends[0]);
      }
      // if the sender is on his friend list
      else {
        const senderIndex = receiver.friends.findIndex(
          (friend) => friend.username === username
        );

        receiver.friends[senderIndex].unRead = true;
        receiver.friends[senderIndex].messages.push({
          sender: username,
          message: msg.message,
        });

        // getting the sender friend from the array
        const friend = receiver.friends[senderIndex];
        //delteting the friend from the array
        receiver.friends.splice(senderIndex, 1);
        // pushing it again at the beggining
        receiver.friends.splice(0, 0, friend);
      }

      receiver.markModified("friends");
      await receiver.save();
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports.saveMessage = saveMessage;
