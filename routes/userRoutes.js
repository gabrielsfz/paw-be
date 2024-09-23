const UserRoutes = require("express").Router();

const {verifyUser} = require('../middleware/auth');

const {
  createUser,
  readUser,
  deleteUser,
} = require("../controller/userControl");

UserRoutes.use(verifyUser);

UserRoutes.post("/", createUser);
UserRoutes.get("/", readUser);
UserRoutes.delete("/:id", deleteUser);

module.exports = UserRoutes;
