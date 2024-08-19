import User from "../models/user.js"
import { wrapAsync } from "./error.js"
import {ExpressError} from "./error.js"
import jwt from "jsonwebtoken"

const isLoggedIn = wrapAsync(async (req, res, next) => {
    const token = req.cookies["useraccesstoken"]
    if(!token){
        return next(new ExpressError(401 , "You must be logged in to do that"))
    }
    
    const decodedUser = jwt.verify(token , process.env.JWT_SECRET)
    const {_id : userId} = decodedUser
    req.user = await User.findById(userId)
    next()
})

export {
    isLoggedIn
}