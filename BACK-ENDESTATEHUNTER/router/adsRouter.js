const express = require("express");

const router = express.Router();
const {
  getAllAds,
  deleteAds,
  updateStatusAds,
  createAds,
  getAdsUser,
  updateAdsPre,
  getAdsActiveWithFilter,
} = require("../controller/adsController");

//  here get all user for dashboard
router.route("/").get(getAllAds).post(createAds);

// here get specific user
router.route("/delete/:id/").delete(deleteAds);
router.route("/userAds").post(getAdsUser);
router.route("/status/:id").patch(updateStatusAds);
router.route("/pre/:id").patch(updateAdsPre);
router.route("/ads").get(getAdsActiveWithFilter);
module.exports = router;
