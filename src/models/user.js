import mongoose, { Schema } from "mongoose";

const userModel= new Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},
{
timestamps:true
}
);
const users=mongoose.model("users",userModel);
export default users;