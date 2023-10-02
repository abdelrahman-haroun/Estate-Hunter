const mongoose = require("mongoose");
const { format } = require("date-fns");

const PaidAdsSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  img: {
    type: String,
  },

  createdAt: {
    type: String,
    default: format(new Date(), "dd-MM-yyyy"),
  },
});
const PaidAdsModel = mongoose.model("PaidAds", PaidAdsSchema);
module.exports = PaidAdsModel;
