import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
    const salt=await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(password,salt);
    const user=new User({email,password:hashedPass})
    await user.save();
    res.status(201).json({message:"User Registered Successfully"});
}catch(error){
    console.error(error);
    res.status(500).json({message:"Error in registering"})
}
};
 export const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!email || !(await bcrypt.compare(password,user.password))){
        return res.status(400).json({message:"Invalid credentials"});
    }
    const token=jwt.sign({_id:user._id},process.env.jwt_Secret,{expiresIn:"10d"});
    res.json({token})
 };