import dotenv from "dotenv"
dotenv.config()

import mongoose from  "mongoose"
mongoose.connect(process.env.DB)

import express from "express"
import cors from "cors"
import Signup from "./controller/auth.controller.js"
const app=express()

app.listen(process.env.PORT)

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.post("/signup",Signup)