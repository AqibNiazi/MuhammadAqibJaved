const { loginService } = require("../../services")

module.exports=(req,res)=>{
    return loginService.login(req,res);
}