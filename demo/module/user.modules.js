const UserSchema=require("../schema/user.schema")

const createUser=async(req,res)=>{
const user=await UserSchema.create(req.body)
res.status(200).json({message:"user created cuccessfully",user})
}

const fetchUser=async(req,res)=>{
const users=await UserSchema.find()
res.status(200).json({message:"users fetched successfully",users})
}

const updateUser=async(req, res)=>{
const {id}=req.params
const user=await UserSchema.findByIdAndUpdate(id,req.body,{new:true})
res.status(200).json({message:"user updated successfully",user})
}

const deleteUser=async(req,res)=>{
const {id}=req.params
const user=await UserSchema.findByIdAndDelete(id)
res.status(200).json({message:"user deleted successfully",user})
}

module.exports = {
    createUser,fetchUser,updateUser,deleteUser
}