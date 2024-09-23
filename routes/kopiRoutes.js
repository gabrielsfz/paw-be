const UserRoutes = require("express").Router();

const {verifyUser} = require('../middleware/auth');

const {
  createKopi,
  readKopi,
  deleteKopi,
  updateKopi,
} = require("../controller/kopicontrol");

UserRoutes.post("/", verifyUser, createKopi);
UserRoutes.get("/", readKopi);
UserRoutes.delete("/:id", verifyUser, deleteKopi);
UserRoutes.patch("/:id", verifyUser, updateKopi);

module.exports = UserRoutes;
