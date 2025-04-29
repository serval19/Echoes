const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const authrouter=require('./Routes/auth.js')
const entriesrouter=require('./Routes/entries.js')
require('./Models/db')
require('dotenv').config()
const port=process.env.PORT || 8080;
app.use(bodyParser.json())
app.use(cors())
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
app.get('/ping',(req,res)=>{
    res.send('pinged ;)')
})
app.use('/auth',authrouter)
app.use('/entries',entriesrouter)
