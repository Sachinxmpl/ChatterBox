import { compare } from "bcrypt";
import User from "../models/user.js";
import { sendToken } from "../utils/jwtToken.js";

//create a new user
const createNewUser = async (req, res) => {
  const { name, username, password, bio } = req.body;
  const { path, filename } = req.file;
  const avatar = {
    public_id: filename,
    url: path,
  };
  const newUser = new User({
    name,
    username,
    password,
    bio,
    avatar,
  });
  await newUser.save();
  sendToken(res, newUser, 201, "User created successfully");
};


const loginuser = async(req,res)=>{
    const {username  , password} = req.body ; 
    const user = await User.findOne({username}).select("+password")
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    const isPasswordMatched = await compare(password , user.password)

    if(!isPasswordMatched){
        return res.status(404).json({
            message:"Something went wrond"
        })
    }

    sendToken(res,user , 200 , `Welcome back ${user.name}`)
}


const getMyProfile = async(req,res)=>{}


export { createNewUser  , loginuser , getMyProfile};
