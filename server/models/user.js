import { Schema , model} from "mongoose";

const userSchema = new Schema ({
    name : {
        type :String , 
        required : true 
    } , 
    username : {
        type : String ,
        required : true ,
        unique : true
    } , 
    password : {
        type : String ,
        required : true , 
        select : false 
    } , 
    avatar : {
        {
            o
        }
    }

})

const User = model("User" , userSchema)

export default User