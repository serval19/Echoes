const express=require('express')
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
module.exports=router