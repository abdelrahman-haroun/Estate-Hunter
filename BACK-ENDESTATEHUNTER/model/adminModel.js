const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "please provide your email"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "please provide your password"],
    select: false,
  },
  passwordConfirm: {
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
  img: {
    type: String,
  },
});
AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

AdminSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const adminModel = mongoose.model("Admins", AdminSchema);
module.exports = adminModel;
