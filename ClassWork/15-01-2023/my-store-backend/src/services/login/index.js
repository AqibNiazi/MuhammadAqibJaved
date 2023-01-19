const jwt = require("jsonwebtoken");
const login = (req, res) => {
  console.log(req.body);

  try {
    let { email, password } = req.body;
    if (email !== "aqibjaved5201@gmail.com") {
      return res.status(403).json({ message: "user email is not valid" });
    } else {
      let loginToken = jwt.sign({ email, password }, "niazi");
      res.status(201).json({ message: "success", token: loginToken });
    }
  } catch (error) {
    res.status(502).json({ message: "internal error",error:error.message });
  }
};
module.exports = {
  login,
};
