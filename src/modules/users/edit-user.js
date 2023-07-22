const User=require('./User')
const {NotFoundError}=require('../../shared/errors')

const editUser=async ({id,...changes})=>{
    const user=await User.findById(id);

    if(!user){
        throw new NotFoundError('Foydalanuvchi topilmadi')
    }

    return User.findByIdAndUpdate(id,changes,{new:true})
}

module.exports=editUser