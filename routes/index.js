var express = require('express');
var router = express.Router();


const {
  getAll
} = require("../model/resource");

router.get("/", function(req, res, next) {
  getAll((err, getAllResource) => {
    if (err) {
        console.log(err);
        return res.status(500).json(
            err
        );
    }
    console.log(getAllResource)
    return res.render('index', {getAllResource});
  });
});


/* GET home page. */
/*router.get('/', function(req, res, next) {
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

router.get('', function(req, res, next) {
  getAll((err, results) => {
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
*/
module.exports = router;
