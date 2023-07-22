const { NotFoundError } = require('../../shared/errors')
const List=require('./List')


const editList=async({id,user,...change})=>{
    const list=await List.findOne({_id:id,user})
    
    if(!list){
        throw new NotFoundError('List topilmadi')
    }

    return List.findByIdAndUpdate(id,change,{new:true})
}

module.exports=editList