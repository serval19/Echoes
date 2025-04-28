const express=require('express')
const router=express.Router()
const { UserModel }=require('../Models/diary.js')
const { verifyToken } =require('../Middlewares/protectedroutes.js')
router.post('/',verifyToken,async (req,res)=>{
    
})