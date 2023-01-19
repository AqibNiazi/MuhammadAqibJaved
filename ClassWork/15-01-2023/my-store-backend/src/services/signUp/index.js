const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const users = require("../../model/user");
const signUp = async (req, res) => {
  console.log(req.body);
  try {
    let { fullname, email, password, confirmPassword } = req.body;
    let _password = await bcrypt.hash(password, 10);
    let _confirmPassword = await bcrypt.hash(confirmPassword, 10);
    const _user = new users({
      _id: mongoose.Types.ObjectId(),
      fullname: fullname,
      email: email,
      password: _password,
      confirmPassword: _confirmPassword,
    });
    await _user.save();
    // if (email !== "aqibjaved5201@gmail.com") {
    //   return res.status(403).json({ message: "user email is not valid" });
    // } else {
    //   let signUpToken = jwt.sign({fullname, email, password,confirmPassword }, "niazi");
    //   res.status(201).json({ message: "success", token: signUpToken });
    // }
  } catch (error) {
    res.status(502).json({ message: "internal error", error: error.message });
  }
};
module.exports = {
  signUp,
};
