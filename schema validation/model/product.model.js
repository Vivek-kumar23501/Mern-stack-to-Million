const {Schema, model}=require("mongoose") 
const productSchema=new Schema({


email:{
type:String,
match:[
    '/^[a-zA-Z0-9._%+-]+@gmail\.com$/;',
    'invalid email',
]

},
title:{
    type:String,
    required:true,
    lowercase:true,
    maxlength:150
},
description:{
    type:String,
    required:true,
     lowercase:true,
     maxlength:3000
},
price:{
    type:Number,
    required:true
},
brand:{
    type:String,
    required:true,
     lowercase:true
},
discount:{
    type : Number,
    enum:[0,25,50,100],
    default:0
},

brand:{
    type:String,
    required:true,
     lowercase:true,
     default: other
},

status:{
     type: String,
     enum:['draft', 'publish'],
     default: 'draft'
},


},{timestamps:true})


productSchema.pre('save', async function( next){
 const count=await model("product").countDocuments({email:this.email})
 if(count>0)
 {
    throw next ((new Error("email already exist")))
 }
     next()
})

const ProductModel = model("Product",productSchema)




module.exports=ProductModel