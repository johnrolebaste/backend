const User = require("../models/User.js");

// Register User
module.exports.createUser = (data) => {
  let { name: name, email: email, password: password } = data;

  let newUser = new User({
    name: name,
    email: email,
    password: password,
  });

  return newUser.save().then((created, error) => {
    if (created) {
      return {
        "User Id": created._id,
        "Account Balance": created.accountBalance,
      };
    } else {
      return "Account not created";
    }
  });
};

// Deposit
module.exports.deposit = (data) => {
  let { userId, amount: amount } = data;

  return User.findById(userId).then((found, notFound) => {
    if (found) {
      found.accountBalance += amount;
      return found.save().then((result) => {
        return {
          "Amount Deposit": amount,
          "New Account Balance": result.accountBalance,
        };
      });
    } else {
      return "User Id not found";
    }
  });
};

// Withdraw
module.exports.withdraw = (data) => {
  let { userId, amount: amount } = data;

  return User.findById(userId).then((found, notFound) => {
    if (found) {
      if (amount > found.accountBalance) {
        return "Amount trying to withdraw is greater than your account balance. Please try again.";
      } else {
        found.accountBalance -= amount;
        return found.save().then((result) => {
          return {
            "Amount Withdraw": amount,
            "New Account Balance": result.accountBalance,
          };
        });
      }
    } else {
      return "User Id not found";
    }
  });
};
