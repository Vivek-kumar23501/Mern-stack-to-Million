const { Schema, model } = require("mongoose");
const userSchema=new Schema({
fullname:{
    type:String,
    required:true,
    trim:true,
    lowercase:true

},
email:{
    type: String,
    required:true,
     unique:true,
    trim:true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address"
    ]
},
  mobile:{
        type:String,
        required:true,
        trim:true,
        unique:true
     
    },

password:{
    type:String,
    trim:true,
    required:true,


}
},{timestamp:true})

const userModel=model("user",userSchema)
module.exports=userModel