const {type, getMessage}= require("./common")
const {ObjectId}    = require("mongodb")

const queryString =require("querystring")
const url =require("url")


const createUser = async(req,res,userCollection )=>{
    try{
 let payload=""

      req.on('data',(chunks)=>{
        payload=payload+chunks.toString()
         })

       req.on('end',async()=>{
        const data=queryString.parse(payload)
        data.createAt=new Date()
          await userCollection.insertOne(data)
          res.writeHead(200,type)
          res.end(JSON.stringify(data))

       })
       
    }

    catch(err){
        const message=getMessage(err.message)
        res.writeHead(500, type)
        res.end(message)
    }

}

const fetchUser=async(req,res,userCollection)=>{
      try{
       const x= await userCollection.find().sort({createAt: -1}).toArray()
       res.writeHead(200,type)
       res.end(JSON.stringify(x))
       console.log(x) 

    }
    catch(err){
        const message=getMessage(err.message)
        res.writeHead(500, type)
        res.end(message)
    }

}
const updateUser=(req,res,userCollection)=>{
      try{
        let payload=""

req.on('data',chunks=>{
    payload=payload+chunks.toString()
})
req.on('data',async()=>{

    const data=queryString.parse(payload)
    const {query} =url.parse(req.url,true)
       const x=await  userCollection.updateOne({_id:new ObjectId(query.id)},{$set:{name:"updated name "}})
       res.writeHead(200,type)
       res.end(JSON.stringify(data))
})
    }
    catch(err){
        const message=getMessage(err.message)
        res.writeHead(500, type)
        res.end(message)
    }

}
const deleteUser=async(req,res,userCollection)=>{
      try{
     const {query}=url.parse(req.url,true )
     
         await userCollection.deleteOne({ _id: new ObjectId(query.id) })
         const message=getMessage("user deleted successfully")
         res.writeHead(200,type)
         res.end(message)
    }
    catch(err){
        const message=getMessage(err.message)
        res.writeHead(500, type)
        res.end(message)
    }

}
module.exports ={
    createUser,fetchUser,updateUser,deleteUser
}