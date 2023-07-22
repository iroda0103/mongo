const { NotFoundError } = require("../../shared/errors")
const User = require("./User")


const removeUser=async ({id})=>{
 const user=await User.findById(id)

 if(!user){
    throw new NotFoundError("Foydalanuvchi topilmadi")
 }
return User.findByIdAndDelete(id)
}

module.exports=removeUser