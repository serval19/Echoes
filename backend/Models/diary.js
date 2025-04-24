const mongoose=require('mongoose')
const Schema=mongoose.Schema
const entryschema=new Schema({
    title:{
        type: String,
        required: true,
        
    },
    content:{
        type: String,
        required: true
    },
    createddate:{
        type: Date,
        default: Date.now
    }
})
const userschema=new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true 
    },
    entries: [entryschema]
})
const UserModel=mongoose.model('User',userschema)
module.exports=UserModel