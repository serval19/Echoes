require('dotenv').config()
const mongoose=require('mongoose')
const url=process.env.MONGO_DB
mongoose.connect(url)
.then(()=>{
    console.log('connected to database!')
})
.catch((err)=>{
    console.log('error connecting to database',err)
})