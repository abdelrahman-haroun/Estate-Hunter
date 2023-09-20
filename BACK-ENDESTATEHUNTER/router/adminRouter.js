const express = require("express");
const router = express.Router();
const { logIn, signup, getAdmin } = require("../controller/adminController");

// here  i will handel when create a new admin
router.route("/signup").post(signup);

// here i will handel when admin log in
router.route("/signin").post(logIn);
router.route("/:id").get(getAdmin);

module.exports = router;
