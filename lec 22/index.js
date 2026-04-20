  

const express=require('express');
const morgan=require('morgan');
const app=express();

app.listen(8080)

app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.send("api working properly ")
})
app.get("/user",(req,res)=>{
    res.send("fetching user data    ")
})

app.post("/user",(req,res)=>{
    res.send("createing user data   ")
})

app.put("/user:id",(req,res)=>{
    res.send("updating user data   ")
})

app.delete("/user:id",(req,res)=>{
    res.send("deleting user data   ")
})
