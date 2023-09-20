const Ads = require("../model/adsModel");

exports.createAds = async (req, res) => {
  try {
    newAds = await Ads.create(req.body);
    res.status(201).json({
      status: "success",
      data: newAds,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getAllAds = async (req, res) => {
  try {
    const allAds = await Ads.find();
    res.status(200).json({
      status: "success",
      data: allAds,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
    console.log(err);
  }
};

exports.deleteAds = async (req, res) => {
  try {
    await Ads.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
exports.updateStatusAds = async (req, res) => {
  try {
    const updateAds = await Ads.findById(req.params.id);
    updateAds.status = "Accepted";
    updateAds.save();
    res.status(202).json({
      status: "success",
      data: updateAds,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
