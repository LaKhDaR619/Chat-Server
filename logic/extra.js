const User = require("../models/user.model");

async function addFriends(username) {
  // temperoraly making everyone friends
  const user = await User.findOne({ username });
  const users = await User.find();

  users.map((map_user) => {
    // condition so we don't push the user in his own friend list
    if (map_user.username !== user.username) {
      // if the friend already exists don't push it
      if (
        !user.friends.find((friend) => friend.username === map_user.username)
      ) {
        user.friends.push({
          username: map_user.username,
          messages: [],
        });
        console.log("new friends");
        console.log(user.friends[user.friends.length - 1]);
      }
    }
  });
  await user.save();

  return user;
}

async function saveMessage(username, msg) {
  console.log(`sender: ${username}`);
  console.log(`receiver: ${msg.receiver}`);

  try {
    // setting senders friends array
    const user = await User.findOne({ username });

    user.friends = user.friends.map((friend) => {
      if (friend.username === msg.receiver) {
        friend.messages.push({
          sender: username,
          message: msg.message,
        });
      }
      return friend;
    });

    user.markModified("friends");
    await user.save();

    // setting receiver friends array
    const receiver = await User.findOne({ username: msg.receiver });

    // if the sender isn't on his friend list
    if (!receiver.friends.find((friend) => friend.username === username)) {
      receiver.friends.push({ username, messages: [] });
      console.log("new friends");
      console.log(user.friends[user.friends.length - 1]);
    }

    receiver.friends = receiver.friends.map((friend) => {
      if (friend.username === username) {
        // making the message unRead
        friend.unRead = true;
        friend.messages.push({
          sender: username,
          message: msg.message,
        });
      }
      return friend;
    });

    receiver.markModified("friends");
    await receiver.save();
  } catch (err) {
    console.log(err);
  }
}

module.exports.addFriends = addFriends;
module.exports.saveMessage = saveMessage;
