var express = require('express');
var router = express.Router();

const {
    listResource,
    create,
    getAll,
    getById,
    deleteById,
    updateById,
} = require("../controllers/resource");

//ADAPTACION MYSQL
router.get("/resources", listResource);
router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);
router.delete("/:id", deleteById);
router.put("/", updateById);
//ADAPTACION MYSQL

module.exports = router;
