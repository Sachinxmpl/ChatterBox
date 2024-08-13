import User from "../models/user.js";
//create a new user 
const createNewUser = async(req,res)=>{

    console.log(process.env.CLOUD_NAME)
    console.log(process.env.CLOUD_API_KEY)
    console.log(process.env.CLOUD_API_SECRET)
    console.log(req.body)
    console.log(req.file)
    
    // const newUser =  new User(sampleUser)
    // await newUser.save()

    res.status(201).json({
        message : "User created successfully" 
    })
}




export {createNewUser}