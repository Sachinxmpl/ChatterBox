import express from "express";
const router = express.Router()
import { createNewUser  , getMyProfile, loginuser   , logoutuser } from "../controllers/user.js"
import { multerUpload } from "../middlewares/multer.js";
import { isLoggedIn } from "../middlewares/auth.js";


router.post("/newuser", multerUpload.single('avatar'), createNewUser)
router.post("/login" , loginuser)


router.get("/profile" ,isLoggedIn  ,  getMyProfile)

router.post("/logout" , isLoggedIn , logoutuser)

export default router   