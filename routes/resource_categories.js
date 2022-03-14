var express = require('express');
var router = express.Router();

const {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
} = require("../controllers/resource_categories");

//ADAPTACION MYSQL
router.get("/crea_resource", getAll);
router.post("/", create);
router.get("/:id", getById);
router.delete("/:id", deleteById);
router.put("/", updateById)
//ADAPTACION MYSQL

module.exports = router;