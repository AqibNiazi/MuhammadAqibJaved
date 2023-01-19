const { signUpService } = require("../../services");

module.exports = (req, res) => {
  return signUpService.signUp(req, res);
};
