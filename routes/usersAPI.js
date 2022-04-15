var express = require('express');
var router = express.Router();

const {
  create,
  getById,
  deleteById,
  login,
} = require("../controllers/users");

//ADAPTACION MYSQL
router.post("/",  create);
router.get("/list_resource_admin", login)
router.get("/error_login", login)
router.get("/:id", getById);
router.delete("/:id", deleteById);
router.post("/login", login);
//ADAPTACION MYSQL

module.exports = router;
