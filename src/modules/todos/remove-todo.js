const Todo=require('./Todo')
const { NotFoundError } = require("../../shared/errors");

const removeTodo=async ({id,user})=>{
const todo=await Todo.findOne({_id:id,user})

if(!todo){
    throw new NotFoundError('Todo topilmadi')
}

return Todo.findByIdAndRemove(id)
}

module.exports=removeTodo
