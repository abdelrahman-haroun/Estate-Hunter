const express = require("express");
const router = express.Router();
const {
  getAllAds,
  deleteAds,
  updateStatusAds,
  createAds,
} = require("../controller/adsController");

// // here  i will handel when create a new user
// router.route("/signup").post(createNewUser);

// // here i will handel when user log in
// router.route("/signin").post(logIn);

//  here get all user for dashboard
router.route("/").get(getAllAds).post(createAds);

// here get specific user
router.route("/:id").delete(deleteAds);
router.route("/status/:id").patch(updateStatusAds);
module.exports = router;
