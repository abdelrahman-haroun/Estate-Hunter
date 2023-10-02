const uuid = require("uuid");
const User = require("../model/userModel");
const { sendEmail } = require("../utils/email");
exports.createNewUser = async (req, res) => {
  const { email, password, confirmPassword, name } = req.body;
  if (!email || !password || !confirmPassword || !name) {
    return res.status(400).json({
      status: "fail",
      message: " All field is required",
    });
  }

  const activationToken = uuid.v4();
  const activeLink = `http://127.0.0.1:8080/api/v1/account/active/${activationToken}`;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If the email is already used, return an error response with the custom message
      return res.status(400).json({ message: "This email is already used" });
    }
    req.body.activationToken = activationToken;
    const newUser = await User.create(req.body);
    sendEmail(
      newUser.email,
      "hello",
      "This is a test email sent from Node.js using Nodemailer and Gmail.",
      `<p>
        Click <a href="${activeLink}">here</a> to activate your account.
      </p>`
    );
    newUser.password = undefined;

    res.status(201).json({
      status: "success",
      message: "Check Your Email To Active Account",
      newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const allUser = await User.find({}).populate({
      path: "adsSaved",
      populate: {
        path: "userId",
        model: "Users",
      },
    });
    res.status(200).json({
      status: "success",
      data: allUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getOneUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findById(id).populate("adsSaved");
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, password, passwordConfirm } = req.body;
  try {
    if (!password) {
      if (name && email) {
        const updateUser = await User.findByIdAndUpdate(id, { name, email });
        res.status(202).json({
          status: "success",
          data: updateUser,
        });
      } else {
        res.status(400).json({
          status: "fail",
          message: "please enter email and name  ",
        });
      }
    } else {
      const updateUser = await User.findById(id);
      updateUser.password = password;
      updateUser.passwordConfirm = passwordConfirm;
      await updateUser.save();
      res.status(202).json({
        status: "success",
        FormData: updateUser,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.logIn = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "please provide email and password ",
    });
  }
  const user = await User.findOne({ email })
    .select("+password")
    .populate("adsSaved");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(400).json({
      status: "fail",
      message: "invalid password or email ",
    });
  }
  if (user.active == false) {
    return res.status(400).json({
      status: "fail",
      message: "Please Active Your Account",
    });
  }
  user.password = undefined;
  res.status(200).json({
    status: "success",
    message: `Welcome ${user.name} `,
    data: user,
  });
};

exports.getUserCountsByDate = async (req, res) => {
  try {
    const currentDate = new Date(); // Current date
    const startDate = new Date("2023-09-01"); // Start date '1-9-2023'

    const results = await User.aggregate([
      {
        $addFields: {
          // Convert createdAt to a Date object
          createdAtDate: {
            $toDate: "$createdAt",
          },
        },
      },
      {
        $match: {
          // Filter dates between '1-9-2023' and now
          createdAtDate: {
            $gte: startDate,
            $lte: currentDate,
          },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAtDate" },
            month: { $month: "$createdAtDate" },
            day: { $dayOfMonth: "$createdAtDate" },
          },
          count: { $sum: 1 }, // Count users in each group
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
          "_id.day": 1,
        },
      },
    ]);

    // Create a date map to store counts by date
    const dateMap = new Map();
    let currentDateIterator = new Date(startDate);

    // Initialize the map with zero counts for each date
    while (currentDateIterator <= currentDate) {
      const formattedDate = currentDateIterator.toISOString().split("T")[0];
      dateMap.set(formattedDate, 0);
      currentDateIterator.setDate(currentDateIterator.getDate() + 1);
    }

    // Update counts in the map based on the results
    for (const result of results) {
      const formattedResultDate = new Date(
        result._id.year,
        result._id.month - 1,
        result._id.day
      )
        .toISOString()
        .split("T")[0];

      dateMap.set(formattedResultDate, result.count);
    }

    // Convert the map to an array of arrays
    const dateCounts = Array.from(dateMap, ([date, count]) => [date, count]);

    res.json(dateCounts);
  } catch (error) {
    console.error("Error fetching user counts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
