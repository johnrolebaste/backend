const express = require("express");
const route = express.Router();
const controller = require("../controllers/users.controller");

// Register User
route.post("/register", (req, res) => {
  controller.createUser(req.body).then((result) => res.send(result));
});

// Deposit
route.post("/deposit", (req, res) => {
  controller.deposit(req.body).then((result) => res.send(result));
});

// Withdraw
route.post("/withdraw", (req, res) => {
  controller.withdraw(req.body).then((result) => res.send(result));
});
module.exports = route;
