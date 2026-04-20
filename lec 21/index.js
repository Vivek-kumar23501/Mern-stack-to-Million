const { createUser,fetchUser,updateUser,deleteUser } = require('./module/user.modules') 

const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/demoone")
.then(()=>{
console.log("connected to database")
})


.catch((err)=>{
console.error("error connecting to database", err)
})



const express=require('express')
const app=express()
app .listen(8080)

app.get("/",(req,res)=>{
    res.send("api is working ")
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/user",createUser)
app.get("/user",fetchUser)
app.put("/user/:id",updateUser)
app.delete("/user/:id",deleteUser)