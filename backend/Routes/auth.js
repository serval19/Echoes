const express=require('express')
require('dotenv').config()
const router=require('express').Router()
const UserModel=require('../Models/diary.js')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
// define routes from /auth

router.post('/signup',async (req,res)=>{
    try{
        const {name,email,password}=req.body
        const user=await UserModel.findOne({email})
        if(user){
            return res.status(409).json({message: 'User exists. Please login',success:false})
        }
        const usermodel=new UserModel({name,email,password,entries:[]})
        usermodel.password=await bcrypt.hash(password,9)
        usermodel.save()
        return res.status(201).json({message: 'Signup successful',success:true})

    }
    catch(err){
        res.status(500).json({message: 'internal server error',success:false})
    }
})
router.post('/login',async (req,res)=>{
    const {email,password}=req.body
    const user=await UserModel.findOne({email})
    
    if(!user){
        return res.status(401).json({message: "Signup first",success:false})
    }
    const ispassequal=await bcrypt.compare(password,user.password)
    if(!ispassequal){
        return res.status(403).json({message: "Wrong Password",success:false })
    }
    const jwtToken=jwt.sign(
        {email: user.email,_id: user._id},
        process.env.JWT_SECRET,
        {expiresIn: '24h'}

    )
    return res.status(200).json({message:'login successful',success:true,
        jwtToken,
        email,
        name: user.name
    })

})
module.exports=router