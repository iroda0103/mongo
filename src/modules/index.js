const express=require('express')
const userRouter=require('./users/_api')
const listRouter=require('./lists/_api')
const todoRouter=require('./todos/_api')

const router=express.Router()

router.use(userRouter)
router.use(listRouter)
router.use(todoRouter)

module.exports=router