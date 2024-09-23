const UserRoutes = require("express").Router();

const {
  createKopi,
  readKopi,
  deleteKopi,
  updateKopi,
  sortkopi,
  filterKopi,
} = require("../controller/kopicontrol");

UserRoutes.post("/", createKopi);
UserRoutes.get("/", readKopi);
UserRoutes.delete("/:id", deleteKopi);
UserRoutes.patch("/:id", updateKopi);

module.exports = UserRoutes;
