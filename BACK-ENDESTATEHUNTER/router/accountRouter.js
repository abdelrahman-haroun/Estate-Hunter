const express = require("express");
const router = express.Router();
const {
  activeAccount,
  addSaveAds,
  deleteSaveAds,
  getPaidAdsAndPreAds,
  createPaidAds,
  getPaid,
  RestPassword,
  RestPasswordComplete,
} = require("../controller/accountController");
router.route("/active/:activeToken").get(activeAccount);
router.route("/addAdsSaved").patch(addSaveAds);
router.route("/deleteAdsSaved").patch(deleteSaveAds);
router.route("/getAll").get(getPaidAdsAndPreAds);
router.route("/createPaid").post(createPaidAds);
router.route("/getPaid").get(getPaid);
router.route("/restPassword").post(RestPassword);
router.route("/restPasswordComplete").post(RestPasswordComplete);

module.exports = router;
