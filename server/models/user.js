import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    bio : {
        type : String , 
        required : false
    } , 
    password: {
        type: String,
        required: true,
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
}, {
    timestamps: true,
});

userSchema.pre("save", async function (next) {
    console.log("inside the pre middleware ")
    if(!this.isModified("password")) {
        return next()
    }
    this.password =  await bcrypt.hash(this.password, 10);
    next()
});

const User = model("User", userSchema);

export default User;
