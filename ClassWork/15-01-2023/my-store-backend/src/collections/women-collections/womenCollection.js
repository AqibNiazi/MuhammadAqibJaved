const { womenCollectionService } = require("../../services")

module.exports=(req,res)=>{
    return womenCollectionService.womenCollection(req,res);
}