const http=require('http');
const {MongoClient}=require('mongodb')
let db = null;
MongoClient.connect("mongodb://localhost:27017")
.then((client)=>{
     db = client.db("vivek");
    console.log("Connected to database");
})

.catch((err)=>{
    res.writeHead(500,{"Content-Type":"application/json"});
    res.end("Error connecting to database");
    process.exit(0)
})


const server=http.createServer((req,res)=>{

    if(!db)
    {
        res.writeHead(500,{"Content-Type":"application/json"});
       res.end(JSON.stringify({error:"Database not connected"}));
       return
    }



})
server.listen(8080)