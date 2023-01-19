const { summerCollectionSevice } = require("../../services")

module.exports=(req,res)=>{
    return summerCollectionSevice.summerCollection(req,res);
}