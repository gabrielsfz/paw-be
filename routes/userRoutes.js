const UserRoutes = require("express").Router();

const {
  createUser,
  readUser,
  deleteUser,
} = require("../controller/userControl");

UserRoutes.post("/", createUser);
UserRoutes.get("/", readUser);
UserRoutes.delete("/:id", deleteUser);

module.exports = UserRoutes;
