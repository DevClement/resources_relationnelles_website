var express = require('express');
var router = express.Router();

const {
    creaResource,
    editResource,
    resource
} = require("../controllers/resource");

//ADAPTACION MYSQL
router.get("/resources", resource);
router.get("/crea_resource", creaResource); 
router.get("/edit_resource", editResource);
//ADAPTACION MYSQL

module.exports = router;
