const express = require("express");
const {
  registerController,
  loginController,
  getAllusers,
} = require("../controller/UserController.js");

const router = express.Router();

//CREATE USER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

router.get("/allusers", getAllusers);

module.exports = router;
