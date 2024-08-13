import express from "express";
const app = express()

import userRoutes from "./routes/user.js"
import connectdb from "./utils/connectdb.js";
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})
const port = process.env.PORT || 3000

connectdb(process.env.MONGO_URI)


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.send("This is the home page of chatterbox messeage app")
})

app.use("/user" , userRoutes)

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})