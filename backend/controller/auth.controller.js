
import AuthSchema from "../model/auth.model.js"

const Signup=async(req,res)=>{
  
    try {
        const {fullname, email,password}=req.body
        const payload={
            fullname,
            email,
            password
        }
        await AuthSchema.create(payload)
        
    } catch (err) {
        res.status(500).json({message:err.message})
        
    }
   
}

export default Signup