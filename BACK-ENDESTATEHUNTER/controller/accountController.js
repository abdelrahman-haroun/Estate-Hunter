const User = require("../model/userModel");
const Ads = require("../model/adsModel");
const PaidAds = require("../model/paidAdsModel");
const { sendEmail } = require("../utils/email");

exports.activeAccount = async (req, res) => {
  const activeToken = req.params.activeToken;
  try {
    const activeAccount = await User.findOneAndUpdate(
      {
        activationToken: activeToken,
      },
      {
        active: true,
        activationToken: null, // Set activationToken to null during the update
      },
      { new: true } // Return the updated document
    );

    if (!activeAccount) {
      // User with the provided activation token not found
      return res.status(404).send("<p>User not found or already activated</p>");
    }

    // Send an email to confirm account activation
    sendEmail(
      activeAccount.email,
      "Account Activated",
      "Your account has been successfully activated.",
      "<p>Your account has been activated.</p>"
    );

    // Send an HTML success message as a response
    res.status(200).send("<p>Account activated successfully</p>");
  } catch (err) {
    console.error(err);
    // Send an HTML error message as a response
    res.status(500).send("<p>Internal server error</p>");
  }
};

exports.addSaveAds = async (req, res) => {
  const { id, adsId } = req.body;

  try {
    // Step 1: Retrieve the user by their ID
    const user = await User.findById(id);

    // Step 2: Push the adsId into the adsSaved array
    if (user.adsSaved.includes(adsId)) {
      return res.status(400).json({ message: "Ads already saved" });
    } else {
      user.adsSaved.push(adsId);
    }

    // Step 3: Save the updated user
    const updatedUser = await user.save();

    res.status(201).json({
      status: "success",
      message: "ads saved ",
      data: updatedUser, // Return the updated user with the added ad
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
exports.deleteSaveAds = async (req, res) => {
  const { id, adsId } = req.body;

  try {
    // Step 1: Retrieve the user by their ID
    const user = await User.findById(id);

    user.adsSaved.pull(adsId);

    // Step 3: Save the updated user
    const updatedUser = await user.save();

    res.status(201).json({
      status: "success",
      data: updatedUser, // Return the updated user with the added ad
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getPaidAdsAndPreAds = async (req, res) => {
  try {
    const preAds = await Ads.find({ premium: true }).populate("userId");
    const paidAds = await PaidAds.find();
    res.status(200).json({
      message: "success",
      data: { pre: preAds, paid: paidAds },
    });
    // console.log(preAds);
  } catch (err) {
    res.status(400).json({
      message: "fail to fetch data ",
    });
    console.log(err);
  }
};

exports.createPaidAds = async (req, res) => {
  try {
    const newPaidAds = await PaidAds.create(req.body);
    res.status(201).json({
      message: "success",
      data: newPaidAds,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err,
    });
  }
};

exports.getPaid = async (req, res) => {
  try {
    const allPaid = await PaidAds.find();
    res.status(200).json({
      message: "success",
      data: allPaid,
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
    });
  }
};
exports.RestPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const newUser = await User.findOne({ email: email });
    if (!newUser) {
      return res.status(400).json({
        message: "Please enter a valid email",
        status: "fail",
      });
    }
    function generateOTP(length) {
      const characters = "0123456789";
      let otp = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters.charAt(randomIndex);
      }

      return otp;
    }
    const otp = generateOTP(6);

    sendEmail(
      newUser.email,
      "Reset Password",
      "Your account has been successfully activated.",
      `<p> OTP Code ${otp}</p>`
    );

    // Update the newUser's restPassword and save it to the database

    newUser.restPassword = otp;
    await newUser.save();

    res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    res.status(400).json({
      message: "An error occurred",
    });
  }
};

exports.RestPasswordComplete = async (req, res) => {
  const { email, password, confirmPassword, otp } = req.body;
  if ((!email, !password, !confirmPassword, !otp)) {
    return res.status(400).json({
      message: "all field required",
    });
  }
  if (!password === confirmPassword) {
    return res.status(400).json({
      message: "password and confirmPassword doesn't match",
    });
  }
  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!(user.restPassword === otp)) {
      return res.status(400).json({
        message: "invalid OTP",
      });
    }
    user.restPassword = undefined;
    user.password = password;
    await user.save();
    res.status(200).json({
      message: "password updated",
    });
  } catch (err) {
    res.status(400).json({
      message: "fail",
    });
  }
};
