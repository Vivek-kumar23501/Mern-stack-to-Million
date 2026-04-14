const http=require('http');
const {type}=require('./module/common')
const {createProduct,fetchProduct,updateProduct,deleteProduct}=require('./module/product')
let db=null
const mongo=require('mongodb').MongoClient
mongo.connect("mongodb://localhost:27017")
.then((client)=>{
    console.log("connected to database")
    db=client.db("mytra")
})

.catch((err)=>{
    console.log("error in connecting to database",err)
    process.exit(0)
})

const server=http.createServer((req,res)=>{

const url=req.url

const method=req.method

if(url!=="/product"){
  res.writeHead(404,type)
  res.end(JSON.stringify({message:"Not Found"}))
    return 
}


if(!db)
{
    res.writeHead(500,type)
    res.end(JSON.stringify({message:"database not connected"}))
    return
}
if(method!=="GET" && method!=="POST" && method!=="PUT" && method!=="DELETE"){
    res.writeHead(400,type)
    res.end(JSON.stringify({message:"method not allowed "}))
    return 
}


const productCollection = db.collection("products")

if(method==="GET"){
fetchProduct(req,res,productCollection)
}

if(method==="POST"){
createProduct(req,res,productCollection)
}
if(method==="PUT"){
updateProduct(req,res,productCollection)
}
if(method==="DELETE"){
deleteProduct(req,res,productCollection)
}

})


server.listen(8080)