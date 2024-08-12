import express from "express";
const router = express.Router()

import {login} from "../controllers/user.js"

router.get("/" , login)

export default router 