const  {type} = require('./common')
const createProduct = (req,res,productCollection)=>{
try{
const payload={
    name :'vivek',
    price:1000,
    email:'vivek@example.com'

}
productCollection.insertOne(payload)
res.end(JSON.stringify(payload))

res.writeHead(201,type)

}
catch(err){
    res.writeHead(400,type)
res.end(JSON.stringify({message:"invalid JSON"}))
    return
}
}   




const fetchProduct = (req,res,productCollection)=>{
    res.end("fetch product ")
}
const updateProduct=(req,res,productCollection)=>{
    res.end("update product ")
}
const deleteProduct =(req,res,productCollection)=>{
res.end("delete product ")  
}

module.exports={createProduct,fetchProduct,updateProduct,deleteProduct}