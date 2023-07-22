const List=require('./List')
const { NotFoundError } = require("../../shared/errors");

const removeList=async ({id,user})=>{
const list=await List.findOne({_id:id,user})

if(!list){
    throw new NotFoundError('List topilmadi')
}

return List.findByIdAndRemove(id)
}

module.exports=removeList
