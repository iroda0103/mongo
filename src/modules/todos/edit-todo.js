const { NotFoundError } = require('../../shared/errors')
const Todo=require('./Todo')

const editTodo=async({id,user,...change})=>{
    const todo=await Todo.findOne({_id:id,user})
    
    if(!todo){
        throw new NotFoundError('Todo topilmadi')
    }

    return Todo.findByIdAndUpdate(id,change,{new:true})
}

module.exports=editTodo