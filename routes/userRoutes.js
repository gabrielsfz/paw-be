const UserRoutes = require("express").Router();

const {createUser, readUser, deleteUser} = require("../controller/userControl");

UserRoutes.post("/create", createUser);
UserRoutes.get("/read", readUser);
UserRoutes.delete("/delete", deleteUser);

module.exports = UserRoutes;