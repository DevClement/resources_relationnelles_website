var express = require('express');
var router = express.Router();

const {
  signIN,
  listCitoyen,
  editCitoyen,
  register,
  registerPost,
  signINPost,
  superAdminRegister
} = require("../controllers/users");

router.get("/login", signIN); 
router.post("/login", signINPost);
router.get("/register", register);
router.post("/register", registerPost);
router.get("/register_super_admin", superAdminRegister);
router.post("/register_super_admin", superAdminRegister);
router.get("/list_citoyen", listCitoyen);
router.get("/edit_citoyen", editCitoyen);

module.exports = router;
