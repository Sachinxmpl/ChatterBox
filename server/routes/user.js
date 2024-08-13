import express from "express";
const router = express.Router()
import { createNewUser } from "../controllers/user.js"

import multer from "multer";
import { storage } from "../cloudinaryconfig.js"

const upload = multer({ storage: storage })

router.post("/newuser", upload.single('avatar'), createNewUser)

router.get("/form", (req, res) => {
    res.render("index.ejs")
})

export default router   