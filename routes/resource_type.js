var express = require('express');
var router = express.Router();

const {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
} = require("../controllers/resource_type");

//ADAPTACION MYSQL
router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);
router.delete("/:id", deleteById);
router.put("/", updateById)
//ADAPTACION MYSQL

module.exports = router;
