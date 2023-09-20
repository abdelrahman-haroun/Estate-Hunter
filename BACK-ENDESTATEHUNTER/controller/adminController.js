const Admin = require("../model/adminModel");
const cloudinary = require("../utils/cloudinary");
// ---------
exports.logIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "please provide email and password ",
    });
  }
  const admin = await Admin.findOne({ email }).select("+password");
  console.log(admin);
  if (!admin || !(await admin.correctPassword(password, admin.password))) {
    return res.status(400).json({
      status: "fail",
      message: "invalid password or email ",
    });
  }
  admin.password = undefined;
  res.status(200).json({
    status: "success",
    data: admin,
  });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;
    const img = req.file;
    console.log(name, img, password);
    // Input Validation
    if (!name || !email || !password || !passwordConfirm || !img) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(img.path);

    // let admin = new Admin({
    //   name: name,
    //   password: password,
    //   email: email,
    //   img: result.secure_url,
    //   passwordConfirm: passwordConfirm,
    // });
    const admin = await Admin.create({
      name: name,
      password: password,
      email: email,
      img: result.secure_url,
      passwordConfirm: passwordConfirm,
    });
    // Save user details in MongoDB
    // await admin.save();

    // Respond with a success message or the user data (without password)
    res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        name: admin.name,
        email: admin.email,
        img: admin.img,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
