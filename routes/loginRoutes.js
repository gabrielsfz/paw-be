const UserRoutes = require("express").Router();

const {login} = require("../controller/logincontrol");

UserRoutes.post("/login", login);

module.exports = UserRoutes;