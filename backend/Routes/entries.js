const express=require('express')
const router=express.Router()
const { UserModel }=require('../Models/diary.js')
const  verifyToken  =require('../Middlewares/protectedroutes.js')
router.post('/',verifyToken,async (req,res)=>{
    try{
        if(
            !req.body.title ||
            !req.body.content
        ){
            return res.status(400).json({message: 'send all the required fields'})
        }
        const userid=req.user._id
        const addentry=await UserModel.findByIdAndUpdate(
            userid,
            {
                $push:{
                    entries:{
                        title: req.body.title,
                        content: req.body.content
                    }
                }
            }

        )
        const editbook=await UserModel.findById(userid)
        return res.status(201).send(editbook)


    }
    catch(err){
        console.log(err.message)
        return res.status(500).json({message: err.message})
    }
})
module.exports=router