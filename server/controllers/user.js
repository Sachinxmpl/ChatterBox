import User from "../models/user.js";


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
    
    res.status(201).json({
        message : "User created successfully"  ,
        newUser
    })
}




export {createNewUser}