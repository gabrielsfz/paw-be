const UserRoutes = require("express").Router();

const {createKopi, readKopi, deleteKopi, updateKopi, sortkopi, filterKopi} = require("../controller/kopicontrol");

UserRoutes.post("/create", createKopi);
UserRoutes.get("/read", readKopi);
UserRoutes.delete("/delete", deleteKopi);
UserRoutes.put("/update/:id", updateKopi);
UserRoutes.post("/sortkopi", sortkopi);
UserRoutes.post("/filter", filterKopi);

module.exports = UserRoutes;