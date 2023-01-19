const { childrenCollectionService } = require("../../services")

module.exports=(req,res)=>{
    return childrenCollectionService.childrenCollection(req,res);
}