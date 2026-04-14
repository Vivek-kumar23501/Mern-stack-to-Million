const http=require("http")
const {MongoClient}=require("mongodb")
const {createUser,fetchUser, updateUser,deleteUser} =require("./modules/user")
const { type, getMessage } = require("./modules/common")

let db=null
MongoClient.connect("mongodb://localhost:27017")

.then(async(client)=>{
   db=client.db("ecom")
   
})


.catch((err)=>{
    
    console.log(err.message)
    process.exit(0)
})



const server=http.createServer(async(req,res)=>{
    const url=req.url
    const method=req.method

   
    if(!url.startsWith("/user"))
    {
       const message=getMessage("end point not found ")
       res.writeHead(404,type)
       res.end(message)
       return 
    }
    if(!db){
        const message=getMessage("database not connected")
        res.writeHead(500,type)
        res.end(message)
        return
    }

    const userCollection =db.collection("users")

if(!method==="POST" && !method==="GET" && !method==="PUT" && !method==="DELETE")
{
    const message=getMessage("method not allowed")
    res.writeHead(405,type)
    res.end(message)
    return
}

    if(method==="POST")
       createUser(req,res,userCollection)
       
        

        if(method==="GET")
            fetchUser(req,res, userCollection)
        if(method==="PUT")
            updateUser(req,res, userCollection)

   if(method==="DELETE")
     deleteUser(req,res, userCollection)
})
server.listen(8080)