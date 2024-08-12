import express from "express";
const app = express()
const port = 3000

import userRoutes from "./routes/user.js"


app.get("/", (req,res)=>{
    res.send("This is the home page of chatterbox messeage app")
})

app.use("/user" , userRoutes)

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})