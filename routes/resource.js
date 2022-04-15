var express = require('express');
var router = express.Router();

const {
    listCategorie, 
} = require("../controllers/resource"); 


//ADAPTACION MYSQL
router.get("/crea_resource", listCategorie);



//ADAPTACION MYSQL

module.exports = router;
