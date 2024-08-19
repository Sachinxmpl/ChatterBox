import express from "express";
const router = express.Router()
import { createNewUser  , loginuser  } from "../controllers/user.js"
import { multerUpload } from "../middlewares/multer.js";


router.post("/newuser", multerUpload.single('avatar'), createNewUser)
router.post("/login" , loginuser)

export default router   