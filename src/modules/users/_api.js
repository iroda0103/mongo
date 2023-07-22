const express=require('express')
const {postRegister, postLoginUser, getMe, patchMe,deleteMe}=require('./_controllers')
const isLoggedIn = require('../../shared/auth/is-Loggedin')

const router =express.Router()

router.post('/users/register',postRegister)
router.post('/users/login',postLoginUser)
router.get('/users/me',isLoggedIn,getMe)
router.patch('/users/me',isLoggedIn,patchMe)
router.delete('/users/me',isLoggedIn,deleteMe)

module.exports=router


