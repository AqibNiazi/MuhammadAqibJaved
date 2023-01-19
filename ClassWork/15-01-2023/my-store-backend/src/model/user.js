const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    confirmPassword: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
