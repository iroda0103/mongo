const List=require('../lists/List')
const User=require('../users/User')
const Todo=require('../todos/Todo');
const { NotFoundError } = require('../../shared/errors');

const addTodo=async(data)=>{
console.log(data);
    const list=await List.findOne({_id:data.list})


    if(!list){
        throw new NotFoundError('Todo qo\'shadigan list topilmadi')
    }

    const result=await Todo.create({list:data.list_id,...data});
    // await List.findByIdAndUpdate(data.user,{$push:{lists:result._id}})

    return result
};

module.exports=addTodo