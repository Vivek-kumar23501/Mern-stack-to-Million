const ProductModel=require("../model/product.model")



const createProduct=async(req,res)=>{
try{
const Product=await ProductModel.create(req.body)
res.status(200).json(Product)
}
catch(err){
res.status(500).json({message: err.message})
}
}



const fetchProduct=async(req,res)=>{
try{
const product =await ProductModel.find()
res.status(200).json(product)
}
catch(err){
    res.status(500).json({message: err.message})
}
}

const updateProduct=async(req,res)=>{
try{
const {id}=req.params
const product=await ProductModel.findByIdAndUpdate(id,req.body,{new:true})
if(!product)
    return res.status(404).josn({messge:'product not found '})

res.status(200).json(product)
}
catch(err)
{
res.status(500).json({message:err.message})
}
}

const deleteProduct =async(req,res)=>{
try{
const {id}=req.params
const product=await ProductModel.findByIdAndDelete(id)
res.status(200).json(product )

if(!product)
    return res.status(404).json({message:"product not found "})
}
catch(err)
{
res.status(505).json({message:err.message})
}

}

module.exports ={
    createProduct,fetchProduct,updateProduct,deleteProduct
}