import { Schema, model } from "mongoose";

const AuthSchema= new Schema({

    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    }

},{timestamps:true})

const users=model("users",AuthSchema)

export default users