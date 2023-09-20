const express = require("express");
const router = express.Router();
const {
  createNewUser,
  getAllUsers,
  deleteUser,
  getOneUser,
  logIn,
  updateUser,
  getUserCountsByDate,
} = require("../controller/userController");

// here  i will handel when create a new user
router.route("/signup").post(createNewUser);

// here i will handel when user log in
router.route("/signin").post(logIn);

//  here get all user for dashboard
router.route("/").get(getAllUsers);
router.route("/number").get(getUserCountsByDate);

// here get specific user
router.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser);

module.exports = router;
