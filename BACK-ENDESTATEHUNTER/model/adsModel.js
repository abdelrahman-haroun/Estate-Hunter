const mongoose = require("mongoose");
const { format } = require("date-fns");

const AdsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: [String],
  },
  cat: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: String,
    default: format(new Date(), "dd-MM-yyyy"),
  },
});
const AdsModel = mongoose.model("Ads", AdsSchema);
module.exports = AdsModel;
