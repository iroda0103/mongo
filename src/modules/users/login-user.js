const User=require('./User')
const { UnauthorizedError } = require('../../shared/errors')
const { compare } = require('bcryptjs')
const jwt=require('jsonwebtoken')
const config  = require('../../shared/config')

const loginUser=async ({username,password})=>{
    const user=await User.findOne({username})

    if(!user){
        throw new UnauthorizedError('Incorrect username or password')
    }

    const match=await compare(password,user.password)

    if(!match){
        throw new UnauthorizedError('Incorrect username or password')
    }

    const token=jwt.sign({user:{id:user._id}},config.jwt.secret)

    return token
}

module.exports=loginUser