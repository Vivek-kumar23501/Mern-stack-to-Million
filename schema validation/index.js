  
const dotenv=require('dotenv')
dotenv.config()

const mongoose=require("mongoose")
mongoose.connect(process.env.DB)

const express=require('express');
const morgan=require('morgan');
const {createProduct,fetchProduct,updateProduct,deleteProduct}=require("./controller/product.controller")

const app=express();

app.listen(process.env.PORT)

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/product",createProduct)
app.get("/product",fetchProduct)
app.put("/product/:id",updateProduct)
app.delete("/product/:id",deleteProduct)
