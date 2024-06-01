import users from "../models/user.js";
export const signUp = async (req,res)=>{
try {
    const data= req.body;
    console.log(data)
const user= await users.create(data);
if(user){
    return res.status(201).json({
        success:true,
        user:user
    })
}
} catch (error) {
    return res.status(400).json({
        success:false,
        error:error
    })
}
}