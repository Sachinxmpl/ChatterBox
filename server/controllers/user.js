import { compare } from "bcrypt";
import User from "../models/user.js";
import { sendToken } from "../utils/jwtToken.js";
import { ExpressError , wrapAsync } from "../middlewares/error.js";

//create a new user
const createNewUser = wrapAsync(async (req, res) => {
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
});


const loginuser = wrapAsync(async(req,res , next)=>{
    const {username  , password} = req.body ; 
    const user = await User.findOne({username}).select("+password")
    if(!user){
        return next(new ExpressError(404 , "Invalid credentials"))
    }

    const isPasswordMatched = await compare(password , user.password)

    if(!isPasswordMatched){
        return next(new ExpressError( 404 , "Invalid password"))
    }

    sendToken(res,user , 200 , `Welcome back ${user.name}`)
})


const getMyProfile = (req,res)=>{
  console.log(req.user)
  const user = req.user 
  res.status(200).json({
    success : "true" , 
    user : user 
  })
}


const logoutuser = (req,res)=>{
  res.cookie("useraccesstoken" , "" , {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    success : true ,
    message : "User logged out successfully"
  })
}


export { createNewUser  , loginuser , getMyProfile , logoutuser};
