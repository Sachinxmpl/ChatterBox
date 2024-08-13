import express from "express";
const router = express.Router({
    mergeParams: true
})
import { createNewUser } from "../controllers/user.js"
import { multerUpload } from "../middlewares/multer.js";



router.post("/newuser", multerUpload.single('avatar'), createNewUser)


export default router   