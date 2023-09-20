const mongoose = require("mongoose");
const { format } = require("date-fns");
const bcrypt = require("bcryptjs/dist/bcrypt");
const validator = require("validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "please provide your password"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  email: {
    type: String,
    required: true,
    unique: [true, "this email is already used"],
    required: [true, "please provide your email"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  createdAt: {
    type: String,
    default: format(new Date(), "dd-MM-yyyy"),
  },
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});
UserSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const userModel = mongoose.model("Users", UserSchema);
module.exports = userModel;
