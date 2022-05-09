var express = require('express');
var router = express.Router();

const {
    creaResource,
    create
} = require("../controllers/resource");

//ADAPTACION MYSQL
router.get("/crea_resource", creaResource);
router.post("/crea_resource", create);
//ADAPTACION MYSQL

module.exports = router; 