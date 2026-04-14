
let db=null
const mongo=require('mongodb').MongoClient
mongo.connect("mongodb://localhost:27017")
    .then((client)=>{
        db=client.db("codingott")
    })

    .catch((err)=>{
        console.log("failed to connect to database ")
        console.log(err)
        process.exit(0)
    })
    

    
const express=require('express');
const app=express()
app.listen(8080)

app.use(express.json())


app.get('/products',(req,res)=>{
   const Product=db.collection("products").find().toArray()
})

app.post ('/products',async (req,res)=>{
    console.log(req.body)
    const payload={name:"vivek kumar tiwari "}
    const Product=db.collection("products")
    await Product.insertOne(payload)
    res.json(payload)
})
app.put('/products',(req,res)=>{
    res.send("put method")
})
app.delete('/products',(req,res)=>{
    res.send("delete method")
})