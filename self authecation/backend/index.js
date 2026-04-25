

const { urlencoded } = require("body-parser")
const dotenv=require("dotenv")
dotenv.config()



const mongoose=require("mongoose")
mongoose.connect(process.env.DB)



const express=require("express")
const { createUser, loginUser } = require("./controller/user.controller")
const app=express()
app.listen(process.env.PORT)


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/user',createUser)
app.post('/login',loginUser)