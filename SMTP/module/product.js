
let db=null
const mongo=require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017')

.then ((client)=>{
db=client.db('wapdb')
})
.catch((err)=>{
     console.log(err.message)
     console.log("unable to connect to database")
     process.exit(0)



})



const createProduct=async(req,res)=>{
     const Product=db.collection("products")
await Product.insertOne(req.body)
res.status(201).json({message:"product created"})

}

const fetchProduct=async(req,res)=>{
 const Product=db.collection("products")
 const products=await Product.find().toArray()
 res.status(200).json(products)


}

const updateProduct=(req,res)=>{
 const {id}=req.parms
 res.send(id)
}
const deleteProduct=(req,res)=>{
    res.send("delete product")
}

module.exports={
    createProduct,fetchProduct,updateProduct,deleteProduct
}