var express = require('express');
var router = express.Router();

const {
  signIN,
  signUP,
} = require("../controllers/users");

router.get("/login", signIN);
router.get("/register", signUP);


module.exports = router;
