const Ads = require("../model/adsModel");
const mongoose = require("mongoose");
const cloudinary = require("../utils/cloudinary");

exports.createAds = async (req, res) => {
  const { title, price, phoneNumber, desc, type, cat, location, userId } =
    req.body;

  const imageUrls = [];

  // // // Function to upload an image to Cloudinary
  const uploadImageToCloudinary = async (imageData) => {
    try {
      const result = await cloudinary.uploader.upload(imageData, {
        folder: "ads", // Replace with your desired folder in Cloudinary
      });

      return result.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      return null;
    }
  };

  // // Upload each image to Cloudinary
  for (let i = 0; i < req.files.length; i++) {
    const imageData = req.files[i].path;

    if (imageData) {
      const uploadedUrl = await uploadImageToCloudinary(imageData);
      if (uploadedUrl) {
        imageUrls.push(uploadedUrl);
      }
    }
  }
  try {
    // Create a new ad document with Cloudinary image URLs
    const ad = new Ads({
      userId,
      title,
      price,
      phoneNumber,
      desc,
      type,
      cat,
      location,
      img: imageUrls,
    });

    // Save the ad to MongoDB
    const newAd = await ad.save();

    res.status(201).json({
      status: "success",
      data: newAd,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllAds = async (req, res) => {
  try {
    const allAds = await Ads.find({}).populate("userId"); // Populate the userId field with user data

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
exports.getAdsActiveWithFilter = async (req, res) => {
  try {
    // Get query parameters from the request
    const { cat, location, type } = req.query;

    // Define a filter object based on the query parameters
    const filter = {};
    if (type) {
      filter.type = type;
    }
    if (cat) {
      filter.cat = cat;
    }

    if (location) {
      filter.location = location;
    }
    filter.status = "Accepted";
    // Use the filter object in the Ads.find() query
    const allAds = await Ads.find(filter).populate("userId"); // Populate the userId field with user data

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

exports.getAdsUser = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  console.log(id);
  const userId = new mongoose.Types.ObjectId(id);
  try {
    const AdsUser = await Ads.find({ userId: userId }).populate("userId");
    console.log(AdsUser);
    res.status(200).json({
      status: "success",
      data: AdsUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateAdsPre = async (req, res) => {
  try {
    const updateAds = await Ads.findById(req.params.id);
    updateAds.premium = !updateAds.premium;
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
