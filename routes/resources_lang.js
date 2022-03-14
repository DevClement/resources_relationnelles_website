var express = require('express');
var router = express.Router();

const {
    create,
    getById,
    deleteById,
    updateById,
    editResource,
    listResource,
    listResourceConnected,
    listResourceAdmin, 
    resource,
    creaResource
} = require("../controllers/resources_lang");


//ADAPTACION MYSQL
router.get("/crea_resource", creaResource); 
router.get("/resources", resource);
router.get("/edit_resource", editResource);
router.get("/list_resource", listResource);
router.get("/list_resource_connected", listResourceConnected);
router.get("/list_resource_admin", listResourceAdmin);
router.get("/:id", getById);
router.delete("/:id", deleteById);
router.put("/", updateById)
//ADAPTACION MYSQL

module.exports = router;