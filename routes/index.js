var express = require('express');
var router = express.Router();

const {
  create,
  getById,
  deleteById,
  getUserByEmail,
} = require("../model/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  getById(3, (err, results) => {
    if (err) {
        console.log(err);
        return res.status(500).json(
            err
        );
    }
    console.log(results)
    return res.render('index', {results});
  });
});

module.exports = router;
