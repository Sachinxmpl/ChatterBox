import User from "../models/user.js";
import { sendToken } from "../utils/jwtToken.js";


//create a new user
const createNewUser = async(req,res)=>{
    const {name , username , password , bio } = req.body
    const {path , filename} = req.file

    const avatar = {
        public_id :  filename , 
        url : path
    }
    const newUser = new User ({
        name , username , password , bio , avatar
    })
    await newUser.save()
    

    sendToken(res,newUser , 201 , "User created successfully")
}




export {createNewUser}