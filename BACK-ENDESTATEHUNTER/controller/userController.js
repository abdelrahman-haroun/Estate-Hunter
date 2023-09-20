const User = require("../model/userModel");
exports.createNewUser = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create(req.body);
    newUser.password = undefined;
    res.status(201).json({
      status: "success",
      newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const allUser = await User.find({});
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
    await User.findOneAndDelete(req.params.id);
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
    const user = await User.findById(id);
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
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(400).json({
      status: "fail",
      message: "invalid password or email ",
    });
  }
  user.password = undefined;
  res.status(200).json({
    status: "success",
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
